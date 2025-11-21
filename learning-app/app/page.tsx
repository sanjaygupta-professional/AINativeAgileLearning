'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { chapters } from '@/lib/chapters';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />

        <div className="relative container mx-auto px-4 py-20 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  🚀 Web3-Enabled Learning Platform
                </span>
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Master Virtual Team Collaboration
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              An interactive AI-native learning experience for modern Product Owners and Agile leaders.
              Learn through simulations, earn verifiable credentials on the blockchain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#chapters"
                  className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Start Learning →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              title="Interactive Learning"
              description="Engage with dynamic content, quizzes, and real-world scenarios"
              delay={0}
            />
            <FeatureCard
              title="Web3 Integration"
              description="Connect your wallet and earn verifiable on-chain credentials"
              delay={0.1}
            />
            <FeatureCard
              title="AI-Native Approach"
              description="Future-ready curriculum designed for the AI era"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Chapters Section */}
      <section id="chapters" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Learning Modules</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore comprehensive modules on virtual team collaboration, boundary management, and leadership principles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {chapters.map((chapter, index) => (
              <ChapterCard key={chapter.id} chapter={chapter} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900/30 to-purple-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your Virtual Team Skills?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start your journey today and earn credentials that matter in the Web3 era
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/course/${chapters[0].id}`}
                className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Begin with {chapters[0].title.split(':')[0]} →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description, delay }: {
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-6 rounded-xl glass hover:bg-gray-800/50 transition-all"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}

function ChapterCard({ chapter, index }: { chapter: typeof chapters[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/course/${chapter.id}`}>
        <motion.div
          whileHover={{ y: -5 }}
          className="h-full p-6 rounded-xl glass hover:bg-gray-800/50 transition-all cursor-pointer group"
        >
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${chapter.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
            <span className="text-white font-bold text-xl">{index}</span>
          </div>

          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
            {chapter.title}
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            {chapter.description}
          </p>

          <div className="flex items-center text-blue-400 text-sm font-semibold">
            Start Learning →
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
