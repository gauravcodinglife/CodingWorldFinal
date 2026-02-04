
import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const ExplainServiceInput = z.object({
  serviceName: z.string().describe('The name of the cloud service to explain'),
});

export const ExplainServiceOutput = z.object({
  explanation: z.string().describe('A detailed explanation of the service'),
  useCases: z.string().describe('Common use cases for the service'),
  realWorldExample: z.string().describe('A real-world example of the service in action'),
});

export const explainService = ai.defineFlow(
  {
    name: 'explainService',
    inputSchema: ExplainServiceInput,
    outputSchema: ExplainServiceOutput,
  },
  async (input) => {
    const prompt = `Explain the cloud service "${input.serviceName}". Provide a detailed explanation, common use cases, and a real-world example of a company using it.`;

    const llmResponse = await ai.generate({ 
        prompt: prompt,
        model: 'gemini-1.5-flash',
        output: {
            format: 'json',
            schema: ExplainServiceOutput
        }
    });

    return llmResponse.output();
  }
);
