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
      {
        slug: "s3",
        title: "S3 Buckets",
        content: "Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance. You can store and protect any amount of data for a range of use cases, such as websites, mobile applications, backup and restore, archive, and big data analytics.",
        diagramUrl: "aws-diagram-2",
        diagramHint: "cloud storage",
        commands: [
          { command: "aws s3 ls", expected_output: `{"Buckets": []}`, explanation: "Lists your S3 buckets." },
        ],
      },
       {
        slug: "iam",
        title: "IAM Roles & Users",
        content: "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.",
        diagramUrl: "aws-diagram-3",
        diagramHint: "user access",
        commands: [
          { command: "aws iam list-users", expected_output: `{"Users": []}`, explanation: "Lists IAM users." },
          { command: "aws iam list-roles", expected_output: `{"Roles": []}`, explanation: "Lists IAM roles." },
        ],
      }
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
      {
        slug: "cloud-storage",
        title: "Cloud Storage Buckets",
        content: "Google Cloud Storage is a unified object storage for developers and enterprises, from live data serving to data analytics/ML to data archiving. Store and retrieve any amount of data from anywhere.",
        diagramUrl: "gcp-diagram-2",
        diagramHint: "data storage",
        commands: [
          { command: "gcloud storage buckets list", expected_output: "Listed 0 items.", explanation: "Lists your Cloud Storage buckets." },
        ],
      },
      {
        slug: "iam",
        title: "IAM & Admin",
        content: "Cloud Identity and Access Management (IAM) lets you grant granular access to specific Google Cloud resources and helps prevent access to other resources. IAM lets you adopt the security principle of least privilege.",
        diagramUrl: "gcp-diagram-3",
        diagramHint: "security policy",
        commands: [
          { command: "gcloud projects get-iam-policy YOUR_PROJECT_ID", expected_output: "bindings: []\netag: BwX...", explanation: "Gets the IAM policy for a project." },
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
      {
        slug: "blob-storage",
        title: "Blob Storage",
        content: "Azure Blob Storage is Microsoft's object storage solution for the cloud. Blob storage is optimized for storing massive amounts of unstructured data. Unstructured data is data that doesn't adhere to a particular data model or definition, such as text or binary data.",
        diagramUrl: "azure-diagram-2",
        diagramHint: "file storage",
        commands: [
          { command: "az storage container list", expected_output: "[]", explanation: "Lists storage containers." },
        ],
      },
      {
        slug: "azure-ad",
        title: "Azure Active Directory",
        content: "Microsoft Entra ID (formerly Azure Active Directory) is a cloud-based identity and access management service. It helps your employees sign in and access resources in external resources, such as Microsoft 365, the Azure portal, and thousands of other SaaS applications.",
        diagramUrl: "azure-diagram-3",
        diagramHint: "identity management",
        commands: [
          { command: "az ad user list", expected_output: "[]", explanation: "Lists users in Azure AD." },
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
        ],
      },
       {
        slug: "images",
        title: "Docker Images",
        content: "A Docker image is a read-only template that contains a set of instructions for creating a container that can run on the Docker platform. It provides a convenient way to package up applications and preconfigured server environments.",
        diagramUrl: "docker-diagram-2",
        diagramHint: "image layers",
        commands: [
          { command: "docker images", expected_output: "REPOSITORY   TAG       IMAGE ID   CREATED   SIZE", explanation: "Lists all local Docker images." },
          { command: "docker build -t my-app .", expected_output: "Sending build context to Docker daemon... Successfully built...", explanation: "Builds an image from a Dockerfile." },
        ],
      },
      {
        slug: "compose",
        title: "Docker Compose",
        content: "Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.",
        diagramUrl: "docker-diagram-3",
        diagramHint: "multi-container app",
        commands: [
          { command: "docker-compose up", expected_output: "Creating network \"my-project_default\" with the default driver\nCreating my-project_web_1 ... done", explanation: "Builds, (re)creates, starts, and attaches to containers for a service." },
          { command: "docker-compose down", expected_output: "Stopping my-project_web_1 ... done\nRemoving my-project_web_1 ... done\nRemoving network my-project_default", explanation: "Stops and removes containers, networks, volumes, and images created by up." },
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
        ],
      },
       {
        slug: "deployments",
        title: "Deployments",
        content: "A Kubernetes Deployment provides declarative updates for Pods and ReplicaSets. You describe a desired state in a Deployment, and the Deployment Controller changes the actual state to the desired state at a controlled rate.",
        diagramUrl: "kubernetes-diagram-2",
        diagramHint: "app deployment",
        commands: [
          { command: "kubectl get deployments", expected_output: "NAME      READY   UP-TO-DATE   AVAILABLE   AGE", explanation: "Lists all deployments." },
          { command: "kubectl scale deployment my-app --replicas=3", expected_output: "deployment.apps/my-app scaled", explanation: "Scales a deployment to 3 replicas." },
        ],
      },
      {
        slug: "services",
        title: "Services",
        content: "A Kubernetes Service is an abstraction which defines a logical set of Pods and a policy by which to access them. Services enable a loose coupling between dependent Pods.",
        diagramUrl: "kubernetes-diagram-3",
        diagramHint: "service discovery",
        commands: [
          { command: "kubectl get services", expected_output: "NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE", explanation: "Lists all services." },
          { command: "kubectl expose deployment my-app --port=80 --type=LoadBalancer", expected_output: "service/my-app exposed", explanation: "Exposes a deployment as a new service." },
        ],
      },
    ],
  },
];

