import { CodeBlock } from "@/components/ui/code-block";

export default function CapTheoremPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">CAP Theorem</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">Definition</h2>
        <p>
          The CAP theorem, also known as Brewer's theorem, states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Consistency:</strong> Every read receives the most recent write or an error.</li>
          <li><strong>Availability:</strong> Every request receives a (non-error) response, without the guarantee that it contains the most recent write.</li>
          <li><strong>Partition Tolerance:</strong> The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mt-8">Why is it Needed?</h2>
        <p>
          In the real world of distributed systems, network partitions are a fact of life. The CAP theorem is a critical concept because it forces system designers to make a trade-off between consistency and availability when a network partition occurs. Understanding this trade-off is fundamental to designing distributed systems.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Real-World Example</h2>
        <p>
          When you design a distributed database, you have to choose between consistency and availability. For example, a system like a relational database (e.g., CockroachDB) might choose consistency over availability (a CP system). In contrast, a NoSQL database like Cassandra or DynamoDB might choose availability over consistency (an AP system).
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Interview Questions</h2>
        <ul className="list-disc list-inside">
          <li>Explain the CAP theorem in your own words.</li>
          <li>Give an example of a CP, AP, and CA system. Why is a CA system not possible in a distributed environment?</li>
          <li>Which two guarantees of the CAP theorem would you choose for a banking application? Why?</li>
        </ul>
      </div>
    </div>
  );
}
