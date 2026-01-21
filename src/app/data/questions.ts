export interface Question {
  id: number;
  question: string;
  answers: string[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "How are you holding up today?",
    answers: [
      "Barely. But still hot.",
      "Emotionally dead, physically present",
      "Chaos with a skincare routine",
      "One inconvenience away from a breakdown"
    ]
  },
  {
    id: 2,
    question: "Your ideal reading posture is…",
    answers: [
      "Rotting on the couch",
      "In bed, avoiding responsibility",
      "Sitting like I have my life together (I don't)",
      "Horizontal, snacks everywhere"
    ]
  },
  {
    id: 3,
    question: "Pick your mental flavor",
    answers: [
      "Existential dread",
      "Weaponized sarcasm",
      "Delusional optimism",
      "Unprocessed trauma but make it funny"
    ]
  },
  {
    id: 4,
    question: "How much effort can you tolerate?",
    answers: [
      "Zero. Don't test me.",
      "Minimal, like my will to live",
      "I can focus but I'll complain",
      "Destroy me intellectually"
    ]
  },
  {
    id: 5,
    question: "What kind of damage are you in the mood for?",
    answers: [
      "Dark humor",
      "Emotional devastation",
      "Absurd, unhinged nonsense",
      "A book that knows too much about me"
    ]
  }
];

// Utility function to shuffle an array
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}