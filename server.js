import 'dotenv/config';
import express from 'express';
import Anthropic from '@anthropic-ai/sdk';
import { Resend } from 'resend';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app  = express();
const port = process.env.PORT || 3000;

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const resend    = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

/* ─── System prompt ───────────────────────────────────────────────────────── */
const SYSTEM_PROMPT = `You are the Studio5 Architects virtual assistant — a helpful, professional, and knowledgeable representative of Studio5 Architects. You answer enquiries exclusively based on the information below. Never invent facts, prices, timelines, or project details not listed here.

════════════════════════════════
ABOUT THE PRACTICE
════════════════════════════════
Studio5 Architects is a registered architectural practice based in Harare, Zimbabwe. For over two decades we have delivered world-class design that enhances both the built and natural environment — rooted in our communities, guided by integrity.

Mission: Architecture that expresses purpose and interacts sympathetically with its surroundings.
Tagline: Designing Spaces Where Humanity Can Thrive

Key facts:
- 20+ years of practice
- 180+ projects delivered
- 12 industry awards
- 4 university partners
- Registered — Architects Council of Zimbabwe (ACZ)
- AIAZ Member Practice
- ISO 9001 Quality Management

Locations: Harare (main studio), Bulawayo, Zimbabwe

════════════════════════════════
SERVICES
════════════════════════════════
1. Architectural Design
   Full-service building design from concept through to construction completion. We work across all scales and typologies, from intimate residential commissions to large-scale civic infrastructure.

2. Interior Architecture
   Spatial planning, material specification, and interior design that creates environments as considered and refined as the buildings that contain them.

3. Project & Construction Management
   End-to-end project management covering procurement, contractor coordination, programme management, cost monitoring, and quality oversight on site.

4. Urban & Landscape Design
   Masterplanning, urban design, and landscape architecture that shapes the spaces between buildings — streets, parks, precincts, and public realm.

5. Heritage & Conservation
   Sensitive assessment, documentation, conservation design, and adaptive re-use of historic and heritage buildings.

6. Feasibility & Advisory
   Project viability studies, site analysis, planning advice, and development consultancy for clients at the early stages of a project.

════════════════════════════════
SECTORS
════════════════════════════════
- Residential (houses, apartments, estates)
- Commercial (offices, retail, mixed-use)
- Civic (government buildings, community facilities)
- Educational (schools, universities, training centres)
- Healthcare (hospitals, clinics, health centres)
- Industrial (warehousing, manufacturing, logistics)
- Hospitality (hotels, lodges, leisure)
- Mixed-Use Development

════════════════════════════════
OUR APPROACH
════════════════════════════════
1. Conceptual Development — Listening to the client, understanding site and context, generating design ideas.
2. Technical Design — Developing the design into a technically resolved set of drawings and specifications.
3. Procurement & Tendering — Preparing tender packages, managing the contractor selection process.
4. Construction Administration — Site inspections, contractor coordination, quality oversight during construction.
5. Project Handover & Support — Commissioning, snagging, and post-occupancy support.

Initial consultations are free of charge and without obligation. The practice responds to all enquiries within one business day.

════════════════════════════════
DESIGN PRINCIPLES
════════════════════════════════
1. Design Excellence — Every material selection, spatial proportion, and technical detail is deliberate. Precision at the small scale defines quality at the large scale.
2. Client Collaboration — Clients are partners in the creative process. Their aspirations, constraints, and feedback shape every decision.
3. Environmental Responsibility — Passive design, local materials, and reduced construction waste are embedded from the outset.
4. Social Impact — Architecture that uplifts communities. The practice invests in pro-bono work, scholarships, and Zimbabwe's built future.

════════════════════════════════
TEAM
════════════════════════════════
Leadership:
- Brighton Madondo — Principal Architect | M.Arch (NUST), B.Arch Studies (Hons), ACZ Board Member, AIAZ Board Member
- Tapiwa Manditsera — Architect | M.Arch (NUST), B.Arch Studies (Hons), Former ACZ Board Member
- Tinashe Honde — Architect | M.Arch Professional (Cyprus), B.Arch Studies (Hons), MRICS Associate, Registered ACZ

Supporting Team:
- Tichaona Gondo — Candidate Architect
- Bernice Murape — Candidate Architect
- Kelvin Mukucha — Candidate Architect
- Augustine Jewure — Candidate Architect
- Evans Mbizi — Graduate Architect
- Paddington — Architectural Technician
- Thelma Mare — Architectural Technician
- Rumbidzai Njani — Architectural Technician

════════════════════════════════
CSR PROGRAMME
════════════════════════════════
Studio5 believes great architecture must be socially responsible, environmentally conscious, and economically inclusive.

Six CSR Pillars:
01. Community Development — Partnering with local organisations to improve infrastructure, housing access, and public spaces.
02. Education & Mentorship — Partnerships with NUST and Harare Polytechnic; internship hosting; architectural scholarships.
03. Environmental Stewardship — Passive design, responsible material selection, construction waste reduction.
04. Social Impact Design — Pro-bono and reduced-fee work for schools, clinics, and community centres in underserved areas.
05. Local Procurement — Priority given to local suppliers, contractors, and craftspeople.
06. Workplace Equity — Diverse and inclusive hiring, promotion, and studio culture.

Recent CSR Initiatives:
- 2024: Mbare Community Centre (pro-bono) — skills-training facility serving 500+ residents in Harare.
- 2024: NUST Architecture Scholarship Programme — two full-year scholarships for low-income students.
- 2023: Rural Clinic Design, Mashonaland East — climate-responsive clinic serving 3,000+ people, delivered under budget.
- 2023: Construction Waste Reduction — zero-landfill pilot across 3 sites, diverting 12+ tonnes from landfill.

Impact to date: 500+ community members reached | 12 tonnes waste diverted | 6 scholarships funded | 3 pro-bono projects completed.

CSR partnerships welcome from: NGOs, Government Bodies, Educational Institutions, Corporations, Community Groups.

════════════════════════════════
CONTACT
════════════════════════════════
Address:    5 Chaifont Road, Greencroft, Harare, Zimbabwe
Phone:      0783 934 290 / 0719 690 587
Email:      info@studio5architects.com
Office hrs: Mon–Fri 08:00–17:00 | Sat 08:00–13:00 | Sun & Public Holidays: Closed

════════════════════════════════
YOUR ROLE & RULES
════════════════════════════════
- Answer only based on the information above.
- Be warm, professional, and concise (2–4 sentences unless more detail is clearly warranted).
- For project enquiries, quotes, or consultations, guide the visitor to contact the studio directly (phone, email, or the Contact page).
- Do not invent costs, timelines, or project details.
- If asked something outside the above knowledge base, say you don't have that information and offer to connect them with the team at info@studio5architects.com.`;

