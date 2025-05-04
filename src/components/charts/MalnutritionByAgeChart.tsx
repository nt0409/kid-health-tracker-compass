
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MalnutritionByAgeChartProps {
  data: {
    age: string;
    percentage: number;
  }[];
  title: string;
  description?: string;
  color?: string;
}

const MalnutritionByAgeChart = ({ 
  data,
  title,
  description,
  color = "#4A9DFF"
}: MalnutritionByAgeChartProps) => {
  return (
    <Card className="shadow-md h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
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
            <XAxis dataKey="age" tick={{ fontSize: 12 }} />
            <YAxis 
              label={{ value: '% of Children', angle: -90, position: 'insideLeft' }}
              domain={[0, 40]} 
            />
            <Tooltip formatter={(value) => [`${value}%`, 'Prevalence']} />
            <Legend />
            <Bar dataKey="percentage" name="Prevalence (%)" fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MalnutritionByAgeChart;
