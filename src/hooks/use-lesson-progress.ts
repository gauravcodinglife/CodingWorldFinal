"use client";

import { useState, useEffect, useCallback } from "react";

export function useLessonProgress(courseId: string) {
  const [completedIds, setCompletedIds] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/courses/${courseId}`)
      .then((r) => r.json())
      .then((data) => {
        setCompletedIds(new Set<number>(data.completedLessonIds ?? []));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [courseId]);

  const toggleLesson = useCallback(
    async (lessonIndex: number) => {
      const completed = !completedIds.has(lessonIndex);

      // Optimistic update
      setCompletedIds((prev) => {
        const next = new Set(prev);
        if (completed) next.add(lessonIndex);
        else next.delete(lessonIndex);
        return next;
      });

      await fetch("/api/courses/lesson", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, lessonIndex, completed }),
      });
    },
    [courseId, completedIds]
  );

  return { completedIds, toggleLesson, loading };
}
