# AI-Native Agile Learning Platform 🚀

An interactive Web3-enabled learning application for mastering virtual team collaboration, built with Next.js 14, TypeScript, and modern Web3 technologies.

## Features ✨

- **Interactive Content**: Dynamic markdown-based learning modules
- **Quiz System**: Knowledge assessment with immediate feedback
- **Progress Tracking**: Local storage-based progress for each chapter
- **Web3 Integration**: RainbowKit wallet connection
- **Animations**: Smooth Framer Motion animations
- **Dark Mode**: Futuristic dark theme
- **Responsive Design**: Mobile-first, works on all devices

## Tech Stack 🛠️

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Web3**: RainbowKit + Wagmi + Viem
- **Animations**: Framer Motion

## Content Modules 📚

1. **Introduction**: The Challenges of Virtual Teaming
2. **Chapter 1**: A Framework for Working Across Boundaries
3. **Chapter 2**: Design Principles for Successful Virtual Teams

## Getting Started 🚀

### Installation

```bash
npm install
```

### Set up environment

The `.env.local` file is already created. Get a WalletConnect project ID at https://cloud.walletconnect.com

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure 📁

```
learning-app/
├── app/                    # Next.js app directory
│   ├── course/[chapter]/  # Dynamic chapter routes
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # UI components
│   └── providers.tsx      # Web3 providers
├── lib/                   # Utilities and data
└── data/                  # Markdown content
```

## Roadmap 🗺️

### Future Features
- [ ] Interactive simulations
- [ ] Token-gating
- [ ] SBT credentials
- [ ] IPFS storage
- [ ] AI tutoring

## License 📄

MIT License

---

Built with ❤️ for the future of decentralized learning
