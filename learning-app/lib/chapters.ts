export interface Chapter {
  id: string;
  title: string;
  description: string;
  fileName: string;
  order: number;
  color: string;
}

export interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const chapters: Chapter[] = [
  {
    id: "introduction",
    title: "Introduction: The Challenges of Virtual Teaming",
    description: "Explore the six major challenges of virtual teams: Distance, Time, Technology, Culture, Trust, and Leadership.",
    fileName: "00_Introduction_The_Challenges_of_Virtual_Teaming.md",
    order: 0,
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "chapter-1",
    title: "Chapter 1: A Framework for Working Across Boundaries",
    description: "Learn how to identify, manage, and cross boundaries effectively in virtual collaboration.",
    fileName: "01_Chapter_1_A_Framework_for_Working_Across_Boundaries.md",
    order: 1,
    color: "from-purple-500 to-pink-500"
  },
  {
    id: "chapter-2",
    title: "Chapter 2: Design Principles for Successful Virtual Teams",
    description: "Discover the essential design principles and leadership competencies for virtual team success.",
    fileName: "02_Chapter_2_Design_Principles_for_Successful_Virtual_Teams.md",
    order: 2,
    color: "from-orange-500 to-red-500"
  }
];

export const quizzes: Record<string, Quiz[]> = {
  introduction: [
    {
      question: "Which of the following are considered 'Virtual Team Givens'?",
      options: [
        "Distance, Time, Technology",
        "Culture, Trust, Leadership",
        "Budget, Resources, Skills",
        "Communication, Planning, Execution"
      ],
      correctAnswer: 0,
      explanation: "The first three challenges (Distance, Time, Technology) are 'givens' - defining characteristics that must be managed through technology."
    },
    {
      question: "What is the main advantage of time zone differences in virtual teams?",
      options: [
        "Easier to schedule meetings",
        "24-hour workday capability through handoffs",
        "Less need for coordination",
        "Reduced communication overhead"
      ],
      correctAnswer: 1,
      explanation: "Time differences allow work to be handed off around the globe, enabling near around-the-clock progress."
    },
    {
      question: "Which type of trust is based on roles and reputations and forms quickly?",
      options: [
        "Knowledge-based trust",
        "Identification-based trust",
        "Swift trust",
        "Cognitive trust"
      ],
      correctAnswer: 2,
      explanation: "Swift trust is imported from other contexts, based on roles and reputations, and necessary for quick team formation."
    }
  ],
  "chapter-1": [
    {
      question: "What happens at boundaries according to the framework?",
      options: [
        "Communication breaks down",
        "Innovation and collaboration occur",
        "Teams become isolated",
        "Resources are depleted"
      ],
      correctAnswer: 1,
      explanation: "Innovation occurs when different perspectives meet at boundaries. Collaboration happens at well-managed boundaries."
    },
    {
      question: "What does 'permeability' refer to in boundary management?",
      options: [
        "The permanent nature of boundaries",
        "The degree to which boundaries can be crossed",
        "The strength of team culture",
        "The level of trust between members"
      ],
      correctAnswer: 1,
      explanation: "Permeability refers to the degree to which matter (or information, people, ideas) can pass through boundaries."
    },
    {
      question: "How many boundary management operations are identified?",
      options: [
        "3 operations",
        "6 operations",
        "9 operations",
        "12 operations"
      ],
      correctAnswer: 2,
      explanation: "Nine operations are identified: Recognize, Maintain, Close, Open, Cross, Reform, Change, Destroy, and Merge."
    }
  ],
  "chapter-2": [
    {
      question: "What is described as the 'critical competency' for virtual collaboration leaders?",
      options: [
        "Technical expertise",
        "Communication",
        "Financial management",
        "Strategic planning"
      ],
      correctAnswer: 1,
      explanation: "Communication is the critical competency for leaders of virtual collaboration work."
    },
    {
      question: "Which leadership attribute emphasizes 'What can we learn here?' vs. 'Who's to blame?'",
      options: [
        "Relationship focused",
        "Emotionally intelligent",
        "Curious learners by nature",
        "Process and outcome focused"
      ],
      correctAnswer: 2,
      explanation: "Curious learners possess an attitude that asks 'What can we learn here?' rather than focusing on blame."
    },
    {
      question: "What is recommended before virtual teams begin working remotely?",
      options: [
        "Technical training only",
        "Face-to-face design sessions",
        "Individual goal setting",
        "Tool selection process"
      ],
      correctAnswer: 1,
      explanation: "Face-to-face design sessions enable relationships to be built, trust to be established, and issues to be worked out before going virtual."
    }
  ]
};

export function getChapterById(id: string): Chapter | undefined {
  return chapters.find(chapter => chapter.id === id);
}

export function getQuizByChapterId(chapterId: string): Quiz[] {
  return quizzes[chapterId] || [];
}
