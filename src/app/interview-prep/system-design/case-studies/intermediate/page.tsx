import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const intermediateCaseStudies = [
  { title: "Design a Yelp-like Service", href: "/interview-prep/system-design/case-studies/intermediate/yelp" },
  { title: "Design a Distributed Message Queue", href: "/interview-prep/system-design/case-studies/intermediate/message-queue" },
];

export default function IntermediateCaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Intermediate Case Studies</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          These case studies will help you practice designing more complex systems.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {intermediateCaseStudies.map((item) => (
          <Link href={item.href} key={item.title}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{item.title}</CardTitle>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
