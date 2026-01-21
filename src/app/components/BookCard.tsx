import { motion } from "motion/react";
import { Book } from "@/app/data/books";
import { ExternalLink } from "lucide-react";

interface BookCardProps {
  book: Book;
  index: number;
}

const cardColors = [
  { bg: "var(--turquesa-retro)", accent: "var(--negro-tinta)", text: "var(--negro-tinta)" },
  { bg: "var(--rosa-shocking)", accent: "var(--negro-tinta)", text: "var(--beige-papel)" },
  { bg: "var(--amarillo-sol)", accent: "var(--negro-tinta)", text: "var(--negro-tinta)" }
];

export function BookCard({ book, index }: BookCardProps) {
  const colors = cardColors[index % 3];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="relative overflow-hidden"
      style={{ 
        backgroundColor: colors.bg,
        border: `5px solid ${colors.accent}`,
        transform: index % 2 === 0 ? "rotate(-1deg)" : "rotate(1deg)"
      }}
    >
      <div className="p-6 space-y-5">
        {/* Book cover and info */}
        <div className="flex gap-5">
          {/* Cover */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: -3 }}
            className="flex-shrink-0 w-32 h-48 overflow-hidden relative"
            style={{ 
              border: `4px solid var(--negro-tinta)`,
              transform: "rotate(2deg)"
            }}
          >
            <img 
              src={book.cover} 
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Book info */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 
                className="mb-2"
                style={{ 
                  fontSize: "1.75rem",
                  lineHeight: "1.1",
                  fontFamily: "var(--font-display)",
                  fontWeight: "800",
                  letterSpacing: "0em",
                  color: colors.text,
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                  hyphens: "auto",
                  maxWidth: "100%",
                  width: "100%",
                  display: "block"
                }}
              >
                {book.title}
              </h3>
              <p 
                className="mb-3"
                style={{ 
                  fontSize: "1.05rem",
                  fontFamily: "var(--font-body)",
                  color: colors.text,
                  fontWeight: "600",
                  opacity: 0.85
                }}
              >
                {book.author}
              </p>
              <span 
                className="inline-block px-4 py-2 text-xs rounded-full"
                style={{ 
                  backgroundColor: "var(--negro-tinta)",
                  color: "var(--beige-papel)",
                  fontFamily: "var(--font-display)",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border: "3px solid var(--negro-tinta)"
                }}
              >
                {book.genre}
              </span>
            </div>
          </div>
        </div>

        {/* Justification */}
        <div 
          className="p-5 relative"
          style={{ 
            backgroundColor: index === 1 ? "rgba(0, 0, 0, 0.15)" : "rgba(0, 0, 0, 0.08)",
            border: `3px solid var(--negro-tinta)`,
            transform: "rotate(-0.5deg)"
          }}
        >
          <p 
            className="italic"
            style={{ 
              fontSize: "1rem",
              lineHeight: "1.6",
              color: colors.text,
              fontWeight: "500",
              fontFamily: "var(--font-body)"
            }}
          >
            "{book.justification}"
          </p>
        </div>

        {/* CTA Button */}
        <motion.a
          href={book.purchaseUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            scale: 1.02, 
            rotate: -1,
            x: 3,
            y: 3
          }}
          whileTap={{ scale: 0.98, x: 5, y: 5 }}
          onFocus={(e) => e.currentTarget.style.outline = "var(--focus-ring)"}
          onBlur={(e) => e.currentTarget.style.outline = "none"}
          className="w-full py-5 px-6 flex items-center justify-center gap-3 relative overflow-hidden group block"
          style={{ 
            fontSize: "1.15rem",
            fontFamily: "var(--font-display)",
            fontWeight: "700",
            letterSpacing: "0em",
            backgroundColor: "var(--violeta-profundo)",
            color: "#000814",
            border: `5px solid var(--negro-tinta)`,
            textDecoration: "none",
            transform: "rotate(-0.5deg)",
            boxShadow: "6px 6px 0px #000814"
          }}
        >
          <span className="relative z-10">Buy this bad decision</span>
          <ExternalLink className="w-5 h-5 relative z-10" />
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--rosa-shocking)" }}
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      </div>
    </motion.div>
  );
}