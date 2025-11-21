'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quiz } from '@/lib/chapters';

interface QuizComponentProps {
  quizzes: Quiz[];
  chapterId: string;
  onComplete: () => void;
}

export function QuizComponent({ quizzes, chapterId, onComplete }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const quiz = quizzes[currentQuestion];

  const handleAnswer = (answerIndex: number) => {
    if (showExplanation) return;

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === quiz.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizzes.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
      // Save quiz score
      const quizScore = Math.round((score / quizzes.length) * 100);
      localStorage.setItem(`quiz-${chapterId}`, quizScore.toString());
      if (quizScore >= 70) {
        onComplete();
      }
    }
  };

  if (completed) {
    const percentage = Math.round(((score + (selectedAnswer === quiz.correctAnswer ? 1 : 0)) / quizzes.length) * 100);
    const passed = percentage >= 70;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 glass rounded-xl text-center"
      >
        <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${passed ? 'bg-green-500/20' : 'bg-orange-500/20'}`}>
          <span className="text-4xl">{passed ? '✓' : '📚'}</span>
        </div>
        <h3 className="text-3xl font-bold mb-2">
          {passed ? 'Congratulations!' : 'Keep Learning!'}
        </h3>
        <p className="text-xl text-gray-300 mb-6">
          You scored {percentage}%
        </p>
        <p className="text-gray-400 mb-8">
          {passed
            ? 'Great job! You have mastered this material.'
            : 'Review the content and try again to score 70% or higher.'}
        </p>
        {!passed && (
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
              setCompleted(false);
              setSelectedAnswer(null);
              setShowExplanation(false);
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-xl transition-all"
          >
            Try Again
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <div className="p-8 glass rounded-xl">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Question {currentQuestion + 1} of {quizzes.length}</span>
          <span>Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / quizzes.length) * 100}%` }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <h3 className="text-xl font-semibold mb-6">{quiz.question}</h3>

          <div className="space-y-3">
            {quiz.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === quiz.correctAnswer;
              const showResult = showExplanation;

              let className = 'p-4 rounded-lg border-2 transition-all cursor-pointer ';

              if (!showResult) {
                className += isSelected
                  ? 'border-blue-500 bg-blue-500/10'
                  : 'border-gray-700 hover:border-gray-600 bg-gray-800/50';
              } else {
                if (isCorrect) {
                  className += 'border-green-500 bg-green-500/10';
                } else if (isSelected && !isCorrect) {
                  className += 'border-red-500 bg-red-500/10';
                } else {
                  className += 'border-gray-700 bg-gray-800/50';
                }
              }

              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: showResult ? 1 : 1.02 }}
                  whileTap={{ scale: showResult ? 1 : 0.98 }}
                  onClick={() => handleAnswer(index)}
                  disabled={showExplanation}
                  className={className}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-left">{option}</span>
                    {showResult && isCorrect && <span className="text-green-400">✓</span>}
                    {showResult && isSelected && !isCorrect && <span className="text-red-400">✗</span>}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg"
              >
                <p className="text-sm text-gray-300">
                  <strong className="text-blue-400">Explanation:</strong> {quiz.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next Button */}
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-right"
            >
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                {currentQuestion < quizzes.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
