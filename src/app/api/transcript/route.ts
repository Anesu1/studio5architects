import { Resend } from 'resend';
import { type NextRequest } from 'next/server';

interface Message { role: string; content: string; }
interface Visitor  { name?: string; phone?: string; email?: string; }

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { messages, visitor = {} }: { messages: Message[]; visitor: Visitor } = await req.json();

  if (!Array.isArray(messages) || messages.length === 0) {
    return new Response(JSON.stringify({ error: 'No messages to send' }), { status: 400 });
  }

  const { name, phone, email } = visitor;
  const hasVisitor = name || phone || email;

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

  const escape = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');

  const rows = messages.map((m: Message) => {
    const isUser = m.role === 'user';
    const bg    = isUser ? '#1B4F8A' : '#f3f4f6';
    const color = isUser ? '#ffffff' : '#1f2937';
    const align = isUser ? 'right' : 'left';
    const label = isUser ? (name || 'Visitor') : 'Studio5 Assistant';
    return `
      <tr><td style="padding:6px 0;">
        <div style="text-align:${align};">
          <p style="font-size:10px;color:#9ca3af;margin:0 0 3px;text-transform:uppercase;letter-spacing:0.08em;">${label}</p>
          <div style="display:inline-block;background:${bg};color:${color};padding:10px 14px;max-width:78%;text-align:left;font-size:13px;line-height:1.6;">
            ${escape(m.content)}
          </div>
        </div>
      </td></tr>`;
  }).join('');

  const subjectName = name || email || 'Anonymous';
  const dateStr = new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' });

  const html = `<!DOCTYPE html>
<html><body style="font-family:Arial,sans-serif;background:#f9fafb;margin:0;padding:24px;">
  <div style="max-width:660px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;">
    <div style="background:#0A0A0A;padding:24px 28px;border-bottom:3px solid #1B4F8A;">
      <p style="font-family:Georgia,serif;font-size:22px;font-weight:700;color:#ffffff;margin:0 0 2px;">Studio5 Architects</p>
      <p style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#3B82C4;margin:0;">Chat Transcript</p>
    </div>
    <div style="padding:20px 28px;border-bottom:1px solid #f3f4f6;background:#fafafa;">
      <p style="font-size:12px;color:#6b7280;margin:0;">${dateStr}</p>
      <p style="font-size:12px;color:#6b7280;margin:4px 0 0;">
        ${messages.filter((m: Message) => m.role === 'user').length} visitor message(s) &nbsp;·&nbsp;
        ${messages.length} total exchanges
      </p>
    </div>
    <div style="padding:24px 28px;">
      ${visitorCard}
      <p style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#9ca3af;margin:0 0 12px;border-bottom:1px solid #f3f4f6;padding-bottom:8px;">Conversation</p>
      <table width="100%" cellpadding="0" cellspacing="0">${rows}</table>
    </div>
    <div style="background:#f9fafb;border-top:1px solid #e5e7eb;padding:16px 28px;">
      <p style="font-size:11px;color:#9ca3af;margin:0;">
        Studio5 Architects &nbsp;·&nbsp; 5 Chaifont Road, Greencroft, Harare &nbsp;·&nbsp;
        <a href="mailto:info@studio5architects.com" style="color:#1B4F8A;text-decoration:none;">info@studio5architects.com</a>
      </p>
    </div>
  </div>
</body></html>`;

  try {
    await resend.emails.send({
      from:    'Studio5 Chat <onboarding@resend.dev>',
      to:      process.env.CHAT_TRANSCRIPT_EMAIL ?? 'info@studio5architects.com',
      subject: `Chat Transcript — ${subjectName} · ${new Date().toLocaleDateString('en-GB')}`,
      html,
    });
    return new Response(JSON.stringify({ ok: true }));
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Send failed';
    return new Response(JSON.stringify({ error: msg }), { status: 500 });
  }
}
