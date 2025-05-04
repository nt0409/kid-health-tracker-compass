
import React, { useState } from "react";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChildData, assessNutritionalStatus, AssessmentResult } from "@/utils/healthCalculations";

const formSchema = z.object({
  age: z.string().min(1, "Age is required").transform((val) => parseFloat(val)),
  ageUnit: z.enum(["months", "years"]),
  gender: z.enum(["male", "female", "other"]),
  weight: z.string().min(1, "Weight is required").transform((val) => parseFloat(val)),
  height: z.string().min(1, "Height is required").transform((val) => parseFloat(val)),
  muac: z.string().optional().transform((val) => (val ? parseFloat(val) : undefined)),
  edema: z.boolean().default(false)
});

type AssessmentFormProps = {
  onSubmit: (result: AssessmentResult) => void;
};

const AssessmentForm = ({ onSubmit }: AssessmentFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "",
      ageUnit: "months",
      gender: "male",
      weight: "",
      height: "",
      muac: "",
      edema: false
    }
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    const childData: ChildData = {
      age: values.age,
      ageUnit: values.ageUnit,
      gender: values.gender,
      weight: values.weight,
      height: values.height,
      muac: values.muac,
      edema: values.edema
    };
    
    const result = assessNutritionalStatus(childData);
    onSubmit(result);
  };

  return (
    <Card className="shadow-md">
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Age */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Enter age" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Age Unit */}
                <FormField
                  control={form.control}
                  name="ageUnit"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age Unit</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="months" id="months" />
                            <Label htmlFor="months">Months</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="years" id="years" />
                            <Label htmlFor="years">Years</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Gender */}
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="male">Male</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="female" id="female" />
                          <Label htmlFor="female">Female</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="other" id="other" />
                          <Label htmlFor="other">Other</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Weight */}
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weight (kg)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" placeholder="Enter weight in kg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Height */}
              <FormField
                control={form.control}
                name="height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Height/Length (cm)</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" placeholder="Enter height in cm" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* MUAC - Optional */}
              <FormField
                control={form.control}
                name="muac"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>MUAC (cm) - Optional</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" placeholder="Mid-Upper Arm Circumference" {...field} />
                    </FormControl>
                    <p className="text-xs text-muted-foreground">
                      Mid-Upper Arm Circumference. Only needed for children 6-59 months.
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Edema */}
              <FormField
                control={form.control}
                name="edema"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        id="edema"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel htmlFor="edema">
                        Presence of bilateral pitting edema
                      </FormLabel>
                      <p className="text-xs text-muted-foreground">
                        Swelling on both feet/legs that leaves a dent when pressed
                      </p>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            
            <Button type="submit" className="w-full md:w-auto">
              Calculate Assessment
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AssessmentForm;
