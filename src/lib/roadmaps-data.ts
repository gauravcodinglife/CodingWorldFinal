
export type RoadmapCertificate = { title: string; provider: string; url: string };

export type Stage = {
  id: string;
  title: string;
  why: string;
  skills: string[];
  build: string;
  modal: {
    topics: string[];
    concepts: string[];
    canBuild: string[];
    dependsOn: string[]; // Stores stage IDs
    unlocks: string[];   // Stores stage IDs
    certificates: RoadmapCertificate[];
  };
};

export const STAGES: Stage[] = [
  {
    id: "foundations",
    title: "Stage 1 — Computer & Internet Foundations",
    why: "Understand how the web actually works from the ground up, before writing a single line of code.",
    skills: ["OS & Linux Basics", "Internet & DNS", "HTTP/HTTPS", "IP, Ports, TCP/UDP", "Terminal Usage"],
    build: "Host a static website manually from a bare-metal server.",
    modal: {
      topics: [
        "Core Linux Commands (ls, cd, pwd, mkdir, rm, cp, mv)",
        "File Permissions and Ownership (chmod, chown)",
        "The Client-Server Communication Model",
        "Anatomy of a URL (protocol, domain, path, query params, fragment)",
        "The full HTTP Request/Response Cycle (headers, body, status codes)",
        "Viewing network requests in your browser\'s developer tools",
      ],
      concepts: [
        "Operating System Fundamentals (Processes, Memory, Filesystems)",
        "How the Internet Delivers Data (Packets, IP Routing, TCP vs UDP)",
        "How DNS (Domain Name System) resolves a domain to an IP address",
        "Symmetric vs. Asymmetric Encryption and the HTTPS handshake",
        "The role of a command-line interface (CLI) vs. a graphical user interface (GUI)",
        "What ports are and how they are used for networking",
      ],
      canBuild: [
        "Navigate a Linux server filesystem and manage files using only the terminal",
        "Explain step-by-step how a browser requests and receives a webpage",
        "Manually configure a basic Nginx web server to serve a static HTML file",
        "Use terminal commands like `ping` and `curl` to debug network issues",
      ],
      dependsOn: [],
      unlocks: ["web"],
      certificates: [
        { title: "Google IT Support Professional Certificate", provider: "Coursera", url: "https://www.coursera.org/professional-certificates/google-it-support" },
        { title: "The Linux Foundation Certified IT Associate (LFCA)", provider: "The Linux Foundation", url: "https://training.linuxfoundation.org/certification/linux-foundation-certified-it-associate-lfca/" },
      ],
    },
  },
  {
    id: "web",
    title: "Stage 2 — Web Foundations",
    why: "Learn to structure and style web content, the universal building blocks of any website or application.",
    skills: ["HTML5", "CSS3", "Flexbox & Grid", "Responsive Design", "Git & GitHub"],
    build: "A multi-page, fully responsive, and version-controlled portfolio website.",
    modal: {
      topics: [
        "Writing a valid HTML Document Structure (Doctype, head, body)",
        "Using Semantic HTML Tags (header, footer, nav, article, section, aside)",
        "Advanced CSS Selectors, specificity, and pseudo-classes/elements",
        "The complete CSS Box Model (margin, border, padding, content)",
        "CSS Flexbox for 1D layouts and CSS Grid for 2D layouts",
        "Core Git commands (clone, add, commit, push, pull, branch, merge, rebase)",
      ],
      concepts: [
        "The principle of Separation of Concerns (HTML for structure, CSS for style)",
        "Mobile-First Responsive Design strategy vs. Desktop-First",
        "The importance of version control and a single source of truth",
        "Collaborating on code with GitHub (Pull Requests, Code Reviews, Merge Conflicts)",
        "How to host a static site for free using GitHub Pages",
      ],
      canBuild: [
        "A personal portfolio site showcasing your skills and projects",
        "Multi-page, responsive landing pages for products or marketing campaigns",
        "Pixel-perfect and fully responsive clones of simple, existing websites",
        "Contribute to open-source projects on GitHub by submitting pull requests",
      ],
      dependsOn: ["foundations"],
      unlocks: ["javascript"],
      certificates: [
        { title: "Responsive Web Design", provider: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
      ],
    },
  },
  {
    id: "javascript",
    title: "Stage 3 — JavaScript & Browser",
    why: "Bring websites to life by adding interactivity, handling user input, and manipulating the page content.",
    skills: ["ES6+ Syntax", "DOM Manipulation", "Async (Promises, await)", "The Event Loop", "Fetch API & Local Storage"],
    build: "A dynamic, single-page web application that interacts with a third-party API.",
    modal: {
      topics: [
        "Modern JavaScript (ES6+): let/const, arrow functions, destructuring, template literals",
        "Advanced Array and Object Methods (.map, .filter, .reduce, .find)",
        "Selecting, creating, and changing HTML elements and styles via the DOM",
        "Handling all types of user events (clicks, forms, keyboard, mouse movements)",
        "Making asynchronous HTTP requests to public APIs using the Fetch API",
        "Storing data in the browser with LocalStorage and SessionStorage",
      ],
      concepts: [
        "The Single-Threaded, Non-Blocking Nature of JavaScript",
        "The relationship between the Call Stack, Callback Queue, and Event Loop",
        "Understanding Synchronous vs. Asynchronous Code execution and when to use each",
        "Browser Storage Mechanisms and their limitations (size, persistence)",
        "How browsers parse HTML, build the DOM tree, and execute JavaScript code",
        "JavaScript modules (import/export) for organizing code",
      ],
      canBuild: [
        "Interactive data visualizations using libraries like Chart.js",
        "Complex to-do list or note-taking applications with persistent storage",
        "A weather app, recipe finder, or movie database that fetches and displays data from a public API",
        "A browser-based game with user interaction and scoring",
      ],
      dependsOn: ["web"],
      unlocks: ["frontend"],
      certificates: [
        { title: "JavaScript Algorithms and Data Structures", provider: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/" },
      ],
    },
  },
  {
    id: "frontend",
    title: "Stage 4 — Frontend Engineering",
    why: "Build complex, scalable, and maintainable user interfaces using modern, component-based frameworks.",
    skills: ["React & Routing", "State Management", "Component Hooks", "Next.js (App Router)", "Performance & Accessibility"],
    build: "A feature-rich, server-rendered dashboard or a simplified social media clone.",
    modal: {
      topics: [
        "Creating reusable functional components with props and state (useState)",
        "Client-side routing with React Router or Next.js App Router",
        "Managing global application state with Context API, Zustand, or Redux Toolkit",
        "Using effect hooks (useEffect) to handle side effects like data fetching",
        "Building and validating forms with libraries like React Hook Form",
        "Deploying a production-ready Next.js application to Vercel or Netlify",
      ],
      concepts: [
        "Component-Based Architecture and the benefits of UI reusability",
        "The Virtual DOM and the reconciliation process in React",
        "Server-Side Rendering (SSR) vs. Static Site Generation (SSG) vs. Client-Side Rendering (CSR)",
        "Optimizing Web Vitals (LCP, FID, CLS) for better user experience and SEO",
        "Implementing web accessibility (a11y) using ARIA attributes and semantic HTML",
        "Unit and integration testing for components (e.g., with Jest and React Testing Library)",
      ],
      canBuild: [
        "A multi-page admin dashboard with protected routes, charts, and data tables",
        "An e-commerce storefront with product pages, a shopping cart, and a checkout flow",
        "A simplified social media feed with posts, comments, and user profiles",
        "A single-page application (SPA) with complex state management needs",
      ],
      dependsOn: ["javascript"],
      unlocks: ["backend"],
      certificates: [
        { title: "Meta Front-End Developer Professional Certificate", provider: "Coursera", url: "https://www.coursera.org/professional-certificates/meta-front-end-developer" },
        { title: "The Odin Project: Full Stack JavaScript", provider: "The Odin Project", url: "https://www.theodinproject.com/paths/full-stack-javascript" },
      ],
    },
  },
  {
    id: "backend",
    title: "Stage 5 — Backend Engineering",
    why: "Power the frontend by building secure, efficient, and scalable server-side logic and APIs.",
    skills: ["Node.js & Express", "REST APIs", "Authentication (JWT/OAuth)", "MVC Architecture", "Middleware"],
    build: "A production-ready, authenticated REST API for a web or mobile application.",
    modal: {
      topics: [
        "Creating a server and handling HTTP requests with Node.js and Express",
        "Designing and implementing RESTful API endpoints for all CRUD operations",
        "Implementing robust request validation and structured error handling",
        "Securing passwords with hashing (bcrypt) and implementing token-based authentication (JWT)",
        "Structuring complex applications with the Model-View-Controller (MVC) pattern",
        "Writing and using custom Express middleware for logging, auth, etc.",
      ],
      concepts: [
        "The difference between Stateless and Stateful APIs",
        "API Security Best Practices (rate limiting, input sanitization, CORS)",
        "The complete request-response lifecycle in a server-side framework",
        "The role of an ORM (e.g., Prisma) or ODM (e.g., Mongoose) for database interaction",
        "Environment variables for managing configuration and secrets",
        "Authentication vs. Authorization",
      ],
      canBuild: [
        "A complete user authentication system with signup, login, and protected API routes",
        "A headless API for a Content Management System (CMS) or a blog",
        "The backend service for a real-time mobile application with user accounts",
        "An API that integrates with third-party services like payment gateways or email providers",
      ],
      dependsOn: ["javascript"],
      unlocks: ["databases"],
      certificates: [
        { title: "Meta Back-End Developer Professional Certificate", provider: "Coursera", url: "https://www.coursera.org/professional-certificates/meta-back-end-developer" },
      ],
    },
  },
  {
    id: "databases",
    title: "Stage 6 — Databases & Caching",
    why: "Efficiently and safely store, retrieve, and optimize the data that powers your applications.",
    skills: ["SQL & NoSQL", "Data Modeling", "Prisma (ORM)", "Database Indexes", "Redis Caching"],
    build: "A high-performance, data-driven application with optimized queries and a caching layer.",
    modal: {
      topics: [
        "Designing normalized relational schemas (PostgreSQL) and flexible NoSQL schemas (MongoDB)",
        "Writing complex SQL queries with various JOINs, aggregations, and subqueries",
        "Using a modern ORM like Prisma to ensure type-safe database interaction from your backend",
        "Understanding and adding indexes to tables to speed up query performance",
        "Implementing a cache-aside caching strategy for frequent queries with Redis",
        "Handling database transactions to ensure data integrity",
      ],
      concepts: [
        "The ACID Properties (Atomicity, Consistency, Isolation, Durability) in relational databases",
        "Database Normalization (1NF, 2NF, 3NF) and its trade-offs",
        "The fundamental differences between SQL and NoSQL databases and when to use each",
        "Common caching strategies (Cache-Aside, Write-Through, Read-Through, Write-Back)",
        "The N+1 query problem and how to solve it",
        "Database replication and sharding at a high level",
      ],
      canBuild: [
        "Applications with complex, interconnected data models like social networks or booking systems",
        "E-commerce sites with product catalogs, user profiles, shopping carts, and order history",
        "High-performance systems that require sub-millisecond data access for common queries",
        "A system that can handle atomic, multi-step operations like financial transactions",
      ],
      dependsOn: ["backend"],
      unlocks: ["devops"],
      certificates: [
        { title: "PostgreSQL for Everybody", provider: "Coursera", url: "https://www.coursera.org/specializations/postgresql-for-everybody" },
        { title: "MongoDB Developer Professional Certificate", provider: "MongoDB", url: "https://learn.mongodb.com/learning-paths/mongodb-developer-professional-certificate" },
      ],
    },
  },
  {
    id: "devops",
    title: "Stage 7 — DevOps & Docker",
    why: "Package, test, and deploy your applications reliably and consistently on any server infrastructure.",
    skills: ["Linux Servers", "Docker & Compose", "Nginx", "CI/CD Pipelines", "Environment Variables"],
    build: "A full-stack application completely managed, containerized, and automatically deployed with Docker.",
    modal: {
      topics: [
        "Writing a multi-stage, optimized Dockerfile for a Node.js or frontend application",
        "Using Docker Compose to define and run multi-container setups (app, db, cache, reverse proxy)",
        "Configuring Nginx as a high-performance reverse proxy and static content server",
        "Building a full CI/CD pipeline with GitHub Actions to automate builds, tests, and deployments",
        "Managing secrets and environment variables securely for different environments",
        "Basic server monitoring and log inspection",
      ],
      concepts: [
        "The difference between Containerization and Virtualization",
        "The lifecycle of Docker Images and Containers (build, run, stop, remove)",
        "The core workflows of Continuous Integration (CI) & Continuous Deployment/Delivery (CD)",
        "The principles of Infrastructure as Code (IaC) and declarative configuration",
        "Blue/Green and Canary deployment strategies",
      ],
      canBuild: [
        "A reproducible local development environment that perfectly mirrors production",
        "An automated pipeline that deploys code to a cloud server on every `git push` to the main branch",
        "A portable, version-controlled application that can run on any machine with Docker installed",
        "A simple load-balanced setup with multiple instances of your application container",
      ],
      dependsOn: ["backend", "databases"],
      unlocks: ["cloud"],
      certificates: [
         { title: "Docker Certified Associate (DCA)", provider: "Docker", url: "https://www.docker.com/learning-center/certification/" },
         { title: "GitHub Actions Certified Professional", provider: "GitHub", url: "https://docs.github.com/en/actions" },
      ],
    },
  },
  {
    id: "cloud",
    title: "Stage 8 — Cloud & Networking",
    why: "Deploy, secure, and scale your applications on the public internet for anyone to access reliably.",
    skills: ["AWS/GCP/Azure Basics", "VPC & Subnets", "DNS & Domains", "SSL Certificates", "Load Balancers"],
    build: "A highly available, secure, and scalable application hosted in a major cloud provider.",
    modal: {
      topics: [
        "Provisioning a virtual server (EC2/Compute Engine) and block storage (EBS/Persistent Disk)",
        "Configuring a Virtual Private Cloud (VPC) with public and private subnets and security groups",
        "Pointing a custom domain name to your application using a managed DNS service (Route 53/Cloud DNS)",
        "Generating and automatically renewing a free SSL certificate from Let\'s Encrypt for HTTPS",
        "Distributing traffic across multiple application instances with an Application Load Balancer",
        "Using object storage (S3/Cloud Storage) for assets and user uploads",
      ],
      concepts: [
        "Infrastructure as a Service (IaaS) vs. Platform as a Service (PaaS) vs. Serverless",
        "The importance of regions and availability zones for high availability",
        "Public vs. Private Networking, Security Groups, and Network ACLs",
        "High Availability vs. Fault Tolerance vs. Disaster Recovery",
        "The role and benefits of a Content Delivery Network (CDN) for performance",
        "Identity and Access Management (IAM) for securing cloud resources",
      ],
      canBuild: [
        "A personal project website or blog hosted on a cloud provider with a custom domain",
        "A backend API that is securely accessible from the public internet and scaled across multiple servers",
        "A simple, auto-scaling setup that can handle sudden traffic spikes without manual intervention",
        "A secure architecture where the database is not directly exposed to the internet",
      ],
      dependsOn: ["devops"],
      unlocks: ["system-design"],
      certificates: [
        { title: "AWS Certified Cloud Practitioner", provider: "AWS", url: "https://aws.amazon.com/certification/certified-cloud-practitioner/" },
        { title: "Microsoft Certified: Azure Fundamentals (AZ-900)", provider: "Microsoft", url: "https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/" },
        { title: "Google Associate Cloud Engineer", provider: "Google", url: "https://cloud.google.com/certification/associate-cloud-engineer" },
      ],
    },
  },
  {
    id: "system-design",
    title: "Stage 9 — System Design",
    why: "Understand the architectural principles and trade-offs behind building large-scale, resilient applications.",
    skills: ["Monolith vs. Microservices", "Load Balancing", "Caching Strategies", "Message Queues", "Designing Real Systems"],
    build: "A detailed architectural plan and diagram for a common large-scale application like Twitter, Netflix, or Uber.",
    modal: {
      topics: [
        "Analyzing the trade-offs of monolithic vs. microservice vs. serverless architectures",
        "Comparing different load balancing algorithms (Round Robin, Least Connections, IP Hash)",
        "Deep diving into database sharding, replication (primary-replica), and consistency models",
        "Using a message queue (RabbitMQ, SQS, Kafka) to decouple services and handle asynchronous tasks",
        "Applying common distributed system patterns like API Gateway, Service Discovery, and Circuit Breaker",
        "Choosing the right database (SQL vs. NoSQL) for different use cases (e.g., user data vs. analytics)",
      ],
      concepts: [
        "The 3 pillars of system design: Scalability, Reliability, and Availability",
        "Measuring and optimizing for Latency vs. Throughput",
        "Identifying and eliminating a Single Point of Failure (SPOF)",
        "The CAP Theorem (Consistency, Availability, Partition Tolerance) and its practical implications",
        "Push vs. Pull models of communication",
        "Idempotency in API design",
      ],
      canBuild: [
        "Clear, well-reasoned diagrams and explanations for system design interview questions",
        "High-level architectural proposals for new, complex application ideas, including technology choices",
        "In-depth critiques and suggestions for improving the scalability and reliability of existing systems",
        "A back-of-the-envelope calculation for estimating server, storage, and bandwidth needs",
      ],
      dependsOn: ["cloud"],
      unlocks: ["security"],
      certificates: [],
    },
  },
  {
    id: "security",
    title: "Stage 10 — Security",
    why: "Learn to identify, prevent, and protect your applications from common and critical vulnerabilities.",
    skills: ["HTTPS & Hashing", "XSS & CSRF", "SQL Injection", "Secure Headers", "OWASP Top 10"],
    build: "A security-hardened web application and API that can withstand common automated attacks.",
    modal: {
      topics: [
        "Implementing secure password storage using modern hashing & salting algorithms (e.g., Argon2)",
        "Sanitizing all user-generated input and content to prevent Cross-Site Scripting (XSS) attacks",
        "Using anti-CSRF tokens to protect against malicious cross-site request forgery attacks",
        "Applying essential security headers like CSP, HSTS, X-Frame-Options, and CORS policies",
        "Conducting a basic security audit of your own application based on the OWASP Top 10",
        "Using prepared statements (parameterized queries) to prevent SQL injection",
      ],
      concepts: [
        "The Principle of Least Privilege and Defense in Depth",
        "Common attack vectors (e.g., man-in-the-middle, phishing, malware) and their mitigation",
        "The importance of automated dependency scanning for known vulnerabilities (e.g., `npm audit`)",
        "The difference between Authentication (who you are) and Authorization (what you can do)",
        "The Same-Origin Policy and why it\'s a cornerstone of web security",
      ],
      canBuild: [
        "A login and session management system that is resilient to session hijacking and replay attacks",
        "A web application that passes basic automated penetration testing security audits",
        "A secure file upload system that prevents the execution of malicious uploaded files",
        "An API that correctly implements role-based access control (RBAC)",
      ],
      dependsOn: ["system-design"],
      unlocks: ["specializations"],
      certificates: [
        { title: "CompTIA Security+", provider: "CompTIA", url: "https://www.comptia.org/certifications/security" },
        { title: "(ISC)² Certified in Cybersecurity (CC)", provider: "(ISC)²", url: "https://www.isc2.org/Certifications/CC" },
      ],
    },
  },
  {
    id: "specializations",
    title: "Stage 11 — Specializations",
    why: "Go beyond the standard full-stack path to explore advanced, high-demand skills that set you apart.",
    skills: ["WebSockets", "Real-time Apps", "Microservices", "AI APIs", "GraphQL"],
    build: "A real-time chat application, a serverless function, or an AI-powered data analysis tool.",
    modal: {
      topics: [
        "Building a bidirectional WebSocket server and client with libraries like Socket.IO or ws",
        "Designing, implementing, and deploying a scalable microservices-based architecture",
        "Integrating with large language models (LLMs) like OpenAI for text generation or analysis",
        "Creating a flexible and efficient GraphQL API server and consuming it from the frontend",
        "Developing and deploying serverless functions (e.g., AWS Lambda, Vercel Functions)",
        "Using gRPC for high-performance inter-service communication",
      ],
      concepts: [
        "Real-time communication protocols: WebSockets vs. Long-Polling vs. Server-Sent Events (SSE)",
        "Event-driven and message-based architectural patterns",
        "The role of an API Gateway and Service Discovery in a microservices environment",
        "The fundamental trade-offs and query optimization techniques of GraphQL vs. REST",
        "The benefits and challenges of serverless computing (cost, cold starts, scalability)",
      ],
      canBuild: [
        "Live chat applications, collaborative document editors, or real-time notification systems",
        "Applications that use AI for summarization, translation, sentiment analysis, or data extraction",
        "Complex, decoupled systems with independently deployable and scalable services",
        "A highly efficient mobile app backend using GraphQL to reduce data fetching",
        "An event-driven system that reacts to changes in a database or message queue",
      ],
      dependsOn: ["security"],
      unlocks: [],
      certificates: [],
    },
  },
];
