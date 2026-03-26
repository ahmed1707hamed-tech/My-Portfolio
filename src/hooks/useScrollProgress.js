import { useState, useEffect } from 'react';

export const useScrollProgress = (targetRef) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!targetRef?.current) return;
      const rect = targetRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = rect.top - viewportHeight * 0.2;
      const end = rect.bottom - viewportHeight * 0.2;
      const total = end - start;
      let newProgress = (viewportHeight * 0.2 - start) / total;
      newProgress = Math.min(1, Math.max(0, newProgress));
      setProgress(newProgress);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, [targetRef]);

  return progress;
};