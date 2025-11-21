'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Chapter, Quiz } from '@/lib/chapters';
import { QuizComponent } from './quiz';
import { ProgressTracker } from './progress-tracker';

interface ChapterViewProps {
  chapter: Chapter;
  content: string;
  quizzes: Quiz[];
}

export function ChapterView({ chapter, content, quizzes }: ChapterViewProps) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem(`progress-${chapter.id}`);
    if (saved) {
      setProgress(parseInt(saved, 10));
    }
  }, [chapter.id]);

  const markAsComplete = () => {
    setProgress(100);
    localStorage.setItem(`progress-${chapter.id}`, '100');
  };

  // Simple markdown to HTML conversion for MVP
  const renderContent = (markdown: string) => {
    const lines = markdown.split('\n');
    const elements: JSX.Element[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Headings
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={key++} className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {line.replace(/^#\s+/, '')}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="text-3xl font-bold mt-12 mb-4 text-gray-100">
            {line.replace(/^##\s+/, '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="text-2xl font-semibold mt-8 mb-3 text-gray-200">
            {line.replace(/^###\s+/, '')}
          </h3>
        );
      } else if (line.startsWith('#### ')) {
        elements.push(
          <h4 key={key++} className="text-xl font-semibold mt-6 mb-2 text-gray-300">
            {line.replace(/^####\s+/, '')}
          </h4>
        );
      }
      // Horizontal rules
      else if (line.startsWith('---')) {
        elements.push(<hr key={key++} className="my-8 border-gray-700" />);
      }
      // Lists
      else if (line.match(/^[\-\*]\s+/)) {
        const listItem = line.replace(/^[\-\*]\s+/, '');
        elements.push(
          <li key={key++} className="ml-6 mb-2 text-gray-300">
            {formatText(listItem)}
          </li>
        );
      } else if (line.match(/^\d+\.\s+/)) {
        const listItem = line.replace(/^\d+\.\s+/, '');
        elements.push(
          <li key={key++} className="ml-6 mb-2 text-gray-300 list-decimal">
            {formatText(listItem)}
          </li>
        );
      }
      // Code blocks
      else if (line.startsWith('```')) {
        elements.push(<div key={key++} className="my-4 p-4 bg-gray-900 rounded-lg text-sm font-mono text-green-400" />);
      }
      // Blockquotes
      else if (line.startsWith('> ')) {
        elements.push(
          <blockquote key={key++} className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-300">
            {line.replace(/^>\s+/, '')}
          </blockquote>
        );
      }
      // Regular paragraphs
      else if (line.trim()) {
        elements.push(
          <p key={key++} className="mb-4 text-gray-300 leading-relaxed">
            {formatText(line)}
          </p>
        );
      }
    }

    return elements;
  };

  const formatText = (text: string) => {
    // Bold
    text = text.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-white">$1</strong>');
    // Italic
    text = text.replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>');
    // Code
    text = text.replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 bg-gray-800 rounded text-sm text-blue-400">$1</code>');

    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className={`py-12 bg-gradient-to-r ${chapter.color}`}>
        <div className="container mx-auto px-4">
          <Link href="/" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">
            {chapter.title}
          </h1>
          <p className="text-white/90">
            {chapter.description}
          </p>
        </div>
      </div>

      {/* Progress Tracker */}
      <ProgressTracker progress={progress} chapterId={chapter.id} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {renderContent(content)}
          </motion.div>

          {/* Quiz Section */}
          {quizzes.length > 0 && (
            <div className="mt-16">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {!showQuiz ? (
                  <div className="p-8 glass rounded-xl text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Test Your Knowledge?</h3>
                    <p className="text-gray-400 mb-6">
                      Take the quiz to reinforce what you've learned
                    </p>
                    <button
                      onClick={() => setShowQuiz(true)}
                      className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-xl transition-all"
                    >
                      Start Quiz
                    </button>
                  </div>
                ) : (
                  <QuizComponent
                    quizzes={quizzes}
                    chapterId={chapter.id}
                    onComplete={markAsComplete}
                  />
                )}
              </motion.div>
            </div>
          )}

          {/* Completion Button */}
          {progress < 100 && (
            <div className="mt-12 text-center">
              <button
                onClick={markAsComplete}
                className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
              >
                Mark as Complete
              </button>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-16 flex justify-between items-center">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← Back to Chapters
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
