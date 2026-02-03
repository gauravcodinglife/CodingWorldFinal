import { CodeBlock } from "@/components/ui/code-block";

export default function YelpPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Design a Yelp-like Service</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">1. Requirements and Goals of the System</h2>
        <p>
          We need to design a Yelp-like service that allows users to search for businesses, read and write reviews, and view business information.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Functional Requirements:</h3>
        <ul className="list-disc list-inside">
          <li>Users can search for businesses by name, location, and category.</li>
          <li>Users can view detailed information about a business, including its address, phone number, hours of operation, and reviews.</li>
          <li>Users can add new businesses to the system.</li>
          <li>Users can write reviews for businesses and rate them on a scale of 1 to 5.</li>
        </ul>
        <h3 className="font-headline text-2xl font-bold mt-4">Non-Functional Requirements:</h3>
        <ul className="list-disc list-inside">
          <li><strong>High Availability:</strong> The service should be highly available.</li>
          <li><strong>Low Latency:</strong> Search results and business information should be returned quickly.</li>
          <li><strong>Scalability:</strong> The service should be able to handle a large number of businesses, reviews, and users.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mt-8">2. High-Level Design</h2>
        <p>
          We can use a microservices architecture to build our Yelp-like service. We can have separate services for handling business information, reviews, and search.
        </p>
        <div className="flex justify-center">
          {/* Placeholder for a diagram */}
          <img src="/placeholder.svg" alt="High-Level Design" className="w-full max-w-2xl" />
        </div>

        <h2 className="font-headline text-3xl font-bold mt-8">3. Deep Dive</h2>
        <p>
          Let's take a closer look at the different services.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Business Service:</h3>
        <p>
          This service is responsible for storing and retrieving business information. We can use a relational database to store the business data.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Review Service:</h3>
        <p>
          This service is responsible for storing and retrieving reviews. We can use a NoSQL database like Cassandra to store the reviews, as they are write-heavy.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Search Service:</h3>
        <p>
          This service is responsible for searching for businesses. We can use a search engine like Elasticsearch to power our search functionality.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">4. Putting It All Together</h2>
        <p>
          The user interacts with the service through a web or mobile application. The application communicates with an API gateway, which routes requests to the appropriate microservice.
        </p>
        <div className="flex justify-center">
          {/* Placeholder for a diagram */}
          <img src="/placeholder.svg" alt="Final Architecture" className="w-full max-w-2xl" />
        </div>
      </div>
    </div>
  );
}
