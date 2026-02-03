import { CodeBlock } from "@/components/ui/code-block";

export default function ShardingVsReplicationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Sharding vs. Replication</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">Definition</h2>
        <ul className="list-disc list-inside">
          <li><strong>Sharding (or Partitioning):</strong> The process of splitting a large database into smaller, more manageable pieces called shards. Each shard has the same schema, but a different subset of the data. Sharding is a form of horizontal scaling.</li>
          <li><strong>Replication:</strong> The process of making multiple copies of a database. This can be done to improve availability, reliability, and read throughput.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mt-8">Why is it Needed?</h2>
        <p>
          As a database grows, it can become a bottleneck. Sharding helps to distribute the data and the load across multiple servers, improving write performance and scalability. Replication, on the other hand, is used to improve read performance and to ensure that the system remains available even if one of the database servers fails.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Real-World Example</h2>
        <p>
          A large social media platform might shard its user database by region. This means that all the users from a particular region are stored on the same shard. They would also replicate each shard to ensure that if one server fails, another one can take over.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Interview Questions</h2>
        <ul className="list-disc list-inside">
          <li>What is the difference between sharding and replication?</li>
          <li>What are the different sharding strategies? (e.g., range-based, hash-based, directory-based)</li>
          <li>What are the challenges of sharding? (e.g., shard rebalancing, cross-shard queries)</li>
          <li>When would you use sharding, and when would you use replication?</li>
        </ul>
      </div>
    </div>
  );
}
