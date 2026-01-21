import { motion } from "motion/react";

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
      className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--beige-papel)" }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-md w-full space-y-5 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.7, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <h1 
            className="mb-4 tracking-tight relative inline-block"
            style={{ 
              fontSize: "4.5rem",
              lineHeight: "0.9",
              fontFamily: "var(--font-display)",
              fontWeight: "900",
              color: "var(--negro-tinta)",
              letterSpacing: "0.02em",
              textTransform: "uppercase"
            }}
          >
            <span style={{ 
              background: "var(--amarillo-sol)",
              padding: "0 15px",
              display: "inline-block",
              transform: "rotate(-2deg)"
            }}>Read</span>{" "}
            <span style={{ 
              background: "var(--rosa-shocking)",
              color: "var(--beige-papel)",
              padding: "0 15px",
              display: "inline-block",
              transform: "rotate(2deg)"
            }}>Me</span>
            <br/>
            <span style={{ 
              background: "var(--turquesa-retro)",
              padding: "0 15px",
              display: "inline-block",
              transform: "rotate(-1deg)"
            }}>Right!</span>
          </h1>
          
          <div className="flex gap-3 justify-center items-center flex-wrap mt-4">
            <motion.span
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block px-4 py-2 text-xs rounded-full"
              style={{ 
                backgroundColor: "var(--violeta-profundo)",
                color: "var(--beige-papel)",
                fontFamily: "var(--font-display)",
                fontWeight: "700",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                border: "3px solid var(--negro-tinta)"
              }}
            >
              Unhinged
            </motion.span>
            <motion.span
              animate={{ rotate: [3, -3, 3] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="inline-block px-4 py-2 text-xs"
              style={{ 
                backgroundColor: "var(--amarillo-sol)",
                color: "var(--negro-tinta)",
                fontFamily: "var(--font-display)",
                fontWeight: "700",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                border: "3px solid var(--negro-tinta)",
                transform: "rotate(5deg)"
              }}
            >
              Literary
            </motion.span>
            <motion.span
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="inline-block px-4 py-2 text-xs rounded-full"
              style={{ 
                backgroundColor: "var(--turquesa-retro)",
                color: "var(--negro-tinta)",
                fontFamily: "var(--font-display)",
                fontWeight: "700",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                border: "3px solid var(--negro-tinta)"
              }}
            >
              Damage
            </motion.span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          <div className="relative inline-block">
            <p 
              className="px-8 py-5 mx-auto max-w-sm relative z-10"
              style={{ 
                fontSize: "1.75rem",
                lineHeight: "1.2",
                fontFamily: "var(--font-display)",
                fontWeight: "800",
                color: "var(--beige-papel)",
                backgroundColor: "var(--negro-tinta)",
                letterSpacing: "-0.01em",
                border: "4px solid var(--negro-tinta)"
              }}
            >
              We don't fix you.
              <br />
              We recommend books.
            </p>
          </div>
          
          <p 
            className="text-lg px-4"
            style={{ 
              color: "var(--negro-tinta)",
              fontFamily: "var(--font-body)",
              fontWeight: "600",
              letterSpacing: "0em"
            }}
          >
            No right answers. Just red flags.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ 
            opacity: 0, 
            scale: 0.9
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -8, 0],
            rotate: [-1, 1, -1]
          }}
          transition={{ 
            delay: 0.6, 
            type: "spring", 
            stiffness: 200,
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              delay: 1
            },
            rotate: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              delay: 1
            }
          }}
          whileHover={{ 
            scale: 1.02,
            rotate: -1,
            x: 3,
            y: 3
          }}
          whileTap={{ 
            scale: 0.98, 
            x: 6, 
            y: 6
          }}
          onFocus={(e) => e.currentTarget.style.outline = "var(--focus-ring)"}
          onBlur={(e) => e.currentTarget.style.outline = "none"}
          onClick={onStart}
          className="w-full py-5 px-8 relative overflow-hidden group"
          style={{ 
            fontSize: "1.25rem",
            fontFamily: "var(--font-display)",
            fontWeight: "800",
            letterSpacing: "0em",
            backgroundColor: "var(--rosa-shocking)",
            color: "var(--beige-papel)",
            border: "5px solid var(--negro-tinta)",
            transform: "rotate(-1deg)",
            boxShadow: "6px 6px 0px #000814"
          }}
        >
          <span className="relative z-10" style={{ color: "#000814" }}>
            JUDGE ME, BUT MAKE IT LITERARY
          </span>
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--violeta-profundo)" }}
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Footer microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm px-6 py-3 mx-auto inline-block"
          style={{ 
            color: "var(--negro-tinta)", 
            fontFamily: "var(--font-body)",
            fontWeight: "600",
            letterSpacing: "0.01em",
            backgroundColor: "var(--amarillo-sol)",
            border: "3px solid var(--negro-tinta)",
            borderRadius: "30px"
          }}
        >
          5 questions · 3 books · Infinite regret
        </motion.p>
      </div>
    </motion.div>
  );
}