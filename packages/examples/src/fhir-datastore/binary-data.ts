// start-block imports
import { MedplumClient } from '@medplum/core';
import { Patient } from '@medplum/fhirtypes';
// end-block imports

// start-block downloadBinary
/**
 * Parses the pre-signed storage url to extract the binary resource id
 * @param url - Pre-signed storage url
 * @returns id of `Binary` resource stored in Medplum
 */
function getBinaryId(url?: string): string {
  if (!url) {
    throw new Error('Invalid url');
  }

  const parts: string[] = url.split('/');
  const id = parts[parts.length - 1];
  return id;
}

// Example resource
const patient: Patient = {
  resourceType: 'Patient',
  photo: [
    {
      contentType: 'image/jpeg',
      url: 'https://storage.medplum.com/binary/12345',
    },
  ],
};

const medplum = new MedplumClient();

// A function to return the binary id
const binaryUrl = getBinaryId(patient.photo?.[0].url);
// Download the binary
await medplum.download(`Binary/${binaryUrl}`);
// end-block downloadBinary
