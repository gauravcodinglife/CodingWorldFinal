
'use client';

import { roadmapsData, Roadmap } from '@/lib/roadmaps-data';
import { useParams } from 'next/navigation';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, BarChart, Target, BookOpen, Link as LinkIcon, FileText, Youtube, Github, Briefcase, GraduationCap, AlertCircle, CheckCircle, Info, Wrench, Star } from "lucide-react";

export default function RoadmapPage() {
  const params = useParams();
  const roadmap = roadmapsData.find(r => r.slug === params.slug);

  if (!roadmap) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-red-500">Roadmap not found</h1>
        <Button onClick={() => window.location.href='/roadmaps'} className="mt-4">Back to Roadmaps</Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">{roadmap.title}</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">{roadmap.longDescription}</p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-4 mb-12 text-sm text-muted-foreground">
        <div className="flex items-center gap-2"><BarChart className="w-4 h-4" /><span>{roadmap.level}</span></div>
        <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{roadmap.duration}</span></div>
        <div className="flex items-center gap-2"><Target className="w-4 h-4" /><span>{roadmap.outcome}</span></div>
      </div>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Info className="w-6 h-6 text-primary"/>Prerequisites</h2>
          <ul className="list-none p-0">
            {roadmap.prerequisites.map((prereq, i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-md mb-2 bg-secondary/50">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <div><a href={prereq.url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">{prereq.text} <LinkIcon className="inline w-3 h-3" /></a></div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Wrench className="w-6 h-6 text-primary"/>Tools & Setup</h2>
          <ul className="list-none p-0">
            {roadmap.tools.map((tool, i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-md mb-2 bg-secondary/50">
                <Wrench className="w-5 h-5 text-blue-500 mt-1" />
                <div><a href={tool.url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">{tool.name} <LinkIcon className="inline w-3 h-3" /></a><p className="text-sm text-muted-foreground">{tool.description}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><BookOpen className="w-6 h-6 text-primary"/>Learning Modules</h2>
        <Accordion type="single" collapsible defaultValue="Module 1">
          {roadmap.modules.map((module, i) => (
            <AccordionItem value={module.title} key={i}>
              <AccordionTrigger className="text-xl font-bold">{module.title}</AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-lg mb-2">Key Topics:</h4>
                    <ul className="list-disc pl-5 text-muted-foreground">{module.topics.map((topic, j) => <li key={j}>{topic}</li>)}</ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Practice Tasks:</h4>
                    <ul className="list-disc pl-5 text-muted-foreground">{module.practice.map((task, j) => <li key={j}>{task}</li>)}</ul>
                  </div>
                </div>
                {module.project && (
                  <div className="mt-4 p-4 bg-secondary/50 rounded-lg">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Star className="w-5 h-5 text-yellow-500" />Mini Project: {module.project.title}</h4>
                    <p className="text-muted-foreground mb-2">{module.project.description}</p>
                    <ul className="list-disc pl-5 text-sm text-muted-foreground">{module.project.features.map((feature, j) => <li key={j}>{feature}</li>)}</ul>
                    {module.project.deployment && <p className="text-sm mt-2"><b>Deployment:</b> {module.project.deployment}</p>}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><Briefcase className="w-6 h-6 text-primary"/>Projects (Portfolio-Focused)</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">Mini Projects</h3>
            {roadmap.projects.mini.map((project, i) => (
              <div key={i} className="p-4 mb-4 border rounded-lg">
                <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground">{project.features.map((feature, j) => <li key={j}>{feature}</li>)}</ul>
                {project.deployment && <p className="text-sm mt-2"><b>Deployment:</b> {project.deployment}</p>}
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Capstone Projects</h3>
            {roadmap.projects.capstone.map((project, i) => (
              <div key={i} className="p-4 mb-4 border rounded-lg bg-secondary/50">
                <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-2">{project.description}</p>
                <ul className="list-disc pl-5 text-sm text-muted-foreground">{project.features.map((feature, j) => <li key={j}>{feature}</li>)}</ul>
                {project.deployment && <p className="text-sm mt-2"><b>Deployment:</b> {project.deployment}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><FileText className="w-6 h-6 text-primary"/>Resources</h2>
          <h3 className="text-lg font-bold mb-2">Official Documentation</h3>
          <ul className="list-none p-0">
            {roadmap.resources.officialDocs.map((resource, i) => (
                <li key={i} className="mb-2"><a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline"><LinkIcon className="w-4 h-4"/>{resource.title}</a></li>
            ))}
          </ul>
          <h3 className="text-lg font-bold mt-4 mb-2">YouTube Learning</h3>
          <ul className="list-none p-0">
            {roadmap.resources.youtube.map((resource, i) => (
                <li key={i} className="mb-2"><a href={resource.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline"><Youtube className="w-4 h-4"/>{resource.title}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><GraduationCap className="w-6 h-6 text-primary"/>Certifications</h2>
          <ul className="list-none p-0">
            {roadmap.certifications.map((cert, i) => (
              <li key={i} className="p-3 rounded-md mb-2 bg-secondary/50">
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">{cert.name} <LinkIcon className="inline w-3 h-3" /></a>
                <p className="text-sm text-muted-foreground">Provider: {cert.provider}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}
