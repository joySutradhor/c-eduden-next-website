// app/layout.js
import './globals.css'
import Footer from '@/components/shared/Footer/Footer'
import Navbar from '@/components/navbar/Navbar'

import { Lexend } from 'next/font/google'
import localFont from 'next/font/local'
import ClientWrapper from './ClientWrapper'


const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend'
})

const gucina = localFont({
  src: './font/gucina.bold.otf',
  variable: '--font-gucina'
})

export const metadata = {
  title: 'eduden | Home',
  description: 'Best course platform in kolkata'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      data-new-gr-c-s-check-loaded="14.1260.0"
      data-gr-ext-installed=""
        className={`${lexend.variable} ${gucina.variable} antialiased bg-[#010101] text-white`}
      >
        <ClientWrapper>
          <Navbar />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  )
}
