import { getChapterById, getQuizByChapterId } from '@/lib/chapters';
import { getChapterContent } from '@/lib/markdown';
import { ChapterView } from '@/components/ui/chapter-view';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return [
    { chapter: 'introduction' },
    { chapter: 'chapter-1' },
    { chapter: 'chapter-2' },
  ];
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter: chapterId } = await params;
  const chapter = getChapterById(chapterId);

  if (!chapter) {
    notFound();
  }

  const content = await getChapterContent(chapter.fileName);
  const quizzes = getQuizByChapterId(chapter.id);

  return (
    <ChapterView
      chapter={chapter}
      content={content}
      quizzes={quizzes}
    />
  );
}
