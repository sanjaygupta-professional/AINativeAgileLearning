import fs from 'fs';
import path from 'path';

export interface ParsedContent {
  title: string;
  sections: Section[];
  keyTakeaways: string[];
}

export interface Section {
  heading: string;
  content: string;
  subsections?: Section[];
}

export async function getChapterContent(fileName: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'data', fileName);
  const content = fs.readFileSync(filePath, 'utf8');
  return content;
}

export function parseMarkdown(markdown: string): ParsedContent {
  const lines = markdown.split('\n');
  const sections: Section[] = [];
  let currentSection: Section | null = null;
  let currentSubsection: Section | null = null;
  let keyTakeaways: string[] = [];
  let title = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Extract title (first # heading)
    if (!title && line.startsWith('# ')) {
      title = line.replace(/^#\s+/, '');
      continue;
    }

    // H2 - Main sections
    if (line.startsWith('## ')) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        heading: line.replace(/^##\s+/, ''),
        content: '',
        subsections: []
      };
      currentSubsection = null;
      continue;
    }

    // H3 - Subsections
    if (line.startsWith('### ')) {
      if (currentSection && currentSubsection) {
        currentSection.subsections?.push(currentSubsection);
      }
      currentSubsection = {
        heading: line.replace(/^###\s+/, ''),
        content: ''
      };
      continue;
    }

    // Extract key takeaways
    if (line.match(/^\d+\.\s+\*\*/) && currentSection?.heading.includes('Key Takeaways')) {
      const takeaway = line.replace(/^\d+\.\s+\*\*/, '').replace(/\*\*.*$/, '').trim();
      keyTakeaways.push(takeaway);
    }

    // Add content to current section/subsection
    if (line && !line.startsWith('#') && !line.startsWith('---')) {
      if (currentSubsection) {
        currentSubsection.content += line + '\n';
      } else if (currentSection) {
        currentSection.content += line + '\n';
      }
    }
  }

  // Push last section
  if (currentSection && currentSubsection) {
    currentSection.subsections?.push(currentSubsection);
  }
  if (currentSection) {
    sections.push(currentSection);
  }

  return {
    title,
    sections,
    keyTakeaways
  };
}
