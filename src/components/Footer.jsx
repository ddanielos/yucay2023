import Subscribe from './Subscribe'

function Footer() {
  return (
    <div className="text-primary-color w-auto">
      <div className="flex flex-row h-80 xl:h-96 w-auto">
        <div className="bg-[#f08165] w-1/2 p-6 xl:p-10">
          <h2 className="uppercase font-bioRhyme tracking-[0.1rem] text-5xl xl:text-7xl my-4">Contacto</h2>
          <p className="text-l xl:text-xl leading-9 tracking-widest font-roboto">Email: contacto@yucaybrew.com</p>
          <p className="text-l xl:text-xl leading-9 tracking-widest font-roboto">Wapp: +51 913165855</p>
          <p className="text-l xl:text-xl leading-9 tracking-widest font-roboto">Dirección: Plaza Manco II 107 Yucay Urubamba</p>
        </div>
        <div className="bg-[#d44620] w-1/2 p-6 xl:p-10">
          <h2 className="uppercase font-bioRhyme tracking-[0.1rem] text-5xl xl:text-7xl my-4">Suscripcion</h2>
          <p className="text-l xl:text-xl leading-9 tracking-widest font-roboto">Abre una Yucay y suscríbete:</p>
          <Subscribe />
        </div>
      </div>
      <div className="flex flex-row w-auto h-80 xl:h-96">
        <div className="bg-[#e06e46] w-1/2 p-6 xl:p-10">
          <h2 className="uppercase font-bioRhyme tracking-[0.1rem] text-5xl xl:text-7xl my-4">Visitanos</h2>
          <p className="text-l xl:text-xl leading-9 tracking-widest font-roboto">Miércoles - Sábado: 13:00 - 22:00</p>
          <p className="text-l xl:text-xl leading-9 tracking-widest font-roboto">Domingo: 11:00 - 22:00</p>
        </div>
        <div className="bg-[#d44620] w-1/2 p-6 xl:p-10">
          <p className="text-l xl:text-xl leading-9 tracking-widest font-roboto">Envíos y devoluciones</p>
          <p className="text-l xl:text-xl leading-9 tracking-widest font-roboto">Métodos de pago</p>
        </div>
      </div>
    </div>
  )
}

export default Footer