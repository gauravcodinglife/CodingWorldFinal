'use server';

import { explainService } from '@/ai/flows/explain-service';
import { simulateCloudDashboard } from '@/ai/flows/simulate-cloud-dashboards';
import type { SimulateCloudDashboardInput } from '@/ai/flows/simulate-cloud-dashboards';

export async function getExplanation(input: { serviceName: string }) {
  const result = await explainService(input);
  if (!result) {
    throw new Error('Failed to get an explanation from the AI.');
  }

  // Ensure we only return plain, serializable data to the client.
  const { explanation, useCases, realWorldExample } = result;
  return { explanation, useCases, realWorldExample };
}

export async function getDashboardSimulation(input: SimulateCloudDashboardInput) {
  try {
    const data = await simulateCloudDashboard(input);
    return { data };
  } catch (e: any) {
    return { error: e.message || 'Failed to get dashboard simulation.' };
  }
}
