import { LucideIcon, Code, Database, Wind, Cloudy } from 'lucide-react';

export interface Roadmap {
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Frontend' | 'Backend' | 'DevOps' | 'Data';
  duration: '1–2 weeks' | '1 month' | '2–3 months' | '3+ months';
  icon: React.ReactElement<LucideIcon>;
  status?: 'New';
}

export const roadmaps: Roadmap[] = [
  {
    title: 'React Frontend',
    description: 'Master the fundamentals of React and build modern, interactive web applications.',
    level: 'Beginner',
    category: 'Frontend',
    duration: '1 month',
    icon: <Code className="w-8 h-8 text-primary" />,
    status: 'New',
  },
  {
    title: 'Node.js Backend',
    description: 'Learn how to build scalable and efficient backend services with Node.js and Express.',
    level: 'Intermediate',
    category: 'Backend',
    duration: '2–3 months',
    icon: <Database className="w-8 h-8 text-primary" />,
  },
  {
    title: 'DevOps Fundamentals',
    description: 'Understand the core principles of DevOps and learn how to automate your development process.',
    level: 'Beginner',
    category: 'DevOps',
    duration: '1–2 weeks',
    icon: <Wind className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Data Science with Python',
    description: 'A comprehensive guide to data analysis and machine learning using Python.',
    level: 'Advanced',
    category: 'Data',
    duration: '3+ months',
    icon: <Cloudy className="w-8 h-8 text-primary" />,
    status: 'New',
  },
];
