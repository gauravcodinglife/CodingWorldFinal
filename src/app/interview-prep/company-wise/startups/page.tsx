import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StartupsInterviewPrepPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Startups Interview Prep
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          A detailed overview of what to expect in a startup software engineering interview.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>DSA Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Core Data Structures:</strong> Focus on practical usage of Arrays, Strings, Hash Maps, Sets, and Linked Lists.</li>
              <li><strong>Trees & Graphs:</strong> Basic traversals (BFS, DFS) are common. Complex graph algorithms (Dijkstra's, A*) are rare unless relevant to the product (e.g., a mapping app).</li>
              <li><strong>Problem-Solving:</strong> Emphasis is on finding a working solution and then optimizing. Discussing trade-offs (time vs. space) is key.</li>
              <li><strong>Pragmatism over Theory:</strong> Expect questions like "How would you implement a 'follow' feature?" which can be solved with basic data structures.</li>
              <li><strong>Product-Context Problems:</strong> Questions are often framed around the startup's own business logic. Always clarify requirements.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Focus is on "0-to-1" design, pragmatism, and making smart trade-offs for speed and cost.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>MVP Design:</strong> Design the core features of their product. E.g., for a social media startup, design the user, post, and timeline services.</li>
              <li><strong>Tech Stack Choices:</strong> Justify your choices. Why use a NoSQL DB like MongoDB over a SQL DB like PostgreSQL? Why choose a specific framework?</li>
              <li><strong>Scalability & Cost:</strong> How would you handle the first 10,000 users? The first 1 million? Discuss simple scaling (e.g., vertical scaling, read replicas) before complex sharding.</li>
              <li><strong>Third-Party Integrations:</strong> Startups heavily use third-party services (e.g., Stripe for payments, AWS S3 for storage). Knowing when to build vs. buy is crucial.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Behavioral Style</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Cultural fit is often the most important factor. They want to know if you can thrive in a dynamic, and sometimes chaotic, environment.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Show Passion & Initiative:</strong> Research the startup. Have an opinion on their product. Ask thoughtful questions about their business and technical challenges.</li>
              <li><strong>"T-Shaped" People:</strong> Show you have deep expertise in one area (e.g., backend) but are willing to contribute to others (frontend, DevOps).</li>
              <li><strong>Ownership Mentality:</strong> Talk about a time you took a project from idea to completion, especially if you had to go beyond your job description.</li>
              <li><strong>Adaptability:</strong> Discuss how you handle changing priorities and ambiguity. Startups pivot, and you need to be comfortable with that.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Difficulty Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Varies by Stage:</strong>
                <ul className="list-['-_'] pl-6">
                  <li><strong>Seed/Early-stage:</strong> Focus on raw coding ability, problem-solving, and culture fit. The process is often faster and less structured.</li>
                  <li><strong>Series A/B/C:</strong> More structured process, often with dedicated system design and behavioral rounds. The bar for technical skills gets higher.</li>
                </ul>
              </li>
              <li><strong>Practical Focus:</strong> Difficulty comes from the need for practical, working code and sensible design choices, not from solving obscure algorithmic puzzles.</li>
              <li><strong>Hiring Manager Round is Key:</strong> This is often the final and most important step. They are assessing your fit for the team and your potential to grow with the company.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
