import { CodeBlock } from "@/components/ui/code-block";

export default function WebCrawlerPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Design a Distributed Web Crawler</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">1. Requirements and Goals of the System</h2>
        <p>
          We need to design a distributed web crawler that can crawl the web, starting from a set of seed URLs. The crawler should be scalable, robust, and polite.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Functional Requirements:</h3>
        <ul className="list-disc list-inside">
          <li>Crawl the web and download web pages.</li>
          <li>Extract links from the downloaded pages and add them to the list of URLs to crawl.</li>
          <li>Store the content of the crawled pages.</li>
        </ul>
        <h3 className="font-headline text-2xl font-bold mt-4">Non-Functional Requirements:</h3>
        <ul className="list-disc list-inside">
          <li><strong>Scalability:</strong> The crawler should be able to crawl a large number of pages.</li>
          <li><strong>Robustness:</strong> The crawler should be resilient to failures.</li>
          <li><strong>Politeness:</strong> The crawler should not overload the servers it is crawling.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mt-8">2. High-Level Design</h2>
        <p>
          We can use a distributed architecture with multiple crawler nodes. A central service, the URL Frontier, will manage the URLs to be crawled. The crawler nodes will fetch URLs from the URL Frontier, download the pages, and extract the links.
        </p>
        <div className="flex justify-center">
          {/* Placeholder for a diagram */}
          <img src="/placeholder.svg" alt="High-Level Design" className="w-full max-w-2xl" />
        </div>

        <h2 className="font-headline text-3xl font-bold mt-8">3. Deep Dive</h2>
        <p>
          Let's take a closer look at the different components.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">URL Frontier:</h3>
        <p>
          The URL Frontier is responsible for storing the URLs to be crawled. It also prioritizes the URLs and ensures that we are not crawling the same page multiple times.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Crawler Nodes:</h3>
        <p>
          The crawler nodes are responsible for downloading the web pages. They need to be polite and respect the `robots.txt` file of the websites they are crawling.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Content Storage:</h3>
        <p>
          We can use a distributed file system like HDFS or a NoSQL database like Cassandra to store the downloaded web pages.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">4. Putting It All Together</h2>
        <p>
          The crawler starts with a set of seed URLs. The URL Frontier distributes the URLs to the crawler nodes. The crawler nodes download the pages, extract the links, and send them back to the URL Frontier. The downloaded content is stored in a distributed storage system.
        </p>
        <div className="flex justify-center">
          {/* Placeholder for a diagram */}
          <img src="/placeholder.svg" alt="Final Architecture" className="w-full max-w-2xl" />
        </div>
      </div>
    </div>
  );
}
