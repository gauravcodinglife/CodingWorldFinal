
export type Resource = {
  id: string;
  title: string;
  type: "Article" | "Video" | "Course" | "Documentation" | "Repo" | "Exercise";
  url: string;
  provider?: string;
  estimatedHours?: number;
  isFree: boolean;
};

export type Step = {
  id: string;
  order: number;
  title: string;
  description: string;
  estimatedHoursMin?: number;
  estimatedHoursMax?: number;
  type: "Learning" | "Project" | "Assessment";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  resources: Resource[];
};

export type Stage = {
  id: string;
  order: number;
  title: string;
  summary: string;
  estimatedWeeksMin: number;
  estimatedWeeksMax: number;
  steps: Step[];
};

export type Prerequisite = {
  id: string;
  text: string;
  mandatory: boolean;
};

export type Roadmap = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Beginner → Intermediate" | "Intermediate → Advanced";
  domain: "Web" | "Mobile" | "Data" | "Cloud";
  goal: "First job" | "Career switch" | "Upskill";
  estimatedDurationMonthsMin: number;
  estimatedDurationMonthsMax: number;
  estimatedMode: "part-time" | "full-time";
  status?: "New" | "Updated";
  prerequisites: Prerequisite[];
  stages: Stage[];
  lastUpdatedAt: string;
};

