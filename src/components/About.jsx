import Image from 'next/image'

const About = () => {
  return(
    <>
      <div className="">
        <Image src="/assets/flor-naranj.png" alt="flor" width={145} height={144}/>
        <h2 className="">
          Quienes Somos
        </h2>
        <Image src="/assets/flor-naranj.png" alt="flor" width={145} height={144}/>
      </div>
      <div className="">
        <div className="">
          <section className="">
            <h2>Quienes Somos</h2>
            <p>Somos una cervecería artesanal desde 2014 localizada en el corazón del Valle Sagrado de los inKas, en el pueblo de Yucay.</p>
            <p>Creemos que las cosas buenas de la vida requieren valentia para lograr la verdadera independencia haciendo algo que se ama.</p>
            <p>Somos dueños y empleados. Revisamos cada etapa del proceso cervecero con ingenio.</p>
          </section>
        </div>
        <div className="">
          <section className="">
            <h2>Que queremos</h2>
            <p>Queremos inspirar.</p>
            <p>Queremos generar una comunidad en torno a lo que más felices nos hace. Nuestra tierra, nuestra cultura y el proceso cervecero.</p>
            <p>Esperamos poder compartir cultura. Enseñarles el lugar donde vivimos y trabajamos. Las riquezas de la tierra y los rituales familiares que rodean la elaboración de la cerveza Yucay.</p>
          </section>
        </div>
      </div>
      <div className="">
        <Image className="" src="/assets/logo-alt.png" alt="logo alt" width={162} height={178}/>
      </div>
    </>
  )
}

export default About;