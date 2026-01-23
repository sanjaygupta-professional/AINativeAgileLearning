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
          items: [{ label: 'Welcome', slug: 'index' }],
        },
        {
          label: 'Book I: The Antifragile',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'chapters/book-1-antifragile-introduction/overview' },
            { label: '1. Damocles and Hydra', slug: 'chapters/book-1-antifragile-introduction/ch1-damocles-hydra' },
            { label: '2. Overcompensation', slug: 'chapters/book-1-antifragile-introduction/ch2-overcompensation' },
            { label: '3. Cat and Washing Machine', slug: 'chapters/book-1-antifragile-introduction/ch3-cat-washing-machine' },
            { label: '4. What Kills Me', slug: 'chapters/book-1-antifragile-introduction/ch4-what-kills-me' },
          ],
        },
        {
          label: 'Book II: Modernity',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'chapters/book-2-modernity/overview' },
            { label: '5. Souk and Office', slug: 'chapters/book-2-modernity/ch5-souk-office' },
            { label: '6. I Love Randomness', slug: 'chapters/book-2-modernity/ch6-love-randomness' },
            { label: '7. Naive Intervention', slug: 'chapters/book-2-modernity/ch7-naive-intervention' },
            { label: '8. Prediction', slug: 'chapters/book-2-modernity/ch8-prediction' },
          ],
        },
        {
          label: 'Book III: Nonpredictive',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'chapters/book-3-nonpredictive/overview' },
            { label: '9. Fat Tony', slug: 'chapters/book-3-nonpredictive/ch9-fat-tony' },
            { label: '10. Seneca', slug: 'chapters/book-3-nonpredictive/ch10-seneca' },
            { label: '11. Rock Star', slug: 'chapters/book-3-nonpredictive/ch11-rock-star' },
          ],
        },
        {
          label: 'Book IV: Optionality',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'chapters/book-4-optionality/overview' },
            { label: '12. Thales\' Grapes', slug: 'chapters/book-4-optionality/ch12-thales-grapes' },
            { label: '13. Lecturing Birds', slug: 'chapters/book-4-optionality/ch13-lecturing-birds' },
            { label: '14. Not Same Thing', slug: 'chapters/book-4-optionality/ch14-not-same-thing' },
            { label: '15. History Losers', slug: 'chapters/book-4-optionality/ch15-history-losers' },
          ],
        },
        {
          label: 'Book V: Nonlinear',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'chapters/book-5-nonlinear/overview' },
            { label: '16. Lesson in Disorder', slug: 'chapters/book-5-nonlinear/ch16-lesson-disorder' },
            { label: '17. Tony vs Socrates', slug: 'chapters/book-5-nonlinear/ch17-tony-socrates' },
            { label: '18. Stone and Pebbles', slug: 'chapters/book-5-nonlinear/ch18-stone-pebbles' },
          ],
        },
        {
          label: 'Book VI: Via Negativa',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'chapters/book-6-via-negativa/overview' },
            { label: '19. Philosopher\'s Stone', slug: 'chapters/book-6-via-negativa/ch19-philosophers-stone' },
            { label: '20. Time and Fragility', slug: 'chapters/book-6-via-negativa/ch20-time-fragility' },
            { label: '21. Medicine', slug: 'chapters/book-6-via-negativa/ch21-medicine' },
            { label: '22. Live Long', slug: 'chapters/book-6-via-negativa/ch22-live-long' },
          ],
        },
        {
          label: 'Book VII: Ethics',
          collapsed: true,
          items: [
            { label: 'Overview', slug: 'chapters/book-7-ethics/overview' },
            { label: '23. Skin in the Game', slug: 'chapters/book-7-ethics/ch23-skin-game' },
            { label: '24. Fitting Ethics', slug: 'chapters/book-7-ethics/ch24-fitting-ethics' },
            { label: '25. Conclusion', slug: 'chapters/book-7-ethics/ch25-conclusion' },
          ],
        },
        {
          label: 'Key Concepts',
          collapsed: true,
          items: [
            { label: 'Antifragility', slug: 'concepts/antifragility' },
            { label: 'The Triad', slug: 'concepts/triad' },
            { label: 'Via Negativa', slug: 'concepts/via-negativa' },
            { label: 'Skin in the Game', slug: 'concepts/skin-in-the-game' },
            { label: 'Optionality', slug: 'concepts/optionality' },
            { label: 'Barbell Strategy', slug: 'concepts/barbell-strategy' },
            { label: 'Lindy Effect', slug: 'concepts/lindy-effect' },
            { label: 'Iatrogenics', slug: 'concepts/iatrogenics' },
          ],
        },
        {
          label: 'Learning Paths',
          collapsed: true,
          items: [
            { label: 'Core Framework', slug: 'paths/core-framework' },
            { label: 'Practical Application', slug: 'paths/practical-application' },
            { label: 'Risk and Decision Making', slug: 'paths/risk-decision-making' },
          ],
        },
      ],
    }),
  ],
});
