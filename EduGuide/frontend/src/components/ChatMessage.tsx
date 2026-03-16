import { motion } from "framer-motion";
import { GraduationCap, User } from "lucide-react";

type ChatMessageProps = {
  role: "user" | "assistant";
  content: string;
};

const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}
    >
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser ? "bg-primary" : "bg-accent"
        }`}
      >
        {isUser ? (
          <User className="w-4 h-4 text-primary-foreground" />
        ) : (
          <GraduationCap className="w-4 h-4 text-accent-foreground" />
        )}
      </div>
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed font-body ${
          isUser
            ? "bg-chat-user text-chat-user-foreground rounded-tr-sm"
            : "bg-chat-assistant text-chat-assistant-foreground shadow-soft rounded-tl-sm"
        }`}
      >
        {content}
      </div>
    </motion.div>
  );
};

export default ChatMessage;
