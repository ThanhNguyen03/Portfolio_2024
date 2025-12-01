import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarCanvas from '@/components/main/StarBackground'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

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
        className={`${inter.className} dark overflow-x-hidden overflow-y-scroll`}
      >
        <StarCanvas />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
