import Anthropic from "@anthropic-ai/sdk";
import { STUDIO5_SYSTEM_PROMPT } from "@/lib/chatSystemPrompt";

const anthropic = new Anthropic();

export async function POST(request: Request) {
    try {
        const { messages } = await request.json();

        const response = await anthropic.messages.create({
            model: "claude-haiku-4-5-20251001",
            max_tokens: 1024,
            system: STUDIO5_SYSTEM_PROMPT,
            messages,
        });

        const text = response.content[0].type === "text" ? response.content[0].text : "";

        return new Response(text, {
            headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
    } catch (error) {
        console.error("Chat API error:", error);
        const message = error instanceof Error ? error.message : String(error);
        return Response.json({ error: message }, { status: 500 });
    }
}
