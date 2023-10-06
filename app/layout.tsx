import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Plewffy's Portfolio",
  description: 'My portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-col"}>
        <Navbar />
        <main className="flex-1 mt-[93.6px] lg:mt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
