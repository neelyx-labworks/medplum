/*
 * This is a generated file
 * Do not edit manually.
 */

import { Address } from './Address';
import { Attachment } from './Attachment';
import { Claim } from './Claim';
import { ClaimResponse } from './ClaimResponse';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { Condition } from './Condition';
import { Coverage } from './Coverage';
import { Device } from './Device';
import { Encounter } from './Encounter';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Location } from './Location';
import { MedicationRequest } from './MedicationRequest';
import { Meta } from './Meta';
import { Money } from './Money';
import { Narrative } from './Narrative';
import { Organization } from './Organization';
import { Patient } from './Patient';
import { Period } from './Period';
import { Practitioner } from './Practitioner';
import { PractitionerRole } from './PractitionerRole';
import { Procedure } from './Procedure';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { RelatedPerson } from './RelatedPerson';
import { Resource } from './Resource';
import { ServiceRequest } from './ServiceRequest';
import { VisionPrescription } from './VisionPrescription';

/**
 * This resource provides: the claim details; adjudication details from
 * the processing of a Claim; and optionally account balance information,
 * for informing the subscriber of the benefits provided.
 */
export interface ExplanationOfBenefit {

  /**
   * This is a ExplanationOfBenefit resource
   */
  readonly resourceType: 'ExplanationOfBenefit';

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
   * A unique identifier assigned to this explanation of benefit.
   */
  identifier?: Identifier[];

  /**
   * The status of the resource instance.
   */
  status: 'active' | 'cancelled' | 'draft' | 'entered-in-error';

  /**
   * The category of claim, e.g. oral, pharmacy, vision, institutional,
   * professional.
   */
  type: CodeableConcept;

  /**
   * A finer grained suite of claim type codes which may convey additional
   * information such as Inpatient vs Outpatient and/or a specialty
   * service.
   */
  subType?: CodeableConcept;

  /**
   * A code to indicate whether the nature of the request is: to request
   * adjudication of products and services previously rendered; or
   * requesting authorization and adjudication for provision in the future;
   * or requesting the non-binding adjudication of the listed products and
   * services which could be provided in the future.
   */
  use: 'claim' | 'preauthorization' | 'predetermination';

  /**
   * The party to whom the professional services and/or products have been
   * supplied or are being considered and for whom actual for forecast
   * reimbursement is sought.
   */
  patient: Reference<Patient>;

  /**
   * The period for which charges are being submitted.
   */
  billablePeriod?: Period;

  /**
   * The date this resource was created.
   */
  created: string;

  /**
   * Individual who created the claim, predetermination or
   * preauthorization.
   */
  enterer?: Reference<Practitioner | PractitionerRole>;

  /**
   * The party responsible for authorization, adjudication and
   * reimbursement.
   */
  insurer: Reference<Organization>;

  /**
   * The provider which is responsible for the claim, predetermination or
   * preauthorization.
   */
  provider: Reference<Practitioner | PractitionerRole | Organization>;

  /**
   * The provider-required urgency of processing the request. Typical
   * values include: stat, routine deferred.
   */
  priority?: CodeableConcept;

  /**
   * A code to indicate whether and for whom funds are to be reserved for
   * future claims.
   */
  fundsReserveRequested?: CodeableConcept;

  /**
   * A code, used only on a response to a preauthorization, to indicate
   * whether the benefits payable have been reserved and for whom.
   */
  fundsReserve?: CodeableConcept;

  /**
   * Other claims which are related to this claim such as prior submissions
   * or claims for related services or for the same event.
   */
  related?: ExplanationOfBenefitRelated[];

  /**
   * Prescription to support the dispensing of pharmacy, device or vision
   * products.
   */
  prescription?: Reference<MedicationRequest | VisionPrescription>;

  /**
   * Original prescription which has been superseded by this prescription
   * to support the dispensing of pharmacy services, medications or
   * products.
   */
  originalPrescription?: Reference<MedicationRequest>;

