import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GoogleInterviewPrepPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Google Interview Prep
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          A detailed overview of what to expect in a Google software engineering interview.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>DSA Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Graphs are paramount:</strong> Expect complex graph problems. Master BFS, DFS, Dijkstra's, A*, topological sort, and union-find.</li>
              <li><strong>Dynamic Programming:</strong> Common, often on grids, sequences, or strings. Be prepared for both 1D and 2D DP.</li>
              <li><strong>Trees:</strong> Advanced tree problems are common, including Tries, Segment Trees, and Fenwick Trees (for specific roles).</li>
              <li><strong>String Algorithms:</strong> Problems involving string manipulation, searching (KMP), and hashing are frequent.</li>
              <li><strong>Math and Geometry:</strong> Don't be surprised by problems requiring probability, combinatorics, or computational geometry, especially for senior roles.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Focus on designing for massive scale, with an emphasis on distributed systems principles.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Design Google-Scale Services:</strong> Think big. Design a simplified version of Google Search, YouTube, Google Maps, or Google Docs.</li>
              <li><strong>Scalability, Latency, and Availability:</strong> These are the pillars of Google's design philosophy. Be ready to discuss sharding, caching strategies (global vs. distributed), load balancing, and CAP theorem trade-offs in depth.</li>
              <li><strong>Back-of-the-envelope calculations:</strong> You will be expected to estimate storage, bandwidth, and computational requirements for your design.</li>
              <li><strong>API Design:</strong> Design clean, scalable APIs. Understand RPC and REST.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Behavioral ("Googliness")</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Google assesses for traits that predict success at the company, collectively known as "Googliness."
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Enjoying Ambiguity:</strong> How do you handle open-ended problems with unclear requirements?</li>
              <li><strong>Bias for Action & Collaboration:</strong> How do you work in a team? How do you push projects forward? Discuss times you've led a project or resolved a conflict.</li>
              <li><strong>Intellectual Curiosity:</strong> Show your passion for technology, learning, and tackling hard problems.</li>
              <li><strong>Problem-Solving Process:</strong> They want to understand *how* you think. Articulate your thought process, from clarifying questions to final solution.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Difficulty Trend & Process</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Extremely High Bar:</strong> The technical bar is arguably one of the highest in the industry. Problems are often abstract and require deep algorithmic knowledge.</li>
              <li><strong>Emphasis on Optimal Solutions:</strong> It's not enough to have a working solution. You need to find and defend the most optimal one.</li>
              <li><strong>Hiring Committee Review:</strong> After your interviews, your packet (feedback, resume, etc.) is sent to a hiring committee for a final decision. This process is independent of the interviewers.</li>
              <li><strong>Process:</strong> Typically includes one or two technical phone screens followed by a loop of 4-5 on-site interviews covering coding, system design, and behavioral aspects.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
