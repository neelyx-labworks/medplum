/*
 * This is a generated file
 * Do not edit manually.
 */

import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { DocumentReference } from './DocumentReference';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Quantity } from './Quantity';
import { Range } from './Range';
import { Ratio } from './Ratio';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { Substance } from './Substance';
import { SubstanceNucleicAcid } from './SubstanceNucleicAcid';
import { SubstancePolymer } from './SubstancePolymer';
import { SubstanceProtein } from './SubstanceProtein';
import { SubstanceReferenceInformation } from './SubstanceReferenceInformation';
import { SubstanceSourceMaterial } from './SubstanceSourceMaterial';

/**
 * The detailed description of a substance, typically at a level beyond
 * what is used for prescribing.
 */
export interface SubstanceSpecification {

  /**
   * This is a SubstanceSpecification resource
   */
  readonly resourceType: 'SubstanceSpecification';

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
   * Identifier by which this substance is known.
   */
  identifier?: Identifier;

  /**
   * High level categorization, e.g. polymer or nucleic acid.
   */
  type?: CodeableConcept;

  /**
   * Status of substance within the catalogue e.g. approved.
   */
  status?: CodeableConcept;

  /**
   * If the substance applies to only human or veterinary use.
   */
  domain?: CodeableConcept;

  /**
   * Textual description of the substance.
   */
  description?: string;

  /**
   * Supporting literature.
   */
  source?: Reference<DocumentReference>[];

  /**
   * Textual comment about this record of a substance.
   */
  comment?: string;

  /**
   * Moiety, for structural modifications.
   */
  moiety?: SubstanceSpecificationMoiety[];

  /**
   * General specifications for this substance, including how it is related
   * to other substances.
   */
  property?: SubstanceSpecificationProperty[];

  /**
   * General information detailing this substance.
   */
  referenceInformation?: Reference<SubstanceReferenceInformation>;

  /**
   * Structural information.
   */
  structure?: SubstanceSpecificationStructure;

  /**
   * Codes associated with the substance.
   */
  code?: SubstanceSpecificationCode[];

  /**
   * Names applicable to this substance.
   */
  name?: SubstanceSpecificationName[];

  /**
   * The molecular weight or weight range (for proteins, polymers or
   * nucleic acids).
   */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight[];

  /**
   * A link between this substance and another, with details of the
   * relationship.
   */
  relationship?: SubstanceSpecificationRelationship[];

  /**
   * Data items specific to nucleic acids.
   */
  nucleicAcid?: Reference<SubstanceNucleicAcid>;

  /**
   * Data items specific to polymers.
   */
  polymer?: Reference<SubstancePolymer>;

  /**
   * Data items specific to proteins.
   */
  protein?: Reference<SubstanceProtein>;

  /**
   * Material or taxonomic/anatomical source for the substance.
   */
  sourceMaterial?: Reference<SubstanceSourceMaterial>;
}

/**
 * Codes associated with the substance.
 */
export interface SubstanceSpecificationCode {

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
   * The specific code.
   */
  code?: CodeableConcept;

  /**
   * Status of the code assignment.
   */
  status?: CodeableConcept;

  /**
   * The date at which the code status is changed as part of the
   * terminology maintenance.
   */
  statusDate?: string;

  /**
   * Any comment can be provided in this field, if necessary.
   */
  comment?: string;

  /**
   * Supporting literature.
   */
  source?: Reference<DocumentReference>[];
}

/**
 * Moiety, for structural modifications.
 */
export interface SubstanceSpecificationMoiety {

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
   * Role that the moiety is playing.
   */
  role?: CodeableConcept;

  /**
   * Identifier by which this moiety substance is known.
   */
  identifier?: Identifier;

  /**
   * Textual name for this moiety substance.
   */
  name?: string;

  /**
   * Stereochemistry type.
   */
  stereochemistry?: CodeableConcept;

  /**
   * Optical activity type.
   */
  opticalActivity?: CodeableConcept;

  /**
   * Molecular formula.
   */
  molecularFormula?: string;

  /**
   * Quantitative value for this moiety.
   */
  amountQuantity?: Quantity;

