import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AmazonInterviewPrepPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Amazon Interview Prep
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          A detailed overview of what to expect in an Amazon software engineering interview.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>DSA Patterns</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Trees:</strong> Amazon loves tree problems. Master traversals, BST operations, and questions involving trie data structure.</li>
                <li><strong>Graphs:</strong> Expect problems on BFS, DFS, shortest path algorithms, and identifying cycles. Often framed in the context of networks or dependencies.</li>
                <li><strong>Arrays and Strings:</strong> Heavy focus on sorting, searching, two-pointer techniques, and string manipulation. Sliding window problems are common.</li>
                <li><strong>Dynamic Programming:</strong> Be prepared for medium-level DP problems, especially those related to subsequences and paths.</li>
                <li><strong>Linked Lists:</strong> Questions on reversing, merging, and finding the middle element are frequent.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>System Design</CardTitle>
          </CardHeader>
          <CardContent>
             <p className="mb-4">
              System design questions are often related to scaling e-commerce or cloud services.
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Design Amazon Features:</strong> E.g., design the customer reviews system, the recommendation engine, or a feature for Prime Video.</li>
                <li><strong>Scalability and Availability:</strong> This is critical. Discuss how to handle millions of users, ensure high availability, and design for fault tolerance.</li>
                <li><strong>Database Design:</strong> Understand the trade-offs between SQL (like RDS) and NoSQL (like DynamoDB) databases. Be prepared to justify your choice.</li>
                <li><strong>AWS Services:</strong> Familiarity with core AWS services (S3, EC2, SQS, Lambda, DynamoDB) is a huge advantage, as interviewers may frame questions around them.</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Behavioral (Leadership Principles)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This is as important as the technical rounds. Every interviewer will ask behavioral questions based on Amazon's 16 Leadership Principles.
            </p>
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Prepare 2-3 stories for each LP:</strong> Use the STAR method (Situation, Task, Action, Result) to structure your answers.</li>
                <li><strong>Key Principles to Focus On:</strong>
                    <ul className="list-['-'] pl-6">
                        <li><strong>Customer Obsession:</strong> The most important principle.</li>
                        <li><strong>Ownership:</strong> Taking initiative and responsibility.</li>
                        <li><strong>Invent and Simplify:</strong> Finding simple solutions to complex problems.</li>
                        <li><strong>Are Right, A Lot:</strong> Making good judgments.</li>
                        <li><strong>Bias for Action:</strong> Making decisions with calculated risks.</li>
                    </ul>
                </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Difficulty Trend & Process</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consistently High Bar:</strong> Amazon maintains a high bar for both technical and behavioral competencies.</li>
              <li><strong>"Bar Raiser" Round:</strong> One of your interviewers will be a "Bar Raiser" - an experienced interviewer from another team who ensures a consistent hiring bar. This round often has a heavy focus on Leadership Principles.</li>
              <li><strong>Coding is Foundational:</strong> You are expected to write bug-free, optimal code on a whiteboard or in a shared editor.</li>
              <li><strong>Process:</strong> Usually an online assessment, followed by a phone screen, and then a loop of 4-5 virtual or on-site interviews.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
