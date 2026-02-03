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
import {
  generateRecommendations,
  GenerateRecommendationsInput,
} from "@/ai/flows/generate-recommendations";

export async function getDashboardSimulation(
  input: SimulateCloudDashboardInput
) {
  "use server";
  try {
    const result = await simulateCloudDashboard(input);
    const recommendations = await getRecommendations(input);
    result.recommendations = recommendations.data.recommendations;
    return { data: result };
  } catch (error) {
    console.error(error);
    return { error: error.message };
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

export async function getRecommendations(input: GenerateRecommendationsInput) {
  "use server";
  try {
    const result = await generateRecommendations(input);
    return { data: result };
  } catch (error) {
    console.error(error);
    return { error: "Failed to generate recommendations." };
  }
}
