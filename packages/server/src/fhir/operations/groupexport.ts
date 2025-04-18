import { accepted, concatUrls, parseReference, singularize } from '@medplum/core';
import { FhirRequest, FhirResponse } from '@medplum/fhir-router';
import { Group, Patient, Project, ResourceType } from '@medplum/fhirtypes';
import { getConfig } from '../../config/loader';
import { getAuthenticatedContext } from '../../context';
import { getLogger } from '../../logger';
import { Repository } from '../repo';
import { getPatientEverything, PatientEverythingParameters } from './patienteverything';
import { BulkExporter } from './utils/bulkexporter';

/**
 * Handles a Group export request.
 *
 * Endpoint - Group of Patients
 *   [fhir base]/Group/[id]/$export
 *
 * See: https://hl7.org/fhir/uv/bulkdata/export.html
 * See: https://hl7.org/fhir/R4/async.html
 * @param req - The FHIR request.
 * @returns The FHIR response.
 */
export async function groupExportHandler(req: FhirRequest): Promise<FhirResponse> {
  const ctx = getAuthenticatedContext();
  const { baseUrl } = getConfig();
  const { id } = req.params;
  const since = singularize(req.query._since);
  const types = singularize(req.query._type)?.split(',');

  // First read the group as the user to verify access
  const group = await ctx.repo.readResource<Group>('Group', id);

  // Start the exporter
  const exporter = new BulkExporter(ctx.repo);
  const bulkDataExport = await exporter.start(concatUrls(baseUrl, 'fhir/R4/' + req.pathname));

  groupExportResources(ctx.repo, exporter, ctx.project, group, {
    _type: types as ResourceType[] | undefined,
    _since: since,
  })
    .then(() => ctx.logger.info('Group export completed', { id: ctx.project.id }))
    .catch((err) => ctx.logger.error('Group export failed', { id: ctx.project.id, error: err }));

  return [accepted(`${baseUrl}fhir/R4/bulkdata/export/${bulkDataExport.id}`)];
}

export async function groupExportResources(
  repo: Repository,
  exporter: BulkExporter,
  project: Project,
  group: Group,
  params?: PatientEverythingParameters
): Promise<void> {
  // Read all patients in the group
  if (group.member) {
    for (const member of group.member) {
      if (!member.entity?.reference) {
        continue;
      }
      const [resourceType, memberId] = parseReference(member.entity);
      try {
        if (resourceType === 'Patient') {
          const patient = await repo.readResource<Patient>('Patient', memberId);
          const bundle = await getPatientEverything(repo, patient, params);
          await exporter.writeBundle(bundle);
        } else {
          const resource = await repo.readResource(resourceType, memberId);
          await exporter.writeResource(resource);
        }
      } catch (_err) {
        getLogger().warn('Unable to read patient for group export', {
          reference: member.entity.reference,
        });
      }
    }

    // Close the exporter
    await exporter.close(project);
  }
}
