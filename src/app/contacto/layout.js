import Image from 'next/image'

export default function ContactLayout({ children }) {
  return (
    <div>
      <section className=""></section>
        <section className=" bg-third-color flex gap-[16px] justify-center items-center pt-[30px] pb-[30px]">
          <div className="mx-2 md:mx-auto border-[4px] md:border-[8px] border-solid border-primary-color flex items-center">
            <Image className="w-[150px]" src="/assets/flor_s_fondo.png" alt="lupulo" width={150} height={84}/>
            <h1 className="font-bioRhyme text-primary-color px-5 md:pr-[20px] text-[2rem] md:text-[2.5rem]">Contacto</h1>
          </div>
        </section>
      {children}
    </div>
  )
}