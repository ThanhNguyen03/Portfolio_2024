import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import StarCanvas from '@/components/main/StarBackground'
import { cn } from '@/utils/cn'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Porfolio',
  description: 'Create by thanhf.ng_',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/black-hole.png' />
      </head>
      <body
        className={cn(
          'overflow-x-hidden overflow-y-scroll bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(1,0,6,0.95)_50%,rgba(0,0,0,1)_100%)]',
          inter.className,
        )}
      >
        <StarCanvas />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