export const cliCommands = [
  {
    command: "help",
    output:
      `Available commands: 
'ls': lists files 
'whoami': displays current user 
'date': shows current date 
'clear': clears the terminal
'aws ec2 describe-instances': Describes one or more of your EC2 instances.
'aws s3 ls': Lists your S3 buckets.
'aws iam list-users': Lists IAM users.
'aws iam list-roles': Lists IAM roles.
'gcloud compute instances list': List all Google Compute Engine virtual machine instances.
'gcloud storage buckets list': Lists your Cloud Storage buckets.
'gcloud projects get-iam-policy YOUR_PROJECT_ID': Gets the IAM policy for a project.
'az vm list': Get the list of virtual machines.
'az storage container list': Lists storage containers.
'az ad user list': Lists users in Azure AD.
'docker ps': Lists all running Docker containers.
'docker images': Lists all local Docker images.
'docker build -t my-app .': Builds an image from a Dockerfile.
'docker-compose up': Builds, (re)creates, starts, and attaches to containers for a service.
'docker-compose down': Stops and removes containers, networks, volumes, and images created by up.
'kubectl get pods': Lists all pods in the current namespace.
'kubectl get nodes': Lists all nodes in the cluster.
'kubectl get deployments': Lists all deployments.
'kubectl scale deployment my-app --replicas=3': Scales a deployment to 3 replicas.
'kubectl get services': Lists all services.
'kubectl expose deployment my-app --port=80 --type=LoadBalancer': Exposes a deployment as a new service.
`,
  },
  { command: "ls", output: "README.md  app.js  package.json" },
  { command: "whoami", output: "codingworld_user" },
  { command: "date", output: () => new Date().toString() },
  { command: "docker ps", output: "CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES\n" },
  { command: "docker images", output: "REPOSITORY   TAG       IMAGE ID   CREATED   SIZE\n" },
  { command: "docker build -t my-app .", output: "Sending build context to Docker daemon... Successfully built..." },
  { command: "docker-compose up", output: "Creating network \"my-project_default\" with the default driver\nCreating my-project_web_1 ... done" },
  { command: "docker-compose down", output: "Stopping my-project_web_1 ... done\nRemoving my-project_web_1 ... done\nRemoving network my-project_default" },
  { command: "kubectl get pods", output: "NAME          READY   STATUS    RESTARTS   AGE\n" },
  { command: "kubectl get nodes", output: "NAME      STATUS   ROLES    AGE   VERSION\n" },
  { command: "kubectl get deployments", output: "NAME      READY   UP-TO-DATE   AVAILABLE   AGE" },
  { command: "kubectl scale deployment my-app --replicas=3", output: "deployment.apps/my-app scaled" },
  { command: "kubectl get services", output: "NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE" },
  { command: "kubectl expose deployment my-app --port=80 --type=LoadBalancer", output: "service/my-app exposed" },
  { command: "az vm list", output: "[]" },
  { command: "az storage container list", output: "[]" },
  { command: "az ad user list", output: "[]" },
  { command: "gcloud compute instances list", output: "Listed 0 items." },
  { command: "gcloud storage buckets list", output: "Listed 0 items." },
  { command: "gcloud projects get-iam-policy YOUR_PROJECT_ID", output: "bindings: []\netag: BwX..." },
  { command: "aws ec2 describe-instances", output: `{"Reservations": []}` },
  { command: "aws s3 ls", output: `{"Buckets": []}` },
  { command: "aws iam list-users", output: `{"Users": []}` },
  { command: "aws iam list-roles", output: `{"Roles": []}` },
];
