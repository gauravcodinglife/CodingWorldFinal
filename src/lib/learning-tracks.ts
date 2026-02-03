
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
    lessons: {
      title: string;
      completed: boolean;
    }[];
  }[];
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
          { title: 'Linux Command Line Basics', completed: false },
          { title: 'File System and Permissions', completed: false },
          { title: 'Process Management', completed: false },
          { title: 'Networking and SSH', completed: false },
          { title: 'Shell Scripting', completed: false },
          { title: 'System Administration', completed: false },
          { title: 'VI/VIM Editor', completed: false },
          { title: 'Mini Project / Capstone', completed: false },
        ],
      },
    ],
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
    skills: ['Repositories', 'Commits', 'Branches', 'Merging', 'Remotes', 'Pull Requests', 'Workflows', 'GitHub'],
    useCases: ['DevOps Engineer', 'Cloud Engineer', 'Software Developer'],
    modules: [
      {
        title: 'Core Concepts',
        lessons: [
            { title: 'Introduction to Version Control', completed: false },
            { title: 'Git Fundamentals', completed: false },
            { title: 'Branching and Merging', completed: false },
            { title: 'Working with Remote Repositories', completed: false },
            { title: 'Collaboration with GitHub', completed: false },
            { title: 'Advanced Git Techniques', completed: false },
            { title: 'Git Workflows', completed: false },
            { title: 'Mini Project / Capstone', completed: false },
        ],
      },
    ],
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
            { title: 'Introduction to Containers', completed: false },
            { title: 'Docker Engine & Architecture', completed: false },
            { title: 'Images and Dockerfiles', completed: false },
            { title: 'Containers & Lifecycle', completed: false },
            { title: 'Volumes & Persistent Storage', completed: false },
            { title: 'Networking & Communication', completed: false },
            { title: 'Docker Compose for Multi-Container Apps', completed: false },
            { title: 'Mini Project / Capstone', completed: false },
        ],
      },
    ],
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
    modules: [{ title: 'Core Concepts', lessons: [] }],
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
    modules: [{ title: 'Core Concepts', lessons: [] }],
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
    modules: [{ title: 'Core Concepts', lessons: [] }],
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
    modules: [{ title: 'Core Concepts', lessons: [] }],
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
