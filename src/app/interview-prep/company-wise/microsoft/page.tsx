import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MicrosoftInterviewPrepPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Microsoft Interview Prep
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          A detailed overview of what to expect in a Microsoft software engineering interview.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>DSA Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Arrays and Strings:</strong> Very common. Master two-pointer techniques, sorting, searching, and substring problems.</li>
              <li><strong>Linked Lists:</strong> Problems involving reversing, merging, sorting, and cycle detection are frequent. Be comfortable with both singly and doubly linked lists.</li>
              <li><strong>Trees:</strong> Core topic. Focus on BSTs, traversals (in-order, pre-order, post-order, level-order), and problems involving finding LCA, diameter, etc.</li>
              <li><strong>Graphs:</strong> BFS and DFS are fundamental. Be prepared for problems like finding connected components, cloning a graph, and word ladders.</li>
              <li><strong>Recursion and Backtracking:</strong> Essential for solving many tree, graph, and permutation-related problems.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Design questions are often broad and can be related to Microsoft products or general software systems.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Design a Large-Scale System:</strong> E.g., design a system like Twitter, a URL shortener, or an online collaborative editor (like Office 365).</li>
              <li><strong>Scalability and Reliability:</strong> Focus on how to scale the system to millions of users. Discuss load balancing, caching, and database sharding.</li>
              <li><strong>Cloud Architecture:</strong> Knowledge of cloud concepts is a big plus, especially with Azure. Understand concepts like VMs, containers, and serverless computing.</li>
              <li><strong>API Design:</strong> Be prepared to design a clean and consistent RESTful API for your system.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Behavioral Style</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Microsoft emphasizes a "growth mindset" and looks for candidates who are collaborative and eager to learn.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>"Tell me about a time..." questions:</strong> Prepare stories about past projects, challenges, and failures. Use the STAR method (Situation, Task, Action, Result).</li>
              <li><strong>Collaboration and Teamwork:</strong> How do you work with others? How do you handle disagreements?</li>
              <li><strong>Growth Mindset:</strong> How do you learn from your mistakes? How do you stay up-to-date with new technologies?</li>
              <li><strong>Passion for Technology:</strong> Why do you want to work at Microsoft? What Microsoft products or technologies excite you?</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Difficulty Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consistently High:</strong> Microsoft has a high bar for technical skills. The interview process is thorough and well-structured.</li>
              <li><strong>Multiple Rounds:</strong> Expect an initial phone screen followed by 4-5 on-site (or virtual) interviews in a single day.</li>
              <li><strong>As-Appropriate (AA) Round:</strong> The final round is often with a senior engineer or manager who makes the ultimate hiring decision. It can be a mix of technical and behavioral questions.</li>
              <li><strong>Strong Fundamentals are Key:</strong> A solid understanding of data structures, algorithms, and object-oriented programming is crucial for success.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
