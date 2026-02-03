export type Role = 'Student' | 'Software Engineer' | 'DevOps & Cloud Engineer' | 'All';

export type SkillCategory =
  | 'Self-awareness & Feedback'
  | 'Teamwork & Collaboration'
  | 'Communication & Influence'
  | 'Conflict Management'
  | 'Ownership & Leadership'
  | 'Execution, Deadlines & Prioritization'
  | 'Learning & Growth'
  | 'Ambiguity & Change'
  | 'Problem Solving / Debugging'
  | 'Stakeholder / Customer Focus'
  | 'Reliability, Incidents & Operations';

export interface BehavioralQuestion {
  id: number;
  question: string;
  roles: Role[];
  category: SkillCategory;
}

export const questions: BehavioralQuestion[] = [
  // Student / Fresh Grad
  { id: 1, question: "Tell me about a team project at university where someone wasn’t contributing. What did you do?", roles: ['Student'], category: 'Teamwork & Collaboration' },
  { id: 2, question: "Describe a time you worked with classmates who had very different working styles.", roles: ['Student'], category: 'Teamwork & Collaboration' },
  { id: 3, question: "Tell me about a time you managed multiple exams, projects, or deadlines at once. How did you prioritize?", roles: ['Student'], category: 'Execution, Deadlines & Prioritization' },
  { id: 4, question: "Describe your most challenging course or project. How did you handle the difficulty?", roles: ['Student'], category: 'Execution, Deadlines & Prioritization' },
  { id: 5, question: "Tell me about a time you took initiative outside of class (club, hackathon, event, etc.).", roles: ['Student'], category: 'Ownership & Leadership' },
  { id: 6, question: "Describe a time you were responsible for an important part of a group project. What was your impact?", roles: ['Student'], category: 'Ownership & Leadership' },
  { id: 7, question: "Tell me about a time you received disappointing feedback or a lower grade than expected. What changed afterward?", roles: ['Student'], category: 'Learning & Growth' },
  { id: 8, question: "Describe a project you are passionate about. What did you learn from it?", roles: ['Student'], category: 'Learning & Growth' },
  { id: 9, question: "Tell me about a time you had to learn a new technology for a project. How did you approach it?", roles: ['Student'], category: 'Learning & Growth' },
  { id: 10, question: "Describe a situation where you had to solve a complex problem with limited guidance.", roles: ['Student'], category: 'Problem Solving / Debugging' },

  // Software Engineer
  { id: 11, question: "Tell me about a time you debugged a difficult bug. How did you find the root cause?", roles: ['Software Engineer'], category: 'Problem Solving / Debugging' },
  { id: 12, question: "Describe a time your first solution didn’t work. What did you do next?", roles: ['Software Engineer'], category: 'Problem Solving / Debugging' },
  { id: 13, question: "Tell me about a time you disagreed with a code-review comment or technical decision. How did you handle it?", roles: ['Software Engineer'], category: 'Conflict Management' },
  { id: 14, question: "Describe a time you had to explain a technical concept to a non-technical stakeholder.", roles: ['Software Engineer'], category: 'Communication & Influence' },
  { id: 15, question: "Describe a time you had to ship under a tight deadline. How did you balance speed and quality?", roles: ['Software Engineer'], category: 'Execution, Deadlines & Prioritization' },
  { id: 16, question: "Tell me about a time you worked with legacy code and had to make safe, incremental changes.", roles: ['Software Engineer'], category: 'Execution, Deadlines & Prioritization' },
  { id: 17, question: "Tell me about a time you improved code quality or reduced technical debt on your team.", roles: ['Software Engineer'], category: 'Ownership & Leadership' },
  { id: 18, question: "Describe a time you helped onboard a new teammate or documented a system for others.", roles: ['Software Engineer'], category: 'Ownership & Leadership' },
  { id: 19, question: "Tell me about a project that failed. What did you learn from it?", roles: ['Software Engineer', 'DevOps & Cloud Engineer'], category: 'Learning & Growth' },
  { id: 20, question: "Describe a time you had to persuade your team to adopt a new technology or tool.", roles: ['Software Engineer', 'DevOps & Cloud Engineer'], category: 'Communication & Influence' },

  // DevOps & Cloud Engineer
  { id: 21, question: "Tell me about a major incident or outage you were involved in. What was your role and what did you learn?", roles: ['DevOps & Cloud Engineer'], category: 'Reliability, Incidents & Operations' },
  { id: 22, question: "Describe a time you had to respond to an urgent on-call alert. How did you prioritize and communicate?", roles: ['DevOps & Cloud Engineer'], category: 'Reliability, Incidents & Operations' },
  { id: 23, question: "Tell me about a time you automated a manual process (deployments, environment setup, monitoring, etc.). What was the impact?", roles: ['DevOps & Cloud Engineer'], category: 'Execution, Deadlines & Prioritization' },
  { id: 24, question: "Describe a time you improved a CI/CD pipeline to make releases safer or faster.", roles: ['DevOps & Cloud Engineer'], category: 'Ownership & Leadership' },
  { id: 25, question: "Tell me about a time you had to balance cost optimization with performance or reliability.", roles: ['DevOps & Cloud Engineer'], category: 'Execution, Deadlines & Prioritization' },
  { id: 26, question: "Describe a situation where you anticipated a capacity or scaling issue and acted before it became a problem.", roles: ['DevOps & Cloud Engineer'], category: 'Problem Solving / Debugging' },
  { id: 27, question: "Tell me about a time you partnered with developers to improve the reliability of a service or application.", roles: ['DevOps & Cloud Engineer'], category: 'Teamwork & Collaboration' },
  { id: 28, question: "Describe a time you had to push back on a risky request from another team (e.g., skipping tests, bypassing change controls).", roles: ['DevOps & Cloud Engineer'], category: 'Conflict Management' },
  { id: 29, question: "Tell me about a time you identified a security or configuration risk in your infrastructure. What actions did you take?", roles: ['DevOps & Cloud Engineer'], category: 'Reliability, Incidents & Operations' },
  { id: 30, question: "How do you stay up-to-date with the latest trends in cloud technologies and DevOps?", roles: ['DevOps & Cloud Engineer'], category: 'Learning & Growth' },

  // Shared / General
  { id: 31, question: "Tell me about a strength you’re proud of. How has it helped your team?", roles: ['All'], category: 'Self-awareness & Feedback' },
  { id: 32, question: "Tell me about a time you received tough feedback. How did you respond and what changed?", roles: ['All'], category: 'Self-awareness & Feedback' },
  { id: 33, question: "Tell me about a time you had to work with a difficult person. How did you handle it?", roles: ['All'], category: 'Teamwork & Collaboration' },
  { id_34: 34, question: "Describe a time you had a conflict with a teammate. What was it about and how did you resolve it?", roles: ['All'], category: 'Conflict Management' },
  { id: 35, question: "Tell me about a time you went above and beyond what was expected of you.", roles: ['All'], category: 'Ownership & Leadership' },
  { id: 36, question: "Describe a long-term project you worked on. How did you keep yourself motivated?", roles: ['All'], category: 'Execution, Deadlines & Prioritization' },
  { id: 37, question: "Tell me about a time you had to adapt to a major change in a project or team.", roles: ['All'], category: 'Ambiguity & Change' },
  { id: 38, question: "Describe a situation where you were not able to meet a deadline. What did you do?", roles: ['All'], category: 'Execution, Deadlines & Prioritization' },
  { id: 39, question: "What’s the most innovative idea you’ve implemented?", roles: ['All'], category: 'Problem Solving / Debugging' },
  { id: 40, question: "Tell me about a time you had to deal with an unhappy customer or stakeholder.", roles: ['All'], category: 'Stakeholder / Customer Focus' }
];

export const skillCategories: SkillCategory[] = [
  'Self-awareness & Feedback',
  'Teamwork & Collaboration',
  'Communication & Influence',
  'Conflict Management',
  'Ownership & Leadership',
  'Execution, Deadlines & Prioritization',
  'Learning & Growth',
  'Ambiguity & Change',
  'Problem Solving / Debugging',
  'Stakeholder / Customer Focus',
  'Reliability, Incidents & Operations',
];

export const roles: Role[] = ['Student', 'Software Engineer', 'DevOps & Cloud Engineer'];
