'use client';
import React, { useState, useEffect } from "react";
import { STAGES, Stage, RoadmapCertificate } from "@/lib/roadmaps-data";
import { quizData } from "@/lib/quiz-data";
import { Quiz } from "@/components/ui/quiz";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-cyan-300">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.052-.143Z" clipRule="evenodd" />
  </svg>
);

export default function RoadmapsSection() {
  const [activeStage, setActiveStage] = useState<Stage | null>(null);
  const [activeQuiz, setActiveQuiz] = useState<Stage | null>(null);
  const [completedStages, setCompletedStages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const savedProgress = localStorage.getItem('roadmapProgress');
    if (savedProgress) {
      setCompletedStages(new Set(JSON.parse(savedProgress)));
    }
  }, []);

  const handleToggleComplete = (stageId: string) => {
    const newCompletedStages = new Set(completedStages);
    if (newCompletedStages.has(stageId)) {
      newCompletedStages.delete(stageId);
    } else {
      newCompletedStages.add(stageId);
    }
    setCompletedStages(newCompletedStages);
    localStorage.setItem('roadmapProgress', JSON.stringify(Array.from(newCompletedStages)));
  };

  const handleChipClick = (e: React.MouseEvent, stageId: string) => {
    e.preventDefault();
    const element = document.getElementById(stageId);
    if (element) {
      setActiveStage(null);
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }
  };

  return (
    <section className="w-full px-4 md:px-8 py-10 bg-[#070B12] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-xl border border-cyan-400/70 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950 p-8 md:p-10 shadow-[0_0_0_1px_rgba(34,211,238,0.15)]">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">Roadmaps</h2>
          <p className="mt-3 text-base md:text-xl text-white/70 max-w-3xl">
            Track your progress through our guided learning paths. Your journey is saved automatically.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-9 top-0 h-full w-0.5 bg-cyan-400/20 rounded-full" />
          <div className="absolute left-9 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 blur-sm animate-pulse" />

          <div className="space-y-12">
            {STAGES.map((stage) => (
              <div key={stage.id} id={stage.id}>
                <StageCard 
                  stage={stage} 
                  onExplore={() => setActiveStage(stage)} 
                  onStartQuiz={() => setActiveQuiz(stage)}
                  isCompleted={completedStages.has(stage.id)}
                  onToggleComplete={() => handleToggleComplete(stage.id)}
                />
              </div>
            ))}
          </div>
        </div>

        <StageModal stage={activeStage} onClose={() => setActiveStage(null)} onChipClick={handleChipClick} />
        <QuizModal stage={activeQuiz} onClose={() => setActiveQuiz(null)} />
      </div>
    </section>
  );
}

function StageCard({ stage, onExplore, onStartQuiz, isCompleted, onToggleComplete }: { stage: Stage; onExplore: () => void; onStartQuiz: () => void; isCompleted: boolean; onToggleComplete: () => void; }) {
  return (
    <div className="relative pl-20">
      <div className={`absolute left-6 top-1 h-6 w-6 rounded-full flex items-center justify-center ${isCompleted ? 'bg-cyan-900/50 border-2 border-cyan-400/90' : 'bg-slate-800 border-2 border-cyan-400/80'}`}>
        {isCompleted ? <CheckIcon /> : <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />}
      </div>
      <div className="rounded-xl border border-white/10 bg-slate-900/60 backdrop-blur-sm p-6 shadow-lg hover:border-cyan-400/30 transition-colors">
        <h3 className="text-2xl font-bold text-white">{stage.title}</h3>
        <p className="mt-2 text-white/60">{stage.why}</p>
        <div className="mt-4">
          <h4 className="font-semibold text-sm text-white/80">Key Skills:</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {stage.skills.map((skill) => <Chip key={skill}>{skill}</Chip>)}
          </div>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-sm text-white/80">You can build:</h4>
          <p className="mt-1 text-white/70 text-sm">{stage.build}</p>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <button onClick={onExplore} className="inline-flex items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-200 hover:bg-cyan-400/20 transition">
            Explore Stage
          </button>
          <button onClick={onStartQuiz} className="inline-flex items-center justify-center rounded-lg border border-purple-400/40 bg-purple-400/10 px-5 py-2.5 text-sm font-medium text-purple-200 hover:bg-purple-400/20 transition">
            Start Quiz
          </button>
          <button onClick={onToggleComplete} disabled={isCompleted} className="ml-auto inline-flex items-center justify-center rounded-lg border border-white/20 bg-transparent px-5 py-2.5 text-sm font-medium text-white/70 transition enabled:hover:bg-white/5 disabled:opacity-50 disabled:cursor-not-allowed">
            {isCompleted ? 'Completed' : 'Mark as Done'}
          </button>
        </div>
      </div>
    </div>
  );
}

