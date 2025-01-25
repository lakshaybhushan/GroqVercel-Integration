import OpenAI from "openai"
import { OpenAIStream, StreamingTextResponse } from "ai"

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY || "",
  baseURL: process.env.GROQ_API_URL,
})

// IMPORTANT! Set the runtime to edge
export const runtime = "edge"

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    //model: "mixtral-8x7b-32768",
    model: "llama-3.3-70b-versatile",
    stream: true,
    messages,
  })

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)
  // Respond with the stream
  return new StreamingTextResponse(stream)
}
