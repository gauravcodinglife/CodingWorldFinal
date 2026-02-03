"use client";

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch, Laptop, Cloud, Database, Cpu, ShieldCheck, Smartphone, DatabaseZap, CloudCog, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const roadmaps = [
  {
    title: "Frontend Developer",
    icon: <Laptop className="w-8 h-8 text-primary" />,
    description: "Build beautiful, responsive web interfaces using modern frontend tools.",
    level: "Beginner → Intermediate",
    duration: "~4–6 months (part-time)",
    tags: ["Web", "Beginner", "First job"],
    status: "New",
    slug: "frontend-developer",
  },
  {
    title: "Backend Developer",
    icon: <Database className="w-8 h-8 text-primary" />,
    description: "Design and implement scalable, secure backend services and APIs.",
    level: "Beginner → Intermediate",
    duration: "~4–6 months",
    tags: ["Web", "Beginner", "First job"],
    status: "New",
    slug: "backend-developer",
  },
  {
    title: "DevOps Engineer",
    icon: <Cloud className="w-8 h-8 text-primary" />,
    description: "Automate infrastructure, CI/CD pipelines, and monitoring for modern systems.",
    level: "Intermediate",
    duration: "~3–5 months",
    tags: ["Cloud", "Intermediate", "Upskill"],
    status: "Updated",
    slug: "devops-engineer",
  },
  {
    title: "Full-Stack Developer",
    icon: <GitBranch className="w-8 h-8 text-primary" />,
    description: "Master both frontend and backend development to build complete web applications.",
    level: "Intermediate → Advanced",
    duration: "~6-8 months",
    tags: ["Web", "Intermediate", "Career switch"],
    slug: "full-stack-developer",
  },
  {
    title: "Mobile App Developer",
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    description: "Build cross-platform mobile apps for iOS and Android using modern frameworks.",
    level: "Beginner → Intermediate",
    duration: "~5-7 months",
    tags: ["Mobile", "Beginner", "First job"],
    slug: "mobile-app-developer",
  },
  {
    title: "Data Engineer",
    icon: <DatabaseZap className="w-8 h-8 text-primary" />,
    description: "Design, build, and maintain data pipelines and infrastructure for data-driven applications.",
    level: "Intermediate → Advanced",
    duration: "~5-7 months",
    tags: ["Data", "Intermediate", "Upskill"],
    slug: "data-engineer",
  },
  {
    title: "Cloud Engineer",
    icon: <CloudCog className="w-8 h-8 text-primary" />,
    description: "Manage and deploy cloud infrastructure and services on platforms like AWS, GCP, or Azure.",
    level: "Intermediate",
    duration: "~4-6 months",
    tags: ["Cloud", "Intermediate", "Upskill"],
    slug: "cloud-engineer",
  },
  {
    title: "Machine Learning Engineer",
    icon: <Cpu className="w-8 h-8 text-primary" />,
    description: "Build and deploy machine learning models for real-world applications.",
    level: "Advanced",
    duration: "~5-7 months",
    tags: ["Data", "Advanced", "Upskill"],
    slug: "machine-learning-engineer",
  },
  {
    title: "QA / Automation Engineer",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    description: "Ensure software quality through automated testing and quality assurance best practices.",
    level: "Beginner → Intermediate",
    duration: "~3-5 months",
    tags: ["Web", "Beginner", "First job"],
    slug: "qa-automation-engineer",
  },
];

const filters = {
  Domain: ["Web", "Mobile", "Data", "Cloud"],
  Level: ["Beginner", "Intermediate", "Advanced"],
  Goal: ["First job", "Career switch", "Upskill"],
};

export default function RoadmapsPage() {
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});

  const handleFilterClick = (category: string, filter: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category] === filter ? '' : filter,
    }));
  };

  const clearFilters = () => {
    setActiveFilters({});
  };

  const areFiltersActive = Object.values(activeFilters).some(f => f);

  const filteredRoadmaps = roadmaps.filter(roadmap => {
    if (activeFilters.Domain && !roadmap.tags.includes(activeFilters.Domain)) return false;
    if (activeFilters.Level && !roadmap.tags.includes(activeFilters.Level)) return false;
    if (activeFilters.Goal && !roadmap.tags.includes(activeFilters.Goal)) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Roadmaps
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Follow expert-designed learning paths to reach your next role faster.
        </p>
        <p className="text-md text-muted-foreground mt-2 max-w-3xl mx-auto">
          Choose a roadmap, follow the steps, track your progress, and build real projects along the way.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
        {Object.entries(filters).map(([category, options]) => (
          <div key={category} className="flex items-center gap-2">
            <span className="font-semibold text-sm">{category}:</span>
            {options.map(option => (
              <Button 
                key={option} 
                variant={activeFilters[category] === option ? 'default' : 'outline'} 
                size="sm"
                onClick={() => handleFilterClick(category, option)}
              >
                {option}
              </Button>
            ))}
          </div>
        ))}
        {areFiltersActive && (
            <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="flex items-center gap-1 text-muted-foreground"
            >
                <X className="w-4 h-4"/>
                Clear Filters
            </Button>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRoadmaps.map((roadmap) => (
          <Card key={roadmap.title} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  {roadmap.icon}
                  <CardTitle className="font-headline text-2xl">
                    {roadmap.title}
                  </CardTitle>
                </div>
                {roadmap.status && (
                  <Badge variant={roadmap.status === 'New' ? 'default' : 'secondary'}> {roadmap.status}</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{roadmap.description}</p>
              <div>
                <Badge variant="outline">{roadmap.level}</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2">
                <p className="text-sm text-muted-foreground">~{roadmap.duration}</p>
              <Button className="w-full" onClick={() => window.location.href=`/roadmaps/${roadmap.slug}`}>
                View roadmap
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
