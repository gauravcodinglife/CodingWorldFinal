'use server';
/**
 * @fileOverview Simulates cloud dashboards with live updating demo data.
 *
 * - simulateCloudDashboard - Simulates cloud dashboards for users.
 * - SimulateCloudDashboardInput - The input type for the simulateCloudDashboard function.
 * - SimulateCloudDashboardOutput - The return type for the simulateCloudDashboard function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimulateCloudDashboardInputSchema = z.object({
  userDescription: z
    .string()
    .describe('Description of the user and their cloud computing needs.'),
});
export type SimulateCloudDashboardInput = z.infer<typeof SimulateCloudDashboardInputSchema>;

const SimulateCloudDashboardOutputSchema = z.object({
  cpuUsage: z.number().describe('Simulated CPU usage percentage.'),
  memoryUsage: z.number().describe('Simulated memory usage percentage.'),
  podsRunning: z.number().describe('Simulated number of pods running.'),
  costEstimate: z.number().describe('Estimated cost of cloud resources.'),
  uptime: z.number().describe('Simulated uptime percentage.'),
  recommendations: z
    .string()
    .describe('Personalized recommendations based on user progress and preferences.'),
});
export type SimulateCloudDashboardOutput = z.infer<typeof SimulateCloudDashboardOutputSchema>;

export async function simulateCloudDashboard(
  input: SimulateCloudDashboardInput
): Promise<SimulateCloudDashboardOutput> {
  return simulateCloudDashboardFlow(input);
}

const simulateCloudDashboardPrompt = ai.definePrompt({
  name: 'simulateCloudDashboardPrompt',
  input: {schema: SimulateCloudDashboardInputSchema},
  output: {schema: SimulateCloudDashboardOutputSchema},
  prompt: `You are a cloud resource prediction expert.

  Based on the user description, predict the resource requirements for a cloud environment.

  User Description: {{{userDescription}}}

  Respond with the following metrics:

  - CPU Usage: (percentage)
  - Memory Usage: (percentage)
  - Pods Running: (number)
  - Cost Estimate: (USD)
  - Uptime: (percentage)
  - Recommendations: (string, personalized learning paths and practice exercises based on user progress and preferences)

  Make sure the CPU usage, memory usage and uptime are percentages.
  Do not include units in the output values (e.g. %, USD).
`,
});

const simulateCloudDashboardFlow = ai.defineFlow(
  {
    name: 'simulateCloudDashboardFlow',
    inputSchema: SimulateCloudDashboardInputSchema,
    outputSchema: SimulateCloudDashboardOutputSchema,
  },
  async input => {
    const {output} = await simulateCloudDashboardPrompt(input);
    return output!;
  }
);
