'use client';

import { useEffect, useState } from 'react';
import { Roadmap } from '@/lib/roadmaps-data';
import { useParams } from 'next/navigation';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Clock, 
    Calendar, 
    BarChart, 
    Target, 
    BookOpen, 
    Link as LinkIcon, 
    FileText, 
    Youtube, 
    Github, 
    Briefcase, 
    GraduationCap, 
    AlertCircle, 
    CheckCircle, 
    Info
} from "lucide-react";

export default function RoadmapPage() {
  const [roadmap, setRoadmap] = useState<Roadmap | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    if (params.slug) {
      fetch(`/api/roadmaps/${params.slug}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Roadmap not found');
          }
          return res.json();
        })
        .then((data) => {
          setRoadmap(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [params.slug]);

  if (loading) {
    return <div className="container mx-auto px-4 py-12 text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-red-500">{error}</h1>
        <Button onClick={() => window.location.href='/roadmaps'} className="mt-4">Back to Roadmaps</Button>
      </div>
    );
  }

  if (!roadmap) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">{roadmap.title}</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">{roadmap.longDescription}</p>
      </div>

      {/* Badges */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
                <BarChart className="w-4 h-4" />
                <span>{roadmap.level}</span>
            </div>
            <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{`${roadmap.estimatedDurationMonthsMin} - ${roadmap.estimatedDurationMonthsMax} months`}</span>
            </div>
            <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{roadmap.estimatedMode}</span>
            </div>
            <div className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>{roadmap.goal}</span>
            </div>
        </div>

      {/* Prerequisites */}
      <div className="mb-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Info className="w-6 h-6 text-primary"/>Prerequisites</h2>
        <ul className="list-none p-0">
          {roadmap.prerequisites.length > 0 ? (
            roadmap.prerequisites.map((prereq) => (
              <li key={prereq.id} className={`flex items-start gap-3 p-3 rounded-md mb-2 ${prereq.mandatory ? 'bg-secondary/50' : 'bg-muted/50'}`}>
                {prereq.mandatory ? <CheckCircle className="w-5 h-5 text-green-500 mt-1" /> : <Info className="w-5 h-5 text-blue-500 mt-1"/>}
                <div>
                    <p className="font-semibold">{prereq.text}</p>
                    <p className="text-sm text-muted-foreground">{prereq.mandatory ? 'Mandatory' : 'Recommended'}</p>
                </div>
              </li>
            ))
          ) : (
            <p>No formal prerequisites. This roadmap is beginner-friendly.</p>
          )}
        </ul>
      </div>

      {/* Stages */}
      <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6 text-primary"/>Roadmap Stages</h2>
        <Accordion type="single" collapsible defaultValue="stg_1">
          {roadmap.stages.map((stage) => (
            <AccordionItem value={stage.id} key={stage.id}>
              <AccordionTrigger className="text-xl font-bold">{stage.title}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">{stage.summary}</p>
                {stage.steps.map((step) => (
                  <div key={step.id} className="p-4 mb-4 border rounded-lg">
                    <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <Badge variant={step.type === 'Project' ? 'destructive' : 'default'}>{step.type}</Badge>
                        <div className="flex items-center gap-1">
                            <BarChart className="w-4 h-4"/>
                            {step.difficulty}
                        </div>
                        {step.estimatedHoursMin && 
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4"/>
                                {`${step.estimatedHoursMin} - ${step.estimatedHoursMax} hours`}
                            </div>
                        }
                    </div>
                    <h5 className="font-semibold mb-2">Resources:</h5>
                    <ul className="list-none p-0">
                      {step.resources.map((resource) => (
                        <li key={resource.id} className="mb-2">
                          <a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                            {resource.type === 'Video' && <Youtube className="w-4 h-4"/>}
                            {resource.type === 'Article' && <FileText className="w-4 h-4"/>}
                            {resource.type === 'Repo' && <Github className="w-4 h-4"/>}
                            {resource.type === 'Course' && <GraduationCap className="w-4 h-4"/>}
                            {resource.type === 'Exercise' && <Briefcase className="w-4 h-4"/>}
                            {resource.title}
                            <LinkIcon className="w-3 h-3" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
