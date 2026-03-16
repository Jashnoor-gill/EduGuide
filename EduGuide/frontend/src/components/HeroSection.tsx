import { motion } from "framer-motion";
import { Sparkles, BookOpen } from "lucide-react";
import heroIllustration from "../assets/hero-illustration.png";

type HeroSectionProps = {
  onStartChat: () => void;
};

const HeroSection = ({ onStartChat }: HeroSectionProps) => (
  <section className="min-h-screen flex flex-col">
    {/* Nav */}
    <nav className="flex items-center justify-between px-6 md:px-12 py-5">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-display font-semibold text-lg text-foreground">EduGuide</span>
      </div>
    </nav>

    {/* Hero */}
    <div className="flex-1 flex items-center">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-body text-primary">
              <Sparkles className="w-4 h-4" />
              AI-Powered Program Discovery
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Your questions,{" "}
              <span className="text-primary">answered instantly</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body max-w-lg leading-relaxed">
              Stop searching through endless pages. Ask our AI assistant anything about programs, admissions, fees, or career outcomes — and get clear, trustworthy answers in seconds.
            </p>
            <button
              onClick={onStartChat}
              className="mt-4 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:opacity-90 transition-all"
            >
              Start Chatting
            </button>
          </motion.div>
        </div>
        <div className="hidden md:block">
          <img src={heroIllustration} alt="AI Assistant" className="w-full max-w-md mx-auto" />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
