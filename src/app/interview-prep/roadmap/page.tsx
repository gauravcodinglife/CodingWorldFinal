
"use client";
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Cloudy, Cog, Target, Clock, ArrowLeft } from "lucide-react";

const cloudEngineerRoadmap = [
    {
        day: "Day 1–5",
        title: "Cloud Fundamentals",
        topics: [
            { question: "What is Cloud? IaaS / PaaS / SaaS", interviewQuestions: ["Explain the differences between IaaS, PaaS, and SaaS."], task: "Identify 5 companies and categorize their main product.", time: "2-3 hours" },
            { question: "Regions, AZs, Edge locations", interviewQuestions: ["What is the difference between a Region and an Availability Zone?"], task: "Find the number of regions for AWS, GCP, and Azure.", time: "1-2 hours" },
            { question: "Shared Responsibility Model", interviewQuestions: ["Who is responsible for patching the OS on an EC2 instance?"], task: "Create a chart outlining responsibilities for IaaS, PaaS, SaaS.", time: "1 hour" },
            { question: "IAM basics (users, roles, policies)", interviewQuestions: ["When would you use an IAM Role instead of a User?"], task: "Create a user with read-only access to S3.", time: "2-3 hours" },
            { question: "Billing basics", interviewQuestions: ["How can you monitor your cloud spending?"], task: "Set up a billing alarm in your account.", time: "1 hour" },
        ],
    },
    {
        day: "Day 6–10",
        title: "Networking in Cloud (Most Asked)",
        topics: [
            { question: "VPC, Subnets (public/private)", interviewQuestions: ["Explain the purpose of a VPC."], task: "Create a VPC with a public and private subnet.", time: "3 hours" },
            { question: "Route tables, IGW, NAT", interviewQuestions: ["What is the difference between an Internet Gateway and a NAT Gateway?"], task: "Configure a route table for a public subnet.", time: "2 hours" },
            { question: "Security Groups vs NACL", interviewQuestions: ["What are the key differences between Security Groups and NACLs?"], task: "Create a Security Group that allows SSH and HTTP traffic.", time: "2 hours" },
            { question: "DNS, Route53", interviewQuestions: ["How does DNS work?"], task: "Register a domain and point it to an EC2 instance.", time: "2 hours" },
            { question: "Load Balancer basics", interviewQuestions: ["What are the different types of load balancers?"], task: "Set up an Application Load Balancer for two EC2 instances.", time: "2 hours" },
        ],
    },
    {
        day: "Day 11–15",
        title: "Compute & Storage",
        topics: [
            { question: "EC2 lifecycle, instance types", interviewQuestions: ["Explain the EC2 instance lifecycle."], task: "Launch, stop, and terminate an EC2 instance.", time: "2 hours" },
            { question: "Auto Scaling Groups", interviewQuestions: ["How do Auto Scaling Groups work?"], task: "Create an ASG that scales based on CPU utilization.", time: "3 hours" },
            { question: "S3, EBS, EFS differences", interviewQuestions: ["When would you use S3 vs EBS vs EFS?"], task: "Create an S3 bucket and upload a file.", time: "2 hours" },
            { question: "RDS basics, backups", interviewQuestions: ["What are the benefits of using a managed database service like RDS?"], task: "Launch an RDS instance and connect to it.", time: "3 hours" },
            { question: "High availability concepts", interviewQuestions: ["How would you design a highly available application?"], task: "Draw an architecture diagram for a highly available web app.", time: "2 hours" },
        ],
    },
     {
        day: "Day 16–20",
        title: "Scalability & Architecture",
        topics: [
            { question: "Designing HA architecture", interviewQuestions: ["What are the key principles of designing for high availability?"], task: "Architect a solution that can withstand an AZ failure.", time: "3 hours" },
            { question: "Stateless vs Stateful apps", interviewQuestions: ["What is the difference between stateless and stateful applications?"], task: "Give an example of a stateful and a stateless service.", time: "2 hours" },
            { question: "Caching (Redis/ElastiCache)", interviewQuestions: ["Why is caching important for scalability?"], task: "Set up a Redis cache for a simple application.", time: "3 hours" },
            { question: "CDN concept", interviewQuestions: ["How does a CDN improve performance?"], task: "Configure a CDN for an S3 bucket.", time: "2 hours" },
            { question: "Designing for failure", interviewQuestions: ["What does 'design for failure' mean?"], task: "Identify single points of failure in a sample architecture.", time: "2 hours" },
        ]
    },
    {
        day: "Day 21–25",
        title: "Monitoring, Security & Costing",
        topics: [
            { question: "CloudWatch, logs, metrics, alarms", interviewQuestions: ["How can you monitor the health of your applications?"], task: "Create a CloudWatch alarm for high CPU usage.", time: "3 hours" },
            { question: "IAM advanced, least privilege", interviewQuestions: ["Explain the principle of least privilege."], task: "Create an IAM policy that grants specific permissions to a resource.", time: "2 hours" },
            { question: "Encryption at rest / transit", interviewQuestions: ["What is the difference between encryption at rest and in transit?"], task: "Enable encryption for an S3 bucket.", time: "2 hours" },
            { question: "Cost optimization techniques", interviewQuestions: ["What are some common cloud cost optimization strategies?"], task: "Analyze your cloud bill and identify potential savings.", time: "2 hours" },
            { question: "Backup strategies", interviewQuestions: ["How would you design a backup and recovery strategy?"], task: "Create a backup of an RDS instance.", time: "2 hours" },
        ]
    },
    {
        day: "Day 26–30",
        title: "Mock Cloud Interview",
        topics: [
            { question: "Design a 3-tier web app on AWS", interviewQuestions: ["Walk me through the architecture of a 3-tier web app."], task: "Whiteboard the architecture of a 3-tier web application.", time: "3 hours" },
            { question: "Explain VPC setup", interviewQuestions: ["How would you configure a VPC for a production application?"], task: "Explain your VPC design to a colleague.", time: "2 hours" },
            { question: "Explain how scaling works", interviewQuestions: ["How would you scale your application to handle a sudden traffic spike?"], task: "Practice explaining scaling concepts.", time: "2 hours" },
            { question: "Troubleshooting scenario questions", interviewQuestions: ["Your website is down. How do you troubleshoot it?"], task: "Work through a troubleshooting scenario with a partner.", time: "2 hours" },
            { question: "Architecture whiteboard practice", interviewQuestions: ["Design a system for..."], task: "Practice whiteboarding various system design problems.", time: "3 hours" },
        ]
    }
];

