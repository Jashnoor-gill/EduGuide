import { useState } from "react";
import HeroSection from "../components/HeroSection";
import ChatView from "../components/ChatView";

const Index = () => {
  const [view, setView] = useState<"hero" | "chat">("hero");

  if (view === "chat") {
    return <ChatView onBack={() => setView("hero")} />;
  }

  return <HeroSection onStartChat={() => setView("chat")} />;
};

export default Index;
