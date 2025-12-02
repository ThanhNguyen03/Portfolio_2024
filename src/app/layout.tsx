import type { Metadata } from 'next'
import './globals.css'

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
      <body className='font-raleway dark overflow-x-hidden overflow-y-scroll'>
        {children}
      </body>
    </html>
  )
}
