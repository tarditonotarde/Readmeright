import { motion, AnimatePresence } from "motion/react";
import { Question } from "@/app/data/questions";
import { useState, useEffect, useMemo } from "react";

interface QuestionScreenProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answerIndex: number) => void;
}

const backgroundColors = [
  "var(--amarillo-sol)",
  "var(--rosa-shocking)",
  "var(--turquesa-retro)",
  "var(--violeta-profundo)",
  "var(--amarillo-sol)"
];

const buttonColors = [
  { bg: "var(--turquesa-retro)", border: "var(--negro-tinta)", text: "var(--negro-tinta)", accent: "var(--negro-tinta)" },
  { bg: "var(--violeta-profundo)", border: "var(--negro-tinta)", text: "var(--beige-papel)", accent: "var(--negro-tinta)" },
  { bg: "var(--rosa-shocking)", border: "var(--negro-tinta)", text: "var(--beige-papel)", accent: "var(--negro-tinta)" },
  { bg: "var(--amarillo-sol)", border: "var(--negro-tinta)", text: "var(--negro-tinta)", accent: "var(--negro-tinta)" }
];

export function QuestionScreen({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer 
}: QuestionScreenProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const bgColor = backgroundColors[questionNumber - 1];

  // Create shuffled answers with original indices
  const shuffledAnswers = useMemo(() => {
    const answersWithIndices = question.answers.map((answer, index) => ({
      answer,
      originalIndex: index
    }));
    
    // Fisher-Yates shuffle
    const shuffled = [...answersWithIndices];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
  }, [question.id]); // Re-shuffle when question changes

  const handleAnswerClick = (originalIndex: number) => {
    onAnswer(originalIndex);
  };

  return (
    <AnimatePresence mode="sync">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
        className="min-h-screen flex flex-col p-6 relative overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        {/* Progress indicator */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 mb-6"
        >
          <div className="flex justify-between items-center mb-4">
            <span 
              className="text-base px-5 py-2.5 rounded-full"
              style={{ 
                backgroundColor: "var(--negro-tinta)",
                color: "var(--beige-papel)",
                fontFamily: "var(--font-display)",
                fontWeight: "700",
                letterSpacing: "0.02em",
                border: "3px solid var(--negro-tinta)"
              }}
            >
              {questionNumber}/{totalQuestions}
            </span>
            <span 
              className="text-xs px-4 py-2"
              style={{ 
                backgroundColor: "transparent",
                color: "var(--negro-tinta)",
                fontFamily: "var(--font-display)",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "3px solid var(--negro-tinta)",
                transform: "rotate(-2deg)"
              }}
            >
              No escape
            </span>
          </div>
          <div 
            className="w-full h-4 overflow-hidden rounded-full"
            style={{ 
              backgroundColor: "transparent",
              border: "3px solid var(--negro-tinta)"
            }}
          >
            <motion.div
              initial={{ width: `${((questionNumber - 1) / totalQuestions) * 100}%` }}
              animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="h-full"
              style={{ backgroundColor: "var(--negro-tinta)" }}
            />
          </div>
        </motion.div>

        {/* Question */}
        <div className="flex-1 flex flex-col justify-start relative z-10 max-w-2xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 px-4"
            style={{ 
              fontSize: "2rem",
              lineHeight: "1.05",
              fontFamily: "var(--font-display)",
              fontWeight: "800",
              letterSpacing: "-0.01em",
              color: "var(--negro-tinta)"
            }}
          >
            {question.question}
          </motion.h2>

          {/* Answer buttons */}
          <div className="space-y-3">
            {shuffledAnswers.map((answerObj, index) => {
              const colors = buttonColors[index];
              return (
                <motion.button
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    x: -50
                  }}
                  animate={{ 
                    opacity: 1, 
                    x: 0
                  }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 300 }}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 3, 
                    y: 0
                  }}
                  whileTap={{ scale: 0.98, x: 6, y: 3 }}
                  onClick={() => handleAnswerClick(answerObj.originalIndex)}
                  onFocus={(e) => e.currentTarget.style.outline = "var(--focus-ring)"}
                  onBlur={(e) => e.currentTarget.style.outline = "none"}
                  className="w-full py-5 px-6 text-left relative group"
                  style={{ 
                    fontSize: "1.125rem",
                    lineHeight: "1.4",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    letterSpacing: "0em",
                    backgroundColor: colors.bg,
                    color: "#000814",
                    border: `5px solid ${colors.accent}`,
                    transform: index % 2 === 0 ? "rotate(-0.5deg)" : "rotate(0.5deg)",
                    boxShadow: "6px 6px 0px #000814",
                    textTransform: "uppercase"
                  }}
                >
                  <span className="relative z-10 block">
                    {answerObj.answer}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-center text-sm px-6 py-3 mx-auto rounded-full"
            style={{ 
              color: "var(--negro-tinta)",
              fontFamily: "var(--font-body)",
              fontWeight: "600",
              letterSpacing: "0.01em",
              maxWidth: "380px",
              border: "3px solid var(--negro-tinta)"
            }}
          >
            No right answers here.
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}