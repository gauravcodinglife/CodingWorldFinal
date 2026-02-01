"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { BookMarked, BrainCircuit, ListChecks, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { getPersonalizedLearningPaths } from "../actions";
import { platforms } from "@/lib/data";
import type { GeneratePersonalizedLearningPathsOutput } from "@/ai/flows/generate-personalized-learning-paths";

const FormSchema = z.object({
  userProgress: z
    .string()
    .min(10, { message: "Please describe your progress in more detail." }),
  userPreferences: z
    .string()
    .min(10, { message: "Please describe your preferences in more detail." }),
});

export function ProfileClient() {
  const [isPending, startTransition] = useTransition();
  const [recommendations, setRecommendations] =
    useState<GeneratePersonalizedLearningPathsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      userProgress: "Completed introduction to Docker and started learning about Kubernetes pods.",
      userPreferences: "I prefer hands-on labs and visual diagrams over long texts. Interested in DevOps roles.",
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    setRecommendations(null);
    startTransition(async () => {
      const input = {
        ...values,
        availablePlatforms: platforms.map(p => p.name).join(', ')
      }
      const { data, error } = await getPersonalizedLearningPaths(input);
      if (error) {
        toast({
          title: "Error",
          description: error,
          variant: "destructive",
        });
        return;
      }
      setRecommendations(data);
    });
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-1">
        <Card className="glass-card">
          <CardHeader className="items-center text-center">
            <div className="p-4 bg-primary/10 rounded-full mb-4">
              <User className="w-12 h-12 text-primary" />
            </div>
            <CardTitle className="text-2xl font-headline">CodingWorld_User</CardTitle>
            <CardDescription>Joined on {new Date().toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
                <div className="flex items-center">
                    <ListChecks className="w-4 h-4 mr-2 text-muted-foreground"/>
                    <span><span className="font-bold">2</span> Topics Completed</span>
                </div>
                 <div className="flex items-center">
                    <BookMarked className="w-4 h-4 mr-2 text-muted-foreground"/>
                    <span><span className="font-bold">12</span> CLI Attempts</span>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-2">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BrainCircuit className="w-6 h-6 mr-2 text-primary" />
              Personalized Learning AI
            </CardTitle>
            <CardDescription>
              Tell our AI about your progress and preferences to get tailored
              recommendations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="userProgress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Progress Summary</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'I have finished the AWS S3 module and am comfortable with Docker basics...'"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userPreferences"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Learning Preferences</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'I prefer visual learning and hands-on labs. My goal is to pass the GCP certification...'"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isPending}>
                  {isPending ? "Generating..." : "Generate My Path"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {(isPending || recommendations) && (
            <div className="mt-8">
                {isPending && (
                    <div className="space-y-4">
                         <Card className="glass-card"><CardContent className="p-6"><div className="space-y-2"><h3 className="font-bold">Generating Learning Paths...</h3><p className="text-sm text-muted-foreground">Our AI is crafting your personalized roadmap.</p></div></CardContent></Card>
                         <Card className="glass-card"><CardContent className="p-6"><div className="space-y-2"><h3 className="font-bold">Generating Practice Exercises...</h3><p className="text-sm text-muted-foreground">Get ready to apply your knowledge.</p></div></CardContent></Card>
                    </div>
                )}
                {recommendations && (
                    <div className="space-y-4 animate-in fade-in-50 duration-500">
                        <Card className="glass-card">
                            <CardHeader>
                                <CardTitle>Recommended Learning Paths</CardTitle>
                            </CardHeader>
                            <CardContent className="prose prose-sm prose-invert max-w-none text-muted-foreground whitespace-pre-line">
                                {recommendations.learningPaths}
                            </CardContent>
                        </Card>
                         <Card className="glass-card">
                            <CardHeader>
                                <CardTitle>Suggested Practice Exercises</CardTitle>
                            </CardHeader>
                            <CardContent className="prose prose-sm prose-invert max-w-none text-muted-foreground whitespace-pre-line">
                                {recommendations.practiceExercises}
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        )}
      </div>
    </div>
  );
}
