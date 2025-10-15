"use client";

import React from "react";

type Message = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState("");
  const [isSending, setIsSending] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node) && isOpen) setIsOpen(false);
    }
    if (isOpen) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [isOpen]);

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault();
    if (!input.trim() || isSending) return;

    const userMessage: Message = {
      id: `${Date.now()}-u`,
      role: "user",
      content: input.trim(),
    };
    setMessages((m) => [...m, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      if (!res.ok || !res.body) throw new Error(`Request failed: ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";
      let assistantId = `${Date.now()}-a`;
      setMessages((m) => [...m, { id: assistantId, role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages((m) =>
          m.map((msg) => (msg.id === assistantId ? { ...msg, content: assistantText } : msg))
        );
      }
    } catch {
      setMessages((m) => [
        ...m,
        { id: `${Date.now()}-e`, role: "system", content: "⚠️ Something went wrong." },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <style jsx global>{`
        @keyframes wobble {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(-10deg) scale(1.05);
          }
          50% {
            transform: rotate(10deg) scale(1.05);
          }
          75% {
            transform: rotate(-5deg) scale(1.02);
          }
        }

        .pc-chat-launcher {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          color: white;
          border: none;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          font-size: 28px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          animation: wobble 3s infinite ease-in-out;
          transition: all 0.3s ease;
        }

        .pc-chat-launcher:hover {
          transform: scale(1.15) rotate(10deg);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }

        .pc-chat-panel {
          position: fixed;
          bottom: 110px;
          right: 30px;
          width: 380px;
          max-height: 600px;
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          overflow: hidden;
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pc-chat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          color: white;
          padding: 14px 18px;
          font-weight: bold;
          font-size: 18px;
        }

        .pc-chat-messages {
          flex: 1;
          padding: 12px;
          overflow-y: auto;
          font-size: 15px;
          color: white;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pc-chat-message {
          padding: 10px 14px;
          border-radius: 10px;
          max-width: 80%;
          word-wrap: break-word;
        }

        .pc-chat-user {
          align-self: flex-end;
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
        }

        .pc-chat-assistant {
          align-self: flex-start;
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .pc-chat-inputrow {
          display: flex;
          padding: 12px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(0, 0, 0, 0.3);
        }

        .pc-chat-input {
          flex: 1;
          padding: 10px 14px;
          border-radius: 10px;
          border: none;
          outline: none;
          background: rgba(255, 255, 255, 0.8);
        }

        .pc-chat-send {
          margin-left: 8px;
          background: linear-gradient(135deg, #3b82f6, #9333ea);
          color: white;
          padding: 10px 18px;
          border-radius: 10px;
          font-weight: bold;
          border: none;
          cursor: pointer;
          transition: 0.3s;
        }

        .pc-chat-send:hover {
          opacity: 0.9;
          transform: scale(1.05);
        }

        .pc-chat-close {
          font-size: 22px;
          color: white;
          background: transparent;
          border: none;
          cursor: pointer;
        }
      `}</style>

      <button
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className="pc-chat-launcher"
        onClick={() => setIsOpen((v) => !v)}
      >
        💬
      </button>

      {isOpen && (
        <div ref={panelRef} className="pc-chat-panel">
          <div className="pc-chat-header">
            <div className="pc-chat-title">💡 AI Assistant</div>
            <button
              className="pc-chat-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <div className="pc-chat-messages">
            {messages.map((m) => (
              <div key={m.id} className={`pc-chat-message pc-chat-${m.role}`}>
                {m.content}
              </div>
            ))}
          </div>
          <form className="pc-chat-inputrow" onSubmit={sendMessage}>
            <input
              className="pc-chat-input"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="pc-chat-send" type="submit" disabled={isSending || !input.trim()}>
              {isSending ? "..." : "Send"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
