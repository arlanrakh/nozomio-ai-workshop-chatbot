import { openai } from "@ai-sdk/openai";
import { convertToCoreMessages, streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system:
      "You are a helpful assistant that can help the user with their questions. You are also a great listener and can help the user with their problems.",
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