  /**
   * The party to be reimbursed for cost of the products and services
   * according to the terms of the policy.
   */
  payee?: ExplanationOfBenefitPayee;

  /**
   * A reference to a referral resource.
   */
  referral?: Reference<ServiceRequest>;

  /**
   * Facility where the services were provided.
   */
  facility?: Reference<Location>;

  /**
   * The business identifier for the instance of the adjudication request:
   * claim predetermination or preauthorization.
   */
  claim?: Reference<Claim>;

  /**
   * The business identifier for the instance of the adjudication response:
   * claim, predetermination or preauthorization response.
   */
  claimResponse?: Reference<ClaimResponse>;

  /**
   * The outcome of the claim, predetermination, or preauthorization
   * processing.
   */
  outcome: 'queued' | 'complete' | 'error' | 'partial';

  /**
   * A human readable description of the status of the adjudication.
   */
  disposition?: string;

  /**
   * Reference from the Insurer which is used in later communications which
   * refers to this adjudication.
   */
  preAuthRef?: string[];

  /**
   * The timeframe during which the supplied preauthorization reference may
   * be quoted on claims to obtain the adjudication as provided.
   */
  preAuthRefPeriod?: Period[];

  /**
   * The members of the team who provided the products and services.
   */
  careTeam?: ExplanationOfBenefitCareTeam[];

  /**
   * Additional information codes regarding exceptions, special
   * considerations, the condition, situation, prior or concurrent issues.
   */
  supportingInfo?: ExplanationOfBenefitSupportingInfo[];

  /**
   * Information about diagnoses relevant to the claim items.
   */
  diagnosis?: ExplanationOfBenefitDiagnosis[];

  /**
   * Procedures performed on the patient relevant to the billing items with
   * the claim.
   */
  procedure?: ExplanationOfBenefitProcedure[];

  /**
   * This indicates the relative order of a series of EOBs related to
   * different coverages for the same suite of services.
   */
  precedence?: number;

  /**
   * Financial instruments for reimbursement for the health care products
   * and services specified on the claim.
   */
  insurance: ExplanationOfBenefitInsurance[];

  /**
   * Details of a accident which resulted in injuries which required the
   * products and services listed in the claim.
   */
  accident?: ExplanationOfBenefitAccident;

  /**
   * A claim line. Either a simple (a product or service) or a 'group' of
   * details which can also be a simple items or groups of sub-details.
   */
  item?: ExplanationOfBenefitItem[];

  /**
   * The first-tier service adjudications for payor added product or
   * service lines.
   */
  addItem?: ExplanationOfBenefitAddItem[];

  /**
   * The adjudication results which are presented at the header level
   * rather than at the line-item or add-item levels.
   */
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /**
   * Categorized monetary totals for the adjudication.
   */
  total?: ExplanationOfBenefitTotal[];

  /**
   * Payment details for the adjudication of the claim.
   */
  payment?: ExplanationOfBenefitPayment;

  /**
   * A code for the form to be used for printing the content.
   */
  formCode?: CodeableConcept;

  /**
   * The actual form, by reference or inclusion, for printing the content
   * or an EOB.
   */
  form?: Attachment;

  /**
   * A note that describes or explains adjudication results in a human
   * readable form.
   */
  processNote?: ExplanationOfBenefitProcessNote[];

  /**
   * The term of the benefits documented in this response.
   */
  benefitPeriod?: Period;

  /**
   * Balance by Benefit Category.
   */
  benefitBalance?: ExplanationOfBenefitBenefitBalance[];
}

/**
 * Details of a accident which resulted in injuries which required the
 * products and services listed in the claim.
 */
export interface ExplanationOfBenefitAccident {

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
   * Date of an accident event  related to the products and services
   * contained in the claim.
   */
  date?: string;

  /**
   * The type or context of the accident event for the purposes of
   * selection of potential insurance coverages and determination of
   * coordination between insurers.
   */
  type?: CodeableConcept;

  /**
   * The physical location of the accident event.
   */
  locationAddress?: Address;

