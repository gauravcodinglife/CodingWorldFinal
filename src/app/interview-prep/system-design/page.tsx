import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Layers, Milestone } from "lucide-react";
import Link from "next/link";

const systemDesignTopics = [
  {
    title: "System Design Fundamentals",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    description: "Core concepts every interviewer expects you to know.",
    href: "/interview-prep/system-design/fundamentals",
  },
  {
    title: "Case Studies",
    icon: <Code className="w-8 h-8 text-primary" />,
    description: "Step-by-step walkthroughs of common interview problems.",
    href: "/interview-prep/system-design/case-studies",
  },
  {
    title: "Building Blocks",
    icon: <Layers className="w-8 h-8 text-primary" />,
    description: "Reusable components for designing complex systems.",
    href: "/interview-prep/system-design/building-blocks",
  },
  {
    title: "Interview Format",
    icon: <Milestone className="w-8 h-8 text-primary" />,
    description: "Learn how to answer system design questions effectively.",
    href: "/interview-prep/system-design/interview-format",
  },
];

export default function SystemDesignPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          System Design
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Learn how to design scalable, reliable, and efficient systems.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {systemDesignTopics.map((topic) => (
          <Link href={topic.href} key={topic.title}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {topic.icon}
                  <CardTitle className="font-headline text-2xl">
                    {topic.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{topic.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
