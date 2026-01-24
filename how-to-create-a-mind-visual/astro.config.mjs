// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'How to Create a Mind',
      description: 'A visual learning companion for Ray Kurzweil\'s groundbreaking book on the Pattern Recognition Theory of Mind',
      logo: {
        light: './src/assets/brain-light.svg',
        dark: './src/assets/brain-dark.svg',
        replacesTitle: false,
      },
      social: {
        github: 'https://github.com/sanjaygupta-professional/AINativeAgileLearning',
      },
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Welcome',
          items: [
            { label: 'Introduction', slug: 'index' },
          ],
        },
        {
          label: 'Part I: Foundations',
          collapsed: false,
          items: [
            {
              label: 'Ch 1: Thought Experiments on the World',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'chapters/01-thought-experiments-world/overview' },
                { label: 'Darwin & Lyell', slug: 'chapters/01-thought-experiments-world/darwin-lyell' },
                { label: 'Einstein\'s Mind Experiments', slug: 'chapters/01-thought-experiments-world/einstein' },
              ],
            },
            {
              label: 'Ch 2: Thought Experiments on Thinking',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'chapters/02-thought-experiments-thinking/overview' },
              ],
            },
          ],
        },
        {
          label: 'Part II: The Neocortex',
          collapsed: false,
          items: [
            {
              label: 'Ch 3: Pattern Recognition Theory',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'chapters/03-pattern-recognition-theory/overview' },
                { label: 'Hierarchy of Patterns', slug: 'chapters/03-pattern-recognition-theory/hierarchy' },
                { label: 'Pattern Recognizers', slug: 'chapters/03-pattern-recognition-theory/recognizers' },
                { label: 'Learning', slug: 'chapters/03-pattern-recognition-theory/learning' },
              ],
            },
            {
              label: 'Ch 4: The Biological Neocortex',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'chapters/04-biological-neocortex/overview' },
              ],
            },
            {
              label: 'Ch 5: The Old Brain',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'chapters/05-old-brain/overview' },
              ],
            },
            {
              label: 'Ch 6: Transcendent Abilities',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'chapters/06-transcendent-abilities/overview' },
              ],
            },
          ],
        },
        {
          label: 'Part III: Mind & Machine',
          collapsed: false,
          items: [
            {
              label: 'Ch 7: The Digital Neocortex',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'chapters/07-digital-neocortex/overview' },
                { label: 'Hidden Markov Models', slug: 'chapters/07-digital-neocortex/hmm' },
              ],
            },
            {
              label: 'Ch 8: The Mind as Computer',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'chapters/08-mind-as-computer/overview' },
              ],
            },
            {
              label: 'Ch 9: Thought Experiments on the Mind',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'chapters/09-thought-experiments-mind/overview' },
              ],
            },
          ],
        },
        {
          label: 'Part IV: Implications',
          collapsed: false,
          items: [
            {
              label: 'Ch 10: Law of Accelerating Returns',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'chapters/10-law-accelerating-returns/overview' },
              ],
            },
            {
              label: 'Ch 11: Objections',
              collapsed: true,
              items: [
                { label: 'Overview', slug: 'chapters/11-objections/overview' },
              ],
            },
          ],
        },
        {
          label: 'Key Concepts',
          collapsed: true,
          items: [
            { label: 'Pattern Recognition Theory', slug: 'concepts/prtm' },
            { label: 'The Neocortex', slug: 'concepts/neocortex' },
            { label: 'Hierarchical Learning', slug: 'concepts/hierarchical-learning' },
            { label: 'Law of Accelerating Returns', slug: 'concepts/loar' },
            { label: 'Consciousness', slug: 'concepts/consciousness' },
          ],
        },
        {
          label: 'Learning Paths',
          collapsed: true,
          items: [
            { label: 'Quick Overview', slug: 'paths/quick-overview' },
            { label: 'Deep Dive: PRTM', slug: 'paths/deep-dive-prtm' },
            { label: 'AI & Neuroscience', slug: 'paths/ai-neuroscience' },
          ],
        },
      ],
    }),
  ],
});