  /**
   * The physical location of the accident event.
   */
  locationReference?: Reference<Location>;
}

/**
 * The physical location of the accident event.
 */
export type ExplanationOfBenefitAccidentLocation = Address | Reference<Location>;

/**
 * The first-tier service adjudications for payor added product or
 * service lines.
 */
export interface ExplanationOfBenefitAddItem {

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
   * Claim items which this service line is intended to replace.
   */
  itemSequence?: number[];

  /**
   * The sequence number of the details within the claim item which this
   * line is intended to replace.
   */
  detailSequence?: number[];

  /**
   * The sequence number of the sub-details woithin the details within the
   * claim item which this line is intended to replace.
   */
  subDetailSequence?: number[];

  /**
   * The providers who are authorized for the services rendered to the
   * patient.
   */
  provider?: Reference<Practitioner | PractitionerRole | Organization>[];

  /**
   * When the value is a group code then this item collects a set of
   * related claim details, otherwise this contains the product, service,
   * drug or other billing code for the item.
   */
  productOrService: CodeableConcept;

  /**
   * Item typification or modifiers codes to convey additional context for
   * the product or service.
   */
  modifier?: CodeableConcept[];

  /**
   * Identifies the program under which this may be recovered.
   */
  programCode?: CodeableConcept[];

  /**
   * The date or dates when the service or product was supplied, performed
   * or completed.
   */
  servicedDate?: string;

  /**
   * The date or dates when the service or product was supplied, performed
   * or completed.
   */
  servicedPeriod?: Period;

  /**
   * Where the product or service was provided.
   */
  locationCodeableConcept?: CodeableConcept;

  /**
   * Where the product or service was provided.
   */
  locationAddress?: Address;

  /**
   * Where the product or service was provided.
   */
  locationReference?: Reference<Location>;

  /**
   * The number of repetitions of a service or product.
   */
  quantity?: Quantity;

  /**
   * If the item is not a group then this is the fee for the product or
   * service, otherwise this is the total of the fees for the details of
   * the group.
   */
  unitPrice?: Money;

  /**
   * A real number that represents a multiplier used in determining the
   * overall value of services delivered and/or goods received. The concept
   * of a Factor allows for a discount or surcharge multiplier to be
   * applied to a monetary amount.
   */
  factor?: number;

  /**
   * The quantity times the unit price for an additional service or product
   * or charge.
   */
  net?: Money;

  /**
   * Physical service site on the patient (limb, tooth, etc.).
   */
  bodySite?: CodeableConcept;

  /**
   * A region or surface of the bodySite, e.g. limb region or tooth
   * surface(s).
   */
  subSite?: CodeableConcept[];

  /**
   * The numbers associated with notes below which apply to the
   * adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * The adjudication results.
   */
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /**
   * The second-tier service adjudications for payor added services.
   */
  detail?: ExplanationOfBenefitAddItemDetail[];
}

/**
 * The date or dates when the service or product was supplied, performed
 * or completed.
 */
export type ExplanationOfBenefitAddItemServiced = Period | string;

/**
 * Where the product or service was provided.
 */
export type ExplanationOfBenefitAddItemLocation = Address | CodeableConcept | Reference<Location>;

/**
 * The second-tier service adjudications for payor added services.
 */
export interface ExplanationOfBenefitAddItemDetail {

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
   * When the value is a group code then this item collects a set of
   * related claim details, otherwise this contains the product, service,
   * drug or other billing code for the item.
   */
  productOrService: CodeableConcept;

  /**
   * Item typification or modifiers codes to convey additional context for
   * the product or service.
   */
  modifier?: CodeableConcept[];

  /**
   * The number of repetitions of a service or product.
   */
  quantity?: Quantity;

  /**
   * If the item is not a group then this is the fee for the product or
   * service, otherwise this is the total of the fees for the details of
   * the group.
   */
  unitPrice?: Money;

  /**
   * A real number that represents a multiplier used in determining the
   * overall value of services delivered and/or goods received. The concept
   * of a Factor allows for a discount or surcharge multiplier to be
   * applied to a monetary amount.
   */
  factor?: number;

