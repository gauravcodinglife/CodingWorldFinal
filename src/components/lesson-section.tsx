"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";
import { useAuth } from "@/context/auth-context";

type Props = {
  lessonIndex: number;
  isCompleted: boolean;
  loading: boolean;
  onToggle: (index: number) => Promise<void>;
};

export function MarkCompleteButton({ lessonIndex, isCompleted, loading, onToggle }: Props) {
  const { user } = useAuth();
  const [toggling, setToggling] = useState(false);

  if (!user) return null;

  async function handleClick() {
    if (toggling) return;
    setToggling(true);
    await onToggle(lessonIndex);
    setToggling(false);
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Loader2 size={15} className="animate-spin" />
        Loading…
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={toggling}
      className={
        "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed " +
        (isCompleted
          ? "bg-green-500/15 text-green-400 border border-green-500/30 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30"
          : "bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25")
      }
    >
      {toggling ? (
        <Loader2 size={15} className="animate-spin" />
      ) : isCompleted ? (
        <CheckCircle2 size={15} />
      ) : (
        <Circle size={15} />
      )}
      {toggling ? "Saving…" : isCompleted ? "Completed — Mark Incomplete" : "Mark as Complete"}
    </button>
  );
}
