import { useState, useEffect } from "react";
import { useInView } from "../hooks";

export function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: { children: React.ReactNode; className?: string; delay?: number; direction?: "up" | "left" | "right" | "scale" }) {
  const { ref, isInView } = useInView(0.1);
  const delayClass = delay ? `reveal-delay-${delay}` : "";
  const dirClass = direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : direction === "scale" ? "reveal-scale" : "reveal";
  return <div ref={ref} className={`${dirClass} ${isInView ? "visible" : ""} ${delayClass} ${className}`}>{children}</div>;
}

export function TypewriterText({ phrases }: { phrases: string[] }) {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (isWaiting) return;
    const phrase = phrases[currentPhrase];
    const timeout = isDeleting ? 35 : 70;
    if (!isDeleting && currentChar === phrase.length) {
      setIsWaiting(true);
      const t = setTimeout(() => { setIsWaiting(false); setIsDeleting(true); }, 2200);
      return () => clearTimeout(t);
    }
    if (isDeleting && currentChar === 0) {
      setIsDeleting(false);
      setCurrentPhrase((p) => (p + 1) % phrases.length);
      return;
    }
    const t = setTimeout(() => setCurrentChar((p) => p + (isDeleting ? -1 : 1)), timeout);
    return () => clearTimeout(t);
  }, [currentChar, isDeleting, currentPhrase, phrases, isWaiting]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-text">
      {phrases[currentPhrase].substring(0, currentChar)}
      <span className="typewriter-cursor" />
    </span>
  );
}

export function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-colors">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-white/[0.02] transition-colors">
        <span className="font-semibold text-white pr-4">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
          <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </button>
      <div className={`accordion-content ${isOpen ? "open" : ""}`}><p className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-400 text-sm leading-relaxed">{answer}</p></div>
    </div>
  );
}