  /**
   * The quantity times the unit price for an additional service or product
   * or charge.
   */
  net?: Money;

  /**
   * The numbers associated with notes below which apply to the
   * adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * The adjudication results.
   */
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /**
   * The third-tier service adjudications for payor added services.
   */
  subDetail?: ExplanationOfBenefitAddItemDetailSubDetail[];
}

/**
 * The third-tier service adjudications for payor added services.
 */
export interface ExplanationOfBenefitAddItemDetailSubDetail {

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
   * When the value is a group code then this item collects a set of
   * related claim details, otherwise this contains the product, service,
   * drug or other billing code for the item.
   */
  productOrService: CodeableConcept;

  /**
   * Item typification or modifiers codes to convey additional context for
   * the product or service.
   */
  modifier?: CodeableConcept[];

  /**
   * The number of repetitions of a service or product.
   */
  quantity?: Quantity;

  /**
   * If the item is not a group then this is the fee for the product or
   * service, otherwise this is the total of the fees for the details of
   * the group.
   */
  unitPrice?: Money;

  /**
   * A real number that represents a multiplier used in determining the
   * overall value of services delivered and/or goods received. The concept
   * of a Factor allows for a discount or surcharge multiplier to be
   * applied to a monetary amount.
   */
  factor?: number;

  /**
   * The quantity times the unit price for an additional service or product
   * or charge.
   */
  net?: Money;

  /**
   * The numbers associated with notes below which apply to the
   * adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * The adjudication results.
   */
  adjudication?: ExplanationOfBenefitItemAdjudication[];
}

/**
 * Balance by Benefit Category.
 */
export interface ExplanationOfBenefitBenefitBalance {

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
   * Code to identify the general type of benefits under which products and
   * services are provided.
   */
  category: CodeableConcept;

  /**
   * True if the indicated class of service is excluded from the plan,
   * missing or False indicates the product or service is included in the
   * coverage.
   */
  excluded?: boolean;

  /**
   * A short name or tag for the benefit.
   */
  name?: string;

  /**
   * A richer description of the benefit or services covered.
   */
  description?: string;

  /**
   * Is a flag to indicate whether the benefits refer to in-network
   * providers or out-of-network providers.
   */
  network?: CodeableConcept;

  /**
   * Indicates if the benefits apply to an individual or to the family.
   */
  unit?: CodeableConcept;

  /**
   * The term or period of the values such as 'maximum lifetime benefit' or
   * 'maximum annual visits'.
   */
  term?: CodeableConcept;

  /**
   * Benefits Used to date.
   */
  financial?: ExplanationOfBenefitBenefitBalanceFinancial[];
}

/**
 * Benefits Used to date.
 */
export interface ExplanationOfBenefitBenefitBalanceFinancial {

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
   * Classification of benefit being provided.
   */
  type: CodeableConcept;

  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedUnsignedInt?: number;

  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedString?: string;

  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedMoney?: Money;

  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedUnsignedInt?: number;

  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedMoney?: Money;
}

/**
 * The quantity of the benefit which is permitted under the coverage.
 */
export type ExplanationOfBenefitBenefitBalanceFinancialAllowed = Money | number | string;

/**
 * The quantity of the benefit which have been consumed to date.
 */
export type ExplanationOfBenefitBenefitBalanceFinancialUsed = Money | number;

/**
 * The members of the team who provided the products and services.
 */
export interface ExplanationOfBenefitCareTeam {

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
   * A number to uniquely identify care team entries.
   */
  sequence: number;

  /**
   * Member of the team who provided the product or service.
   */
  provider: Reference<Practitioner | PractitionerRole | Organization>;

  /**
   * The party who is billing and/or responsible for the claimed products
   * or services.
   */
  responsible?: boolean;

  /**
   * The lead, assisting or supervising practitioner and their discipline
   * if a multidisciplinary team.
   */
  role?: CodeableConcept;

