'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ProgressTrackerProps {
  progress: number;
  chapterId: string;
}

export function ProgressTracker({ progress, chapterId }: ProgressTrackerProps) {
  const [quizScore, setQuizScore] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(`quiz-${chapterId}`);
    if (saved) {
      setQuizScore(parseInt(saved, 10));
    }
  }, [chapterId]);

  return (
    <div className="sticky top-16 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">Progress:</span>
            <div className="w-48 bg-gray-800 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                transition={{ duration: 0.5 }}
              />
            </div>
            <span className="text-sm font-semibold text-white">{progress}%</span>
          </div>

          {quizScore !== null && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">Quiz:</span>
              <span className={`text-sm font-semibold ${quizScore >= 70 ? 'text-green-400' : 'text-orange-400'}`}>
                {quizScore}%
              </span>
            </div>
          )}

          {progress === 100 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center space-x-2"
            >
              <span className="text-green-400">✓</span>
              <span className="text-sm font-semibold text-green-400">Complete</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
