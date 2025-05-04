
// WHO Growth Standards reference values
// These are simplified values for demonstration purposes
// In a real implementation, you would use the full WHO dataset

// Z-score calculation helpers
export const calculateZScore = (
  measurement: number,
  median: number,
  standardDeviation: number
): number => {
  return (measurement - median) / standardDeviation;
};

export type ChildData = {
  age: number;
  ageUnit: 'months' | 'years';
  gender: 'male' | 'female' | 'other';
  weight: number; // kg
  height: number; // cm
  muac?: number; // cm (Mid-Upper Arm Circumference)
  edema: boolean;
};

export type AssessmentResult = {
  wfhZScore: number; // Weight-for-height Z-score
  hfaZScore: number; // Height-for-age Z-score
  wfaZScore: number; // Weight-for-age Z-score
  bmiZScore: number; // BMI-for-age Z-score
  nutritionalStatus: string;
  detailedStatus: string[];
  recommendations: string[];
};

// Convert age to months if in years
const normalizeAgeToMonths = (age: number, unit: 'months' | 'years'): number => {
  return unit === 'years' ? age * 12 : age;
};

// Simplified WHO reference data (for demonstration)
// In a real app, you would use the full WHO dataset or an API
const getMedianAndSD = (
  ageInMonths: number,
  gender: 'male' | 'female' | 'other',
  measurement: 'weight' | 'height' | 'wfh' | 'bmi'
): { median: number; sd: number } => {
  // This is a very simplified approximation
  // Real implementation would use lookup tables based on WHO standards
  
  // Default values for demonstration
  let median = 0;
  let sd = 1;
  
  if (measurement === 'weight') {
    // Weight-for-age median approximation
    if (gender === 'male' || gender === 'other') {
      median = 7 + (ageInMonths * 0.2);
      sd = 0.5 + (ageInMonths * 0.01);
    } else {
      median = 6.5 + (ageInMonths * 0.19);
      sd = 0.5 + (ageInMonths * 0.01);
    }
  } else if (measurement === 'height') {
    // Height-for-age median approximation
    if (gender === 'male' || gender === 'other') {
      median = 50 + (ageInMonths * 0.5);
      sd = 2 + (ageInMonths * 0.02);
    } else {
      median = 49 + (ageInMonths * 0.5);
      sd = 2 + (ageInMonths * 0.02);
    }
  } else if (measurement === 'wfh') {
    // Weight-for-height median approximation (highly simplified)
    if (gender === 'male' || gender === 'other') {
      median = 0.17; // kg per cm - very rough approximation
      sd = 0.02;
    } else {
      median = 0.16;
      sd = 0.02;
    }
  } else if (measurement === 'bmi') {
    // BMI-for-age median approximation
    if (gender === 'male' || gender === 'other') {
      median = 15 + (ageInMonths * 0.01);
      sd = 1.5;
    } else {
      median = 14.5 + (ageInMonths * 0.01);
      sd = 1.5;
    }
  }
  
  return { median, sd };
};

// Calculate BMI
export const calculateBMI = (weightKg: number, heightCm: number): number => {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
};

export const assessNutritionalStatus = (data: ChildData): AssessmentResult => {
  const ageInMonths = normalizeAgeToMonths(data.age, data.ageUnit);
  
  // Calculate BMI
  const bmi = calculateBMI(data.weight, data.height);
  
  // Get reference values and calculate z-scores
  const weightRef = getMedianAndSD(ageInMonths, data.gender, 'weight');
  const heightRef = getMedianAndSD(ageInMonths, data.gender, 'height');
  const wfhRef = getMedianAndSD(ageInMonths, data.gender, 'wfh');
  const bmiRef = getMedianAndSD(ageInMonths, data.gender, 'bmi');
  
  const wfaZScore = calculateZScore(data.weight, weightRef.median, weightRef.sd);
  const hfaZScore = calculateZScore(data.height, heightRef.median, heightRef.sd);
  const wfhZScore = calculateZScore(data.weight / data.height, wfhRef.median, wfhRef.sd);
  const bmiZScore = calculateZScore(bmi, bmiRef.median, bmiRef.sd);
  
  // Determine nutritional status
  const statuses: string[] = [];
  let nutritionalStatus = "Normal";
  let recommendations: string[] = [];
  
  // Check for Severe Acute Malnutrition (SAM)
  if (wfhZScore < -3 || (data.muac !== undefined && data.muac < 11.5) || data.edema) {
    nutritionalStatus = "Severe Acute Malnutrition";
    statuses.push("Severe Acute Malnutrition (SAM)");
    recommendations.push("Urgent medical attention is required. Please visit a healthcare facility immediately.");
    recommendations.push("Therapeutic feeding program with Ready-to-Use Therapeutic Food (RUTF) may be necessary.");
  } 
  // Check for Moderate Acute Malnutrition (MAM)
  else if (wfhZScore >= -3 && wfhZScore < -2 || (data.muac !== undefined && data.muac >= 11.5 && data.muac < 12.5)) {
    nutritionalStatus = "Moderate Acute Malnutrition";
    statuses.push("Moderate Acute Malnutrition (MAM)");
    recommendations.push("Supplementary feeding program is recommended.");
    recommendations.push("Regular monitoring of growth is essential.");
  }
  
  // Check for Stunting (Chronic Malnutrition)
  if (hfaZScore < -2) {
    statuses.push("Stunted (Chronic Malnutrition)");
    if (hfaZScore < -3) {
      statuses[statuses.length - 1] += " - Severe";
    }
    recommendations.push("Focus on long-term nutritional support and micronutrient supplementation.");
  }
  
  // Check for Underweight
  if (wfaZScore < -2) {
    statuses.push("Underweight");
    recommendations.push("Energy-dense foods rich in nutrients are recommended.");
  }
  
  // Check for Overweight/Obesity
  if (bmiZScore > 2) {
    statuses.push("Overweight/Obese");
    if (nutritionalStatus === "Normal") {
      nutritionalStatus = "Overweight/Obese";
    }
    recommendations.push("Balanced diet with portion control is recommended.");
    recommendations.push("Regular physical activity appropriate for age.");
  }
  
  // If no issues found
  if (statuses.length === 0) {
    statuses.push("Normal nutritional status");
    recommendations.push("Continue with age-appropriate balanced diet.");
    recommendations.push("Regular growth monitoring is recommended.");
  }
  
  return {
    wfhZScore,
    hfaZScore,
    wfaZScore,
    bmiZScore,
    nutritionalStatus,
    detailedStatus: statuses,
    recommendations
  };
};

