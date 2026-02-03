import { CodeBlock } from "@/components/ui/code-block";

export default function MessageQueuesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Message Queues (Kafka/RabbitMQ basics)</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">Definition</h2>
        <p>
          A message queue is a form of asynchronous service-to-service communication used in serverless and microservices architectures. Messages are stored on the queue until they are processed and deleted. Each message is processed only once, by a single consumer.
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Kafka:</strong> A distributed streaming platform that is used for building real-time data pipelines and streaming apps. It is known for its high throughput and scalability.</li>
          <li><strong>RabbitMQ:</strong> A traditional message broker that is used for a wide variety of messaging scenarios. It is known for its flexibility and ease of use.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mt-8">Why is it Needed?</h2>
        <p>
          Message queues are a key component of many modern architectures. They allow different parts of a system to communicate with each other in a decoupled and asynchronous way. This can improve performance, reliability, and scalability.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Real-World Example</h2>
        <p>
          When you place an order on an e-commerce website, the order processing is often handled by a message queue. The order is placed on a queue, and a separate service picks it up and processes it. This ensures that the user doesn't have to wait for the order to be processed before they can continue browsing the website.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Interview Questions</h2>
        <ul className="list-disc list-inside">
          <li>What is a message queue and why is it useful?</li>
          <li>What is the difference between Kafka and RabbitMQ?</li>
          <li>What is the concept of a "dead letter queue"?</li>
          <li>How would you ensure that messages are processed in order?</li>
        </ul>
      </div>
    </div>
  );
}