  /**
   * The qualification of the practitioner which is applicable for this
   * service.
   */
  qualification?: CodeableConcept;
}

/**
 * Information about diagnoses relevant to the claim items.
 */
export interface ExplanationOfBenefitDiagnosis {

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
   * A number to uniquely identify diagnosis entries.
   */
  sequence: number;

  /**
   * The nature of illness or problem in a coded form or as a reference to
   * an external defined Condition.
   */
  diagnosisCodeableConcept?: CodeableConcept;

  /**
   * The nature of illness or problem in a coded form or as a reference to
   * an external defined Condition.
   */
  diagnosisReference?: Reference<Condition>;

  /**
   * When the condition was observed or the relative ranking.
   */
  type?: CodeableConcept[];

  /**
   * Indication of whether the diagnosis was present on admission to a
   * facility.
   */
  onAdmission?: CodeableConcept;

  /**
   * A package billing code or bundle code used to group products and
   * services to a particular health condition (such as heart attack) which
   * is based on a predetermined grouping code system.
   */
  packageCode?: CodeableConcept;
}

/**
 * The nature of illness or problem in a coded form or as a reference to
 * an external defined Condition.
 */
export type ExplanationOfBenefitDiagnosisDiagnosis = CodeableConcept | Reference<Condition>;

/**
 * Financial instruments for reimbursement for the health care products
 * and services specified on the claim.
 */
export interface ExplanationOfBenefitInsurance {

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
   * A flag to indicate that this Coverage is to be used for adjudication
   * of this claim when set to true.
   */
  focal: boolean;

  /**
   * Reference to the insurance card level information contained in the
   * Coverage resource. The coverage issuing insurer will use these details
   * to locate the patient's actual coverage within the insurer's
   * information system.
   */
  coverage: Reference<Coverage>;

  /**
   * Reference numbers previously provided by the insurer to the provider
   * to be quoted on subsequent claims containing services or products
   * related to the prior authorization.
   */
  preAuthRef?: string[];
}

/**
 * A claim line. Either a simple (a product or service) or a 'group' of
 * details which can also be a simple items or groups of sub-details.
 */
export interface ExplanationOfBenefitItem {

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
   * A number to uniquely identify item entries.
   */
  sequence: number;

  /**
   * Care team members related to this service or product.
   */
  careTeamSequence?: number[];

  /**
   * Diagnoses applicable for this service or product.
   */
  diagnosisSequence?: number[];

  /**
   * Procedures applicable for this service or product.
   */
  procedureSequence?: number[];

  /**
   * Exceptions, special conditions and supporting information applicable
   * for this service or product.
   */
  informationSequence?: number[];

  /**
   * The type of revenue or cost center providing the product and/or
   * service.
   */
  revenue?: CodeableConcept;

  /**
   * Code to identify the general type of benefits under which products and
   * services are provided.
   */
  category?: CodeableConcept;

  /**
   * When the value is a group code then this item collects a set of
   * related claim details, otherwise this contains the product, service,
   * drug or other billing code for the item.
   */
  productOrService: CodeableConcept;

  /**
   * Item typification or modifiers codes to convey additional context for
   * the product or service.
   */
  modifier?: CodeableConcept[];

  /**
   * Identifies the program under which this may be recovered.
   */
  programCode?: CodeableConcept[];

  /**
   * The date or dates when the service or product was supplied, performed
   * or completed.
   */
  servicedDate?: string;

  /**
   * The date or dates when the service or product was supplied, performed
   * or completed.
   */
  servicedPeriod?: Period;

  /**
   * Where the product or service was provided.
   */
  locationCodeableConcept?: CodeableConcept;

  /**
   * Where the product or service was provided.
   */
  locationAddress?: Address;

  /**
   * Where the product or service was provided.
   */
  locationReference?: Reference<Location>;

  /**
   * The number of repetitions of a service or product.
   */
  quantity?: Quantity;

