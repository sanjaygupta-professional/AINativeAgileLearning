// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import astroMermaid from 'astro-mermaid';

export default defineConfig({
  integrations: [
    // Mermaid MUST come before Starlight
    astroMermaid({
      theme: 'default',
      autoTheme: true,
    }),
    starlight({
      title: 'Antifragile Visual',
      description: 'A visual learning companion for Antifragile by Nassim Nicholas Taleb',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Start Here',
          items: [{ label: 'Welcome', link: '/' }],
        },
        {
          label: 'Book I: The Antifragile',
          collapsed: true,
          autogenerate: { directory: 'chapters/book-1-antifragile-introduction' },
        },
        {
          label: 'Book II: Modernity',
          collapsed: true,
          autogenerate: { directory: 'chapters/book-2-modernity' },
        },
        {
          label: 'Book III: Nonpredictive',
          collapsed: true,
          autogenerate: { directory: 'chapters/book-3-nonpredictive' },
        },
        {
          label: 'Book IV: Optionality',
          collapsed: true,
          autogenerate: { directory: 'chapters/book-4-optionality' },
        },
        {
          label: 'Book V: Nonlinear',
          collapsed: true,
          autogenerate: { directory: 'chapters/book-5-nonlinear' },
        },
        {
          label: 'Book VI: Via Negativa',
          collapsed: true,
          autogenerate: { directory: 'chapters/book-6-via-negativa' },
        },
        {
          label: 'Book VII: Ethics',
          collapsed: true,
          autogenerate: { directory: 'chapters/book-7-ethics' },
        },
        {
          label: 'Key Concepts',
          collapsed: true,
          autogenerate: { directory: 'concepts' },
        },
        {
          label: 'Learning Paths',
          collapsed: true,
          autogenerate: { directory: 'paths' },
        },
      ],
    }),
  ],
});
