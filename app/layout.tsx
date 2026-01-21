import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clarm Revenue Desk for Finance | Turn inbound to revenue',
  description:
    'Revenue Desk captures inbound intent across chat and email, responds instantly, qualifies revenue conversations, and routes high-value opportunities to humans 24/7 without adding headcount.',
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
