
export type Lesson = {
  title: string;
  subtitle: string;
  duration: string;
  objective: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  completed: boolean;
};

export type Lab = {
  title: string;
  description: string;
};

export type Capstone = {
  title: string;
  description: string;
  tasks: string[];
};

export type Track = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  category: 'Cloud' | 'Containers' | 'DevOps' | 'Security' | 'Fundamentals';
  prerequisites: {
    id: string;
    text: string;
    mandatory: boolean;
  }[];
  skills: string[];
  useCases: string[];
  modules: {
    title: string;
    lessons: Partial<Lesson> & { title: string, completed: boolean }[];
  }[];
  labs?: Lab[];
  capstone?: Capstone;
  status?: 'Not started' | 'In progress' | 'Completed';
  comingSoon?: boolean;
};

export const tracks: Track[] = [
  {
    id: 'linux',
    title: 'Linux Fundamentals',
    subtitle: 'Operating System for DevOps',
    description: 'Master the Linux command line, processes, permissions and networking basics.',
    difficulty: 'Beginner',
    duration: '8 hours',
    category: 'Fundamentals',
    prerequisites: [],
    skills: ['Command Line', 'File System', 'Permissions', 'Processes', 'Networking', 'SSH', 'Shell Scripting', 'VIM'],
    useCases: ['DevOps Engineer', 'Cloud Engineer', 'Software Developer'],
    modules: [
      {
        title: 'Core Concepts',
        lessons: [
          { 
            title: 'Linux Command Line Basics', 
            subtitle: 'Learn pwd, ls, cd, mkdir, rm, touch and navigation',
            duration: '45 mins',
            objective: 'Navigate the file system and manage files/directories.',
            difficulty: 'Beginner',
            completed: false 
          },
          { 
            title: 'File System and Permissions', 
            subtitle: 'Understand file hierarchies and access controls',
            duration: '1 hour',
            objective: 'Manage file permissions and understand the Linux directory structure.',
            difficulty: 'Beginner',
            completed: false 
          },
          { 
            title: 'Process Management', 
            subtitle: 'Learn to manage running processes',
            duration: '45 mins',
            objective: 'Monitor, control, and manage system processes.',
            difficulty: 'Intermediate',
            completed: false 
          },
          { 
            title: 'Networking and SSH', 
            subtitle: 'Connect to remote servers and check network configurations',
            duration: '1 hour',
            objective: 'Securely connect to remote servers and perform basic network troubleshooting.',
            difficulty: 'Intermediate',
            completed: false 
          },
          { 
            title: 'Shell Scripting', 
            subtitle: 'Automate tasks with basic shell scripts',
            duration: '1.5 hours',
            objective: 'Write simple scripts to automate repetitive tasks.',
            difficulty: 'Intermediate',
            completed: false 
          },
          { 
            title: 'System Administration', 
            subtitle: 'Manage software packages and users',
            duration: '1 hour',
            objective: 'Perform basic system administration tasks like installing software and managing users.',
            difficulty: 'Intermediate',
            completed: false 
          },
          { 
            title: 'VI/VIM Editor', 
            subtitle: 'Learn the basics of the powerful VIM editor',
            duration: '30 mins',
            objective: 'Edit files efficiently using the VIM text editor.',
            difficulty: 'Beginner',
            completed: false 
          },
        ],
      },
    ],
    labs: [
      {
        title: 'Lab 1: Organize a project directory',
        description: 'You are given messy folders. Rearrange them using mv, mkdir, rm.'
      },
      {
        title: 'Lab 2: Automate a backup script',
        description: 'Write a shell script to back up a directory to a .tar.gz file.'
      }
    ],
    capstone: {
      title: 'Setup a Linux server for a Node.js app',
      description: 'This project will test your ability to configure a Linux server from scratch.',
      tasks: [
        'Create a new user with appropriate permissions',
        'Install Node.js and npm',
        'Deploy a simple Node.js application',
        'Configure the application to run as a service',
        'Monitor the application process'
      ]
    },
    comingSoon: false,
  },
  {
    id: 'git',
    title: 'Git & GitHub',
    subtitle: 'Version Control',
    description: 'Track code changes, collaborate with Git and work with GitHub workflows.',
    difficulty: 'Beginner',
    duration: '6 hours',
    category: 'Fundamentals',
    prerequisites: [],
    skills: ['Repositories', 'Commits', 'Branches', 'Merging', 'Remotes', 'Pull Requests', 'Workflows', 'GitHub', 'Command Line'],
    useCases: ['DevOps Engineer', 'Cloud Engineer', 'Software Developer'],
    modules: [
      {
        title: 'Core Concepts',
        lessons: [
            { 
              title: 'Introduction to Version Control', 
              subtitle: 'Understand why version control is essential for modern software development.',
              duration: '30 mins',
              objective: 'Explain the benefits of version control and the difference between centralized and distributed systems.',
              difficulty: 'Beginner',
              completed: false 
            },
            { 
              title: 'Git Fundamentals',
              subtitle: 'Learn the basic Git commands for tracking file changes.',
              duration: '1 hour',
              objective: 'Initialize a repository, stage changes, commit, and view history.',
              difficulty: 'Beginner',
              completed: false
            },
            { 
              title: 'Branching and Merging',
              subtitle: 'Work on different features in parallel without affecting the main codebase.',
              duration: '1.5 hours',
              objective: 'Create, switch, and merge branches. Resolve merge conflicts.',
              difficulty: 'Intermediate',
              completed: false
            },
            { 
              title: 'Working with Remote Repositories',
              subtitle: 'Collaborate with other developers by syncing your local repository with a remote one.',
              duration: '1 hour',
              objective: 'Clone a remote repository, push your changes, and pull updates from others.',
              difficulty: 'Beginner',
              completed: false
            },
            { 
              title: 'Collaboration with GitHub',
              subtitle: 'Use GitHub to host your repositories and collaborate with the open-source community.',
              duration: '1 hour',
              objective: 'Create pull requests, review code, and manage issues.',
              difficulty: 'Beginner',
              completed: false
            },
        ],
      },
    ],
    labs: [
      {
        title: 'Lab 1: Your First Repository',
        description: 'Create a new repository, add some files, and push it to GitHub.'
      },
      {
        title: 'Lab 2: Branching Strategy',
        description: 'Create a feature branch, make some changes, and merge it back into the main branch.'
      }
    ],
    capstone: {
      title: 'Contribute to an Open Source Project',
      description: 'Find a small bug or a documentation error in an open source project and submit a pull request.',
      tasks: [
        'Fork an existing repository',
        'Create a new branch for your changes',
        'Make your changes and commit them',
        'Push your branch to your fork',
        'Open a pull request to the original repository'
      ]
    },
    comingSoon: false,
  },
  {
    id: 'docker',
    title: 'Docker',
    subtitle: 'Containerization',
    description: 'Build, ship, and run applications in containers.',
    difficulty: 'Beginner',
    duration: '10 hours',
    category: 'Containers',
    prerequisites: [],
    skills: ['Dockerfiles', 'Images', 'Containers', 'Volumes', 'Networking', 'Docker Compose'],
    useCases: ['DevOps Engineer', 'Software Developer'],
    modules: [
      {
        title: 'Core Concepts',
        lessons: [
            { title: 'Introduction to Containers', subtitle: 'Why containers are a game changer', duration: '1h', objective: 'Understand what containers are and why they are useful', difficulty: 'Beginner', completed: false },
            { title: 'Docker Engine & Architecture', subtitle: 'Look under the hood', duration: '1h', objective: 'Learn about the components of Docker', difficulty: 'Beginner', completed: false },
            { title: 'Images and Dockerfiles', subtitle: 'Blueprint for your applications', duration: '2h', objective: 'Build your own Docker images', difficulty: 'Intermediate', completed: false },
            { title: 'Containers & Lifecycle', subtitle: 'Running your applications', duration: '1h', objective: 'Manage the lifecycle of your containers', difficulty: 'Beginner', completed: false },
            { title: 'Volumes & Persistent Storage', subtitle: 'Handling data in Docker', duration: '1h', objective: 'Learn how to persist data in Docker', difficulty: 'Intermediate', completed: false },
            { title: 'Networking & Communication', subtitle: 'Connecting containers', duration: '1h', objective: 'Understand how containers communicate with each other', difficulty: 'Intermediate', completed: false },
            { title: 'Docker Compose for Multi-Container Apps', subtitle: 'Orchestrating multiple containers', duration: '2h', objective: 'Learn how to manage multi-container applications with Docker Compose', difficulty: 'Intermediate', completed: false },
        ],
      },
    ],
    labs: [
      {
        title: 'Lab 1: Dockerize a simple application',
        description: 'Write a Dockerfile for a simple web application and run it as a container.'
      },
      {
        title: 'Lab 2: Multi-container application with Docker Compose',
        description: 'Use Docker Compose to run a web application with a database.'
      }
    ],
    capstone: {
      title: 'Build a full-stack application with Docker',
      description: 'Build a full-stack application with a front-end, a back-end, and a database, all running in Docker containers.',
      tasks: [
        'Write a Dockerfile for the front-end',
        'Write a Dockerfile for the back-end',
        'Use Docker Compose to run the entire stack',
        'Set up a reverse proxy to expose the front-end'
      ]
    },
    comingSoon: false,
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    subtitle: 'Container Orchestration',
    description: 'Deploy, manage, and scale containerized applications with Kubernetes.',
    difficulty: 'Intermediate',
    duration: '12 hours',
    category: 'Containers',
    prerequisites: [{ id: 'docker', text: 'Docker Basics', mandatory: true }],
    skills: ['Pods', 'Deployments', 'Services', 'Ingress', 'ConfigMaps', 'Secrets', 'Helm'],
    useCases: ['DevOps Engineer', 'Cloud Engineer'],
    modules: [
        {
            title: 'Core Concepts',
            lessons: [
                { title: 'Introduction to Orchestration', completed: false, subtitle: 'Why you need Kubernetes', duration: '1h', objective: 'Understand the need for container orchestration', difficulty: 'Beginner' },
                { title: 'Kubernetes Architecture', completed: false, subtitle: 'The components of Kubernetes', duration: '2h', objective: 'Learn about the different components of a Kubernetes cluster', difficulty: 'Intermediate' },
                { title: 'Pods, Deployments & Services', completed: false, subtitle: 'The building blocks of Kubernetes', duration: '3h', objective: 'Learn how to deploy and manage applications on Kubernetes', difficulty: 'Intermediate' },
                { title: 'Ingress & Networking', completed: false, subtitle: 'Exposing your applications to the outside world', duration: '2h', objective: 'Understand how networking works in Kubernetes', difficulty: 'Advanced' },
                { title: 'ConfigMaps & Secrets', completed: false, subtitle: 'Managing configuration and secrets', duration: '1h', objective: 'Learn how to manage configuration and secrets in Kubernetes', difficulty: 'Intermediate' },
                { title: 'State & Storage', completed: false, subtitle: 'Handling persistent data', duration: '1h', objective: 'Learn how to manage persistent data in Kubernetes', difficulty: 'Advanced' },
                { title: 'Helm for Package Management', completed: false, subtitle: 'The package manager for Kubernetes', duration: '2h', objective: 'Learn how to use Helm to manage Kubernetes applications', difficulty: 'Intermediate' },
            ],
        },
    ],
    labs: [
        {
            title: 'Lab 1: Deploy a simple application',
            description: 'Deploy a simple web application to a Kubernetes cluster.'
        },
        {
            title: 'Lab 2: Scale and update an application',
            description: 'Scale an application up and down, and perform a rolling update.'
        }
    ],
    capstone: {
        title: 'Deploy a full-stack application to Kubernetes',
        description: 'Deploy a full-stack application with a front-end, a back-end, and a database to a Kubernetes cluster.',
        tasks: [
            'Write Kubernetes manifests for the front-end, back-end, and database',
            'Use Helm to package the application',
            'Deploy the application to a Kubernetes cluster',
            'Expose the application to the outside world with an Ingress'
        ]
    },
    comingSoon: false,
  },
  {
    id: 'aws',
    title: 'AWS',
    subtitle: 'Cloud Platform',
    description: 'Learn core AWS services for compute, storage, networking, and databases.',
    difficulty: 'Beginner',
    duration: '15 hours',
    category: 'Cloud',
    prerequisites: [],
    skills: ['EC2', 'S3', 'VPC', 'IAM', 'RDS', 'Lambda'],
    useCases: ['Cloud Engineer', 'DevOps Engineer', 'Solutions Architect'],
    modules: [
        {
            title: 'Core Concepts',
            lessons: [
                { title: 'Introduction to Cloud Computing & AWS', completed: false, subtitle: 'What is the cloud?', duration: '1h', objective: 'Understand the basics of cloud computing and the AWS ecosystem', difficulty: 'Beginner' },
                { title: 'IAM for Identity & Access Management', completed: false, subtitle: 'Managing users and permissions', duration: '2h', objective: 'Learn how to manage users and permissions with IAM', difficulty: 'Beginner' },
                { title: 'S3 for Object Storage', completed: false, subtitle: 'Storing your files in the cloud', duration: '2h', objective: 'Learn how to use S3 to store and retrieve files', difficulty: 'Beginner' },
                { title: 'EC2 for Virtual Servers', completed: false, subtitle: 'Running your own servers in the cloud', duration: '3h', objective: 'Learn how to launch and manage virtual servers with EC2', difficulty: 'Intermediate' },
                { title: 'VPC for Networking', completed: false, subtitle: 'Creating your own private network in the cloud', duration: '3h', objective: 'Learn how to create a virtual private cloud with VPC', difficulty: 'Advanced' },
                { title: 'RDS for Managed Databases', completed: false, subtitle: 'Running a managed database in the cloud', duration: '2h', objective: 'Learn how to launch and manage a relational database with RDS', difficulty: 'Intermediate' },
                { title: 'Lambda for Serverless Compute', completed: false, subtitle: 'Running code without servers', duration: '2h', objective: 'Learn how to run code without managing servers with Lambda', difficulty: 'Intermediate' },
            ],
        },
    ],
    labs: [
        {
            title: 'Lab 1: Host a static website on S3',
            description: 'Host a static website on S3 and make it available to the world.'
        },
        {
            title: 'Lab 2: Deploy a web application on EC2',
            description: 'Deploy a web application to an EC2 instance and make it available to the world.'
        }
    ],
    capstone: {
        title: 'Build a serverless web application',
        description: 'Build a serverless web application with a front-end hosted on S3, and a back-end powered by Lambda and DynamoDB.',
        tasks: [
            'Host a static front-end on S3',
            'Build a serverless back-end with Lambda and DynamoDB',
            'Connect the front-end to the back-end using API Gateway'
        ]
    },
    comingSoon: false,
  },
  {
    id: 'gcp',
    title: 'GCP',
    subtitle: 'Cloud Platform',
    description: 'Learn core GCP services for compute, storage, networking, and data.',
    difficulty: 'Beginner',
    duration: '15 hours',
    category: 'Cloud',
    prerequisites: [],
    skills: ['Compute Engine', 'Cloud Storage', 'VPC', 'IAM', 'Cloud SQL', 'Cloud Functions'],
    useCases: ['Cloud Engineer', 'DevOps Engineer', 'Data Engineer'],
    modules: [
        {
            title: 'Core Concepts',
            lessons: [
                { title: 'Introduction to Cloud Computing & GCP', completed: false, subtitle: 'What is the cloud?', duration: '1h', objective: 'Understand the basics of cloud computing and the GCP ecosystem', difficulty: 'Beginner' },
                { title: 'IAM for Identity & Access Management', completed: false, subtitle: 'Managing users and permissions', duration: '2h', objective: 'Learn how to manage users and permissions with IAM', difficulty: 'Beginner' },
                { title: 'Cloud Storage', completed: false, subtitle: 'Storing your files in the cloud', duration: '2h', objective: 'Learn how to use Cloud Storage to store and retrieve files', difficulty: 'Beginner' },
                { title: 'Compute Engine for Virtual Servers', completed: false, subtitle: 'Running your own servers in the cloud', duration: '3h', objective: 'Learn how to launch and manage virtual servers with Compute Engine', difficulty: 'Intermediate' },
                { title: 'VPC for Networking', completed: false, subtitle: 'Creating your own private network in the cloud', duration: '3h', objective: 'Learn how to create a virtual private cloud with VPC', difficulty: 'Advanced' },
                { title: 'Cloud SQL for Managed Databases', completed: false, subtitle: 'Running a managed database in the cloud', duration: '2h', objective: 'Learn how to launch and manage a relational database with Cloud SQL', difficulty: 'Intermediate' },
                { title: 'Cloud Functions for Serverless Compute', completed: false, subtitle: 'Running code without servers', duration: '2h', objective: 'Learn how to run code without managing servers with Cloud Functions', difficulty: 'Intermediate' },
            ],
        },
    ],
    labs: [
        {
            title: 'Lab 1: Host a static website on Cloud Storage',
            description: 'Host a static website on Cloud Storage and make it available to the world.'
        },
        {
            title: 'Lab 2: Deploy a web application on Compute Engine',
            description: 'Deploy a web application to a Compute Engine instance and make it available to the world.'
        }
    ],
    capstone: {
        title: 'Build a serverless web application',
        description: 'Build a serverless web application with a front-end hosted on Cloud Storage, and a back-end powered by Cloud Functions and Firestore.',
        tasks: [
            'Host a static front-end on Cloud Storage',
            'Build a serverless back-end with Cloud Functions and Firestore',
            'Connect the front-end to the back-end using API Gateway'
        ]
    },
    comingSoon: false,
  },
  {
    id: 'azure',
    title: 'Azure',
    subtitle: 'Cloud Platform',
    description: 'Learn core Azure services for compute, storage, networking, and databases.',
    difficulty: 'Beginner',
    duration: '15 hours',
    category: 'Cloud',
    prerequisites: [],
    skills: ['Virtual Machines', 'Blob Storage', 'VNet', 'Azure AD', 'SQL Database', 'Azure Functions'],
    useCases: ['Cloud Engineer', 'DevOps Engineer', 'Solutions Architect'],
    modules: [
        {
            title: 'Core Concepts',
            lessons: [
                { title: 'Introduction to Cloud Computing & Azure', completed: false, subtitle: 'What is the cloud?', duration: '1h', objective: 'Understand the basics of cloud computing and the Azure ecosystem', difficulty: 'Beginner' },
                { title: 'Azure AD for Identity & Access Management', completed: false, subtitle: 'Managing users and permissions', duration: '2h', objective: 'Learn how to manage users and permissions with Azure AD', difficulty: 'Beginner' },
                { title: 'Blob Storage for Object Storage', completed: false, subtitle: 'Storing your files in the cloud', duration: '2h', objective: 'Learn how to use Blob Storage to store and retrieve files', difficulty: 'Beginner' },
                { title: 'Virtual Machines for Virtual Servers', completed: false, subtitle: 'Running your own servers in the cloud', duration: '3h', objective: 'Learn how to launch and manage virtual machines with Azure Virtual Machines', difficulty: 'Intermediate' },
                { title: 'VNet for Networking', completed: false, subtitle: 'Creating your own private network in the cloud', duration: '3h', objective: 'Learn how to create a virtual network with Azure VNet', difficulty: 'Advanced' },
                { title: 'SQL Database for Managed Databases', completed: false, subtitle: 'Running a managed database in the cloud', duration: '2h', objective: 'Learn how to launch and manage a relational database with Azure SQL Database', difficulty: 'Intermediate' },
                { title: 'Azure Functions for Serverless Compute', completed: false, subtitle: 'Running code without servers', duration: '2h', objective: 'Learn how to run code without managing servers with Azure Functions', difficulty: 'Intermediate' },
            ],
        },
    ],
    labs: [
        {
            title: 'Lab 1: Host a static website on Blob Storage',
            description: 'Host a static website on Blob Storage and make it available to the world.'
        },
        {
            title: 'Lab 2: Deploy a web application on a Virtual Machine',
            description: 'Deploy a web application to an Azure Virtual Machine and make it available to the world.'
        }
    ],
    capstone: {
        title: 'Build a serverless web application',
        description: 'Build a serverless web application with a front-end hosted on Blob Storage, and a back-end powered by Azure Functions and Cosmos DB.',
        tasks: [
            'Host a static front-end on Blob Storage',
            'Build a serverless back-end with Azure Functions and Cosmos DB',
            'Connect the front-end to the back-end using API Management'
        ]
    },
    comingSoon: false,
  },
  {
    id: 'devops-foundations',
    title: 'DevOps Foundations',
    subtitle: 'Culture & Practices',
    description: 'Understand DevOps principles, CI/CD, automation and collaboration practices.',
    difficulty: 'Beginner',
    duration: '6 hours',
    category: 'DevOps',
    prerequisites: [],
    skills: ['DevOps Culture', 'CI/CD Principles', 'Automation', 'Collaboration', 'Lean', 'Agile'],
    useCases: ['DevOps Engineer', 'Team Lead', 'Project Manager'],
    modules: [{ title: 'Core Concepts', lessons: [] }],
    comingSoon: true,
  },
  {
    id: 'cicd',
    title: 'CI/CD Pipelines',
    subtitle: 'Continuous Integration & Delivery',
    description: 'Build automated pipelines with tools like GitHub Actions, GitLab CI or Jenkins.',
    difficulty: 'Intermediate',
    duration: '10 hours',
    category: 'DevOps',
    prerequisites: [{ id: 'git', text: 'Git & GitHub', mandatory: true }],
    skills: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'YAML', 'Pipelines', 'Artifacts'],
    useCases: ['DevOps Engineer', 'Release Manager'],
    modules: [{ title: 'Core Concepts', lessons: [] }],
    comingSoon: true,
  },
  {
    id: 'terraform',
    title: 'Terraform',
    subtitle: 'Infrastructure as Code',
    description: 'Provision cloud infrastructure using Terraform and reusable IaC modules.',
    difficulty: 'Intermediate',
    duration: '12 hours',
    category: 'DevOps',
    prerequisites: [],
    skills: ['IaC', 'HCL', 'Providers', 'Modules', 'State Management', 'Provisioning'],
    useCases: ['DevOps Engineer', 'Cloud Engineer', 'Platform Engineer'],
    modules: [{ title: 'Core Concepts', lessons: [] }],
    comingSoon: true,
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Observability',
    subtitle: 'Prometheus, Grafana & Logging',
    description: 'Collect metrics, visualize dashboards and set alerts for modern systems.',
    difficulty: 'Intermediate',
    duration: '10 hours',
    category: 'DevOps',
    prerequisites: [],
    skills: ['Metrics', 'Logs', 'Traces', 'Prometheus', 'Grafana', 'Alerting', 'Dashboards'],
    useCases: ['DevOps Engineer', 'SRE', 'Platform Engineer'],
    modules: [{ title: 'Core Concepts', lessons: [] }],
    comingSoon: true,
  },
  {
    id: 'cloud-security',
    title: 'Cloud Security Basics',
    subtitle: 'Security for Cloud & DevOps',
    description: 'Learn IAM, secrets management, secure configurations and basic threat models.',
    difficulty: 'Beginner',
    duration: '8 hours',
    category: 'Security',
    prerequisites: [],
    skills: ['IAM', 'Secrets Management', 'VPC Security', 'Threat Modeling', 'Compliance'],
    useCases: ['DevOps Engineer', 'Security Engineer', 'Cloud Engineer'],
    modules: [{ title: 'Core Concepts', lessons: [] }],
    comingSoon: true,
  },
];
