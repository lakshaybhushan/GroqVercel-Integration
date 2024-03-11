"use client"
import { useChat } from "ai/react"

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <main className="bg-gray-900 text-white">
      <h1 className="mt-0 m-10 text-4xl md:text-6xl text-center pt-10 md:pt-20 font-bold tracking-tighter">
        Chat with <span className="underline underline-offset-8">Mixtral</span>{" "}
        ft. <span className="text-red-500">Groq</span> Cloud
      </h1>

      <div className="flex flex-col max-w-xl mx-auto pt-5 md:pt-10 pb-20 md:pb-32">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`rounded-lg p-4 mb-4 ${
              m.role === "user"
                ? "bg-blue-700 text-white max-w-max mr-auto"
                : "bg-gray-700 text-gray-300"
            }`}>
            <div className="whitespace-pre-wrap">
              {m.role === "user" ? (
                <span className="font-semibold mr-1">User:</span>
              ) : (
                <span className="font-semibold mr-1">Mixtral:</span>
              )}
              {m.content}
            </div>
          </div>
        ))}

        <form
          onSubmit={handleSubmit}
          className="flex items-start justify-center">
          <input
            className="rounded-full p-4 w-full border-2 border-gray-700 bg-gray-800 fixed bottom-10 left-0 right-0 z-10 m-auto max-w-xs md:max-w-2xl placeholder:text-sm text-white"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </main>
  )
}
