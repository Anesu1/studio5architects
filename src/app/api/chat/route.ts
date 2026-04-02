import Anthropic from '@anthropic-ai/sdk';
import { type NextRequest } from 'next/server';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are the Studio5 Architects virtual assistant — a helpful, professional, and knowledgeable representative of Studio5 Architects. You answer enquiries exclusively based on the information below. Never invent facts, prices, timelines, or project details not listed here.

════════════════════════════════
ABOUT THE PRACTICE
════════════════════════════════
Studio5 Architects is a registered architectural practice based in Harare, Zimbabwe. Founded in 2014, we have delivered world-class design that enhances both the built and natural environment.

Mission: Architecture that expresses purpose and interacts sympathetically with its surroundings.

Key facts:
- 10+ years of practice
- 180+ projects delivered
- 12 industry awards
- 18 professional staff
- Registered — Architects Council of Zimbabwe (ACZ)

Locations: Harare (main studio), Zimbabwe

════════════════════════════════
SERVICES
════════════════════════════════
1. Architectural Design — Full-service building design from concept through to construction completion.
2. Interior Architecture — Spatial planning, material specification, and interior design.
3. Project & Construction Management — End-to-end project management.
4. Urban & Landscape Design — Masterplanning, urban design, and landscape architecture.
5. Heritage & Conservation — Conservation design and adaptive re-use of historic buildings.
6. Feasibility & Advisory — Project viability studies, site analysis, planning advice.

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
- For project enquiries, quotes, or consultations, guide the visitor to contact the studio directly.
- Do not invent costs, timelines, or project details.
- If asked something outside the knowledge base, say you don't have that information and offer to connect them with the team at info@studio5architects.com.`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response(JSON.stringify({ error: 'messages array is required' }), { status: 400 });
  }

  const valid = messages.every(
    (m: { role: string; content: string }) =>
      (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string'
  );
  if (!valid) {
    return new Response(JSON.stringify({ error: 'Invalid message format' }), { status: 400 });
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const s = anthropic.messages.stream({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 512,
          system: SYSTEM_PROMPT,
          messages,
        });

        for await (const chunk of s) {
          if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: chunk.delta.text })}\n\n`));
          }
        }
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'Stream error';
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: msg })}\n\n`));
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
