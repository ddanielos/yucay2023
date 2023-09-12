'use client'
import Image from 'next/image';


const Bar = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hola, ¿cómo estás? deseo hacer un pedido de cervezas Yucay Brewey,');
    const phoneNumber = '+51913165855'; // Reemplaza esto con el número de teléfono de destino
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
  return(
    <>
      <div className="bg-primary-color flex justify-center">
        <div className="table-cell text-center py-10">
          <p className="uppercase text-primary-color bg-third-color text-center inline-block font-bioRhyme font-bold text-3xl tracking-[0.2rem] py-8 w-full">
            Delivery
          </p>
          <p onClick={handleWhatsAppClick} className="uppercase text-primary-color bg-third-color text-center inline-block text-l font-roboto w-48 py-3 border-primary-color border-solid border-4 mt-[-35px] tracking-[0.2rem] cursor-pointer">Pide Ahora</p>
        </div>
        <div className="table-cell w-44"></div>
        <div className="table-cell text-center py-10">
          <p className="uppercase text-primary-color bg-third-color text-center inline-block font-bioRhyme font-bold text-3xl tracking-[0.2rem] py-8 w-full">Nuestro Bar</p>
          <p className="uppercase text-primary-color bg-third-color text-center inline-block text-l font-roboto w-48 py-3 border-primary-color border-solid border-4 mt-[-35px] tracking-[0.2rem] cursor-pointer">Visita</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-px auto-rows-[minmax(50px,100px)] bg-primary-color">
        <div className="col-start-1 row-start-1 row-end-4">
          <Image className="" src="/assets/mascara.png" alt="mascara" width={500} height={500}/>
        </div>
        <div className="col-start-3 row-start-1">
          <Image className="block m-auto" src="/assets/eslogan.png" alt="estar vivo" width={200} height={200}/>
        </div>
        <div className="col-start-2 col-end-5 row-start-2 uppercase font-bioRhyme font-bold text-2xl text-third-color text-center tracking-[0.2rem]">
          <h2>#yucaybrewery</h2>
        </div>
        <div className="col-start-3 row-start-3">
          <Image className="block m-auto" src="/assets/eslogan.png" alt="estar vivo" width={500} height={500}/>
        </div>
        <div className="col-start-5 row-start-1 row-end-4">
          <Image className="scale-x-[-1]" src="/assets/mascara.png" alt="mascara" width={500} height={500}/>
        </div>
      </div>
    </>
  )
}

export default Bar;
