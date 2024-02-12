import Image from 'next/image'

const About = () => {
  return(
    <div className='md:h-[730px] md:h-auto'>
      <div className="m-auto mt-20 mb-12 md:grid md:grid-cols-3 max-w-[1536px]">
        <Image className='m-auto' src="/assets/flor-naranj.png" alt="flor" width={145} height={144}/>
        <h2 className="hidden md:block mx-10 uppercase text-6xl font-bioRhyme text-third-color text-center tracking-[0.2rem] text-shadow-n shadow-[#36360c]">
          Quienes Somos
        </h2>
        <Image className='hidden md:block m-auto' src="/assets/flor-naranj.png" alt="flor" width={145} height={144}/>
      </div>
      <div className="flex flex-col md:flex-row md:h-[550px]">
        <div className=" text-primary-color bg-second-color w-full h-300 md:h-auto md:w-[50vw] flex flex-row content-evenly">
          <section className="text-center pt-12 pb-24 px-4 md:px-auto md:pb-auto m-auto md:mx-[90px] md:mt-[20px]">
            <h2 className="uppercase font-bioRhyme text-xl md:text-4xl font-extrabold tracking-[0.2rem] pb-3">Quienes Somos</h2>
            <p className='font-roboto text-sm md:text-xl tracking-[0.1rem] leading-7 pt-[2rem] text-justify'>Somos una cervecería artesanal desde 2014 localizada en el corazón del Valle Sagrado de los inKas, en el pueblo de Yucay.</p>
            <p className='font-roboto text-sm md:text-xl tracking-[0.1rem] leading-7 pt-[2rem] text-justify'>Creemos que las cosas buenas de la vida requieren valentia para lograr la verdadera independencia haciendo algo que se ama.</p>
            <p className='hidden md:block font-roboto text-sm md:text-xl tracking-[0.1rem] leading-7 pt-[2rem] text-justify'>Somos dueños y empleados. Revisamos cada etapa del proceso cervecero con ingenio.</p>
          </section>
        </div>
        <div className="text-primary-color bg-fourth-color w-full md:w-[50vw] h-96 md:h-auto flex flex-row content-evenly">
          <section className="text-center pt-24 md:pt-12 pb-12 px-4 md:px-auto md:pb-auto m-auto md:mx-[90px]  md:mt-[20px]">
            <h2 className='uppercase font-bioRhyme text-xl md:text-4xl font-extrabold tracking-[0.2rem] pb-3'>Que queremos</h2>
            <p className='font-roboto text-sm md:text-xl tracking-[0.1rem] leading-7 pt-[2rem] text-justify'>Queremos inspirar.</p>
            <p className='font-roboto text-sm md:text-xl tracking-[0.1rem] leading-7 pt-[2rem] text-justify'>Queremos generar una comunidad en torno a lo que más felices nos hace. Nuestra tierra, nuestra cultura y el proceso cervecero.</p>
            <p className='hidden md:block font-roboto text-sm md:text-xl tracking-[0.1rem] leading-7 pt-[2rem] text-justify'>Esperamos poder compartir cultura. Enseñarles el lugar donde vivimos y trabajamos. Las riquezas de la tierra y los rituales familiares que rodean la elaboración de la cerveza Yucay.</p>
          </section>
        </div>
      </div>
      <div className="md:content-evenly mt-[-437px] md:mt-[-350px] md:mb-[350px]">
        <Image className="w-24 md:w-auto m-auto" src="/assets/logo-alt.png" alt="logo alt" width={162} height={178}/>
      </div>
    </div>
  )
}

export default About;