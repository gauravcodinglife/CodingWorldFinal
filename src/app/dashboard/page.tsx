'use client';
import { DashboardClient } from "./dashboard-client";
import CloudMentor from "@/components/cloud-mentor";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Cloud Dashboard Simulation
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Use our AI-powered simulator to predict resource requirements for your
          application. Describe your use case to see a live-updating dashboard
          with estimated CPU, memory, cost, and more.
        </p>
      </div>
      <DashboardClient />
      <CloudMentor context="dashboard-demo" />
    </div>
  );
}
