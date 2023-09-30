'use client'
import Image from 'next/image';

const PHONE_NUMBER = process.env.NEXT_PUBLIC_REACT_PHONE_NUMBER_CONTACT;

const Bar = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, ¿cómo estás? vengo desde la web y deseo hacer un pedido de cervezas Yucay Brewery,');
    const phoneNumber = PHONE_NUMBER;
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
  const handleBooking = () => {
    const message = encodeURIComponent('Hola, ¿cómo estás? vengo desde la web y deseo hacer una reserva,');
    const phoneNumber = PHONE_NUMBER;
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
  return(
    <div className="max-w-screen-2xl m-auto">
      <div className="bg-primary-color hidden md:flex justify-center">
        <div className="table-cell text-center py-10">
          <p className="uppercase text-primary-color bg-third-color text-center inline-block font-bioRhyme font-bold text-3xl tracking-[0.2rem] py-8 w-full">
            Delivery
          </p>
          <p onClick={handleWhatsAppClick} className="uppercase text-primary-color bg-third-color text-center inline-block text-l font-roboto w-48 py-3 border-primary-color border-solid border-4 mt-[-35px] tracking-[0.2rem] cursor-pointer hover:translate-y-[-1px] duration-75 ease-linear">
            Pide Ahora
          </p>
        </div>
        <div className="table-cell w-44"></div>
        <div className="table-cell text-center py-10">
          <p className="uppercase text-primary-color bg-third-color text-center inline-block font-bioRhyme font-bold text-3xl tracking-[0.2rem] py-8 w-full">
            Nuestro Bar
          </p>
          <p onClick={handleBooking} className="hover:translate-y-[-1px] duration-75 ease-linear uppercase text-primary-color bg-third-color text-center inline-block text-l font-roboto w-48 py-3 border-primary-color border-solid border-4 mt-[-35px] tracking-[0.2rem] cursor-pointer">
            Reserva
          </p>
        </div>
      </div>
      <div className="bg-primary-color flex flex-col md:grid md:grid-cols-bar md:auto-rows-auto mt-10 md:mt-0">
        <div className="col-start-1 col-span-1 row-start-1 row-span-3 m-auto">
          <Image className="hidden md:block" src="/assets/mascara.png" alt="mascara" width={500} height={500}/>
        </div>
        <div className="col-start-3 col-span-1">
          <Image className="hidden md:block md:m-auto" src="/assets/eslogan.svg" alt="estar vivo" width={250} height={250}/>
        </div>
        <div className="col-start-2 col-span-3 uppercase font-bioRhyme font-extrabold text-2xl md:text-6xl text-third-color text-center tracking-[0.2rem] text-shadow-n shadow-[#36360c]">
          <h2>#yucaybrewery</h2>
        </div>
        <div className="col-start-3 col-span-1">
          <Image className="hidden md:block md:m-auto" src="/assets/eslogan.svg" alt="estar vivo" width={250} height={250}/>
        </div>
        <div className="col-start-5 col-span-1 row-start-1 row-span-3 m-auto">
          <Image className=" w-72 md:w-auto md:scale-x-[-1]" src="/assets/mascara.png" alt="mascara" width={500} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default Bar;
