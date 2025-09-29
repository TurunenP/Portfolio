// Chatbot.jsx
import React, { useState, useEffect, useRef } from "react";
import responses from "./responses.json";

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeText(text) {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .replace(/[^\w\s]/gi, "") // remove punctuation
    .replace(/\s+/g, " ") // collapse whitespace
    .trim();
}

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Welcome message
  useEffect(() => {
    setMessages([
      {
        from: "bot",
        text: "👋 Hi! I’m your AI portfolio guide. Ask me about projects, skills, thesis, AI demo, or career questions 🚀",
      },
    ]);
  }, []);

  // Optional AI API call (kept but not required)
  async function getAIResponse(prompt) {
    try {
      const res = await fetch(
        "https://api-inference.huggingface.co/models/EleutherAI/gpt-j-6B",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_HF_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputs: prompt }),
        }
      );
      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      // Hugging Face response shape can vary, handle gracefully:
      if (Array.isArray(data) && data[0]?.generated_text)
        return data[0].generated_text;
      if (data.generated_text) return data.generated_text;
      return null;
    } catch (err) {
      console.warn("AI API failed, falling back to JSON:", err.message);
      return null;
    }
  }

  // Robust local matching:
  function getLocalResponse(userInput) {
    const normalizedInput = normalizeText(userInput);

    // Build flattened candidates: [{text: 'why hire you', answer, len}]
    const candidates = [];
    responses.forEach((r, idx) => {
      const ans = r.answer;
      if (Array.isArray(r.question)) {
        r.question.forEach((q) => {
          candidates.push({ text: normalizeText(q), answer: ans, idx });
        });
      } else if (typeof r.question === "string") {
        candidates.push({ text: normalizeText(r.question), answer: ans, idx });
      }
    });

    // Sort by length desc (longer phrases first) to avoid short substring hijacks
    candidates.sort((a, b) => b.text.length - a.text.length);

    // 1) Exact match first
    for (const c of candidates) {
      if (!c.text) continue;
      if (normalizedInput === c.text) {
        return Array.isArray(c.answer) ? pickRandom(c.answer) : c.answer;
      }
    }

    // 2) Word-boundary regex matches (so "hi" does not match inside "why hire you")
    for (const c of candidates) {
      if (!c.text) continue;
      const pattern = "\\b" + escapeRegExp(c.text) + "\\b";
      const re = new RegExp(pattern, "i");
      if (re.test(normalizedInput)) {
        return Array.isArray(c.answer) ? pickRandom(c.answer) : c.answer;
      }
    }

    // 3) As a last resort, substring includes BUT only for reasonably long keys (>=3 chars)
    for (const c of candidates) {
      if (!c.text || c.text.length < 3) continue;
      if (normalizedInput.includes(c.text)) {
        return Array.isArray(c.answer) ? pickRandom(c.answer) : c.answer;
      }
    }

    // 4) fallback: find fallback entry (question may be string or array)
    const fallbackEntry = responses.find((r) => {
      if (Array.isArray(r.question))
        return r.question.map((q) => normalizeText(q)).includes("fallback");
      return normalizeText(r.question) === "fallback";
    });
    if (fallbackEntry) {
      const a = fallbackEntry.answer;
      return Array.isArray(a) ? pickRandom(a) : a;
    }

    return "Hmm, I don’t have an answer for that yet!";
  }

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // handleSend accepts optional text parameter (works for both typing and button clicks)
  const handleSend = async (textParam = null) => {
    const messageText = (textParam !== null ? textParam : input).toString();
    if (!messageText.trim()) return;

    // Append user message (use messageText directly)
    const userMsg = { from: "user", text: messageText };
    setMessages((prev) => [...prev, userMsg]);

    // clear input only if user typed (not when button)
    if (textParam === null) setInput("");

    setLoading(true);

    // Try AI API first (optional)
    let reply = await getAIResponse(messageText);

    // Fallback to local JSON
    if (!reply) {
      reply = getLocalResponse(messageText);
    }

    const botMsg = { from: "bot", text: reply };
    setMessages((prev) => [...prev, botMsg]);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-[400px] bg-[#112240] text-gray-200 rounded-2xl shadow-lg flex flex-col ml-auto">
      <div className="p-3 border-b border-gray-600 flex items-center justify-between sticky top-0 bg-[#112240] z-10">
        <span className="font-semibold text-gray-100">AI Portfolio Bot 🤖</span>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-2 h-[450px]">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.from === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[75%] whitespace-pre-line ${
                msg.from === "user"
                  ? "bg-pink-600 text-white"
                  : "bg-gray-700 text-gray-100"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="px-4 py-2 rounded-2xl bg-gray-700 text-gray-400 italic animate-pulse">
              AI Portfolio Bot is typing...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-3 border-t border-gray-600 flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about projects, skills, thesis, AI demo, or career questions 🚀"
          className="flex-1 px-3 py-2 rounded-lg bg-[#0a192f] text-gray-200 border border-gray-500 focus:outline-none"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={() => handleSend()}
          className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg text-white font-semibold"
        >
          Send
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-2 px-1 pb-2">
        {[
          "Projects",
          "Skills",
          "Thesis",
          "AI Demo",
          "Contact",
          "Tell me about yourself",
          "Strengths",
          "Weaknesses",
          "Future goals",
          "Why should we hire you",
        ].map((q) => (
          <button
            key={q}
            onClick={() => handleSend(q)} // send the button text directly
            className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded-lg text-sm"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Chatbot;