  /**
   * Quantitative value for this moiety.
   */
  amountString?: string;
}

/**
 * Quantitative value for this moiety.
 */
export type SubstanceSpecificationMoietyAmount = Quantity | string;

/**
 * Names applicable to this substance.
 */
export interface SubstanceSpecificationName {

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
   * The actual name.
   */
  name: string;

  /**
   * Name type.
   */
  type?: CodeableConcept;

  /**
   * The status of the name.
   */
  status?: CodeableConcept;

  /**
   * If this is the preferred name for this substance.
   */
  preferred?: boolean;

  /**
   * Language of the name.
   */
  language?: CodeableConcept[];

  /**
   * The use context of this name for example if there is a different name
   * a drug active ingredient as opposed to a food colour additive.
   */
  domain?: CodeableConcept[];

  /**
   * The jurisdiction where this name applies.
   */
  jurisdiction?: CodeableConcept[];

  /**
   * A synonym of this name.
   */
  synonym?: SubstanceSpecificationName[];

  /**
   * A translation for this name.
   */
  translation?: SubstanceSpecificationName[];

  /**
   * Details of the official nature of this name.
   */
  official?: SubstanceSpecificationNameOfficial[];

  /**
   * Supporting literature.
   */
  source?: Reference<DocumentReference>[];
}

/**
 * Details of the official nature of this name.
 */
export interface SubstanceSpecificationNameOfficial {

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
   * Which authority uses this official name.
   */
  authority?: CodeableConcept;

  /**
   * The status of the official name.
   */
  status?: CodeableConcept;

  /**
   * Date of official name change.
   */
  date?: string;
}

/**
 * General specifications for this substance, including how it is related
 * to other substances.
 */
export interface SubstanceSpecificationProperty {

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
   * A category for this property, e.g. Physical, Chemical, Enzymatic.
   */
  category?: CodeableConcept;

  /**
   * Property type e.g. viscosity, pH, isoelectric point.
   */
  code?: CodeableConcept;

  /**
   * Parameters that were used in the measurement of a property (e.g. for
   * viscosity: measured at 20C with a pH of 7.1).
   */
  parameters?: string;

  /**
   * A substance upon which a defining property depends (e.g. for
   * solubility: in water, in alcohol).
   */
  definingSubstanceReference?: Reference<SubstanceSpecification | Substance>;

  /**
   * A substance upon which a defining property depends (e.g. for
   * solubility: in water, in alcohol).
   */
  definingSubstanceCodeableConcept?: CodeableConcept;

  /**
   * Quantitative value for this property.
   */
  amountQuantity?: Quantity;

  /**
   * Quantitative value for this property.
   */
  amountString?: string;
}

/**
 * A substance upon which a defining property depends (e.g. for
 * solubility: in water, in alcohol).
 */
export type SubstanceSpecificationPropertyDefiningSubstance = CodeableConcept | Reference<SubstanceSpecification | Substance>;

/**
 * Quantitative value for this property.
 */
export type SubstanceSpecificationPropertyAmount = Quantity | string;

/**
 * A link between this substance and another, with details of the
 * relationship.
 */
export interface SubstanceSpecificationRelationship {

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
   * A pointer to another substance, as a resource or just a
   * representational code.
   */
  substanceReference?: Reference<SubstanceSpecification>;

  /**
   * A pointer to another substance, as a resource or just a
   * representational code.
   */
  substanceCodeableConcept?: CodeableConcept;

  /**
   * For example &quot;salt to parent&quot;, &quot;active moiety&quot;, &quot;starting material&quot;.
   */
  relationship?: CodeableConcept;

  /**
   * For example where an enzyme strongly bonds with a particular
   * substance, this is a defining relationship for that enzyme, out of
   * several possible substance relationships.
   */
  isDefining?: boolean;

  /**
   * A numeric factor for the relationship, for instance to express that
   * the salt of a substance has some percentage of the active substance in
   * relation to some other.
   */
  amountQuantity?: Quantity;

