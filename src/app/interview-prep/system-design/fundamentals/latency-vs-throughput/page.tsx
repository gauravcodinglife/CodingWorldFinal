import { CodeBlock } from "@/components/ui/code-block";

export default function LatencyVsThroughputPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Latency vs. Throughput</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">Definition</h2>
        <p>
          Latency and throughput are two key metrics for measuring the performance of a system:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Latency:</strong> The time it takes for a single request to be processed, from the moment it is sent to the moment the response is received. It is a measure of speed.</li>
          <li><strong>Throughput:</strong> The number of requests that a system can process in a given amount of time. It is a measure of capacity.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mt-8">Why is it Needed?</h2>
        <p>
          Optimizing for latency or throughput depends on the specific requirements of the system. For example, a real-time gaming application would prioritize low latency, while a batch processing system would prioritize high throughput. Understanding the trade-offs is essential for designing an efficient system.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Real-World Example</h2>
        <p>
          Imagine a highway. Latency is the time it takes for a single car to travel from one point to another. Throughput is the number of cars that can pass a certain point in an hour. You can have low latency but also low throughput (a single car on an empty highway) or high latency and high throughput (a traffic jam).
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Interview Questions</h2>
        <ul className="list-disc list-inside">
          <li>What is the relationship between latency and throughput?</li>
          <li>How can you improve the latency of a system?</li>
          <li>How can you improve the throughput of a system?</li>
          <li>Give an example of a system that prioritizes latency over throughput, and vice versa.</li>
        </ul>
      </div>
    </div>
  );
}