export const getNutritionRecommendations = (
  ageInMonths: number,
  nutritionalStatus: string
): string[] => {
  // General recommendations based on age
  if (ageInMonths < 6) {
    return [
      "Exclusive breastfeeding is recommended for the first 6 months",
      "No other foods or liquids are needed during this period",
      "Breastfeed on demand, at least 8 times in 24 hours"
    ];
  } else if (ageInMonths < 12) {
    return [
      "Continue breastfeeding on demand",
      "Introduce complementary foods starting with iron-rich foods",
      "Gradually increase food variety, consistency and amount",
      "Feed 2-3 meals per day with 1-2 nutritious snacks"
    ];
  } else if (ageInMonths < 24) {
    return [
      "Continue breastfeeding up to 2 years or beyond",
      "Provide diverse family foods with a variety of textures",
      "Feed 3-4 meals per day with 1-2 nutritious snacks",
      "Ensure adequate iron, vitamin A, and calcium intake"
    ];
  } else {
    return [
      "Provide a balanced diet with foods from all food groups",
      "Include protein-rich foods, fruits, and vegetables daily",
      "Limit processed foods, sugars and salt",
      "Ensure adequate intake of essential nutrients (iron, calcium, vitamins)"
    ];
  }
};

// Mock data for statistics graphs
export const getMalnutritionStats = () => {
  return {
    globalStunting: [
      { age: "Under 6 months", percentage: 22.3 },
      { age: "6-11 months", percentage: 28.7 },
      { age: "12-23 months", percentage: 32.5 },
      { age: "24-35 months", percentage: 31.2 },
      { age: "36-47 months", percentage: 29.8 },
      { age: "48-59 months", percentage: 28.2 },
    ],
    globalWasting: [
      { age: "Under 6 months", percentage: 12.1 },
      { age: "6-11 months", percentage: 15.8 },
      { age: "12-23 months", percentage: 10.3 },
      { age: "24-35 months", percentage: 7.5 },
      { age: "36-47 months", percentage: 6.2 },
      { age: "48-59 months", percentage: 5.5 },
    ],
    regionalData: [
      { region: "Africa", stunting: 30.7, wasting: 7.1, overweight: 4.9 },
      { region: "Asia", stunting: 21.8, wasting: 9.1, overweight: 5.2 },
      { region: "Latin America", stunting: 9.0, wasting: 1.3, overweight: 7.5 },
      { region: "Oceania", stunting: 38.1, wasting: 9.5, overweight: 3.9 },
      { region: "North America", stunting: 2.6, wasting: 0.5, overweight: 9.1 },
      { region: "Europe", stunting: 4.5, wasting: 0.8, overweight: 8.3 },
    ],
    dailyNutrientNeeds: [
      { nutrient: "Protein (g)", infant: 11, toddler: 13, preschool: 19, school: 34 },
      { nutrient: "Calcium (mg)", infant: 270, toddler: 500, preschool: 700, school: 1000 },
      { nutrient: "Iron (mg)", infant: 11, toddler: 7, preschool: 10, school: 8 },
      { nutrient: "Zinc (mg)", infant: 3, toddler: 3, preschool: 5, school: 8 },
      { nutrient: "Vitamin A (μg)", infant: 400, toddler: 300, preschool: 400, school: 600 },
      { nutrient: "Vitamin C (mg)", infant: 50, toddler: 15, preschool: 25, school: 45 },
    ]
  };
};
