import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'fs_ts_mastery_progress_v1';

export function useProgress() {
  const [completedIds, setCompletedIds] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: unknown = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          return new Set<string>(parsed.filter((item): item is string => typeof item === 'string'));
        }
      }
    } catch {
      // Ignore JSON parse or localStorage read errors
    }
    return new Set<string>();
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completedIds)));
    } catch {
      // Ignore localStorage write errors
    }
  }, [completedIds]);

  const toggleSubtopic = useCallback((id: string) => {
    setCompletedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    if (window.confirm('Are you sure you want to reset all tracked progress?')) {
      setCompletedIds(new Set<string>());
    }
  }, []);

  const markAll = useCallback((ids: string[]) => {
    setCompletedIds(new Set(ids));
  }, []);

  const isCompleted = useCallback((id: string) => completedIds.has(id), [completedIds]);

  return {
    completedIds,
    toggleSubtopic,
    resetAll,
    markAll,
    isCompleted,
    completedCount: completedIds.size,
  };
}