export const roadmapsData: Roadmap[] = [
    {
      id: "rm_frontend_001",
      slug: "frontend-developer",
      title: "Frontend Developer",
      shortDescription: "Build beautiful, responsive web interfaces using modern frontend tools.",
      longDescription: "This roadmap guides you from basic web fundamentals to building production-ready frontend applications using HTML, CSS, JavaScript, and a modern framework.",
      level: "Beginner → Intermediate",
      domain: "Web",
      goal: "First job",
      estimatedDurationMonthsMin: 4,
      estimatedDurationMonthsMax: 6,
      estimatedMode: "part-time",
      status: "New",
      prerequisites: [
        { id: "pre_1", text: "Basic computer literacy (file system, web browsing)", mandatory: true },
        { id: "pre_2", text: "Comfortable reading English technical content", mandatory: true },
        { id: "pre_3", text: "Basic understanding of how the web works (HTTP, browsers) is helpful but not required", mandatory: false }
      ],
      stages: [
        {
          id: "stg_1", order: 1, title: "Stage 1: Web Fundamentals", summary: "Learn how the web works and build simple static pages using HTML and CSS.", estimatedWeeksMin: 3, estimatedWeeksMax: 4,
          steps: [
            { id: "step_1_1", order: 1, title: "How the Web Works", description: "Understand clients, servers, HTTP, DNS, and how browsers render pages.", estimatedHoursMin: 3, estimatedHoursMax: 5, type: "Learning", difficulty: "Beginner",
              resources: [
                { id: "res_1_1_1", title: "MDN: How the web works", type: "Article", url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works", provider: "MDN", estimatedHours: 1, isFree: true },
                { id: "res_1_1_2", title: "How the Web Works in 4 minutes", type: "Video", url: "https://www.youtube.com/watch?v=hJHvdBlSxug", provider: "YouTube", estimatedHours: 0.1, isFree: true }
              ]
            },
            { id: "step_1_2", order: 2, title: "HTML Fundamentals", description: "Learn HTML structure, common tags, attributes, forms, and semantics.", estimatedHoursMin: 6, estimatedHoursMax: 10, type: "Learning", difficulty: "Beginner",
              resources: [
                { id: "res_1_2_1", title: "MDN: HTML elements reference", type: "Documentation", url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element", provider: "MDN", estimatedHours: 2, isFree: true },
                { id: "res_1_2_2", title: "HTML Full Course for Beginners", type: "Video", url: "https://www.youtube.com/watch?v=Ut4RpySLM6Y&t=200s", provider: "YouTube", estimatedHours: 4, isFree: true }
              ]
            }
          ]
        },
        {
          id: "stg_2", order: 2, title: "Stage 2: Programming with JavaScript", summary: "Learn core JavaScript concepts required for any frontend role.", estimatedWeeksMin: 4, estimatedWeeksMax: 5,
          steps: [
            { id: "step_2_1", order: 1, title: "JavaScript Basics", description: "Variables, data types, control flow, functions, and basic DOM manipulation.", estimatedHoursMin: 10, estimatedHoursMax: 15, type: "Learning", difficulty: "Beginner",
              resources: [
                { id: "res_2_1_1", title: "Eloquent JavaScript (Chapters 1–4)", type: "Article", url: "https://eloquentjavascript.net/", provider: "Eloquent JavaScript", estimatedHours: 6, isFree: true }
              ]
            }
          ]
        }
      ],
      lastUpdatedAt: "2025-01-15T10:00:00.000Z"
    },
    {
      id: "rm_backend_001",
      slug: "backend-developer",
      title: "Backend Developer",
      shortDescription: "Design and implement scalable, secure backend services and APIs.",
      longDescription: "This roadmap covers the essential skills for building robust and scalable server-side applications, from databases and APIs to authentication and deployment.",
      level: "Beginner → Intermediate",
      domain: "Web",
      goal: "First job",
      estimatedDurationMonthsMin: 4,
      estimatedDurationMonthsMax: 6,
      estimatedMode: "part-time",
      status: "New",
      prerequisites: [
        { id: "pre_be_1", text: "Basic understanding of web concepts (HTTP, APIs)", mandatory: true },
        { id: "pre_be_2", text: "Familiarity with at least one programming language (e.g., JavaScript, Python, Java, Go)", mandatory: true }
      ],
      stages: [
        {
            id: "stg_be_1", order: 1, title: "Stage 1: Language & Framework", summary: "Choose a backend language and master its core concepts. We'll use Node.js for examples.", estimatedWeeksMin: 4, estimatedWeeksMax: 6,
            steps: [
                { id: "step_be_1_1", order: 1, title: "Node.js and Express Basics", description: "Learn the fundamentals of Node.js and build a simple server with the Express framework.", type: "Learning", difficulty: "Beginner", resources: [
                    { id: "res_be_1_1_1", title: "Official Node.js Guides", type: "Documentation", url: "https://nodejs.org/en/docs/guides/", provider: "Node.js Foundation", isFree: true }
                ]}
            ]
        },
        {
            id: "stg_be_2", order: 2, title: "Stage 2: Databases", summary: "Learn how to store and retrieve data using both SQL and NoSQL databases.", estimatedWeeksMin: 4, estimatedWeeksMax: 6,
            steps: [
                { id: "step_be_2_1", order: 1, title: "SQL and Relational Databases", description: "Understand SQL basics and how to model data in a relational database like PostgreSQL.", type: "Learning", difficulty: "Beginner", resources: [
                    { id: "res_be_2_1_1", title: "SQLBolt", type: "Exercise", url: "https://sqlbolt.com/", provider: "SQLBolt", isFree: true },
                    { id: "res_be_2_1_2", title: "SQL Full Course", type: "Video", url: "https://www.youtube.com/watch?v=hlGoQC332VM", provider: "YouTube", isFree: true }
                ]},
                { id: "step_be_2_2", order: 2, title: "NoSQL Databases", description: "Explore document-based databases like MongoDB and understand their use cases.", type: "Learning", difficulty: "Intermediate", resources: [
                    { id: "res_be_2_2_1", title: "MongoDB University", type: "Course", url: "https://university.mongodb.com/", provider: "MongoDB", isFree: true },
                    { id: "res_be_2_2_2", title: "NoSQL Explained", type: "Video", url: "https://www.youtube.com/watch?v=M1dKYQ7GsTg", provider: "YouTube", isFree: true }
                ]}
            ]
        }
      ],
      lastUpdatedAt: "2025-01-15T10:00:00.000Z"
    },
    {
      id: "rm_devops_001",
      slug: "devops-engineer",
      title: "DevOps Engineer",
      shortDescription: "Automate infrastructure, CI/CD pipelines, and monitoring for modern systems.",
      longDescription: "Learn to bridge the gap between development and operations. This path covers infrastructure as code, continuous integration/delivery, monitoring, and cloud-native technologies.",
      level: "Intermediate",
      domain: "Cloud",
      goal: "Upskill",
      estimatedDurationMonthsMin: 3,
      estimatedDurationMonthsMax: 5,
      estimatedMode: "part-time",
      status: "Updated",
      prerequisites: [
          { id: "pre_do_1", text: "Experience as a software developer or system administrator.", mandatory: true },
          { id: "pre_do_2", text: "Strong understanding of Linux/Unix command line.", mandatory: true }
      ],
      stages: [
          {
              id: "stg_do_1", order: 1, title: "Stage 1: Infrastructure as Code (IaC)", summary: "Learn to manage and provision infrastructure through code using Terraform.", estimatedWeeksMin: 4, estimatedWeeksMax: 6,
              steps: [
                  { id: "step_do_1_1", order: 1, title: "Terraform Basics", description: "Understand the basics of Terraform and write your first configuration files to manage cloud resources.", type: "Learning", difficulty: "Intermediate", resources: [
                      { id: "res_do_1_1_1", title: "Terraform HashiCorp Learn", type: "Course", url: "https://learn.hashicorp.com/terraform", provider: "HashiCorp", isFree: true },
                      { id: "res_do_1_1_2", title: "Terraform Explained", type: "Video", url: "https://www.youtube.com/watch?v=S9mohJI_R34&t=755s", provider: "YouTube", isFree: true }
                  ]}
              ]
          },
          {
              id: "stg_do_2", order: 2, title: "Stage 2: CI/CD Pipelines", summary: "Automate your build, test, and deployment processes using GitHub Actions.", estimatedWeeksMin: 4, estimatedWeeksMax: 6,
              steps: [
                  { id: "step_do_2_1", order: 1, title: "Introduction to GitHub Actions", description: "Learn how to create workflows to automate your development lifecycle.", type: "Learning", difficulty: "Intermediate", resources: [
                      { id: "res_do_2_1_1", title: "GitHub Actions Documentation", type: "Documentation", url: "https://docs.github.com/en/actions", provider: "GitHub", isFree: true }
                  ]}
              ]
          }
      ],
      lastUpdatedAt: "2025-01-15T10:00:00.000Z"
    },
    {
        id: "rm_fullstack_001",
        slug: "full-stack-developer",
        title: "Full-Stack Developer",
        shortDescription: "Master both frontend and backend development to build complete web applications.",
        longDescription: "This roadmap combines frontend and backend skills to prepare you for a full-stack role. You will learn to build and deploy complete web applications.",
        level: "Intermediate → Advanced",
        domain: "Web",
        goal: "Career switch",
        estimatedDurationMonthsMin: 6,
        estimatedDurationMonthsMax: 8,
        estimatedMode: "part-time",
        prerequisites: [
            { id: "pre_fs_1", text: "Solid understanding of Frontend or Backend development.", mandatory: true },
            { id: "pre_fs_2", text: "Proficiency in JavaScript.", mandatory: true }
        ],
        stages: [
            {
                id: "stg_fs_1", order: 1, title: "Stage 1: API Design", summary: "Learn to design, build, and document RESTful and GraphQL APIs.", estimatedWeeksMin: 4, estimatedWeeksMax: 5,
                steps: [
                    { id: "step_fs_1_1", order: 1, title: "RESTful API Design", description: "Master the principles of REST and build a secure, scalable API.", type: "Learning", difficulty: "Intermediate", resources: [
                        { id: "res_fs_1_1_1", title: "Best Practices for REST API Design", type: "Article", url: "https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/", provider: "Stack Overflow", isFree: true },
                        { id: "res_fs_1_1_2", title: "RESTful API Explained", type: "Video", url: "https://www.youtube.com/watch?v=B43Bljf4vSk", provider: "YouTube", isFree: true }
                    ]}
                ]
            }
        ],
        lastUpdatedAt: "2025-01-15T10:00:00.000Z"
    },
    {
        id: "rm_mobile_001",
        slug: "mobile-app-developer",
        title: "Mobile App Developer",
        shortDescription: "Build cross-platform mobile apps for iOS and Android using modern frameworks.",
        longDescription: "This roadmap will guide you through building mobile applications for both iOS and Android using a cross-platform framework like React Native.",
        level: "Beginner → Intermediate",
        domain: "Mobile",
        goal: "First job",
        estimatedDurationMonthsMin: 5,
        estimatedDurationMonthsMax: 7,
        estimatedMode: "part-time",
        prerequisites: [
            { id: "pre_mob_1", text: "Strong understanding of JavaScript.", mandatory: true },
            { id: "pre_mob_2", text: "Familiarity with web development concepts is helpful.", mandatory: false }
        ],
        stages: [
            {
                id: "stg_mob_1", order: 1, title: "Stage 1: React Native Basics", summary: "Get started with React Native and build your first mobile app.", estimatedWeeksMin: 4, estimatedWeeksMax: 6,
                steps: [
                    { id: "step_mob_1_1", order: 1, title: "Setting up your environment", description: "Install all necessary tools and configure your machine for React Native development.", type: "Learning", difficulty: "Beginner", resources: [
                        { id: "res_mob_1_1_1", title: "React Native Docs: Environment Setup", type: "Documentation", url: "https://reactnative.dev/docs/environment-setup", provider: "React Native", isFree: true }
                    ]}
                ]
            }
        ],
        lastUpdatedAt: "2025-01-15T10:00:00.000Z"
    },
    {
        id: "rm_data_eng_001",
        slug: "data-engineer",
        title: "Data Engineer",
        shortDescription: "Design, build, and maintain data pipelines and infrastructure for data-driven applications.",
        longDescription: "Learn to build and manage data pipelines and infrastructure. This roadmap focuses on ETL processes, data warehousing, and big data technologies.",
        level: "Intermediate → Advanced",
        domain: "Data",
        goal: "Upskill",
        estimatedDurationMonthsMin: 5,
        estimatedDurationMonthsMax: 7,
        estimatedMode: "part-time",
        prerequisites: [
            { id: "pre_de_1", text: "Proficiency in a programming language like Python.", mandatory: true },
            { id: "pre_de_2", text: "Strong knowledge of SQL.", mandatory: true }
        ],
        stages: [
            {
                id: "stg_de_1", order: 1, title: "Stage 1: Data Warehousing", summary: "Understand the concepts behind data warehousing and data modeling.", estimatedWeeksMin: 4, estimatedWeeksMax: 5,
                steps: [
                    { id: "step_de_1_1", order: 1, title: "Introduction to Data Warehousing", description: "Learn about the architecture and concepts of data warehouses.", type: "Learning", difficulty: "Intermediate", resources: [
                        { id: "res_de_1_1_1", title: "The Data Warehouse Toolkit (Book)", type: "Course", url: "https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/kimball-books/the-data-warehouse-toolkit-3rd-edition/", provider: "Kimball Group", isFree: false }
                    ]}
                ]
            }
        ],
        lastUpdatedAt: "2025-01-15T10:00:00.000Z"
    },
    {
        id: "rm_cloud_eng_001",
        slug: "cloud-engineer",
        title: "Cloud Engineer",
        shortDescription: "Manage and deploy cloud infrastructure and services on platforms like AWS, GCP, or Azure.",
        longDescription: "This roadmap will teach you how to manage cloud infrastructure and services. We focus on AWS as an example, covering core services, security, and infrastructure as code.",
        level: "Intermediate",
        domain: "Cloud",
        goal: "Upskill",
        estimatedDurationMonthsMin: 4,
        estimatedDurationMonthsMax: 6,
        estimatedMode: "part-time",
        prerequisites: [
            { id: "pre_ce_1", text: "Good understanding of networking and system administration.", mandatory: true }
        ],
        stages: [
            {
                id: "stg_ce_1",
                order: 1,
                title: "Stage 1: AWS Fundamentals",
                summary: "Learn about the core services offered by Amazon Web Services.",
                estimatedWeeksMin: 4,
                estimatedWeeksMax: 6,
                steps: [
                    {
                        id: "step_ce_1_1",
                        order: 1,
                        title: "AWS Certified Cloud Practitioner",
                        description: "Study for and pass the AWS CCP exam to validate your foundational knowledge.",
                        type: "Learning",
                        difficulty: "Beginner",
                        resources: [
                            {
                                id: "res_ce_1_1_1",
                                title: "AWS Cloud Practitioner Essentials",
                                type: "Course",
                                url: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/",
                                provider: "AWS",
                                isFree: true
                            }
                        ]
                    },
                    {
                        id: "step_ce_1_2",
                        order: 2,
                        title: "IAM and Security",
                        description: "Understand Identity and Access Management (IAM) and security best practices in AWS.",
                        type: "Learning",
                        difficulty: "Beginner",
                        resources: [
                            {
                                id: "res_ce_1_2_1",
                                title: "AWS IAM Documentation",
                                type: "Documentation",
                                url: "https://docs.aws.amazon.com/IAM/",
                                provider: "AWS",
                                isFree: true
                            }
                        ]
                    },
                    {
                        id: "step_ce_1_3",
                        order: 3,
                        title: "EC2 and Compute",
                        description: "Learn about Elastic Compute Cloud (EC2) and other compute services.",
                        type: "Learning",
                        difficulty: "Intermediate",
                        resources: [
                            {
                                id: "res_ce_1_3_1",
                                title: "EC2 User Guide",
                                type: "Documentation",
                                url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html",
                                provider: "AWS",
                                isFree: true
                            }
                        ]
                    },
                    {
                        id: "step_ce_1_4",
                        order: 4,
                        title: "S3 and Storage",
                        description: "Understand Simple Storage Service (S3) and other storage options.",
                        type: "Learning",
                        difficulty: "Intermediate",
                        resources: [
                            {
                                id: "res_ce_1_4_1",
                                title: "S3 User Guide",
                                type: "Documentation",
                                url: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",
                                provider: "AWS",
                                isFree: true
                            }
                        ]
                    },
                    {
                        id: "step_ce_1_5",
                        order: 5,
                        title: "VPC and Networking",
                        description: "Learn about Virtual Private Cloud (VPC) and networking concepts in AWS.",
                        type: "Learning",
                        difficulty: "Intermediate",
                        resources: [
                            {
                                id: "res_ce_1_5_1",
                                title: "VPC User Guide",
                                type: "Documentation",
                                url: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html",
                                provider: "AWS",
                                isFree: true
                            }
                        ]
                    }
                ]
            },
            {
                id: "stg_ce_2",
                order: 2,
                title: "Stage 2: Google Cloud Platform (GCP) Fundamentals",
                summary: "Learn about the core services offered by Google Cloud Platform.",
                estimatedWeeksMin: 4,
                estimatedWeeksMax: 6,
                steps: [
                    {
                        id: "step_ce_2_1",
                        order: 1,
                        title: "Google Cloud Digital Leader",
                        description: "Study for and pass the Google Cloud Digital Leader exam to validate your foundational knowledge.",
                        type: "Learning",
                        difficulty: "Beginner",
                        resources: [
                            {
                                id: "res_ce_2_1_1",
                                title: "Google Cloud Digital Leader Training",
                                type: "Course",
                                url: "https://cloud.google.com/training/cloud-digital-leader",
                                provider: "Google Cloud",
                                isFree: true
                            }
                        ]
                    }
                ]
            },
            {
                id: "stg_ce_3",
                order: 3,
                title: "Stage 3: Microsoft Azure Fundamentals",
                summary: "Learn about the core services offered by Microsoft Azure.",
                estimatedWeeksMin: 4,
                estimatedWeeksMax: 6,
                steps: [
                    {
                        id: "step_ce_3_1",
                        order: 1,
                        title: "Azure Fundamentals (AZ-900)",
                        description: "Study for and pass the AZ-900 exam to validate your foundational knowledge of Azure.",
                        type: "Learning",
                        difficulty: "Beginner",
                        resources: [
                            {
                                id: "res_ce_3_1_1",
                                title: "Microsoft Learn: Azure Fundamentals",
                                type: "Course",
                                url: "https://docs.microsoft.com/en-us/learn/paths/azure-fundamentals/",
                                provider: "Microsoft",
                                isFree: true
                            }
                        ]
                    }
                ]
            }
        ],
        lastUpdatedAt: "2025-01-16T10:00:00.000Z"
    },
    {
        id: "rm_ml_eng_001",
        slug: "machine-learning-engineer",
        title: "Machine Learning Engineer",
        shortDescription: "Build and deploy machine learning models for real-world applications.",
        longDescription: "This roadmap bridges the gap between data science and software engineering. You will learn to build, train, deploy, and monitor machine learning models in production.",
        level: "Advanced",
        domain: "Data",
        goal: "Upskill",
        estimatedDurationMonthsMin: 5,
        estimatedDurationMonthsMax: 7,
        estimatedMode: "part-time",
        prerequisites: [
            { id: "pre_ml_1", text: "Strong proficiency in Python and its data science libraries (Pandas, NumPy).", mandatory: true },
            { id: "pre_ml_2", text: "Solid understanding of statistics and linear algebra.", mandatory: true }
        ],
        stages: [
            {
                id: "stg_ml_1", order: 1, title: "Stage 1: MLOps Fundamentals", summary: "Learn the principles of MLOps for managing the lifecycle of machine learning models.", estimatedWeeksMin: 5, estimatedWeeksMax: 7,
                steps: [
                    { id: "step_ml_1_1", order: 1, title: "Introduction to MLOps", description: "Understand the challenges of deploying ML models and how MLOps solves them.", type: "Learning", difficulty: "Intermediate", resources: [
                        { id: "res_ml_1_1_1", title: "MLOps Course by Coursera", type: "Course", url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops", provider: "Coursera", isFree: false }
                    ]}
                ]
            }
        ],
        lastUpdatedAt: "2025-01-15T10:00:00.000Z"
    },
    {
        id: "rm_qa_eng_001",
        slug: "qa-automation-engineer",
        title: "QA / Automation Engineer",
        shortDescription: "Ensure software quality through automated testing and quality assurance best practices.",
        longDescription: "Learn to write and maintain automated tests for web applications. This roadmap covers everything from testing fundamentals to advanced test automation frameworks.",
        level: "Beginner → Intermediate",
        domain: "Web",
        goal: "First job",
        estimatedDurationMonthsMin: 3,
        estimatedDurationMonthsMax: 5,
        estimatedMode: "part-time",
        prerequisites: [
            { id: "pre_qa_1", text: "Basic understanding of web development (HTML, CSS, JS).", mandatory: true }
        ],
        stages: [
            {
                id: "stg_qa_1", order: 1, title: "Stage 1: Web Automation with Cypress", summary: "Learn to write end-to-end tests for web applications using Cypress.", estimatedWeeksMin: 4, estimatedWeeksMax: 6,
                steps: [
                    { id: "step_qa_1_1", order: 1, title: "Cypress Fundamentals", description: "Get started with Cypress and write your first automated tests.", type: "Learning", difficulty: "Beginner", resources: [
                        { id: "res_qa_1_1_1", title: "Cypress Documentation", type: "Documentation", url: "https://docs.cypress.io/", provider: "Cypress", isFree: true }
                    ]}
                ]
            }
        ],
        lastUpdatedAt: "2025-01-15T10:00:00.000Z"
    }
]
