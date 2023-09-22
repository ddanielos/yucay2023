import Image from 'next/image'

export default function BlogsLayout({ children }) {
  return (
    <div>
      <section className=""></section>
        <section className="bg-second-color flex gap-[16px] justify-center items-center pt-[30px] pb-[30px]">
          <div className="border-[8px] border-solid border-primary-color flex items-center">
              <Image className="w-[150px]" src="/assets/flor_s_fondo.png" alt="lupulo" width={150} height={84}/>
              <h1 className=" font-bioRhyme text-primary-color pr-[20px] text-[2.5rem]">Blog cervecero</h1>
          </div>
        </section>
      {children}
    </div>
  )
}
