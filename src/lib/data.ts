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
        commands: [
          { command: "aws s3 ls", expected_output: `{"Buckets": []}`, explanation: "Lists your S3 buckets." },
        ],
      },
       {
        slug: "iam",
        title: "IAM Roles & Users",
        content: "AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.",
        commands: [
          { command: "aws iam list-users", expected_output: `{"Users": []}`, explanation: "Lists IAM users." },
          { command: "aws iam list-roles", expected_output: `{"Roles": []}`, explanation: "Lists IAM roles." },
        ],
      },
      {
        slug: 'lambda',
        title: 'Lambda Functions',
        content: 'AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. You can run code for virtually any type of application or backend service - all with zero administration.',
        commands: [
          { command: 'aws lambda list-functions', expected_output: '{"Functions": []}', explanation: 'Lists your AWS Lambda functions.' },
        ],
      },
      {
        slug: 'rds',
        title: 'RDS Databases',
        content: 'Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks.',
        commands: [
          { command: 'aws rds describe-db-instances', expected_output: '{"DBInstances": []}', explanation: 'Lists your RDS database instances.' },
        ],
      },
      {
        slug: 'vpc',
        title: 'VPC Networking',
        content: 'Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.',
        commands: [
          { command: 'aws ec2 describe-vpcs', expected_output: '{"Vpcs": []}', explanation: 'Describes one or more of your VPCs.' },
        ],
      },
      {
        slug: 'route53',
        title: 'Route 53',
        content: 'Amazon Route 53 is a scalable and highly available Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost-effective way to route end users to Internet applications.',
        commands: [
          { command: 'aws route53 list-hosted-zones', expected_output: '{"HostedZones": []}', explanation: 'Lists the hosted zones in your Route 53.' },
        ],
      },
      {
        slug: 'dynamodb',
        title: 'DynamoDB',
        content: 'Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It\'s a fully managed, multiregion, multimaster, durable database with built-in security, backup and restore, and in-memory caching.',
        commands: [
          { command: 'aws dynamodb list-tables', expected_output: '{"TableNames": []}', explanation: 'Lists your DynamoDB tables.' },
        ],
      },
      {
        slug: 'cloudformation',
        title: 'CloudFormation',
        content: 'AWS CloudFormation provides an easy way to model a collection of related AWS and third-party resources, provision them quickly and consistently, and manage them throughout their lifecycles, by treating infrastructure as code.',
        commands: [
          { command: 'aws cloudformation list-stacks', expected_output: '{"StackSummaries": []}', explanation: 'Lists your CloudFormation stacks.' },
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
        commands: [
          { command: "gcloud storage buckets list", expected_output: "Listed 0 items.", explanation: "Lists your Cloud Storage buckets." },
        ],
      },
      {
        slug: "iam",
        title: "IAM & Admin",
        content: "Cloud Identity and Access Management (IAM) lets you grant granular access to specific Google Cloud resources and helps prevent access to other resources. IAM lets you adopt the security principle of least privilege.",
        commands: [
          { command: "gcloud projects get-iam-policy YOUR_PROJECT_ID", expected_output: "bindings: []\netag: BwX...", explanation: "Gets the IAM policy for a project." },
        ],
      },
      {
        slug: 'cloud-functions',
        title: 'Cloud Functions',
        content: 'Google Cloud Functions is a lightweight, event-based, asynchronous compute solution that allows you to create small, single-purpose functions that respond to cloud events without the need to manage a server or a runtime environment.',
        commands: [
          { command: 'gcloud functions list', expected_output: 'Listed 0 items.', explanation: 'Lists your Google Cloud Functions.' },
        ],
      },
      {
        slug: 'cloud-sql',
        title: 'Cloud SQL',
        content: 'Google Cloud SQL is a fully-managed database service that makes it easy to set up, maintain, manage, and administer your relational PostgreSQL, MySQL, and SQL Server databases in the cloud.',
        commands: [
          { command: 'gcloud sql instances list', expected_output: 'Listed 0 items.', explanation: 'Lists your Cloud SQL instances.' },
        ],
      },
      {
        slug: 'gke',
        title: 'Google Kubernetes Engine (GKE)',
        content: 'Google Kubernetes Engine (GKE) provides a managed environment for deploying, managing, and scaling your containerized applications using Google infrastructure.',
        commands: [
          { command: 'gcloud container clusters list', expected_output: 'Listed 0 items.', explanation: 'Lists your GKE clusters.' },
        ],
      },
      {
        slug: 'pubsub',
        title: 'Pub/Sub',
        content: 'Cloud Pub/Sub is a simple, reliable, scalable foundation for stream analytics and event-driven computing systems. You can send and receive messages between independent applications.',
        commands: [
          { command: 'gcloud pubsub topics list', expected_output: 'Listed 0 items.', explanation: 'Lists your Pub/Sub topics.' },
        ],
      },
      {
        slug: 'bigquery',
        title: 'BigQuery',
        content: 'BigQuery is a serverless, highly scalable, and cost-effective cloud data warehouse designed for business agility. It allows for super-fast SQL queries using the processing power of Google\'s infrastructure.',
        commands: [
          { command: 'bq ls', expected_output: 'Listed 0 items.', explanation: 'Lists datasets in your default project.' },
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
        commands: [
          { command: "az storage container list", expected_output: "[]", explanation: "Lists storage containers." },
        ],
      },
      {
        slug: "azure-ad",
        title: "Azure Active Directory",
        content: "Microsoft Entra ID (formerly Azure Active Directory) is a cloud-based identity and access management service. It helps your employees sign in and access resources in external resources, such as Microsoft 365, the Azure portal, and thousands of other SaaS applications.",
        commands: [
          { command: "az ad user list", expected_output: "[]", explanation: "Lists users in Azure AD." },
        ],
      },
      {
        slug: 'azure-functions',
        title: 'Azure Functions',
        content: 'Azure Functions is a serverless solution that allows you to write less code, maintain less infrastructure, and save on costs. Instead of worrying about deploying and maintaining servers, the cloud infrastructure provides all the up-to-date resources needed to keep your applications running.',
        commands: [
          { command: 'az functionapp list', expected_output: '[]', explanation: 'Lists your Azure Function Apps.' },
        ],
      },
      {
        slug: 'cosmos-db',
        title: 'Cosmos DB',
        content: 'Azure Cosmos DB is a fully managed NoSQL database for modern app development. It offers single-digit millisecond response times, and automatic and instant scalability, along with guaranteed speed at any scale.',
        commands: [
          { command: 'az cosmosdb list', expected_output: '[]', explanation: 'Lists your Azure Cosmos DB accounts.' },
        ],
      },
      {
        slug: 'aks',
        title: 'Azure Kubernetes Service (AKS)',
        content: 'Azure Kubernetes Service (AKS) simplifies deploying a managed Kubernetes cluster in Azure by offloading the operational overhead to Azure. As a hosted Kubernetes service, Azure handles critical tasks like health monitoring and maintenance.',
        commands: [
          { command: 'az aks list', expected_output: '[]', explanation: 'Lists your AKS clusters.' },
        ],
      },
      {
        slug: 'azure-devops',
        title: 'Azure DevOps',
        content: 'Azure DevOps provides developer services for allowing teams to plan work, collaborate on code development, and build and deploy applications. Azure DevOps supports a collaborative culture and set of processes that bring together developers, project managers, and contributors to develop software.',
        commands: [
          { command: 'az devops project list', expected_output: '[]', explanation: 'Lists projects in your Azure DevOps organization.' },
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
        commands: [
          {
            command: "docker ps",
            expected_output: "CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES",
            explanation: "Lists all running Docker containers.",
          },
          {
            command: "docker ps -a",
            expected_output: "CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES",
            explanation: "Lists all Docker containers, including stopped ones.",
          },
        ],
      },
       {
        slug: "images",
        title: "Docker Images",
        content: "A Docker image is a read-only template that contains a set of instructions for creating a container that can run on the Docker platform. It provides a convenient way to package up applications and preconfigured server environments.",
        commands: [
          { command: "docker images", expected_output: "REPOSITORY   TAG       IMAGE ID   CREATED   SIZE", explanation: "Lists all local Docker images." },
          { command: "docker build -t my-app .", expected_output: "Sending build context to Docker daemon... Successfully built...", explanation: "Builds an image from a Dockerfile." },
        ],
      },
      {
        slug: "compose",
        title: "Docker Compose",
        content: "Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.",
        commands: [
          { command: "docker-compose up", expected_output: "Creating network \"my-project_default\" with the default driver\nCreating my-project_web_1 ... done", explanation: "Builds, (re)creates, starts, and attaches to containers for a service." },
          { command: "docker-compose down", expected_output: "Stopping my-project_web_1 ... done\nRemoving my-project_web_1 ... done\nRemoving network my-project_default", explanation: "Stops and removes containers, networks, volumes, and images created by up." },
        ],
      },
      {
        slug: 'dockerfile',
        title: 'Dockerfile',
        content: 'A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession.',
        commands: [
          { command: 'cat Dockerfile', expected_output: 'FROM node:18\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]', explanation: 'Displays the content of a sample Dockerfile.' },
        ],
      },
      {
        slug: 'volumes',
        title: 'Docker Volumes',
        content: 'Volumes are the preferred mechanism for persisting data generated by and used by Docker containers. While bind mounts are dependent on the directory structure and OS of the host machine, volumes are completely managed by Docker.',
        commands: [
          { command: 'docker volume create my-volume', expected_output: 'my-volume', explanation: 'Creates a new Docker volume.' },
          { command: 'docker volume ls', expected_output: 'DRIVER    VOLUME NAME\nlocal     my-volume', explanation: 'Lists all Docker volumes.' },
        ],
      },
      {
        slug: 'networking',
        title: 'Docker Networking',
        content: 'Docker Networking allows you to connect containers to each other and to the outside world. Docker supports different network drivers, like bridge, host, and overlay, each suited for different use cases.',
        commands: [
          { command: 'docker network ls', expected_output: 'NETWORK ID     NAME      DRIVER    SCOPE', explanation: 'Lists all Docker networks.' },
          { command: 'docker network create my-net', expected_output: '...', explanation: 'Creates a new Docker network.' },
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
        commands: [
          { command: "kubectl get deployments", expected_output: "NAME      READY   UP-TO-DATE   AVAILABLE   AGE", explanation: "Lists all deployments." },
          { command: "kubectl scale deployment my-app --replicas=3", expected_output: "deployment.apps/my-app scaled", explanation: "Scales a deployment to 3 replicas." },
        ],
      },
      {
        slug: "services",
        title: "Services",
        content: "A Kubernetes Service is an abstraction which defines a logical set of Pods and a policy by which to access them. Services enable a loose coupling between dependent Pods.",
        commands: [
          { command: "kubectl get services", expected_output: "NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE", explanation: "Lists all services." },
          { command: "kubectl expose deployment my-app --port=80 --type=LoadBalancer", expected_output: "service/my-app exposed", explanation: "Exposes a deployment as a new service." },
        ],
      },
      {
        slug: 'namespaces',
        title: 'Namespaces',
        content: 'Namespaces provide a mechanism for isolating groups of resources within a single cluster. Names of resources need to be unique within a namespace, but not across namespaces.',
        commands: [
          { command: 'kubectl get namespaces', expected_output: 'NAME              STATUS   AGE\ndefault           Active   1d\nkube-system       Active   1d\nkube-public       Active   1d', explanation: 'Lists all namespaces in the cluster.' },
          { command: 'kubectl create namespace my-namespace', expected_output: 'namespace/my-namespace created', explanation: 'Creates a new namespace.' },
        ],
      },
      {
        slug: 'configmaps-secrets',
        title: 'ConfigMaps and Secrets',
        content: 'ConfigMaps allow you to decouple configuration artifacts from image content to keep containerized applications portable. Secrets are similar, but are intended for sensitive data, like passwords, OAuth tokens, and ssh keys.',
        commands: [
          { command: 'kubectl get configmaps', expected_output: 'No resources found in default namespace.', explanation: 'Lists all ConfigMaps.' },
          { command: 'kubectl get secrets', expected_output: 'NAME                  TYPE                                  DATA   AGE', explanation: 'Lists all Secrets.' },
        ],
      },
      {
        slug: 'ingress',
        title: 'Ingress',
        content: 'An API object that manages external access to the services in a cluster, typically HTTP. Ingress can provide load balancing, SSL termination and name-based virtual hosting.',
        commands: [
          { command: 'kubectl get ingress', expected_output: 'No resources found in default namespace.', explanation: 'Lists all Ingress resources.' },
        ],
      },
      {
        slug: 'persistent-volumes',
        title: 'Persistent Volumes',
        content: 'A PersistentVolume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically provisioned using Storage Classes. It is a resource in the cluster just like a node is a cluster resource.',
        commands: [
          { command: 'kubectl get pv', expected_output: 'No resources found.', explanation: 'Lists all Persistent Volumes.' },
          { command: 'kubectl get pvc', expected_output: 'No resources found in default namespace.', explanation: 'Lists all Persistent Volume Claims.' },
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
'aws lambda list-functions': Lists your AWS Lambda functions.
'aws rds describe-db-instances': Lists your RDS database instances.
'aws ec2 describe-vpcs': Describes one or more of your VPCs.
'aws route53 list-hosted-zones': Lists the hosted zones in your Route 53.
'aws dynamodb list-tables': Lists your DynamoDB tables.
'aws cloudformation list-stacks': Lists your CloudFormation stacks.
'gcloud compute instances list': List all Google Compute Engine virtual machine instances.
'gcloud storage buckets list': Lists your Cloud Storage buckets.
'gcloud projects get-iam-policy YOUR_PROJECT_ID': Gets the IAM policy for a project.
'gcloud functions list': Lists your Google Cloud Functions.
'gcloud sql instances list': Lists your Cloud SQL instances.
'gcloud container clusters list': Lists your GKE clusters.
'gcloud pubsub topics list': Lists your Pub/Sub topics.
'bq ls': Lists datasets in your default project.
'az vm list': Get the list of virtual machines.
'az storage container list': Lists storage containers.
'az ad user list': Lists users in Azure AD.
'az functionapp list': Lists your Azure Function Apps.
'az cosmosdb list': Lists your Azure Cosmos DB accounts.
'az aks list': Lists your AKS clusters.
'az devops project list': Lists projects in your Azure DevOps organization.
'docker ps': Lists all running Docker containers.
'docker ps -a': Lists all Docker containers, including stopped ones.
'docker images': Lists all local Docker images.
'docker build -t my-app .': Builds an image from a Dockerfile.
'docker-compose up': Builds, (re)creates, starts, and attaches to containers for a service.
'docker-compose down': Stops and removes containers, networks, volumes, and images created by up.
'cat Dockerfile': Displays the content of a sample Dockerfile.
'docker volume create my-volume': Creates a new Docker volume.
'docker volume ls': Lists all Docker volumes.
'docker network ls': Lists all Docker networks.
'docker network create my-net': Creates a new Docker network.
'kubectl get pods': Lists all pods in the current namespace.
'kubectl get deployments': Lists all deployments.
'kubectl scale deployment my-app --replicas=3': Scales a deployment to 3 replicas.
'kubectl get services': Lists all services.
'kubectl expose deployment my-app --port=80 --type=LoadBalancer': Exposes a deployment as a new service.
'kubectl get namespaces': Lists all namespaces in the cluster.
'kubectl create namespace my-namespace': Creates a new namespace.
'kubectl get configmaps': Lists all ConfigMaps.
'kubectl get secrets': Lists all Secrets.
'kubectl get ingress': Lists all Ingress resources.
'kubectl get pv': Lists all Persistent Volumes.
'kubectl get pvc': Lists all Persistent Volume Claims.
`,
  },
  { command: "ls", output: "README.md  app.js  package.json" },
  { command: "whoami", output: "codingworld_user" },
  { command: "date", output: () => new Date().toString() },
  { command: "docker ps", output: "CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES\n" },
  { command: "docker ps -a", output: "CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES\n" },
  { command: "docker images", output: "REPOSITORY   TAG       IMAGE ID   CREATED   SIZE\n" },
  { command: "docker build -t my-app .", output: "Sending build context to Docker daemon... Successfully built..." },
  { command: "docker-compose up", output: "Creating network \"my-project_default\" with the default driver\nCreating my-project_web_1 ... done" },
  { command: "docker-compose down", output: "Stopping my-project_web_1 ... done\nRemoving my-project_web_1 ... done\nRemoving network my-project_default" },
  { command: 'cat Dockerfile', output: 'FROM node:18\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]' },
  { command: 'docker volume create my-volume', output: 'my-volume' },
  { command: 'docker volume ls', output: 'DRIVER    VOLUME NAME\nlocal     my-volume' },
  { command: 'docker network ls', output: 'NETWORK ID     NAME      DRIVER    SCOPE' },
  { command: 'docker network create my-net', output: 'a1b2c3d4e5f6' },
  { command: "kubectl get pods", output: "NAME          READY   STATUS    RESTARTS   AGE\n" },
  { command: "kubectl get nodes", output: "NAME      STATUS   ROLES    AGE   VERSION\n" },
  { command: "kubectl get deployments", output: "NAME      READY   UP-TO-DATE   AVAILABLE   AGE" },
  { command: "kubectl scale deployment my-app --replicas=3", output: "deployment.apps/my-app scaled" },
  { command: "kubectl get services", output: "NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE" },
  { command: "kubectl expose deployment my-app --port=80 --type=LoadBalancer", output: "service/my-app exposed" },
  { command: 'kubectl get namespaces', output: 'NAME              STATUS   AGE\ndefault           Active   1d\nkube-system       Active   1d\nkube-public       Active   1d' },
  { command: 'kubectl create namespace my-namespace', output: 'namespace/my-namespace created' },
  { command: 'kubectl get configmaps', output: 'No resources found in default namespace.' },
  { command: 'kubectl get secrets', output: 'NAME                  TYPE                                  DATA   AGE' },
  { command: 'kubectl get ingress', output: 'No resources found in default namespace.' },
  { command: 'kubectl get pv', output: 'No resources found.' },
  { command: 'kubectl get pvc', output: 'No resources found in default namespace.' },
  { command: "az vm list", output: "[]" },
  { command: "az storage container list", output: "[]" },
  { command: "az ad user list", output: "[]" },
  { command: 'az functionapp list', output: '[]' },
  { command: 'az cosmosdb list', output: '[]' },
  { command: 'az aks list', output: '[]' },
  { command: 'az devops project list', output: '[]' },
  { command: "gcloud compute instances list", output: "Listed 0 items." },
  { command: "gcloud storage buckets list", output: "Listed 0 items." },
  { command: "gcloud projects get-iam-policy YOUR_PROJECT_ID", output: "bindings: []\netag: BwX..." },
  { command: 'gcloud functions list', output: 'Listed 0 items.' },
  { command: 'gcloud sql instances list', output: 'Listed 0 items.' },
  { command: 'gcloud container clusters list', output: 'Listed 0 items.' },
  { command: 'gcloud pubsub topics list', output: 'Listed 0 items.' },
  { command: 'bq ls', output: 'Listed 0 items.' },
  { command: "aws ec2 describe-instances", output: `{"Reservations": []}` },
  { command: "aws s3 ls", output: `{"Buckets": []}` },
  { command: "aws iam list-users", output: `{"Users": []}` },
  { command: "aws iam list-roles", output: `{"Roles": []}` },
  { command: 'aws lambda list-functions', output: '{"Functions": []}' },
  { command: 'aws rds describe-db-instances', output: '{"DBInstances": []}' },
  { command: 'aws ec2 describe-vpcs', output: '{"Vpcs": []}' },
  { command: 'aws route53 list-hosted-zones', output: '{"HostedZones": []}' },
  { command: 'aws dynamodb list-tables', output: '{"TableNames": []}' },
  { command: 'aws cloudformation list-stacks', output: '{"StackSummaries": []}' },
];