  /**
   * If the item is not a group then this is the fee for the product or
   * service, otherwise this is the total of the fees for the details of
   * the group.
   */
  unitPrice?: Money;

  /**
   * A real number that represents a multiplier used in determining the
   * overall value of services delivered and/or goods received. The concept
   * of a Factor allows for a discount or surcharge multiplier to be
   * applied to a monetary amount.
   */
  factor?: number;

  /**
   * The quantity times the unit price for an additional service or product
   * or charge.
   */
  net?: Money;

  /**
   * Unique Device Identifiers associated with this line item.
   */
  udi?: Reference<Device>[];

  /**
   * Physical service site on the patient (limb, tooth, etc.).
   */
  bodySite?: CodeableConcept;

  /**
   * A region or surface of the bodySite, e.g. limb region or tooth
   * surface(s).
   */
  subSite?: CodeableConcept[];

  /**
   * A billed item may include goods or services provided in multiple
   * encounters.
   */
  encounter?: Reference<Encounter>[];

  /**
   * The numbers associated with notes below which apply to the
   * adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * If this item is a group then the values here are a summary of the
   * adjudication of the detail items. If this item is a simple product or
   * service then this is the result of the adjudication of this item.
   */
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /**
   * Second-tier of goods and services.
   */
  detail?: ExplanationOfBenefitItemDetail[];
}

/**
 * The date or dates when the service or product was supplied, performed
 * or completed.
 */
export type ExplanationOfBenefitItemServiced = Period | string;

/**
 * Where the product or service was provided.
 */
export type ExplanationOfBenefitItemLocation = Address | CodeableConcept | Reference<Location>;

/**
 * If this item is a group then the values here are a summary of the
 * adjudication of the detail items. If this item is a simple product or
 * service then this is the result of the adjudication of this item.
 */
export interface ExplanationOfBenefitItemAdjudication {

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
   * A code to indicate the information type of this adjudication record.
   * Information types may include: the value submitted, maximum values or
   * percentages allowed or payable under the plan, amounts that the
   * patient is responsible for in-aggregate or pertaining to this item,
   * amounts paid by other coverages, and the benefit payable for this
   * item.
   */
  category: CodeableConcept;

  /**
   * A code supporting the understanding of the adjudication result and
   * explaining variance from expected amount.
   */
  reason?: CodeableConcept;

  /**
   * Monetary amount associated with the category.
   */
  amount?: Money;

  /**
   * A non-monetary value associated with the category. Mutually exclusive
   * to the amount element above.
   */
  value?: number;
}

/**
 * Second-tier of goods and services.
 */
export interface ExplanationOfBenefitItemDetail {

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
   * A claim detail line. Either a simple (a product or service) or a
   * 'group' of sub-details which are simple items.
   */
  sequence: number;

  /**
   * The type of revenue or cost center providing the product and/or
   * service.
   */
  revenue?: CodeableConcept;

  /**
   * Code to identify the general type of benefits under which products and
   * services are provided.
   */
  category?: CodeableConcept;

  /**
   * When the value is a group code then this item collects a set of
   * related claim details, otherwise this contains the product, service,
   * drug or other billing code for the item.
   */
  productOrService: CodeableConcept;

  /**
   * Item typification or modifiers codes to convey additional context for
   * the product or service.
   */
  modifier?: CodeableConcept[];

  /**
   * Identifies the program under which this may be recovered.
   */
  programCode?: CodeableConcept[];

  /**
   * The number of repetitions of a service or product.
   */
  quantity?: Quantity;

  /**
   * If the item is not a group then this is the fee for the product or
   * service, otherwise this is the total of the fees for the details of
   * the group.
   */
  unitPrice?: Money;

  /**
   * A real number that represents a multiplier used in determining the
   * overall value of services delivered and/or goods received. The concept
   * of a Factor allows for a discount or surcharge multiplier to be
   * applied to a monetary amount.
   */
  factor?: number;

  /**
   * The quantity times the unit price for an additional service or product
   * or charge.
   */
  net?: Money;

