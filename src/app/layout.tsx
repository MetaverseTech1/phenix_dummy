import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Phenix Carpet - Now Dhruv Rugs International',
  description: 'The Phenix Carpet is now Dhruv Rugs International. Visit our new website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}