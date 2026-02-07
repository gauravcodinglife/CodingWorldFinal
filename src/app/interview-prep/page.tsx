import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Code, Terminal, Building, Compass } from "lucide-react";
import Link from "next/link";

const interviewTopics = [
  {
    title: "Data Structures & Algorithms",
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    description: "Practice common data structures and algorithms questions.",
    href: "/interview-prep/dsa",
  },
  {
    title: "System Design",
    icon: <Code className="w-8 h-8 text-primary" />,
    description: "Learn how to design scalable and reliable systems.",
    href: "/interview-prep/system-design",
  },
  {
    title: "Behavioral Questions",
    icon: <Terminal className="w-8 h-8 text-primary" />,
    description: "Prepare for behavioral questions and showcase your soft skills.",
    href: "/interview-prep/behavioral",
  },
];

const companyWiseTopics = [
  {
    title: "Google",
    icon: <Building className="w-8 h-8 text-primary" />,
    description: "Asked DSA patterns, System design asked, Behavioral style, Difficulty trend.",
    href: "/interview-prep/company-wise/google",
  },
  {
    title: "Amazon",
    icon: <Building className="w-8 h-8 text-primary" />,
    description: "Asked DSA patterns, System design asked, Behavioral style, Difficulty trend.",
    href: "/interview-prep/company-wise/amazon",
  },
  {
    title: "Microsoft",
    icon: <Building className="w-8 h-8 text-primary" />,
    description: "Asked DSA patterns, System design asked, Behavioral style, Difficulty trend.",
    href: "/interview-prep/company-wise/microsoft",
  },
    {
    title: "Flipkart",
    icon: <Building className="w-8 h-8 text-primary" />,
    description: "Asked DSA patterns, System design asked, Behavioral style, Difficulty trend.",
    href: "/interview-prep/company-wise/flipkart",
  },
      {
    title: "Startups",
    icon: <Building className="w-8 h-8 text-primary" />,
    description: "Asked DSA patterns, System design asked, Behavioral style, Difficulty trend.",
    href: "/interview-prep/company-wise/startups",
  },
];

const interviewRoadmap = {
    title: "Interview Roadmap (Step-by-step plan)",
    icon: <Compass className="w-8 h-8 text-primary" />,
    description: "30 Days to Interview Ready",
    href: "/interview-prep/roadmap",
}

export default function InterviewPrepPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Interview Prep
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Ace your next technical interview with our comprehensive interview prep modules.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {interviewTopics.map((topic) => (
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
        <div className="text-center mt-16 mb-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          Prepare by Company
        </h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Insanely attractive company-wise interview preparation.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {companyWiseTopics.map((topic) => (
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
      <div className="text-center mt-16 mb-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          Interview Roadmap
        </h2>
         <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          “30 Days to Interview Ready”
        </p>
      </div>
       <div className="grid md:grid-cols-1 gap-8">
       <Link href={interviewRoadmap.href} key={interviewRoadmap.title}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {interviewRoadmap.icon}
                  <CardTitle className="font-headline text-2xl">
                   🧭 8) {interviewRoadmap.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{interviewRoadmap.description}</p>
              </CardContent>
            </Card>
          </Link>
       </div>
    </div>
  );
}
