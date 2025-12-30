import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clarm for Finance | AI Agents for Financial Services',
  description: 'Deep research agents for customer service, knowledge search, and document intelligence. Built by ex-Deutsche Bank AI leaders. Y Combinator X25.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="finance-page">
        {children}
      </body>
    </html>
  )
}
