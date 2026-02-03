import { CodeBlock } from "@/components/ui/code-block";

export default function UrlShortenerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Design a URL Shortener (TinyURL)</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">1. Requirements and Goals of the System</h2>
        <p>
          We need to design a URL shortener service that takes a long URL and generates a unique, shorter alias for it. The service should also redirect users from the short URL to the original long URL.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Functional Requirements:</h3>
        <ul className="list-disc list-inside">
          <li>Users should be able to input a long URL and get a short URL.</li>
          <li>When a user accesses a short URL, they should be redirected to the original long URL.</li>
        </ul>
        <h3 className="font-headline text-2xl font-bold mt-4">Non-Functional Requirements:</h3>
        <ul className="list-disc list-inside">
          <li><strong>High Availability:</strong> The service should be highly available.</li>
          <li><strong>Low Latency:</strong> The redirection should be fast.</li>
          <li><strong>Scalability:</strong> The service should be able to handle a large number of URLs and redirection requests.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mt-8">2. High-Level Design</h2>
        <p>
          At a high level, we need a way to generate a unique short URL for each long URL and store the mapping between them. A simple approach is to use a hash function to generate a short key from the long URL.
        </p>
        <div className="flex justify-center">
          {/* Placeholder for a diagram */}
          <img src="/placeholder.svg" alt="High-Level Design" className="w-full max-w-2xl" />
        </div>

        <h2 className="font-headline text-3xl font-bold mt-8">3. Deep Dive</h2>
        <p>
          Let's refine our design. A single server and database can be a single point of failure. We can use a load balancer to distribute traffic across multiple servers and a distributed database to store the URL mappings.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Short URL Generation:</h3>
        <p>
          Instead of a simple hash, we can use a more sophisticated approach. We can have a counter that generates a unique ID for each new URL. This ID can then be converted to a base62 string, which will be our short URL.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Database Schema:</h3>
        <p>
          We need a simple table to store the mapping between the short URL and the long URL.
        </p>
        <CodeBlock code={`
          CREATE TABLE url_mappings (
            short_url VARCHAR(10) PRIMARY KEY,
            long_url TEXT NOT NULL
          );
        `} />

        <h2 className="font-headline text-3xl font-bold mt-8">4. Putting It All Together</h2>
        <p>
          Here is the final architecture:
        </p>
        <div className="flex justify-center">
          {/* Placeholder for a diagram */}
          <img src="/placeholder.svg" alt="Final Architecture" className="w-full max-w-2xl" />
        </div>
        <p className="mt-4">
          The flow is as follows:
        </p>
        <ol className="list-decimal list-inside">
          <li>The user sends a request to shorten a long URL.</li>
          <li>The request goes to the load balancer, which forwards it to one of the web servers.</li>
          <li>The web server generates a unique ID, converts it to a short URL, and stores the mapping in the database.</li>
          <li>When a user accesses a short URL, the load balancer forwards the request to a web server.</li>
          <li>The web server retrieves the long URL from the database and redirects the user.</li>
        </ol>
      </div>
    </div>
  );
}