  /**
   * Unique Device Identifiers associated with this line item.
   */
  udi?: Reference<Device>[];

  /**
   * The numbers associated with notes below which apply to the
   * adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * The adjudication results.
   */
  adjudication?: ExplanationOfBenefitItemAdjudication[];

  /**
   * Third-tier of goods and services.
   */
  subDetail?: ExplanationOfBenefitItemDetailSubDetail[];
}

/**
 * Third-tier of goods and services.
 */
export interface ExplanationOfBenefitItemDetailSubDetail {

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
   * A claim detail line. Either a simple (a product or service) or a
   * 'group' of sub-details which are simple items.
   */
  sequence: number;

  /**
   * The type of revenue or cost center providing the product and/or
   * service.
   */
  revenue?: CodeableConcept;

  /**
   * Code to identify the general type of benefits under which products and
   * services are provided.
   */
  category?: CodeableConcept;

  /**
   * When the value is a group code then this item collects a set of
   * related claim details, otherwise this contains the product, service,
   * drug or other billing code for the item.
   */
  productOrService: CodeableConcept;

  /**
   * Item typification or modifiers codes to convey additional context for
   * the product or service.
   */
  modifier?: CodeableConcept[];

  /**
   * Identifies the program under which this may be recovered.
   */
  programCode?: CodeableConcept[];

  /**
   * The number of repetitions of a service or product.
   */
  quantity?: Quantity;

  /**
   * If the item is not a group then this is the fee for the product or
   * service, otherwise this is the total of the fees for the details of
   * the group.
   */
  unitPrice?: Money;

  /**
   * A real number that represents a multiplier used in determining the
   * overall value of services delivered and/or goods received. The concept
   * of a Factor allows for a discount or surcharge multiplier to be
   * applied to a monetary amount.
   */
  factor?: number;

  /**
   * The quantity times the unit price for an additional service or product
   * or charge.
   */
  net?: Money;

  /**
   * Unique Device Identifiers associated with this line item.
   */
  udi?: Reference<Device>[];

  /**
   * The numbers associated with notes below which apply to the
   * adjudication of this item.
   */
  noteNumber?: number[];

  /**
   * The adjudication results.
   */
  adjudication?: ExplanationOfBenefitItemAdjudication[];
}

/**
 * The party to be reimbursed for cost of the products and services
 * according to the terms of the policy.
 */
export interface ExplanationOfBenefitPayee {

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
   * Type of Party to be reimbursed: Subscriber, provider, other.
   */
  type?: CodeableConcept;

  /**
   * Reference to the individual or organization to whom any payment will
   * be made.
   */
  party?: Reference<Practitioner | PractitionerRole | Organization | Patient | RelatedPerson>;
}

/**
 * Payment details for the adjudication of the claim.
 */
export interface ExplanationOfBenefitPayment {

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
   * Whether this represents partial or complete payment of the benefits
   * payable.
   */
  type?: CodeableConcept;

  /**
   * Total amount of all adjustments to this payment included in this
   * transaction which are not related to this claim's adjudication.
   */
  adjustment?: Money;

  /**
   * Reason for the payment adjustment.
   */
  adjustmentReason?: CodeableConcept;

  /**
   * Estimated date the payment will be issued or the actual issue date of
   * payment.
   */
  date?: string;

  /**
   * Benefits payable less any payment adjustment.
   */
  amount?: Money;

  /**
   * Issuer's unique identifier for the payment instrument.
   */
  identifier?: Identifier;
}

/**
 * Procedures performed on the patient relevant to the billing items with
 * the claim.
 */
export interface ExplanationOfBenefitProcedure {

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
   * A number to uniquely identify procedure entries.
   */
  sequence: number;

  /**
   * When the condition was observed or the relative ranking.
   */
  type?: CodeableConcept[];

  /**
   * Date and optionally time the procedure was performed.
   */
  date?: string;

  /**
   * The code or reference to a Procedure resource which identifies the
   * clinical intervention performed.
   */
  procedureCodeableConcept?: CodeableConcept;

