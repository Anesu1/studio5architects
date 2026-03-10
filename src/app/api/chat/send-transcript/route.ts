import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface Message {
    role: "user" | "assistant";
    content: string;
    timestamp?: string;
}

function formatTranscriptHtml(messages: Message[]): string {
    const rows = messages
        .map((msg) => {
            const label = msg.role === "user" ? "Visitor" : "Studio 5 AI";
            const bg = msg.role === "user" ? "#f0f0eb" : "#ffffff";
            const time = msg.timestamp
                ? `<span style="color:#999;font-size:11px;margin-left:8px">${msg.timestamp}</span>`
                : "";
            return `
        <tr>
          <td style="padding:12px 16px;background:${bg};border-bottom:1px solid #e5e5e5;vertical-align:top">
            <strong style="font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:#141414">${label}</strong>${time}
            <p style="margin:6px 0 0;color:#333;font-size:14px;line-height:1.6">${msg.content.replace(/\n/g, "<br>")}</p>
          </td>
        </tr>`;
        })
        .join("");

    return `
    <div style="font-family:sans-serif;max-width:640px;margin:0 auto">
      <div style="background:#141414;padding:24px 32px">
        <h1 style="color:#F8F8F5;font-size:18px;margin:0;letter-spacing:0.05em;text-transform:uppercase">Studio 5 Architects</h1>
        <p style="color:#999;font-size:13px;margin:4px 0 0">New chat conversation — ${new Date().toLocaleString("en-GB", { dateStyle: "full", timeStyle: "short" })}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e5e5">
        ${rows}
      </table>
      <p style="color:#999;font-size:12px;padding:16px;text-align:center">
        This transcript was automatically sent from the Studio 5 website chatbot.
      </p>
    </div>`;
}

interface LeadInfo {
    name?: string;
    email?: string;
    phone?: string;
}

function formatLeadInfoHtml(lead: LeadInfo): string {
    const rows = [
        lead.name && `<tr><td style="padding:4px 0;color:#999;font-size:12px;width:80px">Name</td><td style="padding:4px 0;color:#333;font-size:12px">${lead.name}</td></tr>`,
        lead.email && `<tr><td style="padding:4px 0;color:#999;font-size:12px">Email</td><td style="padding:4px 0;color:#333;font-size:12px">${lead.email}</td></tr>`,
        lead.phone && `<tr><td style="padding:4px 0;color:#999;font-size:12px">Phone</td><td style="padding:4px 0;color:#333;font-size:12px">${lead.phone}</td></tr>`,
    ].filter(Boolean).join("");

    if (!rows) return "";

    return `
    <div style="background:#f9f9f7;border:1px solid #e5e5e5;padding:16px 20px;margin-bottom:0">
      <p style="font-size:11px;text-transform:uppercase;letter-spacing:0.05em;color:#999;margin:0 0 10px">Visitor details</p>
      <table style="border-collapse:collapse">${rows}</table>
    </div>`;
}

export async function POST(request: Request) {
    try {
        const { messages, visitorEmail, leadInfo } = await request.json();

        if (!messages || messages.length === 0) {
            return Response.json({ error: "No messages to send" }, { status: 400 });
        }

        const leadBlock = leadInfo ? formatLeadInfoHtml(leadInfo) : "";
        const transcriptBlock = formatTranscriptHtml(messages);
        const html = leadBlock + transcriptBlock;
        const transcriptEmail = process.env.CHAT_TRANSCRIPT_EMAIL;

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: transcriptEmail!,
            subject: `Studio 5 Chat — New Conversation (${new Date().toLocaleDateString("en-GB")})`,
            html,
        });

        if (visitorEmail) {
            await resend.emails.send({
                from: "onboarding@resend.dev",
                to: visitorEmail,
                subject: "Your conversation with Studio 5 Architects",
                html: `
          <div style="font-family:sans-serif;max-width:640px;margin:0 auto">
            <div style="background:#141414;padding:24px 32px">
              <h1 style="color:#F8F8F5;font-size:18px;margin:0;letter-spacing:0.05em;text-transform:uppercase">Studio 5 Architects</h1>
              <p style="color:#999;font-size:13px;margin:4px 0 0">Your conversation transcript</p>
            </div>
            <p style="padding:24px 32px 0;color:#333;font-size:14px">Thank you for reaching out. Here is a copy of your conversation with our AI assistant.</p>
            ${html}
            <p style="padding:0 32px 24px;color:#333;font-size:14px">
              To speak with the team directly, contact us at
              <a href="mailto:info@studio5architects.com" style="color:#141414">info@studio5architects.com</a>
              or call +263 783 934 290.
            </p>
          </div>`,
            });
        }

        return Response.json({ success: true });
    } catch (error) {
        console.error("Send transcript error:", error);
        return Response.json({ error: "Failed to send transcript" }, { status: 500 });
    }
}
