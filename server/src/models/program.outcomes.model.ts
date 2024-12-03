import mongoose from 'mongoose';

const ProgramOutcomesSchema = new mongoose.Schema({
  orgId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MemberOrganization',
    required: false,
  },
  year: {
    type: Date,
    required: false,
  },
  programCostPerTrainee: {
    type: Number,
    required: false,
  },
  programDesignedForYouthAndAdults: {
    type: Boolean,
    required: false,
  },
  youthTrained: {
    type: Number,
    required: false,
  },
  youthProgramRetentionRate: {
    type: Number,
    required: false,
  },
  youthPositiveOutcomes: {
    type: Number,
    required: false,
  },
  youthWage: {
    type: Number,
    required: false,
  },
  youthJobRetentionThreeMonths: {
    type: Number,
    required: false,
  },
  youthJobRetentionSixMonths: {
    type: Number,
    required: false,
  },
  youthJobRetentionTwelveMonths: {
    type: Number,
    required: false,
  },
  youthJobRetentionTwentyFourMonths: {
    type: Number,
    required: false,
  },
  youthProgramWeeks: {
    type: Number,
    required: false,
  },
  youthProgramHours: {
    type: Number,
    required: false,
  },
  youthEnrollmentStructure: {
    type: String,
    enum: ['Staggered', 'Single', 'Other'],
    required: false,
  },
  youthCompensation: {
    type: String,
    enum: ['HourlyMin', 'HourlyAboveMin', 'Stipend', 'None'],
    required: false,
  },
  youthTrainedDefinition: {
    type: String,
    enum: [
      'The first day of program',
      '2-4 day provisional period',
      'One week provisional period',
      'Two week provisional period',
      'Other',
    ],
    required: false,
  },
  youthGraduatedDefinition: {
    type: String,
    enum: [
      'All weeks of program',
      'Early exit for employment allowed',
      'Other',
    ],
    required: false,
  },
  youthOutcomesMeasure: {
    type: String,
    // enum: [
    //   'High School Graduation',
    //   'Return to School',
    //   'Family Reunificiation',
    //   'Non-Recidivism',
    //   'Stable Housing',
    //   'Other',
    // ],
    required: false,
  },
  programsThatServeAdults: {
    type: Boolean,
    required: false,
  },
  adultsTrained: {
    type: Number,
    required: false,
  },
  adultsGraduated: {
    type: Number,
    required: false,
  },
  adultPositiveOutcome: {
    type: Number,
    required: false,
  },
  adultJobPlacement: {
    type: Number,
    required: false,
  },
  adultWage: {
    type: Number,
    required: false,
  },
  adultJobRetentionThreeMonths: {
    type: Number,
    required: false,
  },
  adultJobRetentionSixMonths: {
    type: Number,
    required: false,
  },
  adultWageAtSixMonths: {
    type: Number,
    required: false,
  },
  adultJobRetentionTwelveMonths: {
    type: Number,
    required: false,
  },
  adultWageAtTwelveMonths: {
    type: Number,
    required: false,
  },
  adultJobRetentionTwentyFourMonths: {
    type: Number,
    required: false,
  },
  adultWageTwentyFourMonths: {
    type: Number,
    required: false,
  },
  adultProgramWeeks: {
    type: Number,
    required: false,
  },
  adultProgramHours: {
    type: Number,
    required: false,
  },
  adultEnrollmentStructure: {
    type: String,
    enum: ['Single Cohort', 'Staggered', 'Other'],
  },
  adultCompensation: {
    type: String,
    enum: ['HourlyMin', 'HourlyAboveMin', 'Stipend', 'None'],
  },
  adultTrainedDefinition: {
    type: String,
    enum: [
      'The first day of program',
      '2-4 day provisional period',
      'One week provisional period',
      'Two week provisional period',
      'Other',
    ],
  },
  adultGraduatedDefinition: {
    type: String,
    enum: [
      'All weeks of program',
      'Early exit for employment allowed',
      'Other',
    ],
    required: false,
  },
  traineeAge: {
    type: Number,
    required: false,
  },
  traineePercentFemale: {
    type: Number,
    required: false,
  },
  traineePercentMale: {
    type: Number,
    required: false,
  },
  traineePercentNonBinary: {
    type: Number,
    required: false,
  },
  traineePercentTransgender: {
    type: Number,
    required: false,
  },
  traineePercentAmericanIndian: {
    type: Number,
    required: false,
  },
  traineePercentAsianOrAsianAmerican: {
    type: Number,
    required: false,
  },
  traineePercentBlackOrAfricanAmerican: {
    type: Number,
    required: false,
  },
  traineePercentLatinaLatinoLatinx: {
    type: Number,
    required: false,
  },
  traineePercentNativeHawaiianPacificIslander: {
    type: Number,
    required: false,
  },
  traineeMultiracial: {
    type: Number,
    required: false,
  },
  traineeWhite: {
    type: Number,
    required: false,
  },
  traineeOtherRace: {
    type: Number,
    required: false,
  },
  traineeRaceUnknown: {
    type: Number,
    required: false,
  },
  barrierReturningCitizensOrFormerlyIncarceratedPersons: {
    type: Number,
    required: false,
  },
  barrierPhysicalDisability: {
    type: Number,
    required: false,
  },
  barrierIntellectualOrDevelopmentalDisability: {
    type: Number,
    required: false,
  },
  barrierUnhoused: {
    type: Number,
    required: false,
  },
  barrierMentalHealth: {
    type: Number,
    required: false,
  },
  barrierNewAmericans: {
    type: Number,
    required: false,
  },
  barrierInRecovery: {
    type: Number,
    required: false,
  },
  barrierVeteran: {
    type: Number,
    required: false,
  },
  wrapAroundServicesHousing: {
    type: String,
    enum: [
      'You mostly facilitate access through partner agency',
      'Your program does not provide or facilitate access',
      'You mostly provide in-house',
    ],
  },

  wrapAroundServicesLifeSkillsOrSocialEmotionalLearning: {
    type: String,
    enum: [
      'You mostly facilitate access through partner agency',
      'Your program does not provide or facilitate access',
      'You mostly provide in-house',
    ],
  },
  wrapAroundServicesCaseManagement: {
    type: String,
    enum: [
      'You mostly facilitate access through partner agency',
      'Your program does not provide or facilitate access',
      'You mostly provide in-house',
    ],
  },
  wrapAroundServicesJobSearchAndPlacement: {
    type: String,
    enum: [
      'You mostly facilitate access through partner agency',
      'Your program does not provide or facilitate access',
      'You mostly provide in-house',
    ],
  },
  wrapAroundServicesRecoveryTreatment: {
    type: String,
    enum: [
      'You mostly facilitate access through partner agency',
      'Your program does not provide or facilitate access',
      'You mostly provide in-house',
    ],
  },
  wrapAroundServicesMentalHealthServices: {
    type: String,
    enum: [
      'You mostly facilitate access through partner agency',
      'Your program does not provide or facilitate access',
      'You mostly provide in-house',
    ],
  },
  wrapAroundServicesHealthcareAllOther: {
    type: String,
    enum: [
      'You mostly facilitate access through partner agency',
      'Your program does not provide or facilitate access',
      'You mostly provide in-house',
    ],
  },
  wrapAroundServicesChildcare: {
    type: String,
    enum: [
      'You mostly facilitate access through partner agency',
      'Your program does not provide or facilitate access',
      'You mostly provide in-house',
    ],
  },
  wrapAroundServicesTransportation: {
    type: String,
    enum: [
      'You mostly facilitate access through partner agency',
      'Your program does not provide or facilitate access',
      'You mostly provide in-house',
    ],
  },
  otherPleaseSpecifyOtherWrapAroundServices: {
    type: String,
  },
  fundingPercentFromPublicFunding: {
    type: Number,
  },
  fundingPercentFromPrivateFunding: {
    type: Number,
  },
  fundingPercentFromSocialEnterpriseOrGeneratedRevenue: {
    type: Number,
  },
  SNAPEAndT: {
    type: String,
    enum: ['Yes', 'NoButInterested', 'NoNotInterested', 'NoRejected'],
  },
  WIOA: {
    type: String,
    enum: ['Yes', 'No But', 'No And'],
  },
  curriculum: {
    type: String,
    enum: ['All', 'Part', 'None'],
  },
  programCertifications: [
    {
      type: String,
      enum: [
        'ACF Quality/Approved Program',
        'DOL approved apprenticeship',
        'DOL approved pre-apprenticeship',
        'State Association apprenticeship',
        'State Association pre-apprenticeship',
        'Local or State Dept. of Education or Community College',
        'Other',
      ],
    },
  ],
  otherProgramCertifications: {
    type: String,
  },
  participantCertifications: [
    {
      type: String,
      enum: [
        'Basic Food Safety (eg ServSafe Handler or similar)',
        'Advanced Food Safety (eg ServSafe Manager or similar)',
        'Credit toward Comm College',
        'ACF Certification (eg Fundamental Cook)',
        'NRA (eg Pro Start)',
        'AHLEI (eg Kitchen Cook, Guest Service Gold, Certified Guest Service Professional, etc.)',
        'Nutrition',
        'Allergen',
        'Customer Services',
        'Alcohol Services',
        'Non-foodservice certification (including CLA/CLT, CDL, NSC, etc)',
        'Other',
      ],
    },
  ],
  otherParticipantCertifications: {
    type: String,
  },
  internshipOrExternship: {
    type: Boolean,
  },
  internshipOrExternshipDescription: {
    type: String,
  },
  minimumWage: {
    type: Number,
    required: false,
  },
  jobType: {
    type: String,
    enum: ['1-25%', '26-50%', '51-75%', '76-100%', 'Not Tracked'],
    required: false,
  },
  jobCategory: [
    {
      type: String,
      enum: [
        'Food Service: Restaurant, Cafe',
        'Food Service: Institutional (Senior Living, Corporate Dining, etc.)',
        'Food Service: Grocery',
        'Customer Service and Retail',
        'Transportation & Warehousing',
        'Healthcare & Social Assistance',
        'Safety & Maintenance',
        'Construction',
        'Other',
      ],
    },
  ],
  alumniHiredByOrg: {
    type: Number,
  },
});