  /**
   * A numeric factor for the relationship, for instance to express that
   * the salt of a substance has some percentage of the active substance in
   * relation to some other.
   */
  amountRange?: Range;

  /**
   * A numeric factor for the relationship, for instance to express that
   * the salt of a substance has some percentage of the active substance in
   * relation to some other.
   */
  amountRatio?: Ratio;

  /**
   * A numeric factor for the relationship, for instance to express that
   * the salt of a substance has some percentage of the active substance in
   * relation to some other.
   */
  amountString?: string;

  /**
   * For use when the numeric.
   */
  amountRatioLowLimit?: Ratio;

  /**
   * An operator for the amount, for example &quot;average&quot;, &quot;approximately&quot;,
   * &quot;less than&quot;.
   */
  amountType?: CodeableConcept;

  /**
   * Supporting literature.
   */
  source?: Reference<DocumentReference>[];
}

/**
 * A pointer to another substance, as a resource or just a
 * representational code.
 */
export type SubstanceSpecificationRelationshipSubstance = CodeableConcept | Reference<SubstanceSpecification>;

/**
 * A numeric factor for the relationship, for instance to express that
 * the salt of a substance has some percentage of the active substance in
 * relation to some other.
 */
export type SubstanceSpecificationRelationshipAmount = Quantity | Range | Ratio | string;

/**
 * Structural information.
 */
export interface SubstanceSpecificationStructure {

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
   * Stereochemistry type.
   */
  stereochemistry?: CodeableConcept;

  /**
   * Optical activity type.
   */
  opticalActivity?: CodeableConcept;

  /**
   * Molecular formula.
   */
  molecularFormula?: string;

  /**
   * Specified per moiety according to the Hill system, i.e. first C, then
   * H, then alphabetical, each moiety separated by a dot.
   */
  molecularFormulaByMoiety?: string;

  /**
   * Applicable for single substances that contain a radionuclide or a
   * non-natural isotopic ratio.
   */
  isotope?: SubstanceSpecificationStructureIsotope[];

  /**
   * The molecular weight or weight range (for proteins, polymers or
   * nucleic acids).
   */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;

  /**
   * Supporting literature.
   */
  source?: Reference<DocumentReference>[];

  /**
   * Molecular structural representation.
   */
  representation?: SubstanceSpecificationStructureRepresentation[];
}

/**
 * Applicable for single substances that contain a radionuclide or a
 * non-natural isotopic ratio.
 */
export interface SubstanceSpecificationStructureIsotope {

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
   * Substance identifier for each non-natural or radioisotope.
   */
  identifier?: Identifier;

  /**
   * Substance name for each non-natural or radioisotope.
   */
  name?: CodeableConcept;

  /**
   * The type of isotopic substitution present in a single substance.
   */
  substitution?: CodeableConcept;

  /**
   * Half life - for a non-natural nuclide.
   */
  halfLife?: Quantity;

  /**
   * The molecular weight or weight range (for proteins, polymers or
   * nucleic acids).
   */
  molecularWeight?: SubstanceSpecificationStructureIsotopeMolecularWeight;
}

/**
 * The molecular weight or weight range (for proteins, polymers or
 * nucleic acids).
 */
export interface SubstanceSpecificationStructureIsotopeMolecularWeight {

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
   * The method by which the molecular weight was determined.
   */
  method?: CodeableConcept;

  /**
   * Type of molecular weight such as exact, average (also known as. number
   * average), weight average.
   */
  type?: CodeableConcept;

  /**
   * Used to capture quantitative values for a variety of elements. If only
   * limits are given, the arithmetic mean would be the average. If only a
   * single definite value for a given element is given, it would be
   * captured in this field.
   */
  amount?: Quantity;
}

/**
 * Molecular structural representation.
 */
export interface SubstanceSpecificationStructureRepresentation {

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
   * The type of structure (e.g. Full, Partial, Representative).
   */
  type?: CodeableConcept;

  /**
   * The structural representation as text string in a format e.g. InChI,
   * SMILES, MOLFILE, CDX.
   */
  representation?: string;

  /**
   * An attached file with the structural representation.
   */
  attachment?: Attachment;
}
