import { CodeBlock } from "@/components/ui/code-block";

export default function ProximityServicePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="prose max-w-none">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Design a Proximity Service (like Uber or Tinder)</h1>

        <h2 className="font-headline text-3xl font-bold mt-8">1. Requirements and Goals of the System</h2>
        <p>
          We need to design a proximity service that can find nearby points of interest (e.g., drivers for Uber, potential matches for Tinder) for a given user.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Functional Requirements:</h3>
        <ul className="list-disc list-inside">
          <li>Users should be able to update their location.</li>
          <li>Users should be able to find nearby points of interest based on their location.</li>
        </ul>
        <h3 className="font-headline text-2xl font-bold mt-4">Non-Functional Requirements:</h3>
        <ul className="list-disc list-inside">
          <li><strong>High Availability:</strong> The service should be highly available.</li>
          <li><strong>Low Latency:</strong> The service should return nearby points of interest quickly.</li>
          <li><strong>Scalability:</strong> The service should be able to handle a large number of users and locations.</li>
        </ul>

        <h2 className="font-headline text-3xl font-bold mt-8">2. High-Level Design</h2>
        <p>
          We need a way to efficiently store and query the locations of the points of interest. A simple approach is to use a database and index the locations using a spatial index, such as a quadtree or a geohash.
        </p>
        <div className="flex justify-center">
          {/* Placeholder for a diagram */}
          <img src="/placeholder.svg" alt="High-Level Design" className="w-full max-w-2xl" />
        </div>

        <h2 className="font-headline text-3xl font-bold mt-8">3. Deep Dive</h2>
        <p>
          Let's take a closer look at how we can use a quadtree to store and query the locations.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Quadtree:</h3>
        <p>
          A quadtree is a tree data structure in which each internal node has exactly four children. Quadtrees are most often used to partition a two-dimensional space by recursively subdividing it into four quadrants or regions.
        </p>
        <h3 className="font-headline text-2xl font-bold mt-4">Geohash:</h3>
        <p>
          Geohash is a public domain geocoding system invented by Gustavo Niemeyer which encodes a geographic location into a short string of letters and digits. It is a hierarchical spatial data structure which subdivides space into a grid of rectangular cells.
        </p>

        <h2 className="font-headline text-3xl font-bold mt-8">4. Putting It All Together</h2>
        <p>
          When a user updates their location, we update the corresponding quadtree or geohash. When a user requests nearby points of interest, we query the quadtree or geohash to find the points of interest in the user's vicinity.
        </p>
        <div className="flex justify-center">
          {/* Placeholder for a diagram */}
          <img src="/placeholder.svg" alt="Final Architecture" className="w-full max-w-2xl" />
        </div>
      </div>
    </div>
  );
}
