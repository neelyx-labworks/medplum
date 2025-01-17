/*
 * This is a generated file
 * Do not edit manually.
 */

import { Age } from './Age';
import { Annotation } from './Annotation';
import { ClinicalImpression } from './ClinicalImpression';
import { CodeableConcept } from './CodeableConcept';
import { DiagnosticReport } from './DiagnosticReport';
import { Encounter } from './Encounter';
import { Extension } from './Extension';
import { Group } from './Group';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Observation } from './Observation';
import { Patient } from './Patient';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Range } from './Range';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';

/**
 * A clinical condition, problem, diagnosis, or other event, situation,
 * issue, or clinical concept that has risen to a level of concern.
 */
export interface Condition {

  /**
   * This is a Condition resource
   */
  readonly resourceType: 'Condition';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * Business identifiers assigned to this condition by the performer or
   * other systems which remain constant as the resource is updated and
   * propagates from server to server.
   */
  identifier?: Identifier[];

  /**
   * The clinical status of the condition.
   */
  clinicalStatus?: CodeableConcept;

  /**
   * The verification status to support the clinical status of the
   * condition.
   */
  verificationStatus?: CodeableConcept;

  /**
   * A category assigned to the condition.
   */
  category?: CodeableConcept[];

  /**
   * A subjective assessment of the severity of the condition as evaluated
   * by the clinician.
   */
  severity?: CodeableConcept;

  /**
   * Identification of the condition, problem or diagnosis.
   */
  code?: CodeableConcept;

  /**
   * The anatomical location where this condition manifests itself.
   */
  bodySite?: CodeableConcept[];

  /**
   * Indicates the patient or group who the condition record is associated
   * with.
   */
  subject: Reference<Patient | Group>;

  /**
   * The Encounter during which this Condition was created or to which the
   * creation of this record is tightly associated.
   */
  encounter?: Reference<Encounter>;

  /**
   * Estimated or actual date or date-time  the condition began, in the
   * opinion of the clinician.
   */
  onsetDateTime?: string;

  /**
   * Estimated or actual date or date-time  the condition began, in the
   * opinion of the clinician.
   */
  onsetAge?: Age;

  /**
   * Estimated or actual date or date-time  the condition began, in the
   * opinion of the clinician.
   */
  onsetPeriod?: Period;

  /**
   * Estimated or actual date or date-time  the condition began, in the
   * opinion of the clinician.
   */
  onsetRange?: Range;

  /**
   * Estimated or actual date or date-time  the condition began, in the
   * opinion of the clinician.
   */
  onsetString?: string;

  /**
   * The date or estimated date that the condition resolved or went into
   * remission. This is called &quot;abatement&quot; because of the many overloaded
   * connotations associated with &quot;remission&quot; or &quot;resolution&quot; - Conditions
   * are never really resolved, but they can abate.
   */
  abatementDateTime?: string;

  /**
   * The date or estimated date that the condition resolved or went into
   * remission. This is called &quot;abatement&quot; because of the many overloaded
   * connotations associated with &quot;remission&quot; or &quot;resolution&quot; - Conditions
   * are never really resolved, but they can abate.
   */
  abatementAge?: Age;

  /**
   * The date or estimated date that the condition resolved or went into
   * remission. This is called &quot;abatement&quot; because of the many overloaded
   * connotations associated with &quot;remission&quot; or &quot;resolution&quot; - Conditions
   * are never really resolved, but they can abate.
   */
  abatementPeriod?: Period;

  /**
   * The date or estimated date that the condition resolved or went into
   * remission. This is called &quot;abatement&quot; because of the many overloaded
   * connotations associated with &quot;remission&quot; or &quot;resolution&quot; - Conditions
   * are never really resolved, but they can abate.
   */
  abatementRange?: Range;

  /**
   * The date or estimated date that the condition resolved or went into
   * remission. This is called &quot;abatement&quot; because of the many overloaded
   * connotations associated with &quot;remission&quot; or &quot;resolution&quot; - Conditions
   * are never really resolved, but they can abate.
   */
  abatementString?: string;

  /**
   * The recordedDate represents when this particular Condition record was
   * created in the system, which is often a system-generated date.
   */
  recordedDate?: string;

  /**
   * Individual who recorded the record and takes responsibility for its
   * content.
   */
  recorder?: Reference<Practitioner | PractitionerRole | Patient | RelatedPerson>;

  /**
   * Individual who is making the condition statement.
   */
  asserter?: Reference<Practitioner | PractitionerRole | Patient | RelatedPerson>;

  /**
   * Clinical stage or grade of a condition. May include formal severity
   * assessments.
   */
  stage?: ConditionStage[];

  /**
   * Supporting evidence / manifestations that are the basis of the
   * Condition's verification status, such as evidence that confirmed or
   * refuted the condition.
   */
  evidence?: ConditionEvidence[];

  /**
   * Additional information about the Condition. This is a general
   * notes/comments entry  for description of the Condition, its diagnosis
   * and prognosis.
   */
  note?: Annotation[];
}

/**
 * Estimated or actual date or date-time  the condition began, in the
 * opinion of the clinician.
 */
export type ConditionOnset = Age | Period | Range | string;

/**
 * The date or estimated date that the condition resolved or went into
 * remission. This is called &quot;abatement&quot; because of the many overloaded
 * connotations associated with &quot;remission&quot; or &quot;resolution&quot; - Conditions
 * are never really resolved, but they can abate.
 */
export type ConditionAbatement = Age | Period | Range | string;

/**
 * Supporting evidence / manifestations that are the basis of the
 * Condition's verification status, such as evidence that confirmed or
 * refuted the condition.
 */
export interface ConditionEvidence {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * A manifestation or symptom that led to the recording of this
   * condition.
   */
  code?: CodeableConcept[];

  /**
   * Links to other relevant information, including pathology reports.
   */
  detail?: Reference<Resource>[];
}

/**
 * Clinical stage or grade of a condition. May include formal severity
 * assessments.
 */
export interface ConditionStage {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  modifierExtension?: Extension[];

  /**
   * A simple summary of the stage such as &quot;Stage 3&quot;. The determination of
   * the stage is disease-specific.
   */
  summary?: CodeableConcept;

  /**
   * Reference to a formal record of the evidence on which the staging
   * assessment is based.
   */
  assessment?: Reference<ClinicalImpression | DiagnosticReport | Observation>[];

  /**
   * The kind of staging, such as pathological or clinical staging.
   */
  type?: CodeableConcept;
}
