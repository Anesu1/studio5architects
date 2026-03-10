"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";
import { useChat } from "@/hooks/useChat";
import clsx from "clsx";

export default function ChatWidget() {
    const {
        messages,
        isLoading,
        isOpen,
        inputValue,
        closeState,
        visitorEmail,
        leadCaptured,
        setInputValue,
        setVisitorEmail,
        sendMessage,
        submitLead,
        skipLead,
        openChat,
        requestClose,
        closeChat,
    } = useChat();

    const [leadName, setLeadName] = useState("");
    const [leadEmail, setLeadEmail] = useState("");
    const [leadPhone, setLeadPhone] = useState("");

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        if (isOpen && leadCaptured) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen, leadCaptured]);

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }

    function handleEmailKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            e.preventDefault();
            closeChat(visitorEmail);
        }
    }

    function handleLeadSubmit() {
        submitLead({ name: leadName, email: leadEmail, phone: leadPhone });
    }

    function handleLeadKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            e.preventDefault();
            handleLeadSubmit();
        }
    }

    return (
        <>
            {/* Chat Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.97 }}
                        transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed bottom-24 right-4 sm:right-6 z-[9998] w-[calc(100vw-32px)] sm:w-[360px] h-[75vh] sm:h-[520px] bg-verdant-black border border-white/10 flex flex-col overflow-hidden shadow-2xl"
                        data-lenis-prevent
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
                            <div>
                                <p className="text-verdant-bg text-xs font-medium tracking-widest uppercase">
                                    Studio 5
                                </p>
                                <p className="text-white/40 text-xs mt-0.5">Ask us anything</p>
                            </div>
                            <button
                                onClick={requestClose}
                                className="text-white/40 hover:text-verdant-bg transition-colors p-1"
                                data-cursor="hover"
                                aria-label="Close chat"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        {/* Lead capture intro */}
                        <AnimatePresence mode="wait">
                            {!leadCaptured ? (
                                <motion.div
                                    key="lead"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-1 flex flex-col justify-between px-5 py-6"
                                >
                                    <div>
                                        <p className="text-verdant-bg text-sm leading-relaxed mb-1">
                                            Welcome to Studio 5.
                                        </p>
                                        <p className="text-white/40 text-xs leading-relaxed mb-6">
                                            Feel free to share your details so we can follow up — or just skip and start chatting.
                                        </p>
                                        <div className="space-y-3">
                                            <input
                                                type="text"
                                                placeholder="Your name"
                                                value={leadName}
                                                onChange={(e) => setLeadName(e.target.value)}
                                                onKeyDown={handleLeadKeyDown}
                                                className="w-full bg-white/5 border border-white/10 px-3 py-2.5 text-verdant-bg text-xs placeholder:text-white/25 outline-none focus:border-white/25 transition-colors"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email address"
                                                value={leadEmail}
                                                onChange={(e) => setLeadEmail(e.target.value)}
                                                onKeyDown={handleLeadKeyDown}
                                                className="w-full bg-white/5 border border-white/10 px-3 py-2.5 text-verdant-bg text-xs placeholder:text-white/25 outline-none focus:border-white/25 transition-colors"
                                            />
                                            <input
                                                type="tel"
                                                placeholder="Phone number"
                                                value={leadPhone}
                                                onChange={(e) => setLeadPhone(e.target.value)}
                                                onKeyDown={handleLeadKeyDown}
                                                className="w-full bg-white/5 border border-white/10 px-3 py-2.5 text-verdant-bg text-xs placeholder:text-white/25 outline-none focus:border-white/25 transition-colors"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 mt-6">
                                        <button
                                            onClick={handleLeadSubmit}
                                            className="w-full bg-verdant-bg text-verdant-black text-xs py-2.5 px-3 tracking-wider uppercase hover:bg-white transition-colors flex items-center justify-center gap-2"
                                            data-cursor="hover"
                                        >
                                            Start chatting <ArrowRight size={12} />
                                        </button>
                                        <button
                                            onClick={skipLead}
                                            className="text-white/30 text-xs py-2 hover:text-white/60 transition-colors tracking-wider uppercase text-center"
                                            data-cursor="hover"
                                        >
                                            Skip
                                        </button>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="chat"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-1 flex flex-col min-h-0"
                                >
                                    {/* Messages */}
                                    <div
                                        className="flex-1 overflow-y-auto px-5 py-4 space-y-4"
                                        onWheel={(e) => e.stopPropagation()}
                                    >
                                        {messages.length === 0 && (
                                            <div className="text-white/30 text-sm leading-relaxed">
                                                <p>Hello. How can I help you today?</p>
                                                <p className="mt-3 text-xs">
                                                    Ask about our services, projects, process, or how to get started.
                                                </p>
                                            </div>
                                        )}

                                        {messages.map((msg) => (
                                            <div
                                                key={msg.id}
                                                className={clsx(
                                                    "flex flex-col gap-1",
                                                    msg.role === "user" ? "items-end" : "items-start"
                                                )}
                                            >
                                                <div
                                                    className={clsx(
                                                        "max-w-[85%] px-4 py-3 text-sm leading-relaxed",
                                                        msg.role === "user"
                                                            ? "bg-white/10 text-verdant-bg"
                                                            : "bg-white/5 text-verdant-bg"
                                                    )}
                                                >
                                                    {msg.content || (
                                                        <span className="inline-flex gap-1 items-center text-white/30">
                                                            <span className="animate-bounce [animation-delay:0ms]">·</span>
                                                            <span className="animate-bounce [animation-delay:150ms]">·</span>
                                                            <span className="animate-bounce [animation-delay:300ms]">·</span>
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="text-[10px] text-white/20 px-1">{msg.timestamp}</span>
                                            </div>
                                        ))}
                                        <div ref={messagesEndRef} />
                                    </div>

                                    {/* Close confirmation / email capture */}
                                    <AnimatePresence>
                                        {closeState === "confirming" && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 8 }}
                                                className="px-5 py-4 border-t border-white/10 bg-verdant-black shrink-0"
                                            >
                                                <p className="text-verdant-bg text-xs mb-3">
                                                    Want a copy of this conversation?
                                                </p>
                                                <input
                                                    type="email"
                                                    placeholder="your@email.com (optional)"
                                                    value={visitorEmail}
                                                    onChange={(e) => setVisitorEmail(e.target.value)}
                                                    onKeyDown={handleEmailKeyDown}
                                                    className="w-full bg-white/5 border border-white/10 px-3 py-2 text-verdant-bg text-xs placeholder:text-white/25 outline-none mb-3"
                                                />
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => closeChat(visitorEmail)}
                                                        className="flex-1 bg-verdant-bg text-verdant-black text-xs py-2 px-3 tracking-wider uppercase hover:bg-white transition-colors flex items-center justify-center gap-2"
                                                        data-cursor="hover"
                                                    >
                                                        Send & Close <ArrowRight size={12} />
                                                    </button>
                                                    <button
                                                        onClick={() => closeChat("")}
                                                        className="text-white/30 text-xs py-2 px-3 hover:text-white/60 transition-colors tracking-wider uppercase"
                                                        data-cursor="hover"
                                                    >
                                                        Skip
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Input */}
                                    {closeState === "idle" && (
                                        <div className="px-5 py-4 border-t border-white/10 shrink-0 flex items-center gap-3">
                                            <input
                                                ref={inputRef}
                                                type="text"
                                                placeholder="Type a message…"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                onKeyDown={handleKeyDown}
                                                disabled={isLoading}
                                                className="flex-1 bg-transparent text-verdant-bg text-sm placeholder:text-white/25 outline-none disabled:opacity-50"
                                            />
                                            <button
                                                onClick={sendMessage}
                                                disabled={isLoading || !inputValue.trim()}
                                                className="text-white/40 hover:text-verdant-bg transition-colors disabled:opacity-30 shrink-0"
                                                data-cursor="hover"
                                                aria-label="Send message"
                                            >
                                                <Send size={15} />
                                            </button>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger Button */}
            <motion.button
                onClick={isOpen ? requestClose : openChat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-4 sm:right-6 z-[9998] w-12 h-12 bg-verdant-black border border-white/10 flex items-center justify-center shadow-lg hover:border-white/25 transition-colors"
                data-cursor="hover"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.span
                            key="close"
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.15 }}
                        >
                            <X size={18} className="text-verdant-bg" />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="open"
                            initial={{ opacity: 0, rotate: 90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -90 }}
                            transition={{ duration: 0.15 }}
                        >
                            <MessageCircle size={18} className="text-verdant-bg" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </>
    );
}
