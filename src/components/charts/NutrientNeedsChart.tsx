
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface NutrientNeedsChartProps {
  data: {
    nutrient: string;
    infant: number;
    toddler: number;
    preschool: number;
    school: number;
  }[];
  title: string;
  description?: string;
}

const NutrientNeedsChart = ({ 
  data,
  title,
  description
}: NutrientNeedsChartProps) => {
  return (
    <Card className="shadow-md h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="nutrient" />
            <YAxis 
              label={{ value: 'Daily Requirement', angle: -90, position: 'insideLeft' }}
              scale="auto"
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="infant" name="0-12 months" fill="#4A9DFF" />
            <Bar dataKey="toddler" name="1-3 years" fill="#FF9A3D" />
            <Bar dataKey="preschool" name="4-6 years" fill="#4AD991" />
            <Bar dataKey="school" name="7-10 years" fill="#FF6B6B" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default NutrientNeedsChart;