function StageModal({ stage, onClose, onChipClick }: { stage: Stage | null; onClose: () => void; onChipClick: (e: React.MouseEvent, stageId: string) => void; }) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (stage) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [stage, onClose]);

  if (!stage) return null;

  const findStageTitle = (id: string) => STAGES.find(s => s.id === id)?.title.split(' — ')[1] || id;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0A0F1A] shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 p-6">
          <h2 className="text-xl font-bold text-white">{stage.title}</h2>
          <button onClick={onClose} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition">Close</button>
        </div>
        <div className="max-h-[75vh] overflow-y-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          <Section title="📘 Topics to Learn">
            <ul className="list-disc list-inside space-y-2 text-sm text-white/70">{stage.modal.topics.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </Section>
          <Section title="🧠 Concepts to Understand">
            <ul className="list-disc list-inside space-y-2 text-sm text-white/70">{stage.modal.concepts.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </Section>
          <Section title="🛠️ What You Can Build">
            <ul className="list-disc list-inside space-y-2 text-sm text-white/70">{stage.modal.canBuild.map((item, i) => <li key={i}>{item}</li>)}</ul>
          </Section>
          <div className="space-y-8">
            <Section title="🔗 Depends On">
              <div className="flex flex-wrap gap-2">
                {stage.modal.dependsOn.length > 0 ? stage.modal.dependsOn.map(id => (
                  <a key={id} href={`#${id}`} onClick={(e) => onChipClick(e, id)}><Chip clickable>{findStageTitle(id)}</Chip></a>
                )) : <p className="text-sm text-white/50">Nothing! This is the starting point.</p>}
              </div>
            </Section>
            <Section title="🚀 Unlocks Next">
              <div className="flex flex-wrap gap-2">
                {stage.modal.unlocks.length > 0 ? stage.modal.unlocks.map(id => (
                  <a key={id} href={`#${id}`} onClick={(e) => onChipClick(e, id)}><Chip clickable>{findStageTitle(id)}</Chip></a>
                )) : <p className="text-sm text-white/50">The end of this roadmap path.</p>}
              </div>
            </Section>
          </div>

          {stage.modal.certificates.length > 0 && (
            <div className="md:col-span-2">
                <Section title="🎓 Recommended Certificates">
                    <div className="grid gap-3">
                        {stage.modal.certificates.map((cert, i) => <CertificateLink key={i} cert={cert} />)}
                    </div>
                </Section>
            </div>
          )}
        </div>
      </div>
      <button className="fixed inset-0 -z-10 cursor-default" aria-hidden="true" onClick={onClose} />
    </div>
  );
}

function QuizModal({ stage, onClose }: { stage: Stage | null; onClose: () => void; }) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (stage) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [stage, onClose]);

  if (!stage) return null;

  const stageQuizData = quizData.find(q => q.id === stage.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0A0F1A] shadow-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 p-4">
          <h2 className="text-lg font-bold text-white/90 px-2">{stage.title.split(' — ')[1]} Quiz</h2>
          <button onClick={onClose} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition">Close</button>
        </div>
        <div className="p-2">
          {stageQuizData ? (
            <Quiz questions={stageQuizData.questions} stageTitle={stage.title.split(' — ')[1]} />
          ) : (
            <div className="p-8 text-center text-white/70">
              <p>No quiz available for this stage yet. Please check back later!</p>
            </div>
          )}
        </div>
      </div>
      <button className="fixed inset-0 -z-10 cursor-default" aria-hidden="true" onClick={onClose} />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 text-base font-semibold text-white/90 flex items-center gap-2">
        <span>{title.split(' ')[0]}</span>
        <span>{title.substring(title.indexOf(' ') + 1)}</span>
      </h3>
      {children}
    </div>
  );
}

function Chip({ children, clickable }: { children: React.ReactNode; clickable?: boolean }) {
  const baseClasses = "inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70";
  const clickableClasses = clickable ? "transition hover:bg-white/10 hover:border-cyan-400/30 cursor-pointer" : "";
  return <span className={`${baseClasses} ${clickableClasses}`}>{children}</span>;
}

function CertificateLink({ cert }: { cert: RoadmapCertificate }) {
    return (
        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm hover:border-cyan-400/30 transition">
            <div>
                <p className="font-medium text-white/90">{cert.title}</p>
                <p className="text-xs text-white/60">{cert.provider}</p>
            </div>
            <span className="text-xs text-cyan-300">View</span>
        </a>
    );
}
