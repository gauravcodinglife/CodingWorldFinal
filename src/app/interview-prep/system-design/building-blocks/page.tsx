import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const buildingBlocks = [
  { title: "Load Balancers", href: "/interview-prep/system-design/fundamentals/load-balancing" },
  { title: "Caching", href: "/interview-prep/system-design/fundamentals/caching" },
  { title: "Sharding vs. Replication", href: "/interview-prep/system-design/fundamentals/sharding-vs-replication" },
  { title: "Message Queues", href: "/interview-prep/system-design/fundamentals/message-queues" },
  { title: "Rate Limiting", href: "/interview-prep/system-design/fundamentals/rate-limiting" },
  { title: "Consistent Hashing", href: "/interview-prep/system-design/fundamentals/consistent-hashing" },
];

export default function BuildingBlocksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Building Blocks</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Reusable components for designing complex systems.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {buildingBlocks.map((item) => (
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
