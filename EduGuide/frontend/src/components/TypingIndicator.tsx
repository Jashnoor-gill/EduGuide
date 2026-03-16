const TypingIndicator = () => (
  <div className="flex gap-3">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
      <span className="text-accent-foreground text-xs font-display font-bold">AI</span>
    </div>
    <div className="bg-chat-assistant shadow-soft rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-pulse-soft" style={{ animationDelay: "0ms" }} />
      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-pulse-soft" style={{ animationDelay: "200ms" }} />
      <span className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-pulse-soft" style={{ animationDelay: "400ms" }} />
    </div>
  </div>
);

export default TypingIndicator;
