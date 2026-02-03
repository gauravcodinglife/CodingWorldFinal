import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const caseStudyLevels = [
  {
    title: "Beginner Case Studies",
    description: "Step-by-step walkthroughs of the most frequently asked questions for intern, fresher, and junior interviews.",
    href: "/interview-prep/system-design/case-studies/beginner",
  },
  {
    title: "Intermediate Case Studies",
    description: "Dive into product-level thinking and understand how to design for scale, data flow, and more.",
    href: "/interview-prep/system-design/case-studies/intermediate",
  },
  {
    title: "Advanced / FAANG-Level Designs",
    description: "Explore complex, large-scale system designs that are common in senior-level interviews.",
    href: "/interview-prep/system-design/case-studies/advanced",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">System Design Case Studies</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Learn how to apply system design concepts to real-world problems.
        </p>
      </div>
      <div className="grid md:grid-cols-1 gap-8">
        {caseStudyLevels.map((level) => (
          <Link href={level.href} key={level.title}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{level.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{level.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
