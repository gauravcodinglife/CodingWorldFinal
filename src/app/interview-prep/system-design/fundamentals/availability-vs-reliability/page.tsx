import { CodeBlock } from "@/components/ui/code-block";

export default function AvailabilityVsReliabilityPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Availability vs. Reliability</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">Definition</h2>
        <p>
          While often used interchangeably, availability and reliability represent different aspects of a system's performance:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Availability:</strong> The percentage of time that a system is operational and able to respond to requests. It is often measured in "nines" (e.g., 99.9% or "three nines" of availability).</li>
          <li><strong>Reliability:</strong> The probability that a system will perform its intended function without failure for a specified period. It's about being failure-free.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mt-8">Why is it Needed?</h2>
        <p>
          Understanding the distinction is crucial for designing systems that meet user expectations and business goals. A system can be reliable but not available (e.g., down for maintenance), or available but not reliable (e.g., frequently returns errors).
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Real-World Example</h2>
        <p>
          An ATM is a good example. If it's working correctly and dispensing cash, it's reliable. If it's also accessible and not out of service, it's available. A bank might schedule maintenance for its ATMs (making them unavailable) to ensure they remain reliable.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Interview Questions</h2>
        <ul className="list-disc list-inside">
          <li>Can a system be reliable but not available? Give an example.</li>
          <li>How can you increase the availability of a system?</li>
          <li>How do you measure availability and reliability?</li>
        </ul>
      </div>
    </div>
  );
}