const devopsEngineerRoadmap = [
    {
        day: "Day 1–5",
        title: "Linux + Networking Basics",
        topics: [
            { question: "Linux commands, processes", interviewQuestions: ["How do you find all files modified in the last 24 hours?"], task: "Use `top` to identify the most resource-intensive process.", time: "2-3 hours" },
            { question: "File system, permissions", interviewQuestions: ["What does `chmod 755` mean?"], task: "Create a file that only your user can read and write to.", time: "2 hours" },
            { question: "SSH, ports, DNS, HTTP", interviewQuestions: ["Explain the SSH handshake process."], task: "SSH into a remote server.", time: "2 hours" },
            { question: "Package managers", interviewQuestions: ["What is a package manager?"], task: "Install a package using apt or yum.", time: "1 hour" },
            { question: "Bash scripting basics", interviewQuestions: ["Write a simple bash script."], task: "Write a script to automate a simple task.", time: "3 hours" },
        ],
    },
    {
        day: "Day 6–10",
        title: "Git & CI/CD",
        topics: [
            { question: "Git workflow (clone, branch, merge)", interviewQuestions: ["Explain your preferred Git workflow."], task: "Create a feature branch, make a change, and merge it.", time: "3 hours" },
            { question: "GitHub Actions / Jenkins basics", interviewQuestions: ["What is CI/CD?"], task: "Create a simple CI pipeline with GitHub Actions.", time: "3 hours" },
            { question: "What is CI/CD pipeline", interviewQuestions: ["What are the stages of a typical CI/CD pipeline?"], task: "Draw a diagram of a CI/CD pipeline.", time: "2 hours" },
            { question: "Writing a simple pipeline", interviewQuestions: ["How do you handle secrets in a CI/CD pipeline?"], task: "Write a pipeline that builds and tests a simple application.", time: "3 hours" },
            { question: "Artifact management", interviewQuestions: ["What is an artifact repository?"], task: "Push a build artifact to a repository.", time: "2 hours" },
        ]
    },
    {
        day: "Day 11–15",
        title: "Docker (Very Important)",
        topics: [
            { question: "What is containerization", interviewQuestions: ["What are the benefits of containerization?"], task: "Explain containers to a non-technical person.", time: "2 hours" },
            { question: "Dockerfile, images, volumes", interviewQuestions: ["What is the difference between an image and a container?"], task: "Write a Dockerfile for a simple web application.", time: "3 hours" },
            { question: "Docker networking", interviewQuestions: ["How do Docker containers communicate with each other?"], task: "Create a Docker network and connect two containers.", time: "2 hours" },
            { question: "Docker Compose", interviewQuestions: ["What is Docker Compose used for?"], task: "Use Docker Compose to run a multi-container application.", time: "3 hours" },
            { question: "Push to Docker Hub", interviewQuestions: ["How do you share Docker images?"], task: "Push a Docker image to Docker Hub.", time: "2 hours" },
        ]
    },
    {
        day: "Day 16–20",
        title: "Kubernetes",
        topics: [
            { question: "Pods, Deployments, Services", interviewQuestions: ["What is the relationship between Pods, Deployments, and Services?"], task: "Deploy an application to Kubernetes using a Deployment.", time: "4 hours" },
            { question: "ConfigMaps, Secrets", interviewQuestions: ["How do you manage configuration in Kubernetes?"], task: "Create a ConfigMap and use it in a Pod.", time: "2 hours" },
            { question: "Ingress", interviewQuestions: ["What is Ingress in Kubernetes?"], task: "Create an Ingress resource to expose a Service.", time: "3 hours" },
            { question: "Scaling pods", interviewQuestions: ["How do you scale an application in Kubernetes?"], task: "Scale a Deployment up and down.", time: "2 hours" },
            { question: "Rolling updates & rollbacks", interviewQuestions: ["How do you perform a rolling update in Kubernetes?"], task: "Perform a rolling update and then roll it back.", time: "3 hours" },
        ]
    },
    {
        day: "Day 21–25",
        title: "Infrastructure as Code & Cloud",
        topics: [
            { question: "Terraform basics", interviewQuestions: ["What is Infrastructure as Code?"], task: "Install Terraform and configure it for your cloud provider.", time: "2 hours" },
            { question: "Writing first Terraform file", interviewQuestions: ["What is the basic syntax of a Terraform file?"], task: "Write a Terraform file to create a simple resource.", time: "3 hours" },
            { question: "Provision EC2 using Terraform", interviewQuestions: ["How do you provision a server with Terraform?"], task: "Write a Terraform configuration to provision an EC2 instance.", time: "3 hours" },
            { question: "State file concept", interviewQuestions: ["What is the purpose of the Terraform state file?"], task: "Inspect your Terraform state file.", time: "2 hours" },
            { question: "Remote backend", interviewQuestions: ["Why would you use a remote backend for Terraform?"], task: "Configure a remote backend for your Terraform state.", time: "2 hours" },
        ]
    },
    {
        day: "Day 26–30",
        title: "Monitoring + Mock DevOps Interview",
        topics: [
            { question: "Prometheus & Grafana basics", interviewQuestions: ["How would you monitor a Kubernetes cluster?"], task: "Set up Prometheus and Grafana to monitor a simple application.", time: "4 hours" },
            { question: "Logging basics", interviewQuestions: ["What are the best practices for application logging?"], task: "Configure centralized logging for your application.", time: "3 hours" },
            { question: "CI/CD scenario questions", interviewQuestions: ["Design a CI/CD pipeline for a microservices application."], task: "Practice answering CI/CD scenario questions.", time: "2 hours" },
            { question: "Kubernetes troubleshooting", interviewQuestions: ["A pod is in a CrashLoopBackOff state. How do you debug it?"], task: "Troubleshoot a broken Kubernetes deployment.", time: "3 hours" },
            { question: "End-to-end pipeline explanation", interviewQuestions: ["Explain an end-to-end CI/CD pipeline you have built."], task: "Draw and explain a complete CI/CD pipeline.", time: "2 hours" },
        ]
    }
];

