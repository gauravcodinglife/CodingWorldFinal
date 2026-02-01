'use server';

/**
 * @fileOverview A personalized learning path generator AI agent.
 *
 * - generatePersonalizedLearningPaths - A function that generates personalized learning paths.
 * - GeneratePersonalizedLearningPathsInput - The input type for the generatePersonalizedLearningPaths function.
 * - GeneratePersonalizedLearningPathsOutput - The return type for the generatePersonalizedLearningPaths function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedLearningPathsInputSchema = z.object({
  userProgress: z
    .string()
    .describe('A summary of the user\'s progress on the platform.'),
  userPreferences: z
    .string()
    .describe('A description of the user\'s learning preferences.'),
  availablePlatforms: z
    .string()
    .describe('A list of the platforms available on the site (AWS, GCP, Azure, Docker, Kubernetes)'),
});
export type GeneratePersonalizedLearningPathsInput = z.infer<
  typeof GeneratePersonalizedLearningPathsInputSchema
>;

const GeneratePersonalizedLearningPathsOutputSchema = z.object({
  learningPaths: z
    .string()
    .describe(
      'A list of personalized learning paths based on the user\'s progress and preferences.'
    ),
  practiceExercises: z
    .string()
    .describe(
      'A list of practice exercises tailored to the user\'s learning path.'
    ),
});
export type GeneratePersonalizedLearningPathsOutput = z.infer<
  typeof GeneratePersonalizedLearningPathsOutputSchema
>;

export async function generatePersonalizedLearningPaths(
  input: GeneratePersonalizedLearningPathsInput
): Promise<GeneratePersonalizedLearningPathsOutput> {
  return generatePersonalizedLearningPathsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedLearningPathsPrompt',
  input: {schema: GeneratePersonalizedLearningPathsInputSchema},
  output: {schema: GeneratePersonalizedLearningPathsOutputSchema},
  prompt: `You are an AI learning path generator that suggests learning paths and practice exercises based on user progress and preferences. The available platforms are: {{{availablePlatforms}}}.

User Progress: {{{userProgress}}}
User Preferences: {{{userPreferences}}}

Suggest personalized learning paths and practice exercises. The output should include a list of learning paths and practice exercises. The learning paths should be tailored to the user's progress and preferences and focus on areas where the user needs the most improvement. The practice exercises should reinforce the concepts learned in the learning paths.

Output:
Learning Paths: 
Practice Exercises:`,
});

const generatePersonalizedLearningPathsFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedLearningPathsFlow',
    inputSchema: GeneratePersonalizedLearningPathsInputSchema,
    outputSchema: GeneratePersonalizedLearningPathsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