  /**
   * The code or reference to a Procedure resource which identifies the
   * clinical intervention performed.
   */
  procedureReference?: Reference<Procedure>;

  /**
   * Unique Device Identifiers associated with this line item.
   */
  udi?: Reference<Device>[];
}

/**
 * The code or reference to a Procedure resource which identifies the
 * clinical intervention performed.
 */
export type ExplanationOfBenefitProcedureProcedure = CodeableConcept | Reference<Procedure>;

/**
 * A note that describes or explains adjudication results in a human
 * readable form.
 */
export interface ExplanationOfBenefitProcessNote {

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
   * A number to uniquely identify a note entry.
   */
  number?: number;

  /**
   * The business purpose of the note text.
   */
  type?: 'display' | 'print' | 'printoper';

  /**
   * The explanation or description associated with the processing.
   */
  text?: string;

  /**
   * A code to define the language used in the text of the note.
   */
  language?: CodeableConcept;
}

/**
 * Other claims which are related to this claim such as prior submissions
 * or claims for related services or for the same event.
 */
export interface ExplanationOfBenefitRelated {

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
   * Reference to a related claim.
   */
  claim?: Reference<Claim>;

  /**
   * A code to convey how the claims are related.
   */
  relationship?: CodeableConcept;

  /**
   * An alternate organizational reference to the case or file to which
   * this particular claim pertains.
   */
  reference?: Identifier;
}

/**
 * Additional information codes regarding exceptions, special
 * considerations, the condition, situation, prior or concurrent issues.
 */
export interface ExplanationOfBenefitSupportingInfo {

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
   * A number to uniquely identify supporting information entries.
   */
  sequence: number;

  /**
   * The general class of the information supplied: information; exception;
   * accident, employment; onset, etc.
   */
  category: CodeableConcept;

  /**
   * System and code pertaining to the specific information regarding
   * special conditions relating to the setting, treatment or patient  for
   * which care is sought.
   */
  code?: CodeableConcept;

  /**
   * The date when or period to which this information refers.
   */
  timingDate?: string;

  /**
   * The date when or period to which this information refers.
   */
  timingPeriod?: Period;

  /**
   * Additional data or information such as resources, documents, images
   * etc. including references to the data or the actual inclusion of the
   * data.
   */
  valueBoolean?: boolean;

  /**
   * Additional data or information such as resources, documents, images
   * etc. including references to the data or the actual inclusion of the
   * data.
   */
  valueString?: string;

  /**
   * Additional data or information such as resources, documents, images
   * etc. including references to the data or the actual inclusion of the
   * data.
   */
  valueQuantity?: Quantity;

  /**
   * Additional data or information such as resources, documents, images
   * etc. including references to the data or the actual inclusion of the
   * data.
   */
  valueAttachment?: Attachment;

  /**
   * Additional data or information such as resources, documents, images
   * etc. including references to the data or the actual inclusion of the
   * data.
   */
  valueReference?: Reference<Resource>;

  /**
   * Provides the reason in the situation where a reason code is required
   * in addition to the content.
   */
  reason?: Coding;
}

/**
 * The date when or period to which this information refers.
 */
export type ExplanationOfBenefitSupportingInfoTiming = Period | string;

/**
 * Additional data or information such as resources, documents, images
 * etc. including references to the data or the actual inclusion of the
 * data.
 */
export type ExplanationOfBenefitSupportingInfoValue = Attachment | boolean | Quantity | Reference<Resource> | string;

/**
 * Categorized monetary totals for the adjudication.
 */
export interface ExplanationOfBenefitTotal {

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
   * A code to indicate the information type of this adjudication record.
   * Information types may include: the value submitted, maximum values or
   * percentages allowed or payable under the plan, amounts that the
   * patient is responsible for in aggregate or pertaining to this item,
   * amounts paid by other coverages, and the benefit payable for this
   * item.
   */
  category: CodeableConcept;

  /**
   * Monetary total amount associated with the category.
   */
  amount: Money;
}
