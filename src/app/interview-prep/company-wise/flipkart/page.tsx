import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FlipkartInterviewPrepPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Flipkart Interview Prep
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          A detailed overview of what to expect in a Flipkart software engineering interview.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>DSA Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dynamic Programming:</strong> Frequently asked. Master common patterns like knapsack, coin change, and path on a grid.</li>
                <li><strong>Graphs & Trees:</strong> Expect problems on traversals, connectivity, shortest paths, and topological sort. Tree problems often involve BSTs, Tries, and Heaps.</li>
                <li><strong>Hashing and Heaps:</strong> Used extensively for counting, finding duplicates, and problems involving top K elements.</li>
                <li><strong>Arrays and Strings:</strong> Focus on two-pointer techniques, sliding window, and string manipulation algorithms.</li>
                <li><strong>Backtracking:</strong> Problems like N-Queens, Sudoku solver, and generating permutations/combinations are common.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Design</CardTitle>
          </CardHeader>
          <CardContent>
             <p className="mb-4">
              Flipkart's rounds are practical and focus on designing scalable e-commerce systems.
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>High-Level Design:</strong> Design core e-commerce services like the product catalog, order management, or inventory system.</li>
                <li><strong>Low-Level Design (Machine Coding):</strong> You will be asked to write clean, modular, and extensible code for a given problem in a limited time. This is a crucial round. Examples: designing a digital wallet, a simple logging framework, or a contest platform.</li>
                <li><strong>Scalability for Sales Events:</strong> How would you design a system to handle a massive surge in traffic during a flash sale like "Big Billion Days"? Discuss caching, message queues (Kafka), and database scaling.</li>
                <li><strong>Data Modeling:</strong> Be prepared to design SQL or NoSQL schemas for various services. Understand the trade-offs.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Behavioral Style</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Flipkart values a strong sense of ownership and the ability to work in a fast-paced, agile environment.
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Ownership and Bias for Action:</strong> Expect questions about times you took initiative to solve a problem without being asked.</li>
                <li><strong>Technical Deep Dives:</strong> Be ready to go deep into your past projects. Explain your architectural decisions and the challenges you faced.</li>
                <li><strong>Problem-Solving and Agility:</strong> How do you deal with ambiguity? How do you handle tight deadlines and shifting priorities?</li>
                <li><strong>Collaboration:</strong> Discuss experiences working in a team to deliver a complex project.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Difficulty Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consistently High:</strong> The difficulty has always been high, especially for SDE-2 and above.</li>
              <li><strong>Machine Coding Round is a Filter:</strong> Many candidates are eliminated in the machine coding round. It tests your ability to write production-ready code.</li>
              <li><strong>System Design is Key:</strong> For senior roles, the system design rounds are the most important. They expect practical, in-depth solutions.</li>
              <li><strong>Hiring Manager Round:</strong> This round focuses on your past experience, behavioral aspects, and your alignment with Flipkart's values.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
