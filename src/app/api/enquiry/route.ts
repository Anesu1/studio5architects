import { Resend } from 'resend';
import { type NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { firstName, lastName, email, phone, company, service, budget, message } = body;

  if (!firstName || !email) {
    return new Response(JSON.stringify({ error: 'Name and email are required' }), { status: 400 });
  }

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
      <div style="background:#0A0A0A;padding:20px 24px;border-bottom:3px solid #1B4F8A;">
        <p style="font-family:Georgia,serif;font-size:20px;color:#fff;margin:0;">Studio5 Architects</p>
        <p style="font-size:11px;color:#3B82C4;margin:4px 0 0;text-transform:uppercase;letter-spacing:0.1em;">New Project Enquiry</p>
      </div>
      <div style="padding:24px;background:#fff;border:1px solid #e5e7eb;">
        <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
          <tr style="background:#f9fafb;"><td style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;width:140px;">Name</td><td style="font-size:14px;color:#111;">${firstName} ${lastName}</td></tr>
          <tr><td style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;">Email</td><td style="font-size:14px;color:#111;">${email}</td></tr>
          ${phone   ? `<tr style="background:#f9fafb;"><td style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;">Phone</td><td style="font-size:14px;color:#111;">${phone}</td></tr>` : ''}
          ${company ? `<tr><td style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;">Company</td><td style="font-size:14px;color:#111;">${company}</td></tr>` : ''}
          ${service ? `<tr style="background:#f9fafb;"><td style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;">Service</td><td style="font-size:14px;color:#111;">${service}</td></tr>` : ''}
          ${budget  ? `<tr><td style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;">Budget</td><td style="font-size:14px;color:#111;">${budget}</td></tr>` : ''}
        </table>
        ${message ? `
        <div style="margin-top:20px;padding:16px;background:#f9fafb;border-left:3px solid #1B4F8A;">
          <p style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.08em;margin:0 0 8px;">Project Brief</p>
          <p style="font-size:14px;color:#111;line-height:1.6;margin:0;">${message.replace(/\n/g, '<br>')}</p>
        </div>` : ''}
      </div>
    </div>`;

  try {
    await resend.emails.send({
      from:    'Studio5 Website <onboarding@resend.dev>',
      to:      process.env.ENQUIRY_EMAIL ?? 'info@studio5architects.com',
      subject: `New Enquiry — ${firstName} ${lastName}`,
      html,
      reply_to: email,
    });
    return new Response(JSON.stringify({ ok: true }));
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Send failed';
    return new Response(JSON.stringify({ error: msg }), { status: 500 });
  }
}
