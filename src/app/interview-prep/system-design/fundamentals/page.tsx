import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const fundamentals = [
  { title: "What is System Design?", href: "/interview-prep/system-design/fundamentals/what-is-system-design" },
  { title: "Scalability (Vertical vs. Horizontal)", href: "/interview-prep/system-design/fundamentals/scalability" },
  { title: "Availability vs. Reliability", href: "/interview-prep/system-design/fundamentals/availability-vs-reliability" },
  { title: "Latency vs. Throughput", href: "/interview-prep/system-design/fundamentals/latency-vs-throughput" },
  { title: "CAP Theorem", href: "/interview-prep/system-design/fundamentals/cap-theorem" },
  { title: "Load Balancer & Reverse Proxy", href: "/interview-prep/system-design/fundamentals/load-balancer-and-reverse-proxy" },
  { title: "Caching (Redis, CDN, cache-aside)", href: "/interview-prep/system-design/fundamentals/caching" },
  { title: "Database Indexing", href: "/interview-prep/system-design/fundamentals/database-indexing" },
  { title: "Sharding vs. Replication", href: "/interview-prep/system-design/fundamentals/sharding-vs-replication" },
  { title: "Message Queues (Kafka/RabbitMQ basics)", href: "/interview-prep/system-design/fundamentals/message-queues" },
  { title: "Rate Limiting", href: "/interview-prep/system-design/fundamentals/rate-limiting" },
  { title: "Consistent Hashing", href: "/interview-prep/system-design/fundamentals/consistent-hashing" },
];

export default function SystemDesignFundamentalsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          System Design Fundamentals
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          These are the core concepts you should master before tackling any case study.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fundamentals.map((item) => (
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
