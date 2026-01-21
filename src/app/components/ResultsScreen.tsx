import { motion } from "motion/react";
import { Book } from "@/app/data/books";
import { BookCard } from "@/app/components/BookCard";
import { RotateCcw, Share2, MessageCircle } from "lucide-react";
import { useState } from "react";

interface ResultsScreenProps {
  books: Book[];
  onRestart: () => void;
}

export function ResultsScreen({ books, onRestart }: ResultsScreenProps) {
  const [shareOpen, setShareOpen] = useState(false);

  const shareText = `Just got my literary red flags diagnosed by Read Me Right!\n\nMy damage-approved books:\n${books.map((book, i) => `\n${i + 1}. "${book.title}" by ${book.author}\n${book.justification}`).join('\n')}\n\nTake the quiz and expose yourself: https://tarditonotarde.github.io/ReadMeRight/\n\nWarning: Results may cause emotional damage.`;

  const handleShare = async () => {
    // Try Web Share API first (works on mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Literary Red Flags - Read Me Right!',
          text: shareText,
          url: 'https://tarditonotarde.github.io/ReadMeRight/'
        });
      } catch (err) {
        // User cancelled or error occurred
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback: show share options
      setShareOpen(!shareOpen);
    }
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  const handleLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://tarditonotarde.github.io/ReadMeRight/')}`;
    window.open(url, '_blank');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      alert('Copied to clipboard! Now go share your damage 📋');
    } catch (err) {
      alert('Failed to copy. Maybe that\'s a sign...');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 0.25,
        ease: "easeOut"
      }}
      className="relative overflow-y-auto overflow-x-hidden"
      style={{ 
        backgroundColor: "var(--beige-papel)",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100dvh"
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto w-full space-y-10 px-6 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-center space-y-6 mb-8"
        >
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <motion.span
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block px-5 py-2 text-sm rounded-full"
              style={{ 
                backgroundColor: "var(--rosa-shocking)",
                color: "var(--beige-papel)",
                fontFamily: "var(--font-display)",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "3px solid var(--negro-tinta)"
              }}
            >
              DIAGNOSIS
            </motion.span>
            <motion.span
              animate={{ rotate: [3, -3, 3] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="inline-block px-5 py-2 text-sm"
              style={{ 
                backgroundColor: "var(--amarillo-sol)",
                color: "var(--negro-tinta)",
                fontFamily: "var(--font-display)",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "3px solid var(--negro-tinta)",
                transform: "rotate(3deg)"
              }}
            >
              COMPLETE
            </motion.span>
          </div>

          <h1 
            className="px-4"
            style={{ 
              fontSize: "3.75rem",
              lineHeight: "0.95",
              fontFamily: "var(--font-display)",
              fontWeight: "900",
              letterSpacing: "0em",
              color: "var(--negro-tinta)"
            }}
          >
            Your Literary
            <br />
            Red Flags
          </h1>

          <div className="relative inline-block">
            <p 
              className="max-w-md mx-auto px-6 py-5"
              style={{ 
                fontSize: "1.125rem",
                fontFamily: "var(--font-body)",
                fontWeight: "600",
                letterSpacing: "0em",
                color: "var(--beige-papel)",
                backgroundColor: "var(--violeta-profundo)",
                border: "4px solid var(--negro-tinta)",
                transform: "rotate(-1deg)"
              }}
            >
              Based on your deeply concerning answers, here are 3 books that understand your damage.
            </p>
          </div>
        </motion.div>

        {/* Book cards */}
        <div className="space-y-8 mb-12">
          {books.map((book, index) => (
            <BookCard key={book.id} book={book} index={index} />
          ))}
        </div>

        {/* Footer actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-6"
        >
          {/* Restart button */}
          <motion.button
            animate={{ 
              y: [0, -8, 0],
              rotate: [-1, 1, -1]
            }}
            transition={{ 
              y: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              },
              rotate: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }
            }}
            whileHover={{ 
              scale: 1.02, 
              rotate: -1,
              x: 3,
              y: 3
            }}
            whileTap={{ scale: 0.98, x: 6, y: 6 }}
            onClick={onRestart}
            onFocus={(e) => e.currentTarget.style.outline = "var(--focus-ring)"}
            onBlur={(e) => e.currentTarget.style.outline = "none"}
            className="w-full py-5 px-8 flex items-center justify-center gap-3 relative overflow-hidden group"
            style={{ 
              fontSize: "1.25rem",
              fontFamily: "var(--font-display)",
              fontWeight: "800",
              letterSpacing: "0em",
              backgroundColor: "var(--rosa-shocking)",
              color: "var(--negro-tinta)",
              border: "5px solid var(--negro-tinta)",
              transform: "rotate(-1deg)",
              boxShadow: "6px 6px 0px #000814"
            }}
          >
            <RotateCcw className="w-6 h-6" />
            <span>MAKE DIFFERENT MISTAKES</span>
          </motion.button>

          {/* Disclaimer */}
          <div 
            className="p-6 text-center relative"
            style={{ 
              backgroundColor: "var(--negro-tinta)",
              border: "4px solid var(--negro-tinta)"
            }}
          >
            <p 
              className="text-xs mb-2"
              style={{ 
                color: "var(--amarillo-sol)",
                fontFamily: "var(--font-display)",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase"
              }}
            >
              ⚠️ DISCLAIMER
            </p>
            <p 
              className="text-sm"
              style={{ 
                color: "var(--beige-papel)",
                fontFamily: "var(--font-body)",
                fontWeight: "500"
              }}
            >
              These recommendations are based on vibes, chaos, and a questionable algorithm.
              <br />
              We take no responsibility for your literary choices or subsequent emotional spirals.
            </p>
          </div>

          {/* Share button and options */}
          <div className="space-y-4">
            <motion.button
              onClick={handleShare}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              onFocus={(e) => e.currentTarget.style.outline = "var(--focus-ring)"}
              onBlur={(e) => e.currentTarget.style.outline = "none"}
              className="text-center text-sm px-6 py-4 mx-auto flex items-center justify-center gap-2 rounded-full w-full max-w-md"
              style={{ 
                color: "var(--negro-tinta)",
                backgroundColor: "var(--turquesa-retro)",
                fontFamily: "var(--font-display)",
                fontWeight: "700",
                border: "3px solid var(--negro-tinta)",
                letterSpacing: "0.02em",
                boxShadow: "6px 6px 0px #000814"
              }}
            >
              <Share2 className="w-5 h-5" />
              Share your damage with friends (or don't, we're not your mom)
            </motion.button>

            {/* Share options (desktop fallback) */}
            {shareOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-wrap gap-3 justify-center"
              >
                <motion.button
                  onClick={handleWhatsApp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 text-sm flex items-center gap-2"
                  style={{
                    backgroundColor: "var(--amarillo-sol)",
                    color: "var(--negro-tinta)",
                    fontFamily: "var(--font-display)",
                    fontWeight: "700",
                    border: "3px solid var(--negro-tinta)",
                    letterSpacing: "0.02em",
                    boxShadow: "6px 6px 0px #000814"
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </motion.button>

                <motion.button
                  onClick={handleLinkedIn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 text-sm flex items-center gap-2"
                  style={{
                    backgroundColor: "var(--violeta-profundo)",
                    color: "var(--beige-papel)",
                    fontFamily: "var(--font-display)",
                    fontWeight: "700",
                    border: "3px solid var(--negro-tinta)",
                    letterSpacing: "0.02em",
                    boxShadow: "6px 6px 0px #000814"
                  }}
                >
                  <Share2 className="w-4 h-4" />
                  LinkedIn
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}