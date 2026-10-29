import './globals.css'
import { Inter } from 'next/font/google'

const inter = { className: "" };

export const metadata = {
  title: 'Matthew Amiadamen',
  description: 'Software engineer and Computer Science student at DCU: agentic AI systems, computer vision and brain-computer interfaces.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
