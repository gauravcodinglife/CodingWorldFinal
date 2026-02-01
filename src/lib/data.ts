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
      // Compute
      {
        slug: "ec2",
        title: "EC2 - Virtual Servers",
        content: "Amazon Elastic Compute Cloud (EC2) provides scalable virtual servers (instances) in the cloud. It's designed to make web-scale cloud computing easier for developers.",
        commands: [
          { command: "aws ec2 describe-instances", explanation: "Describes your active EC2 instances.", expected_output: `{"Reservations": []}` },
        ],
      },
      {
        slug: "lambda",
        title: "Lambda - Serverless Compute",
        content: "AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers.",
        commands: [
          { command: "aws lambda list-functions", explanation: "Lists your Lambda functions.", expected_output: '{"Functions": []}' },
        ],
      },
      {
        slug: "ecs",
        title: "ECS - Container Orchestration",
        content: "Amazon Elastic Container Service (ECS) is a fully managed container orchestration service that helps you easily deploy, manage, and scale containerized applications.",
        commands: [
          { command: "aws ecs list-clusters", explanation: "Lists your ECS clusters.", expected_output: '{"clusterArns": []}' },
        ],
      },
      {
        slug: "eks",
        title: "EKS - Managed Kubernetes",
        content: "Amazon Elastic Kubernetes Service (EKS) is a managed service that you can use to run Kubernetes on AWS without needing to install, operate, and maintain your own Kubernetes control plane.",
        commands: [
          { command: "aws eks list-clusters", explanation: "Lists your EKS clusters.", expected_output: '{"clusters": []}' },
        ],
      },
      {
        slug: "elastic-beanstalk",
        title: "Elastic Beanstalk - PaaS",
        content: "AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker.",
        commands: [
          { command: "aws elasticbeanstalk describe-applications", explanation: "Describes the configurations of your Elastic Beanstalk applications.", expected_output: '{"Applications": []}' },
        ],
      },
      {
        slug: "app-runner",
        title: "App Runner - Simplified Containers",
        content: "AWS App Runner is a fully managed service that makes it easy for developers to quickly deploy containerized web applications and APIs, at scale and with no prior infrastructure experience required.",
        commands: [
          { command: "aws apprunner list-services", explanation: "Lists your App Runner services.", expected_output: '{"ServiceSummaryList": []}' },
        ],
      },
      {
        slug: "auto-scaling",
        title: "Auto Scaling",
        content: "AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.",
        commands: [
          { command: "aws autoscaling describe-auto-scaling-groups", explanation: "Describes your Auto Scaling groups.", expected_output: '{"AutoScalingGroups": []}' },
        ],
      },
      // Storage
      {
        slug: "s3",
        title: "S3 - Object Storage",
        content: "Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance for data of any size.",
        commands: [
          { command: "aws s3 ls", explanation: "Lists all of your S3 buckets.", expected_output: `{"Buckets": []}` },
        ],
      },
      {
        slug: "ebs",
        title: "EBS - Block Storage for EC2",
        content: "Amazon Elastic Block Store (EBS) is an easy-to-use, high-performance block storage service designed for use with Amazon EC2 for both throughput and transaction-intensive workloads.",
        commands: [
          { command: "aws ec2 describe-volumes", explanation: "Describes your EBS volumes.", expected_output: '{"Volumes": []}' },
        ],
      },
      {
        slug: "efs",
        title: "EFS - Shared File System",
        content: "Amazon Elastic File System (EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources.",
        commands: [
          { command: "aws efs describe-file-systems", explanation: "Describes your EFS file systems.", expected_output: '{"FileSystems": []}' },
        ],
      },
      {
        slug: "glacier",
        title: "S3 Glacier - Archival Storage",
        content: "Amazon S3 Glacier is a secure, durable, and extremely low-cost cloud storage service for data archiving and long-term backup.",
        commands: [
          { command: "aws glacier list-vaults", explanation: "Lists your S3 Glacier vaults.", expected_output: '{"VaultList": []}' },
        ],
      },
      // Networking
      {
        slug: "vpc",
        title: "VPC - Virtual Private Cloud",
        content: "Amazon Virtual Private Cloud (VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.",
        commands: [
          { command: "aws ec2 describe-vpcs", explanation: "Describes your VPCs.", expected_output: '{"Vpcs": []}' },
        ],
      },
      {
        slug: "subnets",
        title: "Subnets",
        content: "A subnet is a range of IP addresses in your VPC. You can launch AWS resources into a specified subnet. Use public subnets for resources that must be connected to the internet, and private subnets for resources that won't be.",
        commands: [
          { command: "aws ec2 describe-subnets", explanation: "Describes your subnets.", expected_output: '{"Subnets": []}' },
        ],
      },
      {
        slug: "route-tables",
        title: "Route Tables",
        content: "A route table contains a set of rules, called routes, that are used to determine where network traffic from your subnet or gateway is directed.",
        commands: [
          { command: "aws ec2 describe-route-tables", explanation: "Describes your route tables.", expected_output: '{"RouteTables": []}' },
        ],
      },
      {
        slug: "internet-gateway",
        title: "Internet Gateway",
        content: "An Internet Gateway (IGW) is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet.",
        commands: [
          { command: "aws ec2 describe-internet-gateways", explanation: "Describes your internet gateways.", expected_output: '{"InternetGateways": []}' },
        ],
      },
      {
        slug: "nat-gateway",
        title: "NAT Gateway",
        content: "NAT (Network Address Translation) Gateway enables instances in a private subnet to connect to the internet or other AWS services, but prevents the internet from initiating a connection with those instances.",
        commands: [
          { command: "aws ec2 describe-nat-gateways", explanation: "Describes your NAT gateways.", expected_output: '{"NatGateways": []}' },
        ],
      },
      {
        slug: "security-groups",
        title: "Security Groups",
        content: "A security group acts as a virtual firewall for your EC2 instances to control incoming and outgoing traffic. Inbound rules control the incoming traffic to the instance, and outbound rules control the outgoing traffic.",
        commands: [
          { command: "aws ec2 describe-security-groups", explanation: "Describes your security groups.", expected_output: '{"SecurityGroups": []}' },
        ],
      },
      {
        slug: "nacl",
        title: "NACLs - Network ACLs",
        content: "A Network Access Control List (NACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.",
        commands: [
          { command: "aws ec2 describe-network-acls", explanation: "Describes your Network ACLs.", expected_output: '{"NetworkAcls": []}' },
        ],
      },
      {
        slug: "elb",
        title: "ELB - Load Balancing",
        content: "Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions. Includes Application (ALB) and Network (NLB) Load Balancers.",
        commands: [
          { command: "aws elbv2 describe-load-balancers", explanation: "Describes your Application and Network Load Balancers.", expected_output: '{"LoadBalancers": []}' },
        ],
      },
      {
        slug: 'route53',
        title: 'Route 53 - DNS',
        content: 'Amazon Route 53 is a scalable and highly available Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost-effective way to route end users to Internet applications.',
        commands: [
          { command: 'aws route53 list-hosted-zones', explanation: 'Lists your Route 53 hosted zones.', expected_output: '{"HostedZones": []}' },
        ],
      },
      {
        slug: "cloudfront",
        title: "CloudFront - CDN",
        content: "Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer-friendly environment.",
        commands: [
          { command: "aws cloudfront list-distributions", explanation: "Lists your CloudFront distributions.", expected_output: '{"DistributionList": {"Items": []}}' },
        ],
      },
      // Databases
      {
        slug: 'rds',
        title: 'RDS - Managed Relational Databases',
        content: 'Amazon Relational Database Service (RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It supports databases like PostgreSQL, MySQL, MariaDB, Oracle, and SQL Server.',
        commands: [
          { command: 'aws rds describe-db-instances', explanation: 'Lists your RDS database instances.', expected_output: '{"DBInstances": []}' },
        ],
      },
      {
        slug: "aurora",
        title: "Aurora - High-Performance Database",
        content: "Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud, that combines the performance and availability of traditional enterprise databases with the simplicity and cost-effectiveness of open source databases.",
        commands: [
          { command: "aws rds describe-db-clusters", explanation: "Lists your Aurora DB clusters.", expected_output: '{"DBClusters": []}' },
        ],
      },
      {
        slug: 'dynamodb',
        title: 'DynamoDB - NoSQL Database',
        content: 'Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It\'s a fully managed, multiregion, multimaster, durable database.',
        commands: [
          { command: 'aws dynamodb list-tables', explanation: 'Lists your DynamoDB tables.', expected_output: '{"TableNames": []}' },
        ],
      },
      {
        slug: "elasticache",
        title: "ElastiCache - In-Memory Caching",
        content: "Amazon ElastiCache is a fully managed in-memory data store and cache service by AWS. The service improves the performance of web applications by allowing you to retrieve information from fast, managed, in-memory caches, instead of relying entirely on slower disk-based databases. Supports Redis and Memcached.",
        commands: [
          { command: "aws elasticache describe-cache-clusters", explanation: "Describes your ElastiCache clusters.", expected_output: '{"CacheClusters": []}' },
        ],
      },
      {
        slug: "redshift",
        title: "Redshift - Data Warehouse",
        content: "Amazon Redshift is a fast, scalable data warehouse that makes it simple and cost-effective to analyze all your data across your data warehouse and data lake.",
        commands: [
          { command: "aws redshift describe-clusters", explanation: "Describes your Redshift clusters.", expected_output: '{"Clusters": []}' },
        ],
      },
      // Security & Identity
      {
        slug: "iam",
        title: "IAM - Identity & Access Management",
        content: "AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely. Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.",
        commands: [
          { command: "aws iam list-users", explanation: "Lists IAM users in your account.", expected_output: `{"Users": []}` },
          { command: "aws iam list-roles", explanation: "Lists IAM roles in your account.", expected_output: `{"Roles": []}` },
        ],
      },
      {
        slug: "kms",
        title: "KMS - Key Management",
        content: "AWS Key Management Service (KMS) makes it easy for you to create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications.",
        commands: [
          { command: "aws kms list-keys", explanation: "Lists the KMS keys in your account.", expected_output: '{"Keys": []}' },
        ],
      },
      {
        slug: "secrets-manager",
        title: "Secrets Manager",
        content: "AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources. The service enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle.",
        commands: [
          { command: "aws secretsmanager list-secrets", explanation: "Lists the secrets stored in Secrets Manager.", expected_output: '{"SecretList": []}' },
        ],
      },
      {
        slug: "cognito",
        title: "Cognito - App Authentication",
        content: "Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. Cognito scales to millions of users and supports sign-in with social identity providers and enterprise identity providers.",
        commands: [
          { command: "aws cognito-idp list-user-pools --max-results 10", explanation: "Lists your Cognito User Pools.", expected_output: '{"UserPools": []}' },
        ],
      },
      {
        slug: "waf",
        title: "WAF - Web Application Firewall",
        content: "AWS WAF is a web application firewall that helps protect your web applications or APIs against common web exploits and bots that may affect availability, compromise security, or consume excessive resources.",
        commands: [
          { command: "aws wafv2 list-web-acls --scope CLOUDFRONT", explanation: "Lists your WAF Web ACLs.", expected_output: '{"WebACLs": []}' },
        ],
      },
      {
        slug: "shield",
        title: "Shield - DDoS Protection",
        content: "AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS. AWS Shield provides always-on detection and automatic inline mitigations that minimize application downtime and latency.",
        commands: [
          { command: "aws shield describe-protection --protection-id some-id", explanation: "Describes an AWS Shield protection (requires a protection ID).", expected_output: 'An error occurred (ResourceNotFoundException) when calling the DescribeProtection operation: Protection not found.' },
        ],
      },
      // Monitoring & Logging
      {
        slug: 'cloudwatch',
        title: 'CloudWatch - Monitoring & Logs',
        content: 'Amazon CloudWatch is a monitoring and observability service that provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, and optimize resource utilization.',
        commands: [
          { command: 'aws cloudwatch describe-alarms', explanation: 'Lists your CloudWatch alarms.', expected_output: '{"MetricAlarms": []}' },
          { command: 'aws logs describe-log-groups', explanation: 'Lists your CloudWatch Log Groups.', expected_output: '{"logGroups": []}' },
        ],
      },
      {
        slug: "cloudtrail",
        title: "CloudTrail - API Auditing",
        content: "AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure.",
        commands: [
          { command: "aws cloudtrail list-trails", explanation: "Lists your CloudTrail trails.", expected_output: '{"Trails": []}' },
        ],
      },
      {
        slug: "x-ray",
        title: "X-Ray - Tracing",
        content: "AWS X-Ray helps developers analyze and debug production, distributed applications, such as those built using a microservices architecture. With X-Ray, you can understand how your application and its underlying services are performing.",
        commands: [
          { command: "aws xray get-trace-summaries --start-time 1970-01-01T00:00:00Z --end-time 2038-01-19T03:14:07Z", explanation: "Retrieves a list of trace summaries for traces in a specified time frame.", expected_output: '{"TraceSummaries": []}' },
        ],
      },
      // CI/CD
      {
        slug: "codecommit",
        title: "CodeCommit - Git Repositories",
        content: "AWS CodeCommit is a secure, highly scalable, managed source control service that hosts private Git repositories.",
        commands: [
          { command: "aws codecommit list-repositories", explanation: "Lists your CodeCommit repositories.", expected_output: '{"repositories": []}' },
        ],
      },
      {
        slug: "codebuild",
        title: "CodeBuild - Build Service",
        content: "AWS CodeBuild is a fully managed continuous integration service that compiles source code, runs tests, and produces software packages that are ready to deploy.",
        commands: [
          { command: "aws codebuild list-projects", explanation: "Lists your CodeBuild projects.", expected_output: '{"projects": []}' },
        ],
      },
      {
        slug: "codedeploy",
        title: "CodeDeploy - Deployment Service",
        content: "AWS CodeDeploy is a fully managed deployment service that automates software deployments to a variety of compute services such as Amazon EC2, AWS Fargate, AWS Lambda, and your on-premises servers.",
        commands: [
          { command: "aws codedeploy list-applications", explanation: "Lists your CodeDeploy applications.", expected_output: '{"applications": []}' },
        ],
      },
      {
        slug: "codepipeline",
        title: "CodePipeline - CI/CD Pipeline",
        content: "AWS CodePipeline is a fully managed continuous delivery service that helps you automate your release pipelines for fast and reliable application and infrastructure updates.",
        commands: [
          { command: "aws codepipeline list-pipelines", explanation: "Lists your CodePipelines.", expected_output: '{"pipelines": []}' },
        ],
      },
      // Infrastructure as Code
      {
        slug: 'cloudformation',
        title: 'CloudFormation - Infrastructure as Code',
        content: 'AWS CloudFormation provides an easy way to model a collection of related AWS and third-party resources, provision them quickly and consistently, and manage them throughout their lifecycles, by treating infrastructure as code.',
        commands: [
          { command: 'aws cloudformation list-stacks', explanation: 'Lists your CloudFormation stacks.', expected_output: '{"StackSummaries": []}' },
        ],
      },
      {
        slug: "systems-manager",
        title: "Systems Manager",
        content: "AWS Systems Manager is the operations hub for your AWS applications and resources. It helps you automate operational tasks, manage server configurations, and provides a unified interface to view operational data.",
        commands: [
          { command: "aws ssm describe-instance-information", explanation: "Views information about your instances managed by Systems Manager.", expected_output: '{"InstanceInformationList": []}' },
        ],
      },
      // Application Integration
      {
        slug: 'sns',
        title: 'SNS - Pub/Sub Messaging',
        content: 'Amazon Simple Notification Service (SNS) is a fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication.',
        commands: [
          { command: 'aws sns list-topics', explanation: 'Lists your SNS topics.', expected_output: '{"Topics": []}' },
        ],
      },
      {
        slug: 'sqs',
        title: 'SQS - Message Queues',
        content: 'Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.',
        commands: [
          { command: 'aws sqs list-queues', explanation: 'Lists your SQS queues.', expected_output: '{"QueueUrls": []}' },
        ],
      },
      {
        slug: "ses",
        title: "SES - Email Service",
        content: "Amazon Simple Email Service (SES) is a cost-effective, flexible, and scalable email service that enables developers to send mail from within any application.",
        commands: [
          { command: "aws ses list-identities", explanation: "Lists the email identities (domains and addresses) that you have verified with SES.", expected_output: '{"Identities": []}' },
        ],
      },
      // Billing & Management
      {
        slug: "organizations",
        title: "AWS Organizations",
        content: "AWS Organizations helps you centrally govern your environment as you grow and scale your workloads on AWS. You can programmatically create new AWS accounts, group accounts to organize your workflows, and apply policies for governance.",
        commands: [
          { command: "aws organizations describe-organization", explanation: "Retrieves information about your organization.", expected_output: 'An error occurred (AWSOrganizationsNotInUseException) when calling the DescribeOrganization operation: Your account is not a member of an organization.' },
        ],
      },
      {
        slug: "cost-explorer",
        title: "Cost Explorer",
        content: "The AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time.",
        commands: [
          { command: "aws ce get-cost-and-usage --time-period Start=2024-01-01,End=2024-02-01 --granularity MONTHLY --metrics \"BlendedCost\"", explanation: "Retrieves cost and usage metrics for your account. (Example for Jan 2024)", expected_output: '{"ResultsByTime": []}' },
        ],
      },
      {
        slug: "budgets",
        title: "AWS Budgets",
        content: "AWS Budgets allows you to set custom budgets to track your cost and usage from the simplest to the most complex use cases. With AWS Budgets, you can choose to be alerted by email or SNS notification when your cost or usage exceeds your budgeted amount.",
        commands: [
          { command: "aws budgets describe-budgets --account-id 123456789012", explanation: "Describes the budgets for an account (requires account ID).", expected_output: '{"Budgets": []}' },
        ],
      },
      {
        slug: "trusted-advisor",
        title: "Trusted Advisor",
        content: "AWS Trusted Advisor provides recommendations that help you follow AWS best practices. Trusted Advisor evaluates your account by using checks and provides recommendations to optimize your AWS infrastructure, improve security and performance, reduce costs, and monitor service quotas.",
        commands: [
          { command: "aws support describe-trusted-advisor-checks --language en", explanation: "Describes the available Trusted Advisor checks.", expected_output: '{"checks": []}' },
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
'aws ec2 describe-instances': Describes your active EC2 instances.
'aws lambda list-functions': Lists your Lambda functions.
'aws ecs list-clusters': Lists your ECS clusters.
'aws eks list-clusters': Lists your EKS clusters.
'aws elasticbeanstalk describe-applications': Describes the configurations of your Elastic Beanstalk applications.
'aws apprunner list-services': Lists your App Runner services.
'aws autoscaling describe-auto-scaling-groups': Describes your Auto Scaling groups.
'aws s3 ls': Lists all of your S3 buckets.
'aws ec2 describe-volumes': Describes your EBS volumes.
'aws efs describe-file-systems': Describes your EFS file systems.
'aws glacier list-vaults': Lists your S3 Glacier vaults.
'aws ec2 describe-vpcs': Describes your VPCs.
'aws ec2 describe-subnets': Describes your subnets.
'aws ec2 describe-route-tables': Describes your route tables.
'aws ec2 describe-internet-gateways': Describes your internet gateways.
'aws ec2 describe-nat-gateways': Describes your NAT gateways.
'aws ec2 describe-security-groups': Describes your security groups.
'aws ec2 describe-network-acls': Describes your Network ACLs.
'aws elbv2 describe-load-balancers': Describes your Application and Network Load Balancers.
'aws route53 list-hosted-zones': Lists your Route 53 hosted zones.
'aws cloudfront list-distributions': Lists your CloudFront distributions.
'aws rds describe-db-instances': Lists your RDS database instances.
'aws rds describe-db-clusters': Lists your Aurora DB clusters.
'aws dynamodb list-tables': Lists your DynamoDB tables.
'aws elasticache describe-cache-clusters': Describes your ElastiCache clusters.
'aws redshift describe-clusters': Describes your Redshift clusters.
'aws iam list-users': Lists IAM users in your account.
'aws iam list-roles': Lists IAM roles in your account.
'aws kms list-keys': Lists the KMS keys in your account.
'aws secretsmanager list-secrets': Lists the secrets stored in Secrets Manager.
'aws cognito-idp list-user-pools --max-results 10': Lists your Cognito User Pools.
'aws wafv2 list-web-acls --scope CLOUDFRONT': Lists your WAF Web ACLs.
'aws shield describe-protection --protection-id some-id': Describes an AWS Shield protection (requires a protection ID).
'aws cloudwatch describe-alarms': Lists your CloudWatch alarms.
'aws logs describe-log-groups': Lists your CloudWatch Log Groups.
'aws cloudtrail list-trails': Lists your CloudTrail trails.
'aws xray get-trace-summaries --start-time 1970-01-01T00:00:00Z --end-time 2038-01-19T03:14:07Z': Retrieves a list of trace summaries for traces in a specified time frame.
'aws codecommit list-repositories': Lists your CodeCommit repositories.
'aws codebuild list-projects': Lists your CodeBuild projects.
'aws codedeploy list-applications': Lists your CodeDeploy applications.
'aws codepipeline list-pipelines': Lists your CodePipelines.
'aws cloudformation list-stacks': Lists your CloudFormation stacks.
'aws ssm describe-instance-information': Views information about your instances managed by Systems Manager.
'aws sns list-topics': Lists your SNS topics.
'aws sqs list-queues': Lists your SQS queues.
'aws ses list-identities': Lists the email identities (domains and addresses) that you have verified with SES.
'aws organizations describe-organization': Retrieves information about your organization.
'aws ce get-cost-and-usage --time-period Start=2024-01-01,End=2024-02-01 --granularity MONTHLY --metrics "BlendedCost"': Retrieves cost and usage metrics for your account. (Example for Jan 2024)
'aws budgets describe-budgets --account-id 123456789012': Describes the budgets for an account (requires account ID).
'aws support describe-trusted-advisor-checks --language en': Describes the available Trusted Advisor checks.
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
  // AWS Commands
  { command: "aws ec2 describe-instances", output: `{"Reservations": []}` },
  { command: "aws lambda list-functions", output: '{"Functions": []}' },
  { command: "aws ecs list-clusters", output: '{"clusterArns": []}' },
  { command: "aws eks list-clusters", output: '{"clusters": []}' },
  { command: "aws elasticbeanstalk describe-applications", output: '{"Applications": []}' },
  { command: "aws apprunner list-services", output: '{"ServiceSummaryList": []}' },
  { command: "aws autoscaling describe-auto-scaling-groups", output: '{"AutoScalingGroups": []}' },
  { command: "aws s3 ls", output: `{"Buckets": []}` },
  { command: "aws ec2 describe-volumes", output: '{"Volumes": []}' },
  { command: "aws efs describe-file-systems", output: '{"FileSystems": []}' },
  { command: "aws glacier list-vaults", output: '{"VaultList": []}' },
  { command: "aws ec2 describe-vpcs", output: '{"Vpcs": []}' },
  { command: "aws ec2 describe-subnets", output: '{"Subnets": []}' },
  { command: "aws ec2 describe-route-tables", output: '{"RouteTables": []}' },
  { command: "aws ec2 describe-internet-gateways", output: '{"InternetGateways": []}' },
  { command: "aws ec2 describe-nat-gateways", output: '{"NatGateways": []}' },
  { command: "aws ec2 describe-security-groups", output: '{"SecurityGroups": []}' },
  { command: "aws ec2 describe-network-acls", output: '{"NetworkAcls": []}' },
  { command: "aws elbv2 describe-load-balancers", output: '{"LoadBalancers": []}' },
  { command: 'aws route53 list-hosted-zones', output: '{"HostedZones": []}' },
  { command: "aws cloudfront list-distributions", output: '{"DistributionList": {"Items": []}}' },
  { command: 'aws rds describe-db-instances', output: '{"DBInstances": []}' },
  { command: "aws rds describe-db-clusters", output: '{"DBClusters": []}' },
  { command: 'aws dynamodb list-tables', output: '{"TableNames": []}' },
  { command: "aws elasticache describe-cache-clusters", output: '{"CacheClusters": []}' },
  { command: "aws redshift describe-clusters", output: '{"Clusters": []}' },
  { command: "aws iam list-users", output: `{"Users": []}` },
  { command: "aws iam list-roles", output: `{"Roles": []}` },
  { command: "aws kms list-keys", output: '{"Keys": []}' },
  { command: "aws secretsmanager list-secrets", output: '{"SecretList": []}' },
  { command: "aws cognito-idp list-user-pools --max-results 10", output: '{"UserPools": []}' },
  { command: "aws wafv2 list-web-acls --scope CLOUDFRONT", output: '{"WebACLs": []}' },
  { command: "aws shield describe-protection --protection-id some-id", output: 'An error occurred (ResourceNotFoundException) when calling the DescribeProtection operation: Protection not found.' },
  { command: 'aws cloudwatch describe-alarms', output: '{"MetricAlarms": []}' },
  { command: 'aws logs describe-log-groups', output: '{"logGroups": []}' },
  { command: "aws cloudtrail list-trails", output: '{"Trails": []}' },
  { command: "aws xray get-trace-summaries --start-time 1970-01-01T00:00:00Z --end-time 2038-01-19T03:14:07Z", output: '{"TraceSummaries": []}' },
  { command: "aws codecommit list-repositories", output: '{"repositories": []}' },
  { command: "aws codebuild list-projects", output: '{"projects": []}' },
  { command: "aws codedeploy list-applications", output: '{"applications": []}' },
  { command: "aws codepipeline list-pipelines", output: '{"pipelines": []}' },
  { command: 'aws cloudformation list-stacks', output: '{"StackSummaries": []}' },
  { command: "aws ssm describe-instance-information", output: '{"InstanceInformationList": []}' },
  { command: 'aws sns list-topics', output: '{"Topics": []}' },
  { command: 'aws sqs list-queues', output: '{"QueueUrls": []}' },
  { command: "aws ses list-identities", output: '{"Identities": []}' },
  { command: "aws organizations describe-organization", output: 'An error occurred (AWSOrganizationsNotInUseException) when calling the DescribeOrganization operation: Your account is not a member of an organization.' },
  { command: "aws ce get-cost-and-usage --time-period Start=2024-01-01,End=2024-02-01 --granularity MONTHLY --metrics \"BlendedCost\"", output: '{"ResultsByTime": []}' },
  { command: "aws budgets describe-budgets --account-id 123456789012", output: '{"Budgets": []}' },
  { command: "aws support describe-trusted-advisor-checks --language en", output: '{"checks": []}' },
  // GCP Commands
  { command: "gcloud compute instances list", output: "Listed 0 items." },
  { command: "gcloud storage buckets list", output: "Listed 0 items." },
  { command: "gcloud projects get-iam-policy YOUR_PROJECT_ID", output: "bindings: []\netag: BwX..." },
  { command: 'gcloud functions list', output: 'Listed 0 items.' },
  { command: 'gcloud sql instances list', output: 'Listed 0 items.' },
  { command: 'gcloud container clusters list', output: 'Listed 0 items.' },
  { command: 'gcloud pubsub topics list', output: 'Listed 0 items.' },
  { command: 'bq ls', output: 'Listed 0 items.' },
  // Azure Commands
  { command: "az vm list", output: "[]" },
  { command: "az storage container list", output: "[]" },
  { command: "az ad user list", output: "[]" },
  { command: 'az functionapp list', output: '[]' },
  { command: 'az cosmosdb list', output: '[]' },
  { command: 'az aks list', output: '[]' },
  { command: 'az devops project list', output: '[]' },
  // Docker Commands
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
  // Kubernetes Commands
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
];
