import "./globals.css"
import { Figtree } from "next/font/google"

const figtree = Figtree({ subsets: ["latin"] })

export const metadata = {
  title: "Groq-Vercel Testing",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${figtree.className} bg-slate-900`}>{children}</body>
    </html>
  )
}
