'use client';

import { useState, useEffect, useRef } from 'react';

const GREETING = "Hello! I'm the Studio5 Architects assistant. I can answer questions about our services, team, projects, or help you get in touch. How can I help you today?";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWelcome, setIsWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [visitor, setVisitor] = useState({ name: '', phone: '', email: '' });
  const [input, setInput] = useState('');
  const [badge, setBadge] = useState(false);

  const msgsEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    msgsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setBadge(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setBadge(false);
  };

  const handleStart = (skip = false) => {
    if (skip) setVisitor({ name: '', phone: '', email: '' });
    setIsWelcome(false);
    setTimeout(() => {
      setMessages([{ role: 'assistant', content: GREETING }]);
      inputRef.current?.focus();
    }, 300);
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    const newMessages: { role: 'user' | 'assistant'; content: string }[] = [...messages, { role: 'user', content: userText }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error('API Error');

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let assistantText = '';

      if (reader) {
        setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
        
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');
          
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6).trim();
              if (data === '[DONE]') break;
              try {
                const parsed = JSON.parse(data);
                if (parsed.text) {
                  assistantText += parsed.text;
                  setMessages(prev => {
                    const last = prev[prev.length - 1];
                    if (last && last.role === 'assistant') {
                      return [...prev.slice(0, -1), { role: 'assistant', content: assistantText }];
                    }
                    return prev;
                  });
                }
              } catch (e) { /* ignore */ }
            }
          }
        }
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error. Please try again or email us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    // Send transcript to API before resetting
    if (messages.length > 1) {
       fetch('/api/transcript', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ messages, visitor }),
       }).catch(() => {});
    }
    setMessages([]);
    setIsWelcome(true);
    setVisitor({ name: '', phone: '', email: '' });
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-8 left-8 z-[9998] w-14 h-14 bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 ${isOpen ? 'rotate-90' : ''}`}
        aria-label="Toggle chat"
      >
        {badge && !isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-white rounded-full text-[10px] font-bold flex items-center justify-center animate-bounce">
            1
          </span>
        )}
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        )}
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-24 left-8 z-[9997] w-[380px] max-w-[calc(100vw-4rem)] bg-[#111111] border border-white/10 shadow-2xl flex flex-col transition-all duration-300 origin-bottom-left ${
          isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
        }`}
        style={{ height: '520px', maxHeight: 'calc(100vh - 10rem)' }}
      >
        {/* Header */}
        <div className="bg-blue-700 p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12" />
              </svg>
            </div>
            <div>
              <p className="text-white text-xs font-bold leading-none">Studio5 Architects</p>
              <p className="text-white/60 text-[10px] mt-1 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> AI Assistant · Online
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {isWelcome ? (
          /* Welcome Screen */
          <div className="flex-1 p-6 flex flex-col gap-5 overflow-y-auto">
            <div>
              <p className="text-white text-base font-bold">Welcome</p>
              <p className="text-gray-400 text-xs leading-relaxed mt-1">Leave your details so we can follow up with you — or skip and start chatting right away.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-gray-500 font-bold mb-1.5">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Tendai Moyo"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-3 py-2 text-white text-sm outline-none focus:border-blue-500/50 transition-colors"
                  value={visitor.name}
                  onChange={(e) => setVisitor({ ...visitor, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-gray-500 font-bold mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  placeholder="e.g. 0783 934 290"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-3 py-2 text-white text-sm outline-none focus:border-blue-500/50 transition-colors"
                  value={visitor.phone}
                  onChange={(e) => setVisitor({ ...visitor, phone: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-gray-500 font-bold mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-sm px-3 py-2 text-white text-sm outline-none focus:border-blue-500/50 transition-colors"
                  value={visitor.email}
                  onChange={(e) => setVisitor({ ...visitor, email: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-3 mt-auto">
              <button
                onClick={() => handleStart()}
                className="w-full bg-blue-700 text-white text-[11px] font-bold tracking-widest uppercase py-3 hover:bg-blue-600 transition-colors"
              >
                Start Chatting &rarr;
              </button>
              <button
                onClick={() => handleStart(true)}
                className="w-full text-gray-500 text-[10px] tracking-wider hover:text-gray-300 transition-colors"
              >
                Skip & Chat without sharing details
              </button>
            </div>
            <p className="text-[10px] text-gray-600 leading-relaxed border-t border-white/5 pt-4">Your info is used only for follow-up by the Studio5 team and is never shared.</p>
          </div>
        ) : (
          /* Chat Screen */
          <div className="flex-1 flex flex-col overflow-hidden">
            {visitor.name && (
              <div className="px-4 py-2 bg-blue-900/20 border-b border-blue-500/20 flex items-center gap-2">
                <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                <span className="text-[10px] text-blue-300/80 font-bold tracking-wider truncate">{visitor.name} {visitor.email && `· ${visitor.email}`}</span>
              </div>
            )}

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((m, i) => (
                <div key={i} className={`flex flex-col max-w-[85%] ${m.role === 'user' ? 'ml-auto items-end' : 'mr-auto items-start animate-in fade-in slide-in-from-bottom-1'}`}>
                  <span className="text-[9px] uppercase tracking-widest text-[#444] mb-1 font-bold">
                    {m.role === 'user' ? (visitor.name || 'Visitor') : 'Studio5 Assistant'}
                  </span>
                  <div className={`p-3 text-[13px] leading-relaxed rounded-lg ${
                    m.role === 'user' 
                      ? 'bg-blue-700 text-white rounded-br-none' 
                      : 'bg-[#1a1a1a] text-gray-200 border border-white/5 rounded-bl-none'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && messages[messages.length-1]?.role === 'user' && (
                <div className="flex flex-col items-start max-w-[85%] animate-pulse">
                  <span className="text-[9px] uppercase tracking-widest text-[#444] mb-1 font-bold">Studio5 Assistant</span>
                  <div className="bg-[#1a1a1a] p-3 rounded-lg flex gap-1">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-100" />
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
              <div ref={msgsEndRef} />
            </div>

            <div className="p-4 border-t border-white/10 shrink-0">
              <div className="flex items-end gap-2 bg-[#1a1a1a] border border-white/10 p-2 focus-within:border-blue-500/50 transition-colors">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage();
                    }
                  }}
                  placeholder="How can we help you?"
                  className="flex-1 bg-transparent border-none outline-none text-white text-sm py-1 resize-none"
                  style={{ maxHeight: '100px' }}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-sm bg-blue-700 text-white flex items-center justify-center hover:bg-blue-600 disabled:opacity-30 transition-all shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[9px] text-[#333] font-bold tracking-widest uppercase">Studio5 Chat v2</span>
                <button onClick={resetChat} className="text-[9px] text-[#444] hover:text-white transition-colors uppercase font-bold tracking-widest flex items-center gap-1">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992h4.992m-.001 4.992-3.84-3.84c-3.15-3.149-3.15-8.254 0-11.404L7.332 4.092c3.149-3.149 8.254-3.15 11.404 0l1.296 1.296"/></svg>
                  New Chat
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
