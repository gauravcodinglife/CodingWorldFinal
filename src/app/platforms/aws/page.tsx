'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import CloudMentor from "@/components/cloud-mentor";

// A simple, stylized SVG representing a basic AWS VPC architecture
const VpcDiagram = ({ onClickComponent }) => (
  <svg
    onClick={onClickComponent}
    width="100%" viewBox="0 0 800 400" className="bg-card border border-border/30 rounded-lg">
    <title>Basic AWS VPC Architecture</title>
    {/* VPC */}
    <rect id="vpc" x="50" y="50" width="700" height="300" fill="#2a2f3b" rx="10" />
    <text x="60" y="80" fill="#fff" fontSize="20">VPC</text>

    {/* Public Subnet */}
    <rect id="subnet-public" x="75" y="100" width="320" height="225" fill="#3a3f4b" rx="5" />
    <text x="85" y="125" fill="#fff">Public Subnet</text>

    {/* Internet Gateway */}
    <g id="igw">
      <rect x="150" y="20" width="120" height="50" fill="#4CAF50" rx="5" />
      <text x="160" y="50" fill="#fff">Internet Gateway</text>
    </g>
    <path d="M210 70 V 100" stroke="#4CAF50" strokeWidth="2" />

    {/* EC2 in Public Subnet */}
    <g id="ec2-public">
      <rect x="100" y="150" width="80" height="60" fill="#FF9900" rx="5" />
      <text x="120" y="185" fill="#000" fontSize="14">EC2</text>
    </g>

    {/* Load Balancer */}
    <g id="elb">
        <rect x="250" y="150" width="80" height="60" fill="#0073B7" rx="5" />
        <text x="268" y="185" fill="#fff" fontSize="14">ELB</text>
    </g>
    
    {/* Private Subnet */}
    <rect id="subnet-private" x="405" y="100" width="320" height="225" fill="#3a3f4b" rx="5" />
    <text x="415" y="125" fill="#fff">Private Subnet</text>

    {/* EC2 in Private Subnet */}
    <g id="ec2-private">
      <rect x="430" y="150" width="80" height="60" fill="#FF9900" rx="5" />
      <text x="450" y="185" fill="#000" fontSize="14">EC2</text>
    </g>
    
    {/* RDS */}
    <g id="rds">
        <rect x="550" y="150" width="80" height="60" fill="#5A69a9" rx="5" />
        <text x="570" y="185" fill="#fff" fontSize="14">RDS</text>
    </g>

  </svg>
);

const componentExplanations = {
  vpc: {
    title: "Virtual Private Cloud (VPC)",
    explanation: "The VPC is your own isolated section of the AWS cloud. It's the foundational network layer where you launch your resources. Think of it as a virtual data center that you control.",
    scenario: "What happens if you need to connect your VPC to your on-premises data center? You would typically set up a VPN Gateway or AWS Direct Connect.",
  },
  'subnet-public': {
    title: "Public Subnet",
    explanation: "A subnet is a range of IP addresses in your VPC. A public subnet is one that has a route to an Internet Gateway, allowing resources within it (like a web server) to be accessible from the internet.",
    quiz: "What kind of resource allows a public subnet to communicate with the internet?",
  },
  igw: {
    title: "Internet Gateway (IGW)",
    explanation: "The IGW is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet. It's the doorway for all inbound and outbound traffic.",
    interviewQuestion: "How does an Internet Gateway differ from a NAT Gateway?",
  },
  'ec2-public': {
    title: "EC2 Instance (Public)",
    explanation: "This is an EC2 instance (a virtual server) placed in the public subnet. It could be a web server, for example, that needs to directly receive traffic from the internet.",
    scenario: "If this EC2 instance is compromised, what is the immediate blast radius? It could potentially affect other resources in the same subnet.",
  },
  elb: {
    title: "Elastic Load Balancer (ELB)",
    explanation: "The ELB automatically distributes incoming application traffic across multiple targets, such as EC2 instances. This increases the fault tolerance and availability of your application.",
    quiz: "What are the three main types of Elastic Load Balancers?",
  },
  'subnet-private': {
    title: "Private Subnet",
    explanation: "A private subnet does not have a direct route to the Internet Gateway. Resources in a private subnet (like databases or backend services) are not directly accessible from the internet, which is a key security best practice.",
    interviewQuestion: "How can an EC2 instance in a private subnet access the internet to download software updates?",
  },
  'ec2-private': {
    title: "EC2 Instance (Private)",
    explanation: "This EC2 instance is in the private subnet, likely running a backend service, an application server, or a batch processing job. It can initiate outbound connections to the internet via a NAT Gateway but cannot receive inbound connections.",
    scenario: "How would you securely access this private EC2 instance for administrative purposes? You would typically use a Bastion Host (Jump Box) in the public subnet.",
  },
  rds: {
    title: "Relational Database Service (RDS)",
    explanation: "RDS is a managed database service. By placing it in a private subnet, you protect your database from direct public access, which is critical for security. Only your application servers within the VPC can communicate with it.",
    quiz: "Is RDS a serverless service? Explain why or why not.",
  },
  default: {
    title: "Click a Component",
    explanation: "Click on any component in the diagram to learn more about it. The AI will explain its role, offer scenarios, and ask relevant questions.",
  },
};

export default function AwsDiagramPage() {
  const [selectedComponent, setSelectedComponent] = useState('default');

  const handleComponentClick = (e) => {
    const id = e.target.closest('[id]')?.id;
    if (componentExplanations[id]) {
      setSelectedComponent(id);
    }
  };

  const { title, explanation, scenario, quiz, interviewQuestion } = componentExplanations[selectedComponent];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Interactive AWS Architecture</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Click on the components of the VPC diagram to get an AI-powered explanation.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <VpcDiagram onClickComponent={handleComponentClick} />
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle className="text-2xl font-headline flex items-center">
              <Icons.brainCircuit className="h-6 w-6 mr-2 text-primary" />
              AI Diagram Explainer
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-bold text-xl text-primary">{title}</h3>
            <p className="text-muted-foreground">{explanation}</p>
            {scenario && (
              <div className="bg-card/50 border border-border/30 rounded-lg p-3">
                <h4 className="font-bold flex items-center"><Icons.lightbulb className="h-4 w-4 mr-2 text-yellow-400" />Scenario</h4>
                <p className="text-sm text-muted-foreground mt-1">{scenario}</p>
              </div>
            )}
            {quiz && (
              <div className="bg-card/50 border border-border/30 rounded-lg p-3">
                <h4 className="font-bold flex items-center"><Icons.helpCircle className="h-4 w-4 mr-2 text-blue-400" />Quiz</h4>
                <p className="text-sm text-muted-foreground mt-1">{quiz}</p>
              </div>
            )}
            {interviewQuestion && (
              <div className="bg-card/50 border border-border/30 rounded-lg p-3">
                <h4 className="font-bold flex items-center"><Icons.userCheck className="h-4 w-4 mr-2 text-green-400" />Interview Question</h4>
                <p className="text-sm text-muted-foreground mt-1">{interviewQuestion}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <CloudMentor context="aws-diagram" />
    </div>
  );
}
