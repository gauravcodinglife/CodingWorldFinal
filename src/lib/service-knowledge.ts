export const serviceKnowledge: Record<string, { title: string; content: string; }> = {
  'Command Line': {
    title: 'Command Line',
    content: `The command-line interface (CLI) is a powerful text-based interface for interacting with your computer. Instead of clicking on icons and menus, you type commands to perform tasks.

**Why is it important?**
- **Automation:** You can write scripts to automate repetitive tasks.
- **Power & Flexibility:** The command line gives you fine-grained control over your system.
- **Remote Access:** It's the primary way to manage remote servers and cloud instances using SSH.
- **Developer Tools:** Many developer tools (like Git, Docker, and Kubernetes) are built to be used from the command line.

Mastering the command line is a fundamental skill for any developer or DevOps engineer.`
  },
  'Git': {
    title: 'Git',
    content: `Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers who are collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.

**Why is it important?**
- **Version Control:** Git allows you to track changes to your code over time, so you can revert to previous versions if something goes wrong.
- **Collaboration:** Git makes it easy for multiple developers to work on the same project simultaneously.
- **Branching and Merging:** Git's branching and merging capabilities allow you to work on new features without affecting the main codebase.`
  },
  'GitHub': {
    title: 'GitHub',
    content: `GitHub is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, continuous integration, and wikis for every project.

**Why is it important?**
- **Collaboration:** GitHub is the largest and most advanced development platform in the world, and it's the best place to share code with friends, co-workers, classmates, and complete strangers.
- **Portfolio:** It's a great way to showcase your work to potential employers.
- **Open Source:** It's home to a vast open source community.`
  },
  'Version Control': {
    title: 'Version Control',
    content: `Version control, also known as source control, is the practice of tracking and managing changes to software code. Version control systems are software tools that help software teams manage changes to source code over time.

**Why is it important?**
- **History:** Version control systems provide a complete history of every change made to a file.
- **Branching and Merging:** They allow developers to work in parallel.
- **Traceability:** They allow you to trace each change and see who made it.`
  },
  'Branching': {
    title: 'Branching',
    content: `A branch in Git is a new/separate version of the main repository. It is a lightweight movable pointer to one of these commits. Branching is a feature available in most modern version control systems.

**Why is it important?**
- **Parallel Development:** It allows developers to work on different features at the same time.
- **Isolation:** It isolates new code from the main codebase, so it doesn't cause problems.
- **Experimentation:** It allows you to experiment with new ideas without fear of breaking anything.`
  },
  'Merging': {
    title: 'Merging',
    content: `Merging is Git's way of putting a forked history back together again. The git merge command lets you take the independent lines of development created by git branch and integrate them into a single branch.

**Why is it important?**
- **Integration:** It's how you integrate new features into the main codebase.
- **Collaboration:** It's a key part of the collaborative workflow.`
  },
  'Rebasing': {
    title: 'Rebasing',
    content: `Rebasing is the process of moving or combining a sequence of commits to a new base commit. Rebasing is the most useful way to integrate changes from one branch to another.

**Why is it important?**
- **Linear History:** It helps you maintain a linear project history.
- **Clean History:** It makes your project history easier to read and understand.`
  },
  'File System': {
    title: 'File System',
    content: `A file system is a process that manages how and where data on a storage disk is stored, accessed, and managed. It is a logical collection of files on a partition or a disk.

**Why is it important?**
- **Organization:** It provides a way to organize your files and folders.
- **Data Management:** It provides a way to manage your data.`
  },
  'Permissions': {
    title: 'Permissions',
    content: `File permissions are a set of attributes that specify who can access, modify, and execute files. In Linux, there are three types of permissions: read, write, and execute.

**Why is it important?**
- **Security:** It helps you secure your files and directories from unauthorized access.`
  },
  'Processes': {
    title: 'Processes',
    content: `A process is an instance of a computer program that is being executed. A process has its own memory space, and it can contain one or more threads.

**Why is it important?**
- **Multitasking:** It's what allows a computer to do multiple things at once.`
  },
  'Networking': {
    title: 'Networking',
    content: `A computer network is a group of computers that use a set of common communication protocols over digital interconnections for the purpose of sharing resources located on or provided by the network nodes.

**Why is it important?**
- **Communication:** It's what allows computers to communicate with each other.`
  },
  'Shell Scripting': {
    title: 'Shell Scripting',
    content: `A shell script is a computer program designed to be run by the Unix shell, a command-line interpreter. The various dialects of shell scripts are considered to be scripting languages.

**Why is it important?**
- **Automation:** It allows you to automate repetitive tasks.`
  },
  'VIM': {
    title: 'VIM',
    content: `Vim is a highly configurable text editor for efficiently creating and changing any kind of text. It is included as "vi" with most UNIX systems and with Apple OS X.

**Why is it important?**
- **Efficiency:** It can make you a more efficient developer.
- **Ubiquity:** It's available on almost any server you'll ever log into.`
  },
  'SSH': {
    title: 'SSH',
    content: `Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network. Its most notable applications are remote login and command-line execution.

**Why is it important?**
- **Security:** It provides a secure way to access remote servers.`
  },
  'Docker': {
    title: 'Docker',
    content: `Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.

**Why is it important?**
- **Portability:** Docker containers can run on any computer that has Docker installed.
- **Isolation:** Containers are isolated from each other, which means that they can't interfere with each other.
- **Scalability:** Docker makes it easy to scale your applications up or down.`
  },
  'Containers': {
    title: 'Containers',
    content: `A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

**Why is it important?**
- **Consistency:** Containers ensure that your application will run the same, regardless of where it's deployed.
- **Lightweight:** Containers are very lightweight, which means that you can run more of them on a single machine.`
  },
  'Images': {
    title: 'Images',
    content: `A Docker image is a file, comprised of multiple layers, used to execute code in a Docker container. An image is essentially built from the instructions for a complete and executable version of an application, which relies on the host OS kernel.

**Why is it important?**
- **Reproducibility:** Images allow you to build your application once and then run it anywhere.
- **Versioning:** You can version your images, which makes it easy to roll back to a previous version of your application.`
  },
  'Dockerfile': {
    title: 'Dockerfile',
    content: `A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession.

**Why is it important?**
- **Automation:** It allows you to automate the process of building a Docker image.
- **Documentation:** It serves as documentation for how your application is built.`
  },
  'Docker Compose': {
    title: 'Docker Compose',
    content: `Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

**Why is it important?**
- **Orchestration:** It makes it easy to manage multi-container applications.
- **Development:** It's great for local development, as it allows you to spin up your entire stack with a single command.`
  },
  'Kubernetes': {
    title: 'Kubernetes',
    content: `Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management. It was originally designed by Google and is now maintained by the Cloud Native Computing Foundation.

**Why is it important?**
- **Scalability:** Kubernetes makes it easy to scale your applications up or down.
- **High Availability:** Kubernetes can automatically restart containers that fail, so your application is always available.
- **Portability:** Kubernetes can run on any cloud provider, or on-premises.`
  },
  'Pods': {
    title: 'Pods',
    content: `A pod is the smallest and simplest unit in the Kubernetes object model that you create or deploy. A pod represents a running process on your cluster.

**Why is it important?**
- **Abstraction:** Pods provide a higher level of abstraction than containers.`
  },
  'Services': {
    title: 'Services',
    content: `A Kubernetes service is an abstraction which defines a logical set of pods and a policy by which to access them (sometimes this pattern is called a micro-service). The set of pods targeted by a service is usually determined by a selector.

**Why is it important?**
- **Service Discovery:** Services provide a stable IP address and DNS name for a set of pods.
- **Load Balancing:** Services can load balance traffic across a set of pods.`
  },
  'Deployments': {
    title: 'Deployments',
    content: `A Kubernetes deployment is responsible for creating and updating instances of your application. Once you’ve created a deployment, the Kubernetes master schedules the application instances contained in that deployment to run on individual nodes in the cluster.

**Why is it important?**
- **Declarative Updates:** You can describe the desired state of your application, and Kubernetes will work to make it so.
- **Rolling Updates:** Deployments support rolling updates, which allow you to update your application with zero downtime.`
  },
  'Helm': {
    title: 'Helm',
    content: `Helm is a package manager for Kubernetes. Helm is the best way to find, share, and use software built for Kubernetes.

**Why is it important?**
- **Packaging:** Helm allows you to package your Kubernetes applications as charts.
- **Templating:** Helm uses a templating engine to generate your Kubernetes manifests.
- **Releases:** Helm allows you to manage the lifecycle of your Kubernetes applications.`
  },
  'EC2': {
    title: 'EC2',
    content: `Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.

**Why is it important?**
- **Scalability:** You can scale your compute capacity up or down as needed.
- **Flexibility:** You have a choice of many different instance types, operating systems, and software packages.
- **Cost-Effectiveness:** You only pay for the capacity that you actually use.`
  },
  'S3': {
    title: 'S3',
    content: `Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. This means customers of all sizes and industries can use it to store and protect any amount of data for a range of use cases, such as websites, mobile applications, backup and restore, archive, and big data analytics.

**Why is it important?**
- **Durability:** S3 is designed for 99.999999999% (11 9's) of durability.
- **Scalability:** You can store as much data as you want, and access it from anywhere.
- **Security:** S3 provides a variety of security features to protect your data.`
  },
  'VPC': {
    title: 'VPC',
    content: `Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the Amazon Web Services (AWS) Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including selection of your own IP address range, creation of subnets, and configuration of route tables and network gateways.

**Why is it important?**
- **Security:** VPC allows you to create a secure, isolated network in the cloud.
- **Control:** You have complete control over your virtual networking environment.`
  },
  'IAM': {
    title: 'IAM',
    content: `AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources. You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.

**Why is it important?**
- **Security:** IAM allows you to grant granular permissions to your users and applications.
- **Compliance:** IAM can help you meet your compliance requirements.`
  },
  'Lambda': {
    title: 'Lambda',
    content: `AWS Lambda is a serverless compute service that runs your code in response to events and automatically manages the underlying compute resources for you. You can use AWS Lambda to extend other AWS services with custom logic, or create your own back-end services that operate at AWS scale, performance, and security.

**Why is it important?**
- **Serverless:** You don't have to provision or manage any servers.
- **Cost-Effective:** You only pay for the compute time you consume.
- **Scalability:** Lambda automatically scales your application in response to demand.`
  },
  'CloudFormation': {
    title: 'CloudFormation',
    content: `AWS CloudFormation is a service that helps you model and set up your Amazon Web Services resources so that you can spend less time managing those resources and more time focusing on your applications that run in AWS. You create a template that describes all the AWS resources that you want (like Amazon EC2 instances or Amazon RDS DB instances), and CloudFormation takes care of provisioning and configuring those resources for you.

**Why is it important?**
- **Infrastructure as Code:** You can treat your infrastructure as code, which means that you can version it, and use it to create reproducible environments.
- **Automation:** CloudFormation automates the process of provisioning and configuring your AWS resources.`
  },
  'Compute Engine': {
    title: 'Compute Engine',
    content: `Google Compute Engine (GCE) is an Infrastructure as a Service (IaaS) offering that allows users to run virtual machines on Google's infrastructure. GCE offers scale, performance, and value that lets you easily launch large compute clusters on Google’s infrastructure.

**Why is it important?**
- **Scalability:** You can scale your compute capacity up or down as needed.
- **Flexibility:** You have a choice of many different instance types, operating systems, and software packages.
- **Cost-Effectiveness:** You only pay for the capacity that you actually use.`
  },
  'Cloud Storage': {
    title: 'Cloud Storage',
    content: `Google Cloud Storage is a durable and highly available object storage service. It is a service for storing your objects in Google Cloud. An object is an immutable piece of data consisting of a file of any format.

**Why is it important?**
- **Durability:** Cloud Storage is designed for 99.999999999% (11 9's) of durability.
- **Scalability:** You can store as much data as you want, and access it from anywhere.
- **Security:** Cloud Storage provides a variety of security features to protect your data.`
  },
  'Cloud Functions': {
    title: 'Cloud Functions',
    content: `Google Cloud Functions is a serverless execution environment for building and connecting cloud services. With Cloud Functions you write simple, single-purpose functions that are attached to events emitted from your cloud infrastructure and services.

**Why is it important?**
- **Serverless:** You don't have to provision or manage any servers.
- **Cost-Effective:** You only pay for the compute time you consume.
- **Scalability:** Cloud Functions automatically scales your application in response to demand.`
  },
  'Cloud Deployment Manager': {
    title: 'Cloud Deployment Manager',
    content: `Google Cloud Deployment Manager is an infrastructure deployment service that automates the creation and management of Google Cloud resources. You write flexible template and configuration files and use them to create deployments that have a variety of Google Cloud services, such as Google Compute Engine, Google Cloud Storage, and Google Cloud SQL, that are configured to work together.

**Why is it important?**
- **Infrastructure as Code:** You can treat your infrastructure as code, which means that you can version it, and use it to create reproducible environments.
- **Automation:** Deployment Manager automates the process of provisioning and configuring your GCP resources.`
  },
  'Virtual Machines': {
    title: 'Virtual Machines',
    content: `Azure Virtual Machines is a service that provides on-demand, high-scale, secure, virtualized infrastructure using a pay-as-you-go pricing model. It allows you to create and use virtual machines in the cloud as Infrastructure as a Service (IaaS).

**Why is it important?**
- **Scalability:** You can scale your compute capacity up or down as needed.
- **Flexibility:** You have a choice of many different instance types, operating systems, and software packages.
- **Cost-Effectiveness:** You only pay for the capacity that you actually use.`
  },
  'Blob Storage': {
    title: 'Blob Storage',
    content: `Azure Blob storage is Microsoft's object storage solution for the cloud. Blob storage is optimized for storing massive amounts of unstructured data. Unstructured data is data that does not adhere to a particular data model or definition, such as text or binary data.

**Why is it important?**
- **Durability:** Blob Storage is designed for high durability.
- **Scalability:** You can store as much data as you want, and access it from anywhere.
- **Security:** Blob Storage provides a variety of security features to protect your data.`
  },
  'Virtual Network': {
    title: 'Virtual Network',
    content: `Azure Virtual Network (VNet) is the fundamental building block for your private network in Azure. VNet enables many types of Azure resources, such as Azure Virtual Machines (VM), to securely communicate with each other, the internet, and on-premises networks.

**Why is it important?**
- **Security:** VNet allows you to create a secure, isolated network in the cloud.
- **Control:** You have complete control over your virtual networking environment.`
  },
  'Azure Active Directory': {
    title: 'Azure Active Directory',
    content: `Azure Active Directory (Azure AD) is Microsoft’s multi-tenant, cloud-based directory and identity management service. Azure AD combines core directory services, application access management, and identity protection into a single solution.

**Why is it important?**
- **Security:** Azure AD allows you to grant granular permissions to your users and applications.
- **Compliance:** Azure AD can help you meet your compliance requirements.`
  },
  'Azure Functions': {
    title: 'Azure Functions',
    content: `Azure Functions is a serverless compute service that enables you to run code on-demand without having to explicitly provision or manage infrastructure. You can use Azure Functions to run a script or piece of code in response to a variety of events.

**Why is it important?**
- **Serverless:** You don't have to provision or manage any servers.
- **Cost-Effective:** You only pay for the compute time you consume.
- **Scalability:** Azure Functions automatically scales your application in response to demand.`
  },
  'Azure Resource Manager': {
    title: 'Azure Resource Manager',
    content: `Azure Resource Manager is the deployment and management service for Azure. It provides a management layer that enables you to create, update, and delete resources in your Azure account. You use management features, like access control, locks, and tags, to secure and organize your resources after deployment.

**Why is it important?**
- **Infrastructure as Code:** You can treat your infrastructure as code, which means that you can version it, and use it to create reproducible environments.
- **Automation:** Resource Manager automates the process of provisioning and configuring your Azure resources.`
  }
};
