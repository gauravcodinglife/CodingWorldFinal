import { CodeBlock } from "@/components/ui/code-block";

export default function ScalabilityPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Scalability (Vertical vs. Horizontal)</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">Definition</h2>
        <p>
          Scalability is the property of a system to handle a growing amount of work by adding resources to the system. There are two main ways to scale a system:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Vertical Scaling (Scaling Up):</strong> This involves adding more resources to a single server, such as a more powerful CPU, more RAM, or a faster storage system.</li>
          <li><strong>Horizontal Scaling (Scaling Out):</strong> This involves adding more servers to the system and distributing the load across them.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mt-8">Why is it Needed?</h2>
        <p>
          As the number of users and the amount of data grows, a system needs to be able to handle the increased load without a drop in performance. Scalability ensures that the system can grow to meet the demand, providing a good user experience.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Real-World Example</h2>
        <p>
          A small startup might start with a single server (vertical scaling). As the user base grows, they might add more powerful components to that server. However, if the startup becomes very popular, they will likely need to switch to horizontal scaling, adding more servers to a cluster to handle the massive traffic.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Interview Questions</h2>
        <ul className="list-disc list-inside">
          <li>What are the pros and cons of vertical and horizontal scaling?</li>
          <li>When would you choose one over the other?</li>
          <li>How do you design a system that is horizontally scalable?</li>
        </ul>
      </div>
    </div>
  );
}
