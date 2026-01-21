import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { WelcomeScreen } from "@/app/components/WelcomeScreen";
import { QuestionScreen } from "@/app/components/QuestionScreen";
import { LoadingScreen } from "@/app/components/LoadingScreen";
import { ResultsScreen } from "@/app/components/ResultsScreen";
import { questions } from "@/app/data/questions";
import { getBookRecommendations, Book } from "@/app/data/books";

type Screen = "welcome" | "question" | "loading" | "results";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);

  const handleStart = () => {
    setCurrentScreen("question");
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      // Move to next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions answered, show loading
      setCurrentScreen("loading");
      // Get book recommendations
      const books = getBookRecommendations(newAnswers);
      setRecommendedBooks(books);
    }
  };

  const handleLoadingComplete = () => {
    setCurrentScreen("results");
  };

  const handleRestart = () => {
    setCurrentScreen("welcome");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setRecommendedBooks([]);
  };

  return (
    <div
      className="min-h-screen"
      style={{ 
        backgroundColor: "var(--negro-tinta)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100dvh",
        overflow: "hidden"
      }}
    >
      <AnimatePresence mode="wait">
        {currentScreen === "welcome" && (
          <WelcomeScreen key="welcome" onStart={handleStart} />
        )}

        {currentScreen === "question" && (
          <QuestionScreen
            key={`question-${currentQuestionIndex}`}
            question={questions[currentQuestionIndex]}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
          />
        )}

        {currentScreen === "loading" && (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        )}

        {currentScreen === "results" && (
          <ResultsScreen
            key="results"
            books={recommendedBooks}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>
    </div>
  );
}