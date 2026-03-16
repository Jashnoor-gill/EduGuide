import { motion } from "framer-motion";

type QuickQuestionProps = {
  question: string;
  icon: string;
  onClick: (question: string) => void;
  delay?: number;
};

const QuickQuestion = ({ question, icon, onClick, delay = 0 }: QuickQuestionProps) => (
  <motion.button
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    onClick={() => onClick(question)}
    className="group flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-left text-sm font-body text-card-foreground shadow-soft transition-all hover:shadow-card hover:border-primary/30 hover:-translate-y-0.5"
  >
    <span className="text-lg">{icon}</span>
    <span className="group-hover:text-primary transition-colors">{question}</span>
  </motion.button>
);

export default QuickQuestion;
