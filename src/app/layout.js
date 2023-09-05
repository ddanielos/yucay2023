import './globals.css'
import { Roboto_Mono, BioRhyme } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-primaryfont',
})

export const metadata = {
  title: 'Yucay Brewery - Cervecería artesanal en el valle sagrado',
  description: 'Cervecería artesanal en el balle sagrado de los incas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
