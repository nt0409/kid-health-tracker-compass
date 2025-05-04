
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RegionalMalnutritionChartProps {
  data: {
    region: string;
    stunting: number;
    wasting: number;
    overweight: number;
  }[];
  title: string;
  description?: string;
}

const RegionalMalnutritionChart = ({ 
  data,
  title,
  description
}: RegionalMalnutritionChartProps) => {
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
            <XAxis dataKey="region" />
            <YAxis 
              label={{ value: '% of Children', angle: -90, position: 'insideLeft' }} 
              domain={[0, 45]}
            />
            <Tooltip formatter={(value) => [`${value}%`, '% of Children']} />
            <Legend />
            <Bar dataKey="stunting" name="Stunting" fill="#4A9DFF" />
            <Bar dataKey="wasting" name="Wasting" fill="#FF6B6B" />
            <Bar dataKey="overweight" name="Overweight" fill="#4AD991" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RegionalMalnutritionChart;
