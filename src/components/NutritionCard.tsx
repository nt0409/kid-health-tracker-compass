
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type NutritionCardProps = {
  title: string;
  ageGroup: string;
  description?: string;
  recommendations: string[];
}

const NutritionCard = ({ title, ageGroup, description, recommendations }: NutritionCardProps) => {
  return (
    <Card className="shadow-md h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <span>{title}</span>
        </CardTitle>
        <CardDescription>{ageGroup}</CardDescription>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-1">
          {recommendations.map((rec, i) => (
            <li key={i}>{rec}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default NutritionCard;
