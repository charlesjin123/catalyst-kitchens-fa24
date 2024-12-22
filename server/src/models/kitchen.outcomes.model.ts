import mongoose from 'mongoose';

const KitchenOutcomesSchema = new mongoose.Schema({
  orgId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MemberOrganization',
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  shareSurvey: {
    type: String,
    enum: ['Yes', 'No'],
  },
  organizationName: {
    type: String,
    required: true,
  },
  responderName: {
    type: String,
    required: true,
  },
  responderTitle: {
    type: String,
    required: true,
  },
  hungerReliefsMealsServed: {
    type: Number,
  },
  typeOfMealsServed: [
    {
      type: String,
      enum: [
        'Childcare Meals',
        'School Meals',
        'Soup Kitchen (onsite)',
        'Shelter Meals (offsite)',
        'Meals for Supportive/Transitional Housing',
        'Meals For Seniors',
        'Medically Tailored Meals',
      ],
    },
  ],
  costPerMeal: {
    type: Number,
  },
  foodCostPercentage: {
    type: Number,
  },
  mealReimbursement: {
    type: Number,
  },
  mealFundingPublic: {
    type: Number,
  },
  mealFundingPrivateContracts: {
    type: Number,
  },
  mealFundingPrivateDonations: {
    type: Number,
  },
  mealsFemale: {
    type: Number,
  },
  mealsMale: {
    type: Number,
  },
  mealsNonBinary: {
    type: Number,
  },
  mealsGenderUnknown: {
    type: Number,
  },
  mealsTransgender: {
    type: Number,
  },
  mealsAmericanIndian: {
    type: Number,
  },
  mealsAsian: {
    type: Number,
  },
  mealsBlack: {
    type: Number,
  },
  mealsLatinx: {
    type: Number,
  },
  mealsNativeHawaiian: {
    type: Number,
  },
  mealsMultiRacial: {
    type: Number,
  },
  mealsWhite: {
    type: Number,
  },
  mealsOtherRace: {
    type: Number,
  },
  mealsRaceUnknown: {
    type: Number,
  },
  mealsInfants: {
    type: Number,
  },
  mealsChildren: {
    type: Number,
  },
  mealsAdults: {
    type: Number,
  },
  mealsSeniors: {
    type: Number,
  },
  mealsAgeUnknown: {
    type: Number,
  },
  capitalExpansionProjects: {
    type: String,
    enum: [
      'We are in early stages of planning a capital expansion',
      'We have a capital expansion plan and are fundraising',
      'We have a fully funded capital expansion plan',
      'We have recently completed or will soon complete the project',
      'We have no future plans or projects underway',
    ],
  },
  capitalProjectSize: {
    type: Number,
  },
  capitalProjectDate: {
    type: Date,
  },
  capitalExpansionProjectNeeds: [
    {
      type: String,
      enum: [
        'How do we even start?',
        'Planning cost expenses',
        'Creating fundraising strategy',
        'Construction costs',
        'Equipment (heavy or small)',
        'Operating expenses',
        'Other',
      ],
    },
  ],
  retailSocialEnterpriseRevenue: {
    type: Number,
  },
  grossRevenueCafe: {
    type: Number,
  },
  grossRevenueRestaurant: {
    type: Number,
  },
  grossRevenueCatering: {
    type: Number,
  },
  grossRevenueFoodTruck: {
    type: Number,
  },
  grossRevenueWholesale: {
    type: Number,
  },
  grossRevenueFoodSubscription: {
    type: Number,
  },
});

interface IKitchenOutcomes extends mongoose.Document {
  _id: string;
  orgId: string;
  year: Date;
  shareSurvey: string;
  organizationName: string;
  responderName: string;
  responderTitle: string;
  hungerReliefsMealsServed: number;
  typeOfMealsServed: string[];
  costPerMeal: number;
  foodCostPercentage: number;
  mealReimbursement: number;
  mealFundingPublic: number;
  mealFundingPrivateContracts: number;
  mealFundingPrivateDonations: number;
  mealsFemale: number;
  mealsMale: number;
  mealsNonBinary: number;
  mealsGenderUnknown: number;
  mealsTransgender: number;
  mealsAmericanIndian: number;
  mealsAsian: number;
  mealsBlack: number;
  mealsLatinx: number;
  mealsNativeHawaiian: number;
  mealsMultiRacial: number;
  mealsWhite: number;
  mealsOtherRace: number;
  mealsRaceUnknown: number;
  mealsInfants: number;
  mealsChildren: number;
  mealsAdults: number;
  mealsSeniors: number;
  mealsAgeUnknown: number;
  capitalExpansionProjects: string;
  capitalProjectSize: number;
  capitalProjectDate: Date;
  capitalExpansionProjectNeeds: string[];
  retailSocialEnterpriseRevenue: number;
  grossRevenueCafe: number;
  grossRevenueRestaurant: number;
  grossRevenueCatering: number;
  grossRevenueFoodTruck: number;
  grossRevenueWholesale: number;
  grossRevenueFoodSubscription: number;
}

const KitchenOutcomes = mongoose.model<IKitchenOutcomes>(
  'KitchenOutcomes',
  KitchenOutcomesSchema,
  'kitchenoutcomesuploadtest',
);

export { IKitchenOutcomes, KitchenOutcomes };
