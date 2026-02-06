
export const quizData = [
  {
    id: "foundations",
    title: "Stage 1: Computer & Internet Foundations",
    questions: [
      {
        question: "What does the 'ls' command do in a Linux terminal?",
        options: ["List files and directories", "Look for a string", "Launch service", "Leave session"],
        correctAnswer: "List files and directories",
      },
      {
        question: "Which of the following is responsible for translating domain names into IP addresses?",
        options: ["HTTP", "TCP/IP", "DNS", "SSH"],
        correctAnswer: "DNS",
      },
      {
        question: "What is the standard port for HTTPS?",
        options: ["80", "22", "443", "8080"],
        correctAnswer: "443",
      },
      {
        question: "What does 'chmod' command do?",
        options: ["Change memory", "Change ownership", "Change mode (permissions)", "Check module"],
        correctAnswer: "Change mode (permissions)",
      },
      {
        question: "In the client-server model, which party typically initiates a request?",
        options: ["The server", "The client", "The router", "The firewall"],
        correctAnswer: "The client",
      },
      {
        question: "Which protocol is connectionless and does not guarantee packet delivery?",
        options: ["TCP", "UDP", "HTTP", "FTP"],
        correctAnswer: "UDP",
      },
      {
        question: "What does a 404 HTTP status code mean?",
        options: ["OK", "Internal Server Error", "Forbidden", "Not Found"],
        correctAnswer: "Not Found",
      },
      {
        question: "Which part of a URL specifies the protocol?",
        options: ["Domain name", "Path", "Query parameter", "Scheme (e.g., https://)"],
        correctAnswer: "Scheme (e.g., https://)",
      },
      {
        question: "What is the purpose of the `ping` command?",
        options: ["To check network connectivity between two devices", "To print a file", "To pause a process", "To power-off the machine"],
        correctAnswer: "To check network connectivity between two devices",
      },
      {
        question: "Asymmetric encryption uses...",
        options: ["A single key for both encryption and decryption", "A pair of keys: a public key for encryption and a private key for decryption", "No keys at all", "A temporary key that changes with every session"],
        correctAnswer: "A pair of keys: a public key for encryption and a private key for decryption",
      },
    ],
  },
  {
    id: "web",
    title: "Stage 2: Web Foundations",
    questions: [
        {
            question: "What does HTML stand for?",
            options: ["HyperText Markup Language", "High-Level Text Machine Language", "Hyper-Transferable Markup Logic", "Home Tool Markup Language"],
            correctAnswer: "HyperText Markup Language",
        },
        {
            question: "What is the primary purpose of CSS?",
            options: ["To structure web content", "To style web pages", "To handle user interactions", "To manage server-side logic"],
            correctAnswer: "To style web pages",
        },
        {
            question: "Which HTML tag is used to create a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<p>"],
            correctAnswer: "<a>",
        },
        {
            question: "What does the CSS property `display: flex;` do?",
            options: ["It makes text bold", "It enables a flexible box layout model", "It hides the element", "It changes the font size"],
            correctAnswer: "It enables a flexible box layout model",
        },
        {
            question: "What is the purpose of the `git commit` command?",
            options: ["To upload changes to a remote repository", "To create a new branch", "To save changes to the local repository", "To discard changes"],
            correctAnswer: "To save changes to the local repository",
        },
        {
            question: "Which of the following is NOT a semantic HTML element?",
            options: ["<header>", "<article>", "<footer>", "<div>"],
            correctAnswer: "<div>",
        },
        {
            question: "In CSS, what is the box model?",
            options: ["A model for creating 3D shapes", "A design pattern for layout", "A concept that treats every HTML element as a rectangular box", "A way to organize CSS files"],
            correctAnswer: "A concept that treats every HTML element as a rectangular box",
        },
        {
            question: "What does \'Mobile-First Responsive Design\' mean?",
            options: ["Designing for mobile devices only", "Designing for desktop first, then adapting to mobile", "Designing for mobile devices first, then scaling up to larger screens", "Using a separate website for mobile users"],
            correctAnswer: "Designing for mobile devices first, then scaling up to larger screens",
        },
        {
            question: "What is a 'pull request' in the context of GitHub?",
            options: ["A request to download code from a repository", "A way to notify others about changes you\'ve pushed to a branch", "A command to delete a repository", "A request to undo a commit"],
            correctAnswer: "A way to notify others about changes you\'ve pushed to a branch",
        },
        {
            question: "How can you apply CSS styles to a specific HTML element with an ID of \'main-title\'?",
            options: [".main-title { ... }", "#main-title { ... }", "main-title { ... }", "<main-title> { ... }"],
            correctAnswer: "#main-title { ... }",
        },
    ],
  },
];
