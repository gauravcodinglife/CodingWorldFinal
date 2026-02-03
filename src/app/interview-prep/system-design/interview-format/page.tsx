import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const interviewSteps = [
  {
    step: 1,
    title: "Understand the Problem and Establish Design Scope",
    description: "Ask clarifying questions to understand the requirements and constraints. Define the scope of the system and identify the key features to focus on.",
  },
  {
    step: 2,
    title: "Propose a High-Level Design",
    description: "Sketch out the main components of the system and how they interact. This is the big picture view of your design.",
  },
  {
    step: 3,
    title: "Dive Deep into Specific Components",
    description: "Choose a few key components from your high-level design and discuss them in more detail. This is where you can showcase your knowledge of specific technologies and trade-offs.",
  },
  {
    step: 4,
    title: "Wrap Up and Discuss Trade-offs",
    description: "Summarize your design and discuss the trade-offs you made. Be prepared to justify your decisions and discuss how you would handle future growth and scalability.",
  },
];

export default function InterviewFormatPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">The System Design Interview Format</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          A 4-step framework for acing your system design interviews.
        </p>
      </div>
      <div className="grid md:grid-cols-1 gap-8">
        {interviewSteps.map((step) => (
          <Card key={step.step} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Step {step.step}: {step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
