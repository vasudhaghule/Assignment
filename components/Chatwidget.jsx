"use client";

import { useState, useEffect, useRef } from "react";

const ChatWidget = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hi there! I'm SoftSell's virtual assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      text: trimmedInput,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: "bot",
        text: getBotResponse(trimmedInput),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const responseMap = [
    {
      keywords: ["hello", "hi"],
      response: "Hello! How can I assist you with selling your software licenses today?",
    },
    {
      keywords: ["how", "sell"],
      response:
        "Selling your licenses is easy! Just upload your license details, and we'll provide a valuation within 24 hours. Payment is processed in 1-2 business days.",
    },
    {
      keywords: ["price", "value", "worth"],
      response:
        "The value of your licenses depends on several factors like type, version, and market demand. Submit your details for a free evaluation.",
    },
    {
      keywords: ["payment", "pay"],
      response:
        "We offer payments via bank transfer, PayPal, and even cryptocurrency. Choose your method when you accept our offer.",
    },
    {
      keywords: ["safe", "secure"],
      response:
        "Absolutely! We use bank-grade encryption and our process complies with all legal terms and conditions.",
    },
    {
      keywords: ["time", "long"],
      response:
        "You’ll get a valuation within 24 hours and payment within 1-2 business days after offer acceptance.",
    },
    {
      keywords: ["thank"],
      response: "You're welcome! Let me know if there's anything else I can assist you with.",
    },
  ];

  const getBotResponse = (input) => {
    const lowered = input.toLowerCase();
    for (let { keywords, response } of responseMap) {
      if (keywords.some((k) => lowered.includes(k))) return response;
    }
    return "I'd be happy to help! For more details, please fill out our contact form — an expert will reply within 24 hours.";
  };

  const formatTime = (date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-xl shadow-2xl z-50 flex flex-col max-h-[500px] border border-gray-700">
      <div className="bg-gradient-to-r from-teal-600 to-red-400 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center mr-3">
            💬
          </div>
          <div>
            <h3 className="text-white font-medium">SoftSell Assistant</h3>
            <p className="text-blue-100 text-xs">Online</p>
          </div>
        </div>
        <button onClick={onClose} className="text-white hover:text-blue-100">
          ✖️
        </button>
      </div>

      <div className="flex-grow overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800">
        {messages.map((m) => (
          <div key={m.id} className={`mb-3 flex ${m.type === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                m.type === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-blue-950 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-blue-600"
              }`}
            >
              <p>{m.text}</p>
              <p className="text-xs mt-1 text-right opacity-70">{formatTime(m.timestamp)}</p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="mb-3 flex justify-start">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700">
              <div className="flex gap-1">
                {[0, 150, 300].map((delay) => (
                  <div
                    key={delay}
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 dark:border-blue-950 bg-white dark:bg-blue-950">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg">
            ➤
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatWidget;