interface IProgramOutcomes {
  orgId?: mongoose.Schema.Types.ObjectId;
  year?: Date;
  programCostPerTrainee?: number;
  programDesignedForYouthAndAdults?: boolean;
  youthTrained?: number;
  youthProgramRetentionRate?: number;
  youthPositiveOutcomes?: number;
  youthWage?: number;
  youthJobRetentionThreeMonths?: number;
  youthJobRetentionSixMonths?: number;
  youthJobRetentionTwelveMonths?: number;
  youthJobRetentionTwentyFourMonths?: number;
  youthProgramWeeks?: number;
  youthProgramHours?: number;
  youthEnrollmentStructure?: string;
  youthCompensation?: string;
  youthTrainedDefinition?: string;
  youthGraduatedDefinition?: string;
  youthOutcomesMeasure?: string;
  programsThatServeAdults?: boolean;
  adultsTrained?: number;
  adultsGraduated?: number;
  adultPositiveOutcome?: number;
  adultJobPlacement?: number;
  adultWage?: number;
  adultJobRetentionThreeMonths?: number;
  adultJobRetentionSixMonths?: number;
  adultWageAtSixMonths?: number;
  adultJobRetentionTwelveMonths?: number;
  adultWageAtTwelveMonths?: number;
  adultJobRetentionTwentyFourMonths?: number;
  adultWageTwentyFourMonths?: number;
  adultProgramWeeks?: number;
  adultProgramHours?: number;
  adultEnrollmentStructure?: string;
  adultCompensation?: string;
  adultTrainedDefinition?: string;
  adultGraduatedDefinition?: string;
  traineeAge?: number;
  traineePercentFemale?: number;
  traineePercentMale?: number;
  traineePercentNonBinary?: number;
  traineePercentTransgender?: number;
  traineePercentAmericanIndian?: number;
  traineePercentAsianOrAsianAmerican?: number;
  traineePercentBlackOrAfricanAmerican?: number;
  traineePercentLatinaLatinoLatinx?: number;
  traineePercentNativeHawaiianPacificIslander?: number;
  traineeMultiracial?: number;
  traineeWhite?: number;
  traineeOtherRace?: number;
  traineeRaceUnknown?: number;
  barrierReturningCitizensOrFormerlyIncarceratedPersons?: number;
  barrierPhysicalDisability?: number;
  barrierIntellectualOrDevelopmentalDisability?: number;
  barrierUnhoused?: number;
  barrierMentalHealth?: number;
  barrierNewAmericans?: number;
  barrierInRecovery?: number;
  barrierVeteran?: number;
  wrapAroundServicesHousing?: string;
  wrapAroundServicesLifeSkillsOrSocialEmotionalLearning?: string;
  wrapAroundServicesCaseManagement?: string;
  wrapAroundServicesJobSearchAndPlacement?: string;
  wrapAroundServicesRecoveryTreatment?: string;
  wrapAroundServicesMentalHealthServices?: string;
  wrapAroundServicesHealthcareAllOther?: string;
  wrapAroundServicesChildcare?: string;
  wrapAroundServicesTransportation?: string;
  otherPleaseSpecifyOtherWrapAroundServices?: string;
  fundingPercentFromPublicFunding?: number;
  fundingPercentFromPrivateFunding?: number;
  fundingPercentFromSocialEnterpriseOrGeneratedRevenue?: number;
  SNAPEAndT?: string;
  WIOA?: string;
  curriculum?: string;
  programCertifications?: string[];
  otherProgramCertifications?: string;
  participantCertifications?: string[];
  otherParticipantCertifications?: string;
  internshipOrExternship?: boolean;
  internshipOrExternshipDescription?: string;
  minimumWage?: number;
  jobType?: string;
  jobCategory?: string[];
  alumniHiredByOrg?: number;
}

const ProgramOutcomes = mongoose.model<IProgramOutcomes>(
  'ProgramOutcomes',
  ProgramOutcomesSchema,
);

export { IProgramOutcomes, ProgramOutcomes };