/* ─── POST /api/chat ──────────────────────────────────────────────────────── */
app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  // Validate roles
  const valid = messages.every(m =>
    (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string'
  );
  if (!valid) {
    return res.status(400).json({ error: 'Invalid message format' });
  }

  try {
    // Stream the response
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const stream = anthropic.messages.stream({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 512,
      system: SYSTEM_PROMPT,
      messages,
    });

    for await (const chunk of stream) {
      if (
        chunk.type === 'content_block_delta' &&
        chunk.delta.type === 'text_delta'
      ) {
        res.write(`data: ${JSON.stringify({ text: chunk.delta.text })}\n\n`);
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (err) {
    console.error('Claude API error:', err.message);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to get a response. Please try again.' });
    } else {
      res.write(`data: ${JSON.stringify({ error: 'Stream error' })}\n\n`);
      res.end();
    }
  }
});

/* ─── POST /api/transcript ────────────────────────────────────────────────── */
app.post('/api/transcript', async (req, res) => {
  const { messages, visitor = {} } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'No messages to send' });
  }

  const { name, phone, email } = visitor;
  const hasVisitor = name || phone || email;

  // Visitor info card
  const visitorCard = hasVisitor ? `
    <table width="100%" cellpadding="0" cellspacing="0"
           style="background:#f0f7ff;border:1px solid #bfdbfe;margin-bottom:24px;">
      <tr><td style="padding:16px 20px;">
        <p style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#1B4F8A;margin:0 0 10px;">Visitor Details</p>
        ${name  ? `<p style="font-size:13px;color:#1e3a5f;margin:0 0 4px;"><strong>Name:</strong> ${name}</p>` : ''}
        ${phone ? `<p style="font-size:13px;color:#1e3a5f;margin:0 0 4px;"><strong>Phone:</strong> ${phone}</p>` : ''}
        ${email ? `<p style="font-size:13px;color:#1e3a5f;margin:0;"><strong>Email:</strong> ${email}</p>` : ''}
      </td></tr>
    </table>` : '';

  // Message rows
  const rows = messages.map(m => {
    const isUser = m.role === 'user';
    const bg     = isUser ? '#1B4F8A' : '#f3f4f6';
    const color  = isUser ? '#ffffff' : '#1f2937';
    const align  = isUser ? 'right' : 'left';
    const label  = isUser ? (name || 'Visitor') : 'Studio5 Assistant';
    return `
      <tr>
        <td style="padding:6px 0;">
          <div style="text-align:${align};">
            <p style="font-size:10px;color:#9ca3af;margin:0 0 3px;text-transform:uppercase;letter-spacing:0.08em;">${label}</p>
            <div style="display:inline-block;background:${bg};color:${color};padding:10px 14px;max-width:78%;text-align:left;font-size:13px;line-height:1.6;">
              ${m.content.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>')}
            </div>
          </div>
        </td>
      </tr>`;
  }).join('');

  const subjectName = name || email || 'Anonymous';
  const dateStr = new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' });

  const html = `<!DOCTYPE html>
<html>
<body style="font-family:Arial,sans-serif;background:#f9fafb;margin:0;padding:24px;">
  <div style="max-width:660px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;">

    <!-- Header -->
    <div style="background:#0A0A0A;padding:24px 28px;border-bottom:3px solid #1B4F8A;">
      <p style="font-family:Georgia,serif;font-size:22px;font-weight:700;color:#ffffff;margin:0 0 2px;">Studio5 Architects</p>
      <p style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#3B82C4;margin:0;">Chat Transcript</p>
    </div>

    <!-- Meta -->
    <div style="padding:20px 28px;border-bottom:1px solid #f3f4f6;background:#fafafa;">
      <p style="font-size:12px;color:#6b7280;margin:0;">${dateStr}</p>
      <p style="font-size:12px;color:#6b7280;margin:4px 0 0;">
        ${messages.filter(m => m.role === 'user').length} visitor message(s) &nbsp;·&nbsp;
        ${messages.length} total exchanges
      </p>
    </div>

    <div style="padding:24px 28px;">
      ${visitorCard}

      <!-- Conversation -->
      <p style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#9ca3af;margin:0 0 12px;border-bottom:1px solid #f3f4f6;padding-bottom:8px;">Conversation</p>
      <table width="100%" cellpadding="0" cellspacing="0">${rows}</table>
    </div>

    <!-- Footer -->
    <div style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:16px 28px;">
      <p style="font-size:11px;color:#9ca3af;margin:0;">
        Studio5 Architects &nbsp;·&nbsp; 5 Chaifont Road, Greencroft, Harare &nbsp;·&nbsp;
        <a href="mailto:info@studio5architects.com" style="color:#1B4F8A;text-decoration:none;">info@studio5architects.com</a>
      </p>
    </div>
  </div>
</body>
</html>`;

  try {
    await resend.emails.send({
      from:    'Studio5 Chat <onboarding@resend.dev>',
      to:      process.env.CHAT_TRANSCRIPT_EMAIL,
      subject: `Chat Transcript — ${subjectName} · ${new Date().toLocaleDateString('en-GB')}`,
      html,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err.message);
    res.status(500).json({ error: 'Failed to send transcript' });
  }
});

/* ─── Start ───────────────────────────────────────────────────────────────── */
app.listen(port, () => {
  console.log(`Studio5 server running → http://localhost:${port}`);
});
