// Import necessary dependencies
import { openai } from "@ai-sdk/openai";
import { convertToCoreMessages, streamText } from "ai";

// POST endpoint handler for chat API
export async function POST(req: Request) {
  // Extract messages from request body
  const { messages } = await req.json();

  // Stream the chat completion from OpenAI
  const result = await streamText({
    // Configure OpenAI model (using gpt-4-mini)
    model: openai("gpt-4o-mini"),
    // Set the AI system prompt/personality
    system:
      "You are a helpful assistant that can help the user with their questions. You are also a great listener and can help the user with their problems.",
    // Convert messages to the required format for the AI SDK
    messages: convertToCoreMessages(messages),
  });

  // Return streaming response to the client
  return result.toDataStreamResponse();
}





