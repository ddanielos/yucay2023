import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Yucay Brewery - Cervecería artesanal en el valle sagrado',
  description: 'Cervecería artesanal en el balle sagrado de los incas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' bg-primary-color'>
        <div className=' max-w-[1536px] m-auto'>
          <Navbar />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
