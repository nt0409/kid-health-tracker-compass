
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AssessmentResult } from "@/utils/healthCalculations";
import { CircleCheck, CircleAlert, AlertTriangle, Info } from "lucide-react";

const getStatusIcon = (status: string) => {
  if (status.includes("Severe")) {
    return <CircleAlert className="h-6 w-6 text-red-500" />;
  } else if (status.includes("Moderate")) {
    return <AlertTriangle className="h-6 w-6 text-orange-500" />;
  } else if (status === "Normal nutritional status") {
    return <CircleCheck className="h-6 w-6 text-green-500" />;
  } else {
    return <Info className="h-6 w-6 text-blue-500" />;
  }
};

const getStatusColor = (status: string) => {
  if (status.includes("Severe")) {
    return "border-red-200 bg-red-50";
  } else if (status.includes("Moderate")) {
    return "border-orange-200 bg-orange-50";
  } else if (status === "Normal nutritional status") {
    return "border-green-200 bg-green-50";
  } else {
    return "border-blue-200 bg-blue-50";
  }
};

interface AssessmentResultsProps {
  result: AssessmentResult;
}

const AssessmentResults = ({ result }: AssessmentResultsProps) => {
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <CardTitle>Assessment Results</CardTitle>
        <CardDescription>Based on WHO growth standards</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Z-scores</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Weight for Height (WHZ)</span>
                <span className="font-semibold">{result.wfhZScore.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Height for Age (HAZ)</span>
                <span className="font-semibold">{result.hfaZScore.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Weight for Age (WAZ)</span>
                <span className="font-semibold">{result.wfaZScore.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>BMI for Age (BMIZ)</span>
                <span className="font-semibold">{result.bmiZScore.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-2">Interpretation</h3>
            <Alert className={getStatusColor(result.nutritionalStatus)}>
              <div className="flex items-center gap-2">
                {getStatusIcon(result.nutritionalStatus)}
                <AlertTitle>{result.nutritionalStatus}</AlertTitle>
              </div>
            </Alert>
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Detailed Status</h3>
          <div className="space-y-2">
            {result.detailedStatus.map((status, index) => (
              <Alert key={index} className={getStatusColor(status)}>
                <div className="flex items-center gap-2">
                  {getStatusIcon(status)}
                  <AlertDescription>{status}</AlertDescription>
                </div>
              </Alert>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Recommendations</h3>
          <div className="space-y-2">
            {result.recommendations.map((recommendation, index) => (
              <Alert key={index}>
                <AlertDescription>{recommendation}</AlertDescription>
              </Alert>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssessmentResults;
