'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex flex-wrap justify-between md:justify-center items-center  bg-primary-color">
      <div className="">
        <Link onClick={() => setIsOpen(false)}  href="/">
          <Image className='my-[10px] mx-[20px] lg:mx-7 2xl:mx-10'
            src="/assets/Logo-Principal-en-negro_155x155.png"
            width={130}
            height={140}
            alt="Picture of the author"
          />
        </Link>
      </div>
      <div className='absolute right-4 top-4 md:hidden'>
        <button className="focus:outline-none w-8 h-8 overflow-hidden" onClick={handleClick}>
          <span
            className={`bg-black transition-all duration-300 ease-in-out  block h-0.5 w-8 ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`bg-black transition-all duration-300 ease-in-out  block h-0.5 w-8  my-0.5 ${
              isOpen
                ? "-translate-x-5 opacity-0"
                : "translate-x-0  opacity-100"
            }`}
          ></span>
          <span
            className={`bg-black transition-all duration-300 ease-in-out  block h-0.5 w-8 rounded-sm  ${
              isOpen ? " -rotate-45 -translate-y-1" : "translate-y-1"
            } `}
          ></span>
        </button>
      </div>
      <div className={`w-full bg-[rgba(244,239,226,0.8)] absolute  top-36 md:top-auto md:pb-0 md:flex md:static z-10 md:z-auto md:w-auto transition-all duration-500 ease ${isOpen ? "left-0" : "-left-full"}`}>
        <ul className=" text-center w-full md:w-auto md:flex p-3 uppercase font-bold tracking-normal items-center space-x-16 text-gray-850 font-roboto text-sm lg:text-sm xl:text-base 2xl:text-xl ">
          <Link onClick={() => setIsOpen(false)} href="/beers">
            <li className="hover:text-shadow-sm shadow-gray-400 transition-all" >Nuestras Cervezas</li>
          </Link>
          <Link onClick={() => setIsOpen(false)}  href="/about">
            <li className="hover:text-shadow-sm shadow-gray-400 transition-all">Sobre el equipo</li>
          </Link>
          <Link onClick={() => setIsOpen(false)}  href="/blogs">
            <li className="hover:text-shadow-sm shadow-gray-400 transition-all">Blog</li>
          </Link>
          <Link onClick={() => setIsOpen(false)} href="/contacto">
            <li className="hover:text-shadow-sm shadow-gray-400 transition-all">Contacto</li>
          </Link>
            <li className="hidden pointer-events-none cursor-default text-gray-400">Login</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar