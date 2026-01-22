import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const loadingMessages = [
  "Calling books that will judge you silently…",
  "Matching your vibe with literary chaos…",
  "Your therapist will hear about this…"
];

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Rotate messages every 1200ms (slower, readable)
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1200);

    // Start exit animation after last message
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3300);

    // Complete loading
    const timer = setTimeout(() => {
      onComplete();
    }, 3600);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(exitTimer);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--turquesa-retro)" }}
    >
      <div className="relative z-10 max-w-md w-full space-y-8 text-center">
        
        {/* Rotating messages */}
        <div className="h-48 flex items-center justify-center">
          <motion.div
            key={messageIndex}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="px-8 py-6 relative"
            style={{ 
              fontSize: "2rem",
              lineHeight: "1.1",
              color: "var(--negro-tinta)",
              fontFamily: "var(--font-display)",
              fontWeight: "900",
              letterSpacing: "-0.02em",
              textAlign: "center",
              backgroundColor: "var(--beige-papel)",
              border: "6px solid var(--negro-tinta)",
              boxShadow: "8px 8px 0px var(--negro-tinta)"
            }}
          >
            {loadingMessages[messageIndex]}
          </motion.div>
        </div>

        {/* Loading squares */}
        <div className="flex justify-center gap-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -18, 0] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut"
              }}
              className="w-8 h-8"
              style={{
                backgroundColor:
                  i === 0
                    ? "var(--violeta-profundo)"
                    : i === 1
                    ? "var(--rosa-shocking)"
                    : "var(--amarillo-sol)"
              }}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="px-8">
          <div
            className="w-full h-8 overflow-hidden relative"
            style={{
              backgroundColor: "var(--beige-papel)",
              border: "5px solid var(--negro-tinta)",
              boxShadow: "6px 6px 0px var(--negro-tinta)"
            }}
          >
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.6, ease: "linear" }}
              className="h-full flex items-center justify-end pr-2"
              style={{ backgroundColor: "var(--negro-tinta)" }}
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="w-4 h-4"
                style={{
                  backgroundColor: "var(--amarillo-sol)",
                  border: "2px solid var(--negro-tinta)"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
