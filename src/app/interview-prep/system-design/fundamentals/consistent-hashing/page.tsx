import { CodeBlock } from "@/components/ui/code-block";

export default function ConsistentHashingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Consistent Hashing</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">Definition</h2>
        <p>
          Consistent hashing is a special kind of hashing that minimizes the number of keys that need to be remapped when a hash table is resized. It's a technique that is commonly used in distributed systems to keep the load on the servers as balanced as possible.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Why is it Needed?</h2>
        <p>
          In a distributed system, servers can be added or removed at any time. When this happens, you need a way to redistribute the data without having to move everything. Consistent hashing is a clever way to do this that minimizes the amount of data that needs to be moved.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Real-World Example</h2>
        <p>
          Consistent hashing is used in many distributed systems, including Amazon's DynamoDB and Apache Cassandra. It's also used in load balancers to distribute requests across a cluster of servers.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Interview Questions</h2>
        <ul className="list-disc list-inside">
          <li>What is consistent hashing and how does it work?</li>
          <li>What are the advantages of consistent hashing over traditional hashing?</li>
          <li>How do you handle hotspots in a consistent hashing ring?</li>
          <li>How would you implement consistent hashing?</li>
        </ul>
      </div>
    </div>
  );
}
