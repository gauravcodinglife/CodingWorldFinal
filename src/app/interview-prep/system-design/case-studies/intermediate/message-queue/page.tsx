import { CodeBlock } from "@/components/ui/code-block";

export default function MessageQueuePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Design a Distributed Message Queue</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">1. Requirements and Goals of the System</h2>
        <p>
          We need to design a distributed message queue that allows different parts of a system to communicate with each other in a decoupled and asynchronous way.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Functional Requirements:</h3>
        <ul className="list-disc list-inside">
          <li>Producers can send messages to a queue.</li>
          <li>Consumers can receive messages from a queue.</li>
          <li>Messages should be durable and not lost in case of a server failure.</li>
          <li>The system should support multiple queues.</li>
        </ul>
        <h3 className="font-headline text-2xl font-bold mt-4">Non-Functional Requirements:</h3>
        <ul className="list-disc list-inside">
          <li><strong>High Availability:</strong> The message queue should be highly available.</li>
          <li><strong>High Throughput:</strong> The message queue should be able to handle a large number of messages.</li>
          <li><strong>Scalability:</strong> The message queue should be horizontally scalable.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mt-8">2. High-Level Design</h2>
        <p>
          We can use a distributed architecture to build our message queue. We can have a cluster of servers that work together to store and deliver messages.
        </p>
        <div className="flex justify-center">
          {/* Placeholder for a diagram */}
          <img src="/placeholder.svg" alt="High-Level Design" className="w-full max-w-2xl" />
        </div>

        <h2 className="font-headline text-3xl font-bold mt-8">3. Deep Dive</h2>
        <p>
          Let's take a closer look at the different components of our message queue.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Message Storage:</h3>
        <p>
          We can use a distributed file system like HDFS or a distributed database like Cassandra to store the messages. We need to replicate the messages across multiple servers to ensure durability.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Message Delivery:</h3>
        <p>
          We need a way to keep track of which messages have been delivered to which consumers. We can use a consensus algorithm like Paxos or Raft to ensure that all the servers in the cluster agree on the state of the message queue.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">4. Putting It All Together</h2>
        <p>
          Producers send messages to a specific topic. The message queue stores the messages for that topic in a partitioned and replicated way. Consumers can subscribe to a topic and receive messages from it.
        </p>
        <div className="flex justify-center">
          {/* Placeholder for a diagram */}
          <img src="/placeholder.svg" alt="Final Architecture" className="w-full max-w-2xl" />
        </div>
      </div>
    </div>
  );
}
