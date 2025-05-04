
import React, { useState } from "react";
import AssessmentForm from "@/components/AssessmentForm";
import AssessmentResults from "@/components/AssessmentResults";
import { AssessmentResult } from "@/utils/healthCalculations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Assessment = () => {
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const handleAssessmentSubmit = (assessmentResult: AssessmentResult) => {
    setResult(assessmentResult);
    // Scroll to results
    setTimeout(() => {
      if (result) {
        document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Nutritional Assessment Tool</h1>
          <p className="text-gray-600">
            Enter your child's measurements to assess their nutritional status based on WHO standards
          </p>
        </div>

        <Tabs defaultValue="form" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="form">Assessment Form</TabsTrigger>
            <TabsTrigger value="guide" className="text-center">
              How It Works
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="form" className="space-y-8">
            <AssessmentForm onSubmit={handleAssessmentSubmit} />
            
            {result && (
              <div id="results">
                <AssessmentResults result={result} />
                <div className="mt-6 text-center">
                  <Button asChild variant="outline">
                    <Link to="/recommendations">View Detailed Nutrition Recommendations</Link>
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="guide">
            <Card>
              <CardHeader>
                <CardTitle>How the Assessment Works</CardTitle>
                <CardDescription>Understanding the WHO growth standards and measurements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Z-scores Explained</h3>
                  <p>Z-scores measure how far a child's measurement is from the median (average) of the reference population.</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Z-score of 0: Exactly at the median</li>
                    <li>Z-score of -1: One standard deviation below the median</li>
                    <li>Z-score of -2: Two standard deviations below the median (moderate malnutrition threshold)</li>
                    <li>Z-score of -3: Three standard deviations below the median (severe malnutrition threshold)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Assessment Criteria</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Severe Acute Malnutrition (SAM)</h4>
                      <ul className="list-disc pl-5">
                        <li>Weight-for-Height Z-score (WHZ) &lt; -3, OR</li>
                        <li>Mid-Upper Arm Circumference (MUAC) &lt; 11.5 cm (for children 6–59 months), OR</li>
                        <li>Presence of bilateral pitting edema</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Moderate Acute Malnutrition (MAM)</h4>
                      <ul className="list-disc pl-5">
                        <li>WHZ between -3 and -2, OR</li>
                        <li>MUAC between 11.5 and 12.5 cm (for children 6–59 months)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Stunting (Chronic Malnutrition)</h4>
                      <ul className="list-disc pl-5">
                        <li>Height-for-Age Z-score (HAZ) &lt; -2</li>
                        <li>Severe stunting: HAZ &lt; -3</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Underweight</h4>
                      <ul className="list-disc pl-5">
                        <li>Weight-for-Age Z-score (WAZ) &lt; -2</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Overweight/Obese</h4>
                      <ul className="list-disc pl-5">
                        <li>BMI-for-age Z-score &gt; +2</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Taking Accurate Measurements</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Weight:</strong> Use a calibrated scale, measure in the morning before breakfast if possible</li>
                    <li><strong>Height/Length:</strong> For children under 2 years, measure length while lying down. For older children, measure height while standing</li>
                    <li><strong>MUAC:</strong> Measure at the midpoint between the shoulder and elbow of the left arm</li>
                    <li><strong>Edema:</strong> Press thumb for 3 seconds on top of both feet. If dent remains after removing thumb, edema is present</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Assessment;
