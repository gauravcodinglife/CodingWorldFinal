# 🌍 CodingWorld: Master the Cloud, One Command at a Time

> **An interactive, AI-powered learning platform for mastering Cloud & DevOps technologies through simulated environments.**

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://coding-world-final-sy61.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/Connect-LinkedIn-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/gaurav-chavan-codinglife/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)

---

## 🚀 The Vision

Traditional learning is passive. **CodingWorld** is active.
We bridge the gap between theory and practice by providing a **Simulated CLI Environment** and **Live Dashboard Simulations**. Users don't just watch videos; they type commands, configure infrastructure, and solve real-world scenarios in a safe, sandboxed environment.

![Platform Hero](<img width="1878" height="892" alt="image" src="https://github.com/user-attachments/assets/ce0ef702-9426-444a-92f4-bf38572558e7" />
)
*Figure 1: Interactive landing page with simulated terminal.*

---

## ✨ Core Features

### 🖥️ Interactive CLI Practice Terminal
Stop reading about commands. Start typing them. Our simulated terminal validates user input in real-time.
*   **Real CLI Simulation:** Practice Linux, Docker, and K8s commands without needing a local setup.
*   **AI DevOps Mentor:** Stuck? Our AI analyzes your command and suggests the next step or explains the syntax.

![CLI Terminal](<img width="1694" height="743" alt="image" src="https://github.com/user-attachments/assets/e1efec40-ad9a-4d7b-a26a-a638addd5c7a" />
)
*Figure 2: AI-powered CLI practice environment.*

### 🗺️ Structured Learning Roadmaps
From "Hello World" to "System Design." We offer guided paths for every career stage.
*   **30 Days to Cloud Engineer:** A day-by-day breakdown of AWS, Networking, and Security.
*   **Role-Based Tracks:** DevOps, Backend, Frontend, and Security specializations.

![Roadmap View](<img width="1270" height="3957" alt="image" src="https://github.com/user-attachments/assets/e633f786-e360-470f-91d2-691cf7d4d173" />
)
*Figure 3: Comprehensive 30-day Cloud Engineer roadmap.*

### 🎓 Comprehensive Learning Tracks
Deep-dive modules with "Problem-First" learning methodology.
*   **Linux Fundamentals:** File systems, permissions, and shell scripting.
*   **Containerization:** Docker & Kubernetes mastery.
*   **Cloud Platforms:** AWS, GCP, and Azure core services.

![Learning Tracks](<img width="1632" height="2001" alt="image" src="https://github.com/user-attachments/assets/ba151172-ffd5-4b24-8846-04445cd8df3c" />
)
*Figure 4: Modular learning tracks for various technologies.*

### 💼 Interview Preparation Suite
Ace your next technical interview with company-specific modules.
*   **Company Wise Prep:** Google, Amazon, Microsoft, Startups.
*   **System Design:** Scalable architecture patterns.
*   **Behavioral & DSA:** Comprehensive question banks.

![Interview Prep](<img width="1846" height="1718" alt="image" src="https://github.com/user-attachments/assets/1149d56f-d54d-43b3-a429-e071b1fecceb" />
)
*Figure 5: Company-specific interview preparation modules.*

### 📊 User Progress & Gamification
Track your growth with detailed analytics.
*   **Skill Radar:** Visualize your proficiency in Linux, Git, Docker, etc.
*   **Streaks & Badges:** Stay motivated with daily activity tracking.
*   **Course Progress:** Real-time completion metrics.

![User Dashboard](<img width="1632" height="2001" alt="image" src="https://github.com/user-attachments/assets/e8507329-7e31-4d67-ab28-ad160034f180" />
)
*Figure 6: Personalized user dashboard with progress tracking.*

---

## 🛠️ Tech Stack

| Component | Technology |
| :--- | :--- |
| **Frontend** | Next.js 14 (App Router), React, Tailwind CSS |
| **Language** | TypeScript |
| **Backend/Auth** | Firebase Authentication, Firestore Database |
| **Simulation** | Custom CLI Parser Engine, XTerm.js |
| **AI Integration** | AI Command Generator & Mentor |
| **Deployment** | Vercel, Docker |

---

## 📂 Project Structure

```bash
coding-world/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable UI components (Terminal, Cards)
│   ├── ai/               # AI Mentor logic & prompts
│   ├── lib/              # Utility functions & Firebase config
│   └── models/           # Data schemas
├── docs/
│   └── blueprint.md      # Product architecture docs
├── Dockerfile            # Containerization config
└── public/               # Static assets
```

---

## 🏗️ Architecture Highlights

1.  **Command Validation Engine:** A robust backend logic that parses user CLI input and compares it against expected outputs for each lab task.
2.  **State Management:** Uses Firebase Firestore to persist user progress, ensuring learners can pick up exactly where they left off.
3.  **Modular Content System:** Learning tracks are stored as structured data, allowing for easy addition of new courses without code changes.
4.  **CI/CD Integration:** Automated deployment pipelines ensure seamless updates to the production environment.

---

## 🚀 Getting Started

### Prerequisites
*   Node.js 18+
*   npm or yarn
*   Firebase Project Setup

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/coding-world.git

# 2. Install dependencies
npm install

# 3. Setup Environment Variables
# Create a .env.local file with your Firebase keys
cp .env.example .env.local

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the platform.

---

## 🎯 Learning Outcomes

By using CodingWorld, engineers will be able to:
*   ✅ Navigate Linux servers confidently.
*   ✅ Containerize applications using Docker.
*   ✅ Orchestrate clusters with Kubernetes.
*   ✅ Design secure cloud architectures on AWS/GCP.
*   ✅ Pass technical interviews at top tech companies.

---

## 🤝 Contributing

We welcome contributions! Whether it's adding new CLI commands, fixing UI bugs, or writing new course content.
1.  Fork the repo.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📬 Connect With Me

<div align="center">

**Built with ❤️ by Gaurav Chavan**

[🌐 Visit Website](https://coding-world-final-sy61.vercel.app/) &nbsp;&nbsp;|&nbsp;&nbsp; [💼 Connect on LinkedIn](https://www.linkedin.com/in/gaurav-chavan-codinglife/)

</div>

---

<div align="center">

© 2024 CodingWorld. All rights reserved.

</div>
```
4.  **Verify:** Go to your GitHub repo. You should see the **Live Demo** badge at the top working, and all images loading perfectly.

This README positions you not just as a coder, but as a **Product Builder**. Good luck! 🔥
