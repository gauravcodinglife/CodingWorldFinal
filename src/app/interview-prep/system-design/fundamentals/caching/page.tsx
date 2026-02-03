import { CodeBlock } from "@/components/ui/code-block";

export default function CachingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Caching (Redis, CDN, cache-aside)</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">Definition</h2>
        <p>
          Caching is the process of storing copies of files or data in a temporary storage location (a cache) so that they can be accessed more quickly. The goal of caching is to reduce the time it takes to access data, which can significantly improve the performance of a system.
        </p>
        <ul className="list-disc list-inside">
          <li><strong>Redis:</strong> An in-memory data store that can be used as a database, cache, and message broker.</li>
          <li><strong>CDN (Content Delivery Network):</strong> A geographically distributed network of proxy servers and their data centers. CDNs are used to deliver content more quickly to users by serving it from a location that is closer to them.</li>
          <li><strong>Cache-aside (Lazy Loading):</strong> A caching strategy where the application is responsible for loading data into the cache. When a request for data is made, the application first checks the cache. If the data is not in the cache, the application retrieves it from the database and stores it in the cache for future use.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mt-8">Why is it Needed?</h2>
        <p>
          Databases can be slow, and accessing them for every request can create a bottleneck. Caching is a powerful technique for improving performance by reducing the number of database queries. It can also reduce the load on the database, making the entire system more scalable.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Real-World Example</h2>
        <p>
          When you visit a news website, the articles you see are likely cached. This means that the website doesn't have to query the database every time a user wants to read an article. Instead, it can serve the article from a cache, which is much faster. Social media sites also heavily use caching for user profiles, posts, and comments.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">Interview Questions</h2>
        <ul className="list-disc list-inside">
          <li>What are the different caching strategies (e.g., cache-aside, write-through, write-back)?</li>
          <li>What is the difference between Redis and Memcached?</li>
          <li>How do you handle cache invalidation?</li>
          <li>Where would you use a CDN?</li>
        </ul>
      </div>
    </div>
  );
}
