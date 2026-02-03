import { CodeBlock } from "@/components/ui/code-block";

export default function WhatIsSystemDesignPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">What is System Design?</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">Definition</h2>
        <p>
          System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements. It is the process of creating a blueprint for a system that can be used by developers to build the system.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Why is it Needed?</h2>
        <p>
          System design is crucial for building scalable, reliable, and maintainable systems. Without a proper design, a system can become difficult to manage, hard to scale, and prone to failures. A good system design ensures that the system is:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Scalable:</strong> Can handle a growing amount of work by adding resources to the system.</li>
          <li><strong>Reliable:</strong> Continues to function correctly over time, even in the face of failures.</li>
          <li><strong>Available:</strong> Is ready to use when needed.</li>
          <li><strong>Maintainable:</strong> Can be easily modified to add new features or fix bugs.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mt-8">Diagram</h2>
        <p>A high-level system design diagram typically includes the following components:</p>
        <div className="flex justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Client-server-model.svg/1200px-Client-server-model.svg.png" alt="System Design Diagram" className="w-full max-w-2xl" />
        </div>

        <h2 className="font-headline text-3xl font-bold mt-8">Real-World Example</h2>
        <p>
          Consider a simple e-commerce website. A system design for this website would include defining the components for handling user authentication, product catalog, shopping cart, and order processing. It would also involve choosing the right database, caching strategy, and load balancing to ensure that the website can handle a large number of users and transactions.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Interview Questions</h2>
        <ul className="list-disc list-inside">
          <li>What is the difference between monolithic and microservices architecture?</li>
          <li>How would you design a system that can handle 1 million concurrent users?</li>
          <li>What are the trade-offs between consistency and availability?</li>
        </ul>
      </div>
    </div>
  );
}
