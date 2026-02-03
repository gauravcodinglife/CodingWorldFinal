
"use client";
import { DashboardClient } from "../dashboard/dashboard-client";

export default function SimulationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Test Simulation</h1>
      <DashboardClient />
    </div>
  );
}
