// @ts-nocheck
"use server";

import {
  simulateCloudDashboard,
  SimulateCloudDashboardInput,
} from "@/ai/flows/simulate-cloud-dashboards";
import {
  generatePersonalizedLearningPaths,
  GeneratePersonalizedLearningPathsInput,
} from "@/ai/flows/generate-personalized-learning-paths";

export async function getDashboardSimulation(
  input: SimulateCloudDashboardInput
) {
  "use server";
  try {
    const result = await simulateCloudDashboard(input);
    return { data: result };
  } catch (error) {
    console.error(error);
    return { error: "Failed to simulate dashboard." };
  }
}

export async function getPersonalizedLearningPaths(
  input: GeneratePersonalizedLearningPathsInput
) {
  "use server";
  try {
    const result = await generatePersonalizedLearningPaths(input);
    return { data: result };
  } catch (error) {
    console.error(error);
    return { error: "Failed to generate learning paths." };
  }
}
