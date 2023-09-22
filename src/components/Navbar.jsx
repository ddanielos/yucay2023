import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="flex justify-center items-center bg-primary-color">
      <ul className="flex p-3 uppercase font-bold tracking-normal items-center space-x-16 text-gray-850 font-roboto text-sm xl:text-base 2xl:text-xl ">
        <div className="flex justify-center">
          <Link href="/">
            <Image
              src="/assets/Logo-Principal-en-negro_155x155.png"
              width={130}
              height={140}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <Link href="/beers">
          <li className="hover:text-shadow-sm shadow-gray-400 transition-all" >Nuestras Cervezas</li>
        </Link>
        <Link href="/about">
          <li className="hover:text-shadow-sm shadow-gray-400 transition-all">Sobre el equipo</li>
        </Link>
        <Link href="/blogs">
          <li className="hover:text-shadow-sm shadow-gray-400 transition-all">Blog</li>
        </Link>
        <Link href="/contacto">
          <li className="hover:text-shadow-sm shadow-gray-400 transition-all">Contacto</li>
        </Link>
          <li className=" pointer-events-none cursor-default text-gray-400">Login</li>
      </ul>
    </nav>
  )
}

export default Navbar