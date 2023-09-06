import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="flex justify-center items-center bg-prymary-color">
      <ul className="flex p-3 uppercase font-bold tracking-normal items-center space-x-16 text-gray-850 font-roboto text-xl">
        <div className="flex justify-center" >
          <Link href="/">
            <Image
              src="/assets/Logo-Principal-en-negro_155x155.png"
              width={140}
              height={150}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <Link href="/beers">
          <li className="hover:shadow-2xl" >Nuestras Cervezas</li>
        </Link>
        <Link href="/about">
          <li className="hover:text-stone-700 transition-all">Sobre el equipo</li>
        </Link>
        <Link href="/blogs">
          <li className="hover:text-stone-700 transition-all">Blog</li>
        </Link>
        <Link href="/contacto">
          <li className="hover:text-stone-700 transition-all">Contacto</li>
        </Link>
          <li className="hover:text-stone-700 transition-all">Login</li>
      </ul>
    </nav>
  )
}

export default Navbar