/*
 * This is a generated file
 * Do not edit manually.
 */

import { CodeableConcept } from './CodeableConcept';
import { Duration } from './Duration';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { Substance } from './Substance';

/**
 * A kind of specimen with associated set of requirements.
 */
export interface SpecimenDefinition {

  /**
   * This is a SpecimenDefinition resource
   */
  readonly resourceType: 'SpecimenDefinition';

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
   * A business identifier associated with the kind of specimen.
   */
  identifier?: Identifier;

  /**
   * The kind of material to be collected.
   */
  typeCollected?: CodeableConcept;

  /**
   * Preparation of the patient for specimen collection.
   */
  patientPreparation?: CodeableConcept[];

  /**
   * Time aspect of specimen collection (duration or offset).
   */
  timeAspect?: string;

  /**
   * The action to be performed for collecting the specimen.
   */
  collection?: CodeableConcept[];

  /**
   * Specimen conditioned in a container as expected by the testing
   * laboratory.
   */
  typeTested?: SpecimenDefinitionTypeTested[];
}

/**
 * Specimen conditioned in a container as expected by the testing
 * laboratory.
 */
export interface SpecimenDefinitionTypeTested {

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
   * Primary of secondary specimen.
   */
  isDerived?: boolean;

  /**
   * The kind of specimen conditioned for testing expected by lab.
   */
  type?: CodeableConcept;

  /**
   * The preference for this type of conditioned specimen.
   */
  preference: 'preferred' | 'alternate';

  /**
   * The specimen's container.
   */
  container?: SpecimenDefinitionTypeTestedContainer;

  /**
   * Requirements for delivery and special handling of this kind of
   * conditioned specimen.
   */
  requirement?: string;

  /**
   * The usual time that a specimen of this kind is retained after the
   * ordered tests are completed, for the purpose of additional testing.
   */
  retentionTime?: Duration;

  /**
   * Criterion for rejection of the specimen in its container by the
   * laboratory.
   */
  rejectionCriterion?: CodeableConcept[];

  /**
   * Set of instructions for preservation/transport of the specimen at a
   * defined temperature interval, prior the testing process.
   */
  handling?: SpecimenDefinitionTypeTestedHandling[];
}

/**
 * The specimen's container.
 */
export interface SpecimenDefinitionTypeTestedContainer {

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
   * The type of material of the container.
   */
  material?: CodeableConcept;

  /**
   * The type of container used to contain this kind of specimen.
   */
  type?: CodeableConcept;

  /**
   * Color of container cap.
   */
  cap?: CodeableConcept;

  /**
   * The textual description of the kind of container.
   */
  description?: string;

  /**
   * The capacity (volume or other measure) of this kind of container.
   */
  capacity?: Quantity;

  /**
   * The minimum volume to be conditioned in the container.
   */
  minimumVolumeQuantity?: Quantity;

  /**
   * The minimum volume to be conditioned in the container.
   */
  minimumVolumeString?: string;

  /**
   * Substance introduced in the kind of container to preserve, maintain or
   * enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additive?: SpecimenDefinitionTypeTestedContainerAdditive[];

  /**
   * Special processing that should be applied to the container for this
   * kind of specimen.
   */
  preparation?: string;
}

/**
 * The minimum volume to be conditioned in the container.
 */
export type SpecimenDefinitionTypeTestedContainerMinimumVolume = Quantity | string;

/**
 * Substance introduced in the kind of container to preserve, maintain or
 * enhance the specimen. Examples: Formalin, Citrate, EDTA.
 */
export interface SpecimenDefinitionTypeTestedContainerAdditive {

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
   * Substance introduced in the kind of container to preserve, maintain or
   * enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveCodeableConcept?: CodeableConcept;

  /**
   * Substance introduced in the kind of container to preserve, maintain or
   * enhance the specimen. Examples: Formalin, Citrate, EDTA.
   */
  additiveReference?: Reference<Substance>;
}

/**
 * Substance introduced in the kind of container to preserve, maintain or
 * enhance the specimen. Examples: Formalin, Citrate, EDTA.
 */
export type SpecimenDefinitionTypeTestedContainerAdditiveAdditive = CodeableConcept | Reference<Substance>;

/**
 * Set of instructions for preservation/transport of the specimen at a
 * defined temperature interval, prior the testing process.
 */
export interface SpecimenDefinitionTypeTestedHandling {

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
   * It qualifies the interval of temperature, which characterizes an
   * occurrence of handling. Conditions that are not related to temperature
   * may be handled in the instruction element.
   */
  temperatureQualifier?: CodeableConcept;

  /**
   * The temperature interval for this set of handling instructions.
   */
  temperatureRange?: Range;

  /**
   * The maximum time interval of preservation of the specimen with these
   * conditions.
   */
  maxDuration?: Duration;

  /**
   * Additional textual instructions for the preservation or transport of
   * the specimen. For instance, 'Protect from light exposure'.
   */
  instruction?: string;
}
