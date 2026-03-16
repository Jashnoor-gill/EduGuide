import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import QuickQuestion from "./QuickQuestion";
import TypingIndicator from "./TypingIndicator";

type Msg = { role: "user" | "assistant"; content: string };

const QUICK_QUESTIONS = [
  { question: "What programs do you offer?", icon: "📚" },
  { question: "What are the admission requirements?", icon: "📋" },
  { question: "How much does tuition cost?", icon: "💰" },
  { question: "What career support do you provide?", icon: "🚀" },
  { question: "Are scholarships available?", icon: "🎓" },
  { question: "What is the class schedule like?", icon: "🕐" },
];


async function fetchAnswer(message: string): Promise<string> {
  try {
    const res = await fetch("http://localhost:8000/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: message }),
    });
    if (!res.ok) return "Sorry, there was a problem contacting the AI backend.";
    const data = await res.json();
    return data.answer || "Sorry, I couldn't find an answer.";
  } catch (e) {
    return "Sorry, there was a network or server error.";
  }
}

const ChatView = ({ onBack }: { onBack: () => void }) => {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);


  const handleSend = async (message: string) => {
    setMessages((msgs) => [...msgs, { role: "user", content: message }]);
    setIsTyping(true);
    const answer = await fetchAnswer(message);
    setMessages((msgs) => [...msgs, { role: "assistant", content: answer }]);
    setIsTyping(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <nav className="flex items-center gap-2 px-4 py-3 border-b border-border">
        <button onClick={onBack} className="p-2 rounded-lg hover:bg-muted transition-all">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-semibold text-base text-foreground">EduGuide</span>
        </div>
      </nav>
      <div className="flex-1 overflow-y-auto px-4 py-6" ref={chatRef}>
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.map((msg, i) => (
            <ChatMessage key={i} role={msg.role} content={msg.content} />
          ))}
          {isTyping && <TypingIndicator />}
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 pb-6 space-y-3">
        <div className="flex flex-wrap gap-2 mb-2">
          {QUICK_QUESTIONS.map((q, i) => (
            <QuickQuestion key={q.question} {...q} onClick={handleSend} delay={i * 0.1} />
          ))}
        </div>
        <ChatInput onSend={handleSend} disabled={isTyping} />
      </div>
    </div>
  );
};

export default ChatView;
