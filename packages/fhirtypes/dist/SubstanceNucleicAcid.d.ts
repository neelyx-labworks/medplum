/*
 * This is a generated file
 * Do not edit manually.
 */

import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Resource } from './Resource';

/**
 * Nucleic acids are defined by three distinct elements: the base, sugar
 * and linkage. Individual substance/moiety IDs will be created for each
 * of these elements. The nucleotide sequence will be always entered in
 * the 5&rsquo;-3&rsquo; direction.
 */
export interface SubstanceNucleicAcid {

  /**
   * This is a SubstanceNucleicAcid resource
   */
  readonly resourceType: 'SubstanceNucleicAcid';

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
   * The type of the sequence shall be specified based on a controlled
   * vocabulary.
   */
  sequenceType?: CodeableConcept;

  /**
   * The number of linear sequences of nucleotides linked through
   * phosphodiester bonds shall be described. Subunits would be strands of
   * nucleic acids that are tightly associated typically through
   * Watson-Crick base pairing. NOTE: If not specified in the reference
   * source, the assumption is that there is 1 subunit.
   */
  numberOfSubunits?: number;

  /**
   * The area of hybridisation shall be described if applicable for double
   * stranded RNA or DNA. The number associated with the subunit followed
   * by the number associated to the residue shall be specified in
   * increasing order. The underscore &ldquo;&rdquo; shall be used as separator as
   * follows: &ldquo;Subunitnumber Residue&rdquo;.
   */
  areaOfHybridisation?: string;

  /**
   * (TBC).
   */
  oligoNucleotideType?: CodeableConcept;

  /**
   * Subunits are listed in order of decreasing length; sequences of the
   * same length will be ordered by molecular weight; subunits that have
   * identical sequences will be repeated multiple times.
   */
  subunit?: SubstanceNucleicAcidSubunit[];
}

/**
 * Subunits are listed in order of decreasing length; sequences of the
 * same length will be ordered by molecular weight; subunits that have
 * identical sequences will be repeated multiple times.
 */
export interface SubstanceNucleicAcidSubunit {

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
   * Index of linear sequences of nucleic acids in order of decreasing
   * length. Sequences of the same length will be ordered by molecular
   * weight. Subunits that have identical sequences will be repeated and
   * have sequential subscripts.
   */
  subunit?: number;

  /**
   * Actual nucleotide sequence notation from 5' to 3' end using standard
   * single letter codes. In addition to the base sequence, sugar and type
   * of phosphate or non-phosphate linkage should also be captured.
   */
  sequence?: string;

  /**
   * The length of the sequence shall be captured.
   */
  length?: number;

  /**
   * (TBC).
   */
  sequenceAttachment?: Attachment;

  /**
   * The nucleotide present at the 5&rsquo; terminal shall be specified based on
   * a controlled vocabulary. Since the sequence is represented from the 5'
   * to the 3' end, the 5&rsquo; prime nucleotide is the letter at the first
   * position in the sequence. A separate representation would be
   * redundant.
   */
  fivePrime?: CodeableConcept;

  /**
   * The nucleotide present at the 3&rsquo; terminal shall be specified based on
   * a controlled vocabulary. Since the sequence is represented from the 5'
   * to the 3' end, the 5&rsquo; prime nucleotide is the letter at the last
   * position in the sequence. A separate representation would be
   * redundant.
   */
  threePrime?: CodeableConcept;

  /**
   * The linkages between sugar residues will also be captured.
   */
  linkage?: SubstanceNucleicAcidSubunitLinkage[];

  /**
   * 5.3.6.8.1 Sugar ID (Mandatory).
   */
  sugar?: SubstanceNucleicAcidSubunitSugar[];
}

/**
 * The linkages between sugar residues will also be captured.
 */
export interface SubstanceNucleicAcidSubunitLinkage {

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
   * The entity that links the sugar residues together should also be
   * captured for nearly all naturally occurring nucleic acid the linkage
   * is a phosphate group. For many synthetic oligonucleotides
   * phosphorothioate linkages are often seen. Linkage connectivity is
   * assumed to be 3&rsquo;-5&rsquo;. If the linkage is either 3&rsquo;-3&rsquo; or 5&rsquo;-5&rsquo; this
   * should be specified.
   */
  connectivity?: string;

  /**
   * Each linkage will be registered as a fragment and have an ID.
   */
  identifier?: Identifier;

  /**
   * Each linkage will be registered as a fragment and have at least one
   * name. A single name shall be assigned to each linkage.
   */
  name?: string;

  /**
   * Residues shall be captured as described in 5.3.6.8.3.
   */
  residueSite?: string;
}

/**
 * 5.3.6.8.1 Sugar ID (Mandatory).
 */
export interface SubstanceNucleicAcidSubunitSugar {

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
   * The Substance ID of the sugar or sugar-like component that make up the
   * nucleotide.
   */
  identifier?: Identifier;

  /**
   * The name of the sugar or sugar-like component that make up the
   * nucleotide.
   */
  name?: string;

  /**
   * The residues that contain a given sugar will be captured. The order of
   * given residues will be captured in the 5&lsquo;-3&lsquo;direction consistent with
   * the base sequences listed above.
   */
  residueSite?: string;
}
