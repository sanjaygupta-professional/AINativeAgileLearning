'use client';

import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from 'framer-motion';

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/80 backdrop-blur-lg"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AI-Native Learning
              </span>
              <span className="text-xs text-gray-400">Virtual Teams Mastery</span>
            </div>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-300 hover:text-white transition-colors hidden sm:block"
            >
              About
            </Link>
            <ConnectButton
              chainStatus="icon"
              showBalance={false}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