const TopicDialog = ({ topic, trigger }) => {
    const getAnswerForTopic = (question) => {
        return `
            <h3 class="font-bold text-lg mt-4">Core Concepts</h3>
            <p>A detailed explanation for "${question}" would go here. This would cover the fundamental principles, key terminology, and how this concept fits into the broader cloud/DevOps landscape.</p>
            <h3 class="font-bold text-lg mt-4">Use Cases & Importance</h3>
            <p>This section would discuss why this topic is important, what problems it solves, and provide real-world examples of how it is used in production environments.</p>
            <h3 class="font-bold text-lg mt-4">Best Practices</h3>
            <p>Here, we would outline the recommended best practices. For IAM, this would include the principle of least privilege.</p>
        `;
    };

    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="sm:max-w-[600px] bg-gray-900 text-white border-gray-700">
                <DialogHeader>
                    <DialogTitle className="text-cyan-400">{topic.question}</DialogTitle>
                </DialogHeader>
                <div className="py-4 space-y-6 text-gray-300 max-h-[70vh] overflow-y-auto pr-2">
                    <div dangerouslySetInnerHTML={{ __html: getAnswerForTopic(topic.question) }} />
                    
                    <div>
                        <h4 className="font-bold text-lg text-cyan-400 flex items-center mb-2"><Target className="w-5 h-5 mr-2"/>Interview Questions</h4>
                        <ul className="list-disc pl-6 space-y-2">
                            {topic.interviewQuestions.map((q, i) => <li key={i}>{q}</li>)}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg text-cyan-400 flex items-center mb-2"><Cog className="w-5 h-5 mr-2"/>Mini Task</h4>
                        <p>{topic.task}</p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg text-cyan-400 flex items-center mb-2"><Clock className="w-5 h-5 mr-2"/>Estimated Time</h4>
                        <p>{topic.time}</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

const RoadmapCard = ({ day, title, topics, icon }) => (
    <Card className="bg-gray-900/80 border-gray-800 text-white shadow-lg backdrop-blur-sm">
        <CardHeader>
            <CardTitle className="flex items-center text-xl text-cyan-400">
                {icon}
                <div>
                    <p className="text-sm font-normal text-gray-400">{day}</p>
                    {title}
                </div>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-3">
                {topics.map((topic, index) => (
                     <TopicDialog 
                        key={index}
                        topic={topic}
                        trigger={
                            <div className="flex items-center justify-between p-3 bg-gray-800/70 rounded-lg cursor-pointer hover:bg-gray-700/90 transition-colors">
                                <p className="flex items-center text-gray-300"><Check className="w-4 h-4 mr-3 text-green-500 flex-shrink-0"/>{topic.question}</p>
                                <Button size="sm" className="bg-transparent border border-cyan-400/50 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400 flex-shrink-0 transition-colors">
                                    Begin Topic
                                </Button>
                            </div>
                        }
                    />
                ))}
            </div>
        </CardContent>
    </Card>
);

export default function RoadmapPage() {
    const [selectedRoadmap, setSelectedRoadmap] = useState<'cloud' | 'devops' | null>(null);

    if (selectedRoadmap) {
        const roadmapData = selectedRoadmap === 'cloud' ? cloudEngineerRoadmap : devopsEngineerRoadmap;
        const title = selectedRoadmap === 'cloud' ? '30 Days to Cloud Engineer' : '30 Days to DevOps Engineer';
        const Icon = selectedRoadmap === 'cloud' ? Cloudy : Cog;

        return (
            <div className="bg-gray-950 text-white min-h-screen p-4 sm:p-8">
                 <div 
                    className="absolute inset-0 z-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, #1d3a56, transparent 70%)',
                    }}
                />
                <div className="max-w-4xl mx-auto relative z-10">
                    <Button
                        onClick={() => setSelectedRoadmap(null)}
                        className="mb-8 bg-gray-700 hover:bg-gray-600"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Roadmaps
                    </Button>
                    <h2 className="text-2xl sm:text-4xl font-bold mb-8 flex items-center gap-3 text-cyan-300">
                        <Icon className="w-10 h-10"/>
                        {title}
                    </h2>
                    <div className="space-y-8">
                        {roadmapData.map((roadmapItem, index) => (
                            <RoadmapCard key={index} {...roadmapItem} icon={selectedRoadmap === 'cloud' ? <Cloudy className="w-8 h-8 mr-4"/> : <Cog className="w-8 h-8 mr-4"/>} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-950 text-white min-h-screen p-4 sm:p-8 flex items-center justify-center">
             <div 
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, #1d3a56, transparent 70%)',
                }}
            />
            <div className="max-w-4xl mx-auto relative z-10 w-full">
                 <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-white">Interview Ready Roadmaps</h1>
                     <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        A 30-day challenge to prepare you for Cloud & DevOps interviews. Choose your path to get started.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card 
                        onClick={() => setSelectedRoadmap('cloud')}
                        className="bg-gray-900/80 border-gray-800 text-white shadow-lg backdrop-blur-sm cursor-pointer hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center text-2xl text-cyan-300 gap-4">
                                <Cloudy className="w-10 h-10"/>
                                30 Days to Cloud Engineer
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-400">Master AWS, networking, scalability, and system design. This path prepares you for a Cloud Engineering role with hands-on tasks and common interview questions.</p>
                        </CardContent>
                    </Card>

                    <Card
                        onClick={() => setSelectedRoadmap('devops')}
                        className="bg-gray-900/80 border-gray-800 text-white shadow-lg backdrop-blur-sm cursor-pointer hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
                    >
                        <CardHeader>
                            <CardTitle className="flex items-center text-2xl text-cyan-300 gap-4">
                                <Cog className="w-10 h-10"/>
                                30 Days to DevOps Engineer
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-400">Learn Linux, Git, CI/CD, Docker, Kubernetes, and IaC. This track is designed to get you interview-ready for a DevOps role.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
