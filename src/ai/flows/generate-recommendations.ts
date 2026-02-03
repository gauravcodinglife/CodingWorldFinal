'use server';
/**
 * @fileOverview Generates personalized recommendations for cloud users.
 *
 * - generateRecommendations - Generates recommendations for users.
 * - GenerateRecommendationsInput - The input type for the generateRecommendations function.
 * - GenerateRecommendationsOutput - The return type for the generateRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRecommendationsInputSchema = z.object({
  userDescription: z
    .string()
    .describe('Description of the user and their cloud computing needs.'),
});
export type GenerateRecommendationsInput = z.infer<typeof GenerateRecommendationsInputSchema>;

const GenerateRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('Personalized recommendations based on user progress and preferences.'),
});
export type GenerateRecommendationsOutput = z.infer<typeof GenerateRecommendationsOutputSchema>;

export async function generateRecommendations(
  input: GenerateRecommendationsInput
): Promise<GenerateRecommendationsOutput> {
  return generateRecommendationsFlow(input);
}

const generateRecommendationsPrompt = ai.definePrompt({
  name: 'generateRecommendationsPrompt',
  input: {schema: GenerateRecommendationsInputSchema},
  output: {schema: GenerateRecommendationsOutputSchema},
  prompt: `You are a cloud resource prediction expert.

  Based on the user description, provide personalized recommendations for learning paths and practice exercises.

  User Description: {{{userDescription}}}

  Respond with the following metrics:

  - Recommendations: (string, personalized learning paths and practice exercises based on user progress and preferences)
`,
});

const generateRecommendationsFlow = ai.defineFlow(
  {
    name: 'generateRecommendationsFlow',
    inputSchema: GenerateRecommendationsInputSchema,
    outputSchema: GenerateRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await generateRecommendationsPrompt(input);
    return output!;
  }
);
