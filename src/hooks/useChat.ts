"use client";

import { useState, useCallback, useRef } from "react";

export interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: string;
}

export interface LeadInfo {
    name: string;
    email: string;
    phone: string;
}

type CloseState = "idle" | "confirming";

export function useChat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [closeState, setCloseState] = useState<CloseState>("idle");
    const [visitorEmail, setVisitorEmail] = useState("");
    const [leadCaptured, setLeadCaptured] = useState(false);
    const [leadInfo, setLeadInfo] = useState<LeadInfo | null>(null);
    const abortRef = useRef<AbortController | null>(null);

    const openChat = useCallback(() => {
        setIsOpen(true);
        setCloseState("idle");
    }, []);

    const sendTranscript = useCallback((email: string, msgs: Message[], lead: LeadInfo | null) => {
        if (msgs.length === 0) return;
        fetch("/api/chat/send-transcript", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                messages: msgs,
                visitorEmail: email || undefined,
                leadInfo: lead || undefined,
            }),
        }).catch(() => {});
    }, []);

    const closeChat = useCallback(
        (email?: string) => {
            sendTranscript(email ?? visitorEmail, messages, leadInfo);
            setIsOpen(false);
            setCloseState("idle");
            setVisitorEmail("");
            setLeadCaptured(false);
            setLeadInfo(null);
        },
        [messages, visitorEmail, leadInfo, sendTranscript]
    );

    const submitLead = useCallback((info: LeadInfo) => {
        setLeadInfo(info);
        setLeadCaptured(true);
        if (info.email) setVisitorEmail(info.email);
    }, []);

    const skipLead = useCallback(() => {
        setLeadCaptured(true);
    }, []);

    const requestClose = useCallback(() => {
        if (messages.length === 0) {
            setIsOpen(false);
            setLeadCaptured(false);
            setLeadInfo(null);
            return;
        }
        // If we already have their email from lead capture, skip the "want a copy?" step
        if (leadInfo?.email) {
            closeChat(leadInfo.email);
            return;
        }
        setCloseState("confirming");
    }, [messages.length, leadInfo, closeChat]);

    const clearChat = useCallback(() => {
        setMessages([]);
        setInputValue("");
        setCloseState("idle");
    }, []);

    const sendMessage = useCallback(async () => {
        const text = inputValue.trim();
        if (!text || isLoading) return;

        const userMsg: Message = {
            id: crypto.randomUUID(),
            role: "user",
            content: text,
            timestamp: new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
        };

        const assistantMsg: Message = {
            id: crypto.randomUUID(),
            role: "assistant",
            content: "",
            timestamp: new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
        };

        setMessages((prev) => [...prev, userMsg, assistantMsg]);
        setInputValue("");
        setIsLoading(true);

        abortRef.current = new AbortController();

        try {
            const history = [...messages, userMsg].map(({ role, content }) => ({ role, content }));

            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: history }),
                signal: abortRef.current.signal,
            });

            if (!res.ok || !res.body) throw new Error("API error");

            const reader = res.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value, { stream: true });
                setMessages((prev) =>
                    prev.map((m) =>
                        m.id === assistantMsg.id
                            ? { ...m, content: m.content + chunk }
                            : m
                    )
                );
            }
        } catch (err: unknown) {
            if (err instanceof Error && err.name !== "AbortError") {
                setMessages((prev) =>
                    prev.map((m) =>
                        m.id === assistantMsg.id
                            ? { ...m, content: "Sorry, something went wrong. Please try again." }
                            : m
                    )
                );
            }
        } finally {
            setIsLoading(false);
        }
    }, [inputValue, isLoading, messages]);

    return {
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
        closeChat,
        requestClose,
        clearChat,
    };
}
