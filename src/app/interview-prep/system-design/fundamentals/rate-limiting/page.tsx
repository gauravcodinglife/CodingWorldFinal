import { CodeBlock } from "@/components/ui/code-block";

export default function RateLimitingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Rate Limiting</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">Definition</h2>
        <p>
          Rate limiting is a strategy for limiting network traffic. It's used to control the amount of incoming and outgoing traffic to or from a network. Rate limiting is a crucial mechanism for protecting your services from being overwhelmed by too many requests, whether malicious or unintentional.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Why is it Needed?</h2>
        <p>
          Rate limiting is essential for a number of reasons:
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Preventing abuse:</strong> It can prevent malicious actors from overwhelming your service with requests (DDoS attacks).</li>
          <li><strong>Ensuring fair usage:</strong> It can ensure that all users have fair access to your service.</li>
          <li><strong>Controlling costs:</strong> It can help to control costs by limiting the amount of resources that your service consumes.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mt-8">Real-World Example</h2>
        <p>
          Many APIs have rate limits. For example, the Twitter API limits the number of requests that you can make in a 15-minute window. This prevents developers from abusing the API and ensures that it remains available for all users.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Interview Questions</h2>
        <ul className="list-disc list-inside">
          <li>What is rate limiting and why is it important?</li>
          <li>What are some common rate limiting algorithms? (e.g., Token Bucket, Leaky Bucket, Fixed Window Counter, Sliding Window Log)</li>
          <li>How would you design a rate limiter?</li>
          <li>Where would you implement rate limiting in your system? (e.g., API gateway, load balancer, application code)</li>
        </ul>
      </div>
    </div>
  );
}
