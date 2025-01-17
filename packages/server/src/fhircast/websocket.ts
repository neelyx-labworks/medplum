import { generateId } from '@medplum/core';
import { AsyncLocalStorage } from 'node:async_hooks';
import { IncomingMessage } from 'node:http';
import ws from 'ws';
import { DEFAULT_HEARTBEAT_MS, heartbeat } from '../heartbeat';
import { globalLogger } from '../logger';
import { getRedis, getRedisSubscriber } from '../redis';

/**
 * Handles a new WebSocket connection to the FHIRCast hub.
 * @param socket - The WebSocket connection.
 * @param request - The HTTP request.
 */
export async function handleFhircastConnection(socket: ws.WebSocket, request: IncomingMessage): Promise<void> {
  const topicEndpoint = (request.url as string).split('/').filter(Boolean)[2];
  const endpointTopicKey = `medplum:fhircast:endpoint:${topicEndpoint}:topic`;

  const projectAndTopic = await getRedis().get(endpointTopicKey);
  if (!projectAndTopic) {
    globalLogger.error(`[FHIRcast]: No topic associated with the endpoint '${topicEndpoint}'`);
    // Close the socket since this endpoint is not valid
    socket.send(
      JSON.stringify({
        'hub.mode': 'denied',
        'hub.topic': '',
        'hub.events': '',
        'hub.reason': 'invalid endpoint',
      }),
      { binary: false }
    );
    socket.close();
    return;
  }

  // Create a redis client for this connection.
  // According to Redis documentation: http://redis.io/commands/subscribe
  // Once the client enters the subscribed state it is not supposed to issue any other commands,
  // except for additional SUBSCRIBE, PSUBSCRIBE, UNSUBSCRIBE and PUNSUBSCRIBE commands.
  const redis = getRedis();
  const redisSubscriber = getRedisSubscriber();

  // Subscribe to the topic
  await redisSubscriber.subscribe(projectAndTopic);

  const topic = projectAndTopic?.split(':')[1] ?? 'invalid topic';

  // Subscribe to heartbeat events
  function heartbeatHandler(): void {
    const heartbeatPayload = {
      timestamp: new Date().toISOString(),
      id: generateId(),
      event: {
        context: [{ key: 'period', decimal: `${Math.ceil(DEFAULT_HEARTBEAT_MS / 1000)}` }],
        'hub.topic': topic,
        'hub.event': 'heartbeat',
      },
    };
    redis.publish(projectAndTopic as string, JSON.stringify(heartbeatPayload)).catch(console.error);
  }
  heartbeat.addEventListener('heartbeat', heartbeatHandler);

  redisSubscriber.on('message', (_channel: string, message: string) => {
    // Forward the message to the client
    socket.send(message, { binary: false });
  });

  socket.on(
    'message',
    AsyncLocalStorage.bind(async (data: ws.RawData) => {
      const message = JSON.parse((data as Buffer).toString('utf8'));
      globalLogger.debug('message', message);
    })
  );

  socket.on('close', () => {
    heartbeat.removeEventListener('heartbeat', heartbeatHandler);
    redisSubscriber.disconnect();
  });

  // Send initial connection verification
  // TODO: Fill in these properties
  socket.send(
    JSON.stringify({
      'hub.callback': '',
      'hub.channel': '',
      'hub.events': '',
      'hub.lease_seconds': 3600,
      'hub.mode': 'subscribe',
      'hub.secret': '',
      'hub.subscriber': '',
      'hub.topic': topic,
    }),
    { binary: false }
  );
}
