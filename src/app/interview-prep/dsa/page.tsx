
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const arrayPatterns = [
  {
    title: "Two Pointer Pattern",
    description: "A pattern for problems involving pairs in sorted arrays.",
    href: "/interview-prep/dsa/two-pointer",
  },
  {
    title: "Sliding Window Pattern",
    description: "A pattern for problems involving longest/shortest substrings or subarrays.",
    href: "/interview-prep/dsa/sliding-window",
  },
  {
    title: "Prefix Sum Pattern",
    description: "A pattern for problems involving contiguous sums.",
    href: "/interview-prep/dsa/prefix-sum",
  },
  {
    title: "Kadane's Algorithm",
    description: "A pattern for finding the maximum subarray sum.",
    href: "/interview-prep/dsa/kadanes-algorithm",
  },
];

export default function DSAPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Data Structures & Algorithms
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Master common DSA patterns to ace your interviews.
        </p>
      </div>

      <div>
        <h2 className="font-headline text-3xl font-bold mb-4">Arrays</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {arrayPatterns.map((pattern) => (
            <Link href={pattern.href} key={pattern.title}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">
                    {pattern.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{pattern.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
