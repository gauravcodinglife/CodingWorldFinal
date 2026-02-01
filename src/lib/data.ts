import { Platform } from "./types";
import { Icons } from "@/components/icons";

export const platforms: Platform[] = [
  {
    name: "AWS",
    slug: "aws",
    description: "Amazon Web Services",
    icon: Icons.aws({}),
    color: "#FF9900",
    topics: [
      {
        slug: "ec2",
        title: "EC2 Instances",
        content:
          "Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the Amazon Web Services (AWS) cloud. Using Amazon EC2 eliminates your need to invest in hardware up front, so you can develop and deploy applications faster.",
        diagramUrl: "aws-diagram-1",
        diagramHint: "architecture diagram",
        commands: [
          {
            command: "aws ec2 describe-instances",
            expected_output: "Listing your EC2 instances...",
            explanation: "Describes one or more of your EC2 instances.",
          },
        ],
      },
    ],
  },
  {
    name: "GCP",
    slug: "gcp",
    description: "Google Cloud Platform",
    icon: Icons.gcp({}),
    color: "#4285F4",
    topics: [
      {
        slug: "compute-engine",
        title: "Compute Engine",
        content:
          "Compute Engine offers virtual machines running in Google's data centers and worldwide fiber network. Compute Engine's tooling and workflow support enables scaling from single instances to global, load-balanced cloud computing.",
        diagramUrl: "gcp-diagram-1",
        diagramHint: "cloud diagram",
        commands: [
          {
            command: "gcloud compute instances list",
            expected_output: "Listing your Compute Engine instances...",
            explanation: "List all Google Compute Engine virtual machine instances.",
          },
        ],
      },
    ],
  },
  {
    name: "Azure",
    slug: "azure",
    description: "Microsoft Azure",
    icon: Icons.azure({}),
    color: "#0078D4",
    topics: [
      {
        slug: "virtual-machines",
        title: "Virtual Machines",
        content:
          "Azure Virtual Machines (VM) is one of several types of on-demand, scalable computing resources that Azure offers. An Azure VM gives you the flexibility of virtualization without having to buy and maintain the physical hardware that runs it.",
        diagramUrl: "azure-diagram-1",
        diagramHint: "network diagram",
        commands: [
          {
            command: "az vm list",
            expected_output: "Listing your Azure Virtual Machines...",
            explanation: "Get the list of virtual machines.",
          },
        ],
      },
    ],
  },
  {
    name: "Docker",
    slug: "docker",
    description: "Containerization Platform",
    icon: Icons.docker({}),
    color: "#2496ED",
    topics: [
      {
        slug: "containers",
        title: "Docker Containers",
        content:
          "A Docker container is a standardized unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application.",
        diagramUrl: "docker-diagram-1",
        diagramHint: "container diagram",
        commands: [
          {
            command: "docker ps",
            expected_output: "CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES",
            explanation: "Lists all running Docker containers.",
          },
          {
            command: "docker images",
            expected_output: "REPOSITORY   TAG       IMAGE ID   CREATED   SIZE",
            explanation: "Lists all local Docker images.",
          },
        ],
      },
    ],
  },
  {
    name: "Kubernetes",
    slug: "kubernetes",
    description: "Container Orchestration",
    icon: Icons.kubernetes({}),
    color: "#326CE5",
    topics: [
      {
        slug: "pods",
        title: "Kubernetes Pods",
        content:
          "Pods are the smallest deployable units of computing that you can create and manage in Kubernetes. A Pod (as in a pod of whales or pea pod) is a group of one or more containers, with shared storage and network resources, and a specification for how to run the containers.",
        diagramUrl: "kubernetes-diagram-1",
        diagramHint: "kubernetes cluster",
        commands: [
          {
            command: "kubectl get pods",
            expected_output: "NAME          READY   STATUS    RESTARTS   AGE",
            explanation: "Lists all pods in the current namespace.",
          },
          {
            command: "kubectl get nodes",
            expected_output: "NAME      STATUS   ROLES    AGE   VERSION",
            explanation: "Lists all nodes in the cluster.",
          },
        ],
      },
    ],
  },
];

export const cliCommands = [
  {
    command: "help",
    output:
      "Available commands: \n'ls': lists files \n'whoami': displays current user \n'date': shows current date \n'clear': clears the terminal\n'docker ps': Lists all running Docker containers.\n'docker images': Lists all local Docker images.\n'kubectl get pods': Lists all pods in the current namespace.\n'kubectl get nodes': Lists all nodes in the cluster.",
  },
  { command: "ls", output: "README.md  app.js  package.json" },
  { command: "whoami", output: "cloud_dojo_user" },
  { command: "date", output: () => new Date().toString() },
  { command: "docker ps", output: "CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES\n" },
  { command: "docker images", output: "REPOSITORY   TAG       IMAGE ID   CREATED   SIZE\n" },
  { command: "kubectl get pods", output: "NAME          READY   STATUS    RESTARTS   AGE\n" },
  { command: "kubectl get nodes", output: "NAME      STATUS   ROLES    AGE   VERSION\n" },
  { command: "az vm list", output: "[]" },
  { command: "gcloud compute instances list", output: "Listed 0 items." },
  { command: "aws ec2 describe-instances", output: `{"Reservations": []}` },
];
