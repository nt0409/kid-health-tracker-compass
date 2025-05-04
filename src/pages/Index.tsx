
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MalnutritionByAgeChart from "@/components/charts/MalnutritionByAgeChart";
import RegionalMalnutritionChart from "@/components/charts/RegionalMalnutritionChart";
import NutrientNeedsChart from "@/components/charts/NutrientNeedsChart";
import { getMalnutritionStats } from "@/utils/healthCalculations";

const Index = () => {
  const stats = getMalnutritionStats();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 tracking-tight">
              Child Health Tracking & Nutrition Assessment
            </h1>
            <p className="text-xl text-gray-600">
              Monitor your child's growth and nutritional status using WHO standards to ensure healthy development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/assessment">Start Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/recommendations">View Recommendations</Link>
              </Button>
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-blue-800">Why Monitor Child Nutrition?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">1</div>
                  <span>Early detection of malnutrition can prevent long-term health issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">2</div>
                  <span>Proper nutrition in early years is crucial for cognitive development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">3</div>
                  <span>Regular monitoring helps ensure children meet developmental milestones</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">4</div>
                  <span>Personalized recommendations based on WHO growth standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-800">Global Malnutrition Statistics</h2>
          <p className="text-gray-600 mt-2">Understanding malnutrition prevalence by age groups and regions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <MalnutritionByAgeChart 
            data={stats.globalStunting} 
            title="Stunting Prevalence by Age Group" 
            description="Percentage of children who are too short for their age (chronic malnutrition)"
            color="#4A9DFF"
          />
          <MalnutritionByAgeChart 
            data={stats.globalWasting} 
            title="Wasting Prevalence by Age Group" 
            description="Percentage of children who are too thin for their height (acute malnutrition)"
            color="#FF6B6B"
          />
        </div>
        
        <div className="mb-10">
          <RegionalMalnutritionChart 
            data={stats.regionalData} 
            title="Malnutrition by Region" 
            description="Regional comparison of stunting, wasting, and overweight prevalence"
          />
        </div>
        
        <div>
          <NutrientNeedsChart 
            data={stats.dailyNutrientNeeds} 
            title="Daily Nutrient Requirements by Age Group" 
            description="Recommended daily intake of essential nutrients for children"
          />
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-10 md:py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Check Your Child's Nutritional Status Now</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Use our simple assessment tool to evaluate your child's growth metrics and get personalized recommendations.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-800 hover:bg-blue-50">
            <Link to="/assessment">Start Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
