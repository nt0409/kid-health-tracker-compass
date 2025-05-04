
import React from "react";
import NutritionCard from "@/components/NutritionCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NutritionRecommendations = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Nutrition Recommendations</h1>
          <p className="text-gray-600">
            Age-appropriate dietary recommendations and nutrition guidance for children
          </p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="infants">Infants</TabsTrigger>
            <TabsTrigger value="toddlers">Toddlers</TabsTrigger>
            <TabsTrigger value="children">Children</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="space-y-8 pt-4">
            <Card>
              <CardHeader>
                <CardTitle>General Nutrition Principles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Key Nutrients for Children</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Protein:</strong> Essential for growth and development. Sources include milk, eggs, meat, fish, legumes.</li>
                    <li><strong>Iron:</strong> Crucial for cognitive development and preventing anemia. Sources include red meat, fortified cereals, beans, leafy greens.</li>
                    <li><strong>Calcium:</strong> Important for bone development. Sources include dairy products, fortified plant milks, leafy greens.</li>
                    <li><strong>Zinc:</strong> Supports immune function and growth. Found in meat, shellfish, legumes, and nuts.</li>
                    <li><strong>Vitamin A:</strong> Critical for vision, immune function, and cell growth. Found in sweet potatoes, carrots, spinach, and liver.</li>
                    <li><strong>Vitamin D:</strong> Essential for bone health and immune function. Sources include sunlight exposure, fortified foods, and fatty fish.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Addressing Common Nutritional Deficiencies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-md">
                      <h4 className="font-medium mb-1">Iron Deficiency</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Include iron-rich foods daily</li>
                        <li>Combine with vitamin C for better absorption</li>
                        <li>Consider supplements if recommended by healthcare provider</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-md">
                      <h4 className="font-medium mb-1">Vitamin A Deficiency</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Include orange and dark green vegetables regularly</li>
                        <li>Egg yolks and liver are excellent sources</li>
                        <li>May require supplementation in deficient areas</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-md">
                      <h4 className="font-medium mb-1">Calcium Deficiency</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Ensure daily dairy or calcium-fortified alternatives</li>
                        <li>Include non-dairy sources like leafy greens</li>
                        <li>Consider supplements for children with dairy restrictions</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-md">
                      <h4 className="font-medium mb-1">Protein-Energy Malnutrition</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Increase calorie and protein intake</li>
                        <li>Focus on energy-dense foods like nuts, avocados</li>
                        <li>May require therapeutic foods in severe cases</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">General Feeding Tips</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Establish regular meal and snack times</li>
                    <li>Provide a variety of foods to ensure balanced nutrition</li>
                    <li>Make mealtimes positive and engaging</li>
                    <li>Be patient with picky eaters – it can take multiple exposures for a child to accept a new food</li>
                    <li>Limit highly processed foods and sugary drinks</li>
                    <li>Practice responsive feeding – recognizing and responding to hunger and fullness cues</li>
                    <li>Set a good example by eating healthy foods yourself</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="infants" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <NutritionCard
                title="0-6 Months"
                ageGroup="Exclusive Breastfeeding Period"
                recommendations={[
                  "Exclusive breastfeeding is recommended for the first 6 months",
                  "Breast milk provides all the nutrition and hydration an infant needs",
                  "No other foods or liquids are necessary during this period",
                  "Breastfeed on demand, at least 8-12 times in 24 hours",
                  "If breastfeeding isn't possible, use iron-fortified infant formula",
                  "Hold your baby close during feeding for bonding",
                  "Do not give honey to infants under 12 months (risk of botulism)"
                ]}
              />
              
              <NutritionCard
                title="6-8 Months"
                ageGroup="Beginning Complementary Foods"
                recommendations={[
                  "Continue breastfeeding or formula feeding on demand",
                  "Introduce single-ingredient foods, one at a time, every 3-5 days",
                  "Start with iron-rich foods like iron-fortified cereals",
                  "Include pureed meat, poultry, beans, and lentils for iron",
                  "Gradually introduce pureed or mashed fruits and vegetables",
                  "Aim for 2-3 small meals per day in addition to milk",
                  "Watch for allergic reactions when introducing new foods",
                  "Avoid added salt, sugar, and honey in infant foods"
                ]}
              />
              
              <NutritionCard
                title="8-12 Months"
                ageGroup="Expanding Food Variety"
                recommendations={[
                  "Continue breastfeeding or formula feeding",
                  "Increase texture gradually - mashed foods, soft pieces, finger foods",
                  "Offer a wider variety of foods from all food groups",
                  "Introduce soft, small pieces of fruits, vegetables, and proteins",
                  "Begin offering soft table foods that the family eats",
                  "Aim for 3 meals and 1-2 snacks per day",
                  "Encourage self-feeding with finger foods to develop motor skills",
                  "Introduce a cup for water or breast milk/formula",
                  "Avoid cow's milk until 12 months of age"
                ]}
              />
              
              <Card className="shadow-md h-full">
                <CardHeader className="pb-2">
                  <CardTitle>Signs of Readiness for Solid Foods</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>Look for these developmental signs around 6 months of age:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Can sit with support and has good head control</li>
                    <li>Shows interest in food, may open mouth when food approaches</li>
                    <li>Can move food from front of the tongue to the back</li>
                    <li>Has doubled their birth weight</li>
                  </ul>
                  
                  <div className="bg-blue-50 p-4 rounded-md mt-4">
                    <h4 className="font-medium mb-1">Common Food Allergens</h4>
                    <p className="text-sm mb-2">Introduce these one at a time and watch for reactions:</p>
                    <ul className="list-disc pl-5 text-sm">
                      <li>Eggs</li>
                      <li>Dairy</li>
                      <li>Peanuts</li>
                      <li>Tree nuts</li>
                      <li>Soy</li>
                      <li>Wheat</li>
                      <li>Fish and shellfish</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="toddlers" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <NutritionCard
                title="1-2 Years"
                ageGroup="Toddler Transition"
                recommendations={[
                  "Transition from formula to whole cow's milk (if not breastfeeding)",
                  "Aim for 2-3 cups of milk or equivalent dairy products daily",
                  "Offer 3 meals and 2-3 small snacks per day",
                  "Provide a variety of foods from all food groups",
                  "Cut food into small pieces to prevent choking",
                  "Encourage self-feeding with appropriate utensils",
                  "Expect food jags and pickiness - continue offering variety",
                  "Limit juice to 4 oz per day and avoid sugary drinks",
                  "Avoid foods that pose choking hazards (whole grapes, nuts, popcorn)"
                ]}
              />
              
              <NutritionCard
                title="2-3 Years"
                ageGroup="Growing Independence"
                recommendations={[
                  "Transition to lower-fat milk (2%) if weight gain is appropriate",
                  "Maintain consistent meal and snack schedule",
                  "Practice division of responsibility: parents decide what, when, and where to eat; child decides whether and how much",
                  "Serve child-sized portions (about 1 tablespoon per year of age)",
                  "Include iron-rich foods daily to support brain development",
                  "Limit added sugars and highly processed foods",
                  "Encourage drinking water throughout the day",
                  "Include a variety of colorful fruits and vegetables daily",
                  "Respect hunger and fullness cues"
                ]}
              />
              
              <Card className="shadow-md h-full">
                <CardHeader className="pb-2">
                  <CardTitle>Managing Picky Eating</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Keep offering new foods - it may take 15-20 exposures before acceptance</li>
                    <li>Pair new foods with familiar favorites</li>
                    <li>Involve toddlers in meal preparation when possible</li>
                    <li>Make food fun with different shapes and presentations</li>
                    <li>Eat together as a family and model healthy eating</li>
                    <li>Avoid using food as reward or punishment</li>
                    <li>Stay calm during food refusals - pressure can increase resistance</li>
                    <li>Offer rejected foods in different preparations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-md h-full">
                <CardHeader className="pb-2">
                  <CardTitle>Nutritional Focus Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-blue-700">Iron</h4>
                      <p className="text-sm mb-1">Critical for cognitive development and preventing anemia</p>
                      <p className="text-sm"><strong>Sources:</strong> Lean meats, fortified cereals, beans, lentils</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-700">Calcium</h4>
                      <p className="text-sm mb-1">Essential for developing strong bones and teeth</p>
                      <p className="text-sm"><strong>Sources:</strong> Milk, yogurt, cheese, fortified non-dairy alternatives</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-700">Healthy Fats</h4>
                      <p className="text-sm mb-1">Important for brain development and energy</p>
                      <p className="text-sm"><strong>Sources:</strong> Avocados, nut butters, olive oil, fatty fish</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-700">Fiber</h4>
                      <p className="text-sm mb-1">Supports digestive health and prevents constipation</p>
                      <p className="text-sm"><strong>Sources:</strong> Whole grains, fruits, vegetables, beans</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="children" className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <NutritionCard
                title="3-5 Years"
                ageGroup="Preschool Age"
                recommendations={[
                  "Provide structured meals and snacks with flexibility for preferences",
                  "Aim for half the plate to be fruits and vegetables",
                  "Choose whole grains over refined grains when possible",
                  "Include protein with meals and some snacks",
                  "Serve low-fat or fat-free dairy products",
                  "Limit highly processed foods, added sugars, and salt",
                  "Encourage water as the primary beverage",
                  "Involve children in meal planning and preparation",
                  "Continue to be patient with picky eating",
                  "Encourage mindful eating habits"
                ]}
              />
              
              <NutritionCard
                title="6-12 Years"
                ageGroup="School Age"
                recommendations={[
                  "Establish healthy breakfast habits for better school performance",
                  "Pack balanced lunches with variety from all food groups",
                  "Teach children to recognize hunger and fullness cues",
                  "Limit fast food and highly processed snacks",
                  "Work on gradually reducing added sugar consumption",
                  "Provide calcium-rich foods for bone development during growth",
                  "Include iron-rich foods to support increased blood volume",
                  "Maintain family meals as often as possible",
                  "Teach basic nutrition concepts",
                  "Model healthy eating behaviors"
                ]}
              />
              
              <Card className="shadow-md h-full">
                <CardHeader className="pb-2">
                  <CardTitle>Physical Activity Recommendations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-blue-700">Preschoolers (3-5 years)</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>At least 3 hours of physical activity throughout the day</li>
                        <li>Include a mix of light, moderate, and vigorous activities</li>
                        <li>Limit screen time to 1 hour per day of quality programming</li>
                        <li>Focus on fun, play-based movement</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-700">School-Age Children (6-12 years)</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>At least 60 minutes of moderate to vigorous physical activity daily</li>
                        <li>Include muscle-strengthening activities 3 days per week</li>
                        <li>Include bone-strengthening activities 3 days per week</li>
                        <li>Limit recreational screen time to 2 hours per day</li>
                        <li>Encourage participation in a variety of activities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-md h-full">
                <CardHeader className="pb-2">
                  <CardTitle>Healthy Habits for Life</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-blue-700">Food Relationship</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Avoid using food as reward or punishment</li>
                        <li>Teach mindful eating practices</li>
                        <li>Discuss food as nourishment for body and brain</li>
                        <li>Avoid labeling foods as "good" or "bad"</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-700">Life Skills</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Involve children in meal planning and grocery shopping</li>
                        <li>Teach age-appropriate cooking skills</li>
                        <li>Plant a small garden or herb plants</li>
                        <li>Teach basic food safety principles</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-700">Balance</h4>
                      <ul className="list-disc pl-5 text-sm">
                        <li>Practice the 80/20 principle: nutritious foods 80% of the time, treats 20%</li>
                        <li>Focus on overall patterns rather than individual meals</li>
                        <li>Balance food intake with physical activity</li>
                        <li>Make time for family meals when possible</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NutritionRecommendations;
