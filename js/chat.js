/* ═══════════════════════════════════════════════════════════
   Studio5 Architects — AI Chat Widget  v2
   - Welcome screen: name / phone / email (all optional, skippable)
   - Streams Claude responses
   - Auto-emails full transcript on chat close (if messages exist)
═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const API_CHAT       = '/api/chat';
  const API_TRANSCRIPT = '/api/transcript';
  const GREETING       = "Hello! I'm the Studio5 Architects assistant. I can answer questions about our services, team, projects, CSR programme, or help you get in touch. How can I help you today?";

  /* ── State ───────────────────────────────────────────── */
  let messages    = [];
  let visitor     = { name: '', phone: '', email: '' };
  let isOpen      = false;
  let isLoading   = false;
  let transcriptSent = false;

  /* ── Styles ──────────────────────────────────────────── */
  const css = `
    /* ── Toggle button ── */
    #s5-btn {
      position:fixed; bottom:2rem; left:2rem; z-index:9998;
      width:3.25rem; height:3.25rem;
      background:#1B4F8A; border:none; border-radius:50%;
      cursor:pointer; display:flex; align-items:center; justify-content:center;
      box-shadow:0 4px 24px rgba(27,79,138,.5);
      transition:transform .2s,box-shadow .2s;
    }
    #s5-btn:hover { transform:scale(1.08); box-shadow:0 6px 32px rgba(27,79,138,.6); }
    #s5-btn svg   { color:#fff; pointer-events:none; }
    #s5-btn .s5-ic-close { display:none; }
    #s5-btn.open .s5-ic-chat  { display:none; }
    #s5-btn.open .s5-ic-close { display:block; }

    /* Badge */
    #s5-badge {
      position:absolute; top:-4px; right:-4px;
      width:18px; height:18px; border-radius:50%;
      background:#ef4444; border:2px solid #0A0A0A;
      font-size:10px; font-weight:700; color:#fff;
      display:none; align-items:center; justify-content:center;
      animation:s5pulse 2s infinite;
    }
    @keyframes s5pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.15)} }

    /* ── Panel ── */
    #s5-panel {
      position:fixed; bottom:6rem; left:2rem; z-index:9997;
      width:380px; max-width:calc(100vw - 2rem);
      background:#111; border:1px solid rgba(255,255,255,.08);
      display:flex; flex-direction:column;
      box-shadow:0 24px 80px rgba(0,0,0,.75);
      max-height:calc(100vh - 9rem);
      transform:translateY(14px); opacity:0; pointer-events:none;
      transition:transform .3s ease,opacity .3s ease;
    }
    #s5-panel.open { transform:translateY(0); opacity:1; pointer-events:all; }

    /* Header */
    .s5-hd {
      background:#1B4F8A; padding:.875rem 1.125rem;
      display:flex; align-items:center; justify-content:space-between;
      flex-shrink:0;
    }
    .s5-hd-left  { display:flex; align-items:center; gap:.625rem; }
    .s5-hd-av {
      width:2rem; height:2rem; border-radius:50%;
      background:rgba(255,255,255,.15);
      display:flex; align-items:center; justify-content:center;
      flex-shrink:0;
    }
    .s5-hd-title    { font-size:.78rem; font-weight:600; color:#fff; }
    .s5-hd-sub      { font-size:.6rem; color:rgba(255,255,255,.6); letter-spacing:.06em; }
    .s5-hd-dot      { display:inline-block; width:6px; height:6px; border-radius:50%; background:#4ade80; margin-right:4px; animation:s5blink 2s infinite; }
    @keyframes s5blink { 0%,100%{opacity:1} 50%{opacity:.35} }
    .s5-hd-btn      { background:none; border:none; cursor:pointer; color:rgba(255,255,255,.55); padding:3px; display:flex; transition:color .15s; }
    .s5-hd-btn:hover{ color:#fff; }

    /* ── WELCOME SCREEN ── */
    #s5-welcome {
      padding:1.5rem 1.25rem;
      flex:1; display:flex; flex-direction:column; gap:1rem;
      overflow-y:auto;
    }
    .s5-wlc-title {
      font-size:.9rem; font-weight:600; color:#fff; margin:0 0 2px;
    }
    .s5-wlc-sub {
      font-size:.72rem; color:#9ca3af; line-height:1.55; margin:0;
    }
    .s5-wlc-fields { display:flex; flex-direction:column; gap:.625rem; }
    .s5-wlc-label {
      display:block; font-size:.58rem; letter-spacing:.14em;
      text-transform:uppercase; color:#6b7280; margin-bottom:4px;
    }
    .s5-wlc-input {
      width:100%; background:rgba(255,255,255,.05);
      border:1px solid rgba(255,255,255,.1); color:#e5e7eb;
      font-size:.8rem; padding:.625rem .75rem; outline:none;
      font-family:inherit; box-sizing:border-box; transition:border-color .2s;
    }
    .s5-wlc-input:focus  { border-color:rgba(27,79,138,.7); }
    .s5-wlc-input::placeholder { color:#374151; }
    .s5-wlc-start {
      width:100%; background:#1B4F8A; border:none; cursor:pointer;
      color:#fff; font-size:.68rem; font-weight:700;
      letter-spacing:.14em; text-transform:uppercase;
      padding:.75rem; font-family:inherit; transition:background .15s;
    }
    .s5-wlc-start:hover { background:#2260A8; }
    .s5-wlc-skip {
      text-align:center; font-size:.65rem; color:#4b5563;
      cursor:pointer; letter-spacing:.06em; transition:color .15s;
      background:none; border:none; font-family:inherit; width:100%;
    }
    .s5-wlc-skip:hover { color:#9ca3af; }
    .s5-wlc-note {
      font-size:.6rem; color:#374151; line-height:1.5;
      border-top:1px solid rgba(255,255,255,.06);
      padding-top:.75rem; margin-top:.25rem;
    }

    /* ── CHAT SCREEN ── */
    #s5-chat { flex:1; display:flex; flex-direction:column; overflow:hidden; }

    /* Visitor chip */
    #s5-visitor-chip {
      display:none; align-items:center; gap:.5rem;
      padding:.5rem .875rem; background:rgba(27,79,138,.12);
      border-bottom:1px solid rgba(27,79,138,.2);
      font-size:.6rem; color:#93c5fd; letter-spacing:.06em;
      flex-shrink:0;
    }

    /* Messages */
    #s5-msgs {
      flex:1; overflow-y:auto; padding:1rem;
      display:flex; flex-direction:column; gap:.625rem;
      min-height:220px; max-height:340px;
      scrollbar-width:thin; scrollbar-color:rgba(255,255,255,.08) transparent;
    }
    #s5-msgs::-webkit-scrollbar       { width:3px; }
    #s5-msgs::-webkit-scrollbar-thumb { background:rgba(255,255,255,.1); }

    .s5-msg      { display:flex; flex-direction:column; max-width:86%; animation:s5in .22s ease; }
    @keyframes s5in { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }
    .s5-msg.user       { align-self:flex-end; align-items:flex-end; }
    .s5-msg.assistant  { align-self:flex-start; align-items:flex-start; }
    .s5-msg-lbl        { font-size:.58rem; letter-spacing:.1em; text-transform:uppercase; color:#374151; margin-bottom:3px; }
    .s5-bubble         { padding:.575rem .8rem; font-size:.8rem; line-height:1.55; }
    .s5-msg.user      .s5-bubble { background:#1B4F8A; color:#fff; border-bottom-right-radius:0; }
    .s5-msg.assistant .s5-bubble { background:#1a1a1a; border:1px solid rgba(255,255,255,.07); color:#d1d5db; border-bottom-left-radius:0; }

    /* Typing */
    .s5-typing-wrap .s5-bubble { display:flex; align-items:center; gap:4px; }
    .s5-dot { width:6px; height:6px; border-radius:50%; background:#3B82C4; animation:s5dots 1.2s infinite; }
    .s5-dot:nth-child(2){ animation-delay:.2s; }
    .s5-dot:nth-child(3){ animation-delay:.4s; }
    @keyframes s5dots { 0%,80%,100%{transform:translateY(0);opacity:.35} 40%{transform:translateY(-5px);opacity:1} }

    /* Input footer */
    .s5-ft {
      padding:.75rem .875rem .625rem;
      border-top:1px solid rgba(255,255,255,.07);
      flex-shrink:0;
    }
    .s5-input-row {
      display:flex; align-items:flex-end; gap:.375rem;
      background:#1a1a1a; border:1px solid rgba(255,255,255,.1);
      padding:.4rem .5rem; transition:border-color .2s;
    }
    .s5-input-row:focus-within { border-color:rgba(27,79,138,.65); }
    #s5-input {
      flex:1; background:none; border:none; outline:none;
      color:#e5e7eb; font-size:.8rem; font-family:inherit;
      line-height:1.5; resize:none; max-height:84px; min-height:20px;
    }
    #s5-input::placeholder { color:#374151; }
    #s5-send {
      background:#1B4F8A; border:none; cursor:pointer;
      width:28px; height:28px; flex-shrink:0;
      display:flex; align-items:center; justify-content:center;
      transition:background .15s;
    }
    #s5-send:hover:not(:disabled) { background:#2260A8; }
    #s5-send:disabled { opacity:.35; cursor:not-allowed; }
    #s5-send svg { color:#fff; }

    .s5-ft-meta {
      display:flex; align-items:center; justify-content:space-between;
      margin-top:.375rem;
    }
    .s5-ft-hint   { font-size:.58rem; color:#374151; }
    #s5-new-chat  {
      background:none; border:none; cursor:pointer;
      font-size:.58rem; color:#374151; font-family:inherit;
      letter-spacing:.06em; transition:color .15s; padding:0;
    }
    #s5-new-chat:hover { color:#9ca3af; }

    /* Toast */
    .s5-toast {
      position:fixed; bottom:7.5rem; left:2rem;
      background:#161616; border:1px solid rgba(255,255,255,.1);
      color:#e5e7eb; font-size:.72rem; padding:.5rem .875rem;
      z-index:9999; pointer-events:none; animation:s5in .25s ease;
    }
  `;

  const el = document.createElement('style');
  el.textContent = css;
  document.head.appendChild(el);

  /* ── Inject HTML ─────────────────────────────────────── */
  document.body.insertAdjacentHTML('beforeend', `
    <button id="s5-btn" aria-label="Chat with us">
      <span id="s5-badge"></span>
      <svg class="s5-ic-chat" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/>
      </svg>
      <svg class="s5-ic-close" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.25" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
      </svg>
    </button>

    <div id="s5-panel" role="dialog" aria-label="Studio5 chat">

      <!-- Header (always visible) -->
      <div class="s5-hd">
        <div class="s5-hd-left">
          <div class="s5-hd-av">
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12"/>
            </svg>
          </div>
          <div>
            <p class="s5-hd-title">Studio5 Architects</p>
            <p class="s5-hd-sub"><span class="s5-hd-dot"></span>AI Assistant · Online</p>
          </div>
        </div>
        <button class="s5-hd-btn" id="s5-close-btn" aria-label="Close chat">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.25" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- ── WELCOME SCREEN ── -->
      <div id="s5-welcome">
        <div>
          <p class="s5-wlc-title">Welcome</p>
          <p class="s5-wlc-sub">Leave your details so we can follow up with you — or skip and start chatting right away.</p>
        </div>
        <div class="s5-wlc-fields">
          <div>
            <label class="s5-wlc-label">Full Name</label>
            <input id="s5-wlc-name"  class="s5-wlc-input" type="text"  placeholder="e.g. Tendai Moyo" />
          </div>
          <div>
            <label class="s5-wlc-label">Phone Number</label>
            <input id="s5-wlc-phone" class="s5-wlc-input" type="tel"   placeholder="e.g. 0783 934 290" />
          </div>
          <div>
            <label class="s5-wlc-label">Email Address</label>
            <input id="s5-wlc-email" class="s5-wlc-input" type="email" placeholder="e.g. you@example.com" />
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:.5rem;">
          <button class="s5-wlc-start" id="s5-wlc-start">Start Chatting &rarr;</button>
          <button class="s5-wlc-skip"  id="s5-wlc-skip">Skip &rarr; Chat without sharing details</button>
        </div>
        <p class="s5-wlc-note">All fields are optional. Your information is used only for follow-up by the Studio5 team and is never shared with third parties.</p>
      </div>

      <!-- ── CHAT SCREEN (hidden until welcome done) ── -->
      <div id="s5-chat" style="display:none;">

        <!-- Visitor chip -->
        <div id="s5-visitor-chip">
          <svg width="11" height="11" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
          <span id="s5-visitor-name-chip"></span>
        </div>

        <!-- Messages -->
        <div id="s5-msgs"></div>

        <!-- Input -->
        <div class="s5-ft">
          <div class="s5-input-row">
            <textarea id="s5-input" placeholder="Ask about our services, team or projects…" rows="1"></textarea>
            <button id="s5-send" aria-label="Send">
              <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.25" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
              </svg>
            </button>
          </div>
          <div class="s5-ft-meta">
            <span class="s5-ft-hint">Enter to send &nbsp;·&nbsp; Shift+Enter for new line</span>
            <button id="s5-new-chat">&#8635; New conversation</button>
          </div>
        </div>
      </div>

    </div>
  `);

  /* ── Refs ────────────────────────────────────────────── */
  const btn          = document.getElementById('s5-btn');
  const badge        = document.getElementById('s5-badge');
  const panel        = document.getElementById('s5-panel');
  const closeBtn     = document.getElementById('s5-close-btn');
  const welcomeEl    = document.getElementById('s5-welcome');
  const chatEl       = document.getElementById('s5-chat');
  const nameIn       = document.getElementById('s5-wlc-name');
  const phoneIn      = document.getElementById('s5-wlc-phone');
  const emailIn      = document.getElementById('s5-wlc-email');
  const startBtn     = document.getElementById('s5-wlc-start');
  const skipBtn      = document.getElementById('s5-wlc-skip');
  const msgsEl       = document.getElementById('s5-msgs');
  const inputEl      = document.getElementById('s5-input');
  const sendBtn      = document.getElementById('s5-send');
  const newChatBtn   = document.getElementById('s5-new-chat');
  const visitorChip  = document.getElementById('s5-visitor-chip');
  const visitorLabel = document.getElementById('s5-visitor-name-chip');

  /* ── Helpers ─────────────────────────────────────────── */
  function scrollBottom() { msgsEl.scrollTop = msgsEl.scrollHeight; }

  function addMsg(role, content) {
    const lbl = role === 'user' ? (visitor.name || 'You') : 'Studio5 Assistant';
    const div = document.createElement('div');
    div.className = `s5-msg ${role}`;
    div.innerHTML = `<p class="s5-msg-lbl">${lbl}</p><div class="s5-bubble"></div>`;
    div.querySelector('.s5-bubble').textContent = content;
    msgsEl.appendChild(div);
    scrollBottom();
    return div.querySelector('.s5-bubble');
  }

  function showTyping() {
    const div = document.createElement('div');
    div.id = 's5-typing';
    div.className = 's5-msg assistant s5-typing-wrap';
    div.innerHTML = '<p class="s5-msg-lbl">Studio5 Assistant</p><div class="s5-bubble"><span class="s5-dot"></span><span class="s5-dot"></span><span class="s5-dot"></span></div>';
    msgsEl.appendChild(div);
    scrollBottom();
  }

  function removeTyping() { document.getElementById('s5-typing')?.remove(); }

  function toast(msg, ms = 3200) {
    const t = document.createElement('div');
    t.className = 's5-toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), ms);
  }

  function autoResize() {
    inputEl.style.height = 'auto';
    inputEl.style.height = Math.min(inputEl.scrollHeight, 84) + 'px';
  }

  /* ── Visitor chip ────────────────────────────────────── */
  function updateChip() {
    const label = [visitor.name, visitor.phone, visitor.email].filter(Boolean).join(' · ');
    if (label) {
      visitorLabel.textContent = label;
      visitorChip.style.display = 'flex';
    } else {
      visitorChip.style.display = 'none';
    }
  }

  /* ── Welcome → Chat transition ───────────────────────── */
  function startChat() {
    visitor.name  = nameIn.value.trim();
    visitor.phone = phoneIn.value.trim();
    visitor.email = emailIn.value.trim();

    welcomeEl.style.display = 'none';
    chatEl.style.display    = 'flex';
    chatEl.style.flexDirection = 'column';

    updateChip();
    transcriptSent = false;

    // Greeting
    setTimeout(() => {
      const greeting = visitor.name
        ? `Hello ${visitor.name}! I'm the Studio5 Architects assistant. How can I help you today?`
        : GREETING;
      addMsg('assistant', greeting);
    }, 250);

    inputEl.focus();
  }

  startBtn.addEventListener('click', startChat);
  skipBtn.addEventListener('click', () => {
    visitor = { name: '', phone: '', email: '' };
    startChat();
  });

  // Allow Enter on last welcome field to start chat
  emailIn.addEventListener('keydown', e => { if (e.key === 'Enter') startChat(); });

  /* ── Open / Close ────────────────────────────────────── */
  function openPanel() {
    isOpen = true;
    btn.classList.add('open');
    panel.classList.add('open');
    badge.style.display = 'none';
    // Focus first welcome field if welcome screen is visible
    if (welcomeEl.style.display !== 'none') {
      setTimeout(() => nameIn.focus(), 320);
    } else {
      setTimeout(() => inputEl.focus(), 320);
    }
  }

  function closePanel() {
    isOpen = false;
    btn.classList.remove('open');
    panel.classList.remove('open');
    // Auto-send transcript if there are messages
    autoSendTranscript();
  }

  btn.addEventListener('click', () => isOpen ? closePanel() : openPanel());
  closeBtn.addEventListener('click', closePanel);

  /* ── Auto-send transcript ────────────────────────────── */
  async function autoSendTranscript() {
    const userMsgs = messages.filter(m => m.role === 'user');
    if (userMsgs.length === 0 || transcriptSent) return;
    transcriptSent = true;
    try {
      await fetch(API_TRANSCRIPT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ messages, visitor }),
      });
    } catch { /* silent */ }
  }

  /* ── Send message ────────────────────────────────────── */
  async function sendMessage() {
    const text = inputEl.value.trim();
    if (!text || isLoading) return;

    addMsg('user', text);
    messages.push({ role: 'user', content: text });
    transcriptSent = false; // New message means we need to re-send on next close

    inputEl.value = '';
    inputEl.style.height = 'auto';
    sendBtn.disabled = true;
    isLoading = true;
    showTyping();

    try {
      const res = await fetch(API_CHAT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ messages }),
      });

      if (!res.ok) throw new Error('Server error');

      removeTyping();
      const bubble = addMsg('assistant', '');
      let full = '';

      const reader  = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        for (const line of decoder.decode(value).split('\n')) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') break;
          try {
            const j = JSON.parse(data);
            if (j.text) { full += j.text; bubble.textContent = full; scrollBottom(); }
          } catch { /* skip */ }
        }
      }

      if (full) messages.push({ role: 'assistant', content: full });

    } catch {
      removeTyping();
      addMsg('assistant', "Sorry, I'm having trouble connecting right now. Please try again or reach us at info@studio5architects.com.");
    } finally {
      isLoading = false;
      sendBtn.disabled = false;
      inputEl.focus();
    }
  }

  sendBtn.addEventListener('click', sendMessage);
  inputEl.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });
  inputEl.addEventListener('input', autoResize);

  /* ── New conversation ────────────────────────────────── */
  newChatBtn.addEventListener('click', () => {
    autoSendTranscript();
    messages = [];
    msgsEl.innerHTML = '';
    transcriptSent = false;
    // Go back to welcome screen
    chatEl.style.display    = 'none';
    welcomeEl.style.display = 'flex';
    welcomeEl.style.flexDirection = 'column';
    nameIn.value = phoneIn.value = emailIn.value = '';
    visitor = { name: '', phone: '', email: '' };
    setTimeout(() => nameIn.focus(), 100);
  });

  /* ── Nudge badge after 10s ───────────────────────────── */
  setTimeout(() => {
    if (!isOpen) {
      badge.textContent = '1';
      badge.style.display = 'flex';
    }
  }, 10000);

})();
