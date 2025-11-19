import Image from 'next/image'

const ImageSunBar = () => {
  return (
    <div className="w-full pt-[60px] flex justify-center">
      {/* Grupo centrado */}
      <div className="flex items-center gap-6 md:gap-16">
        {/* ARTE */}
        <Image
          src="/assets/arte-icon.png"
          alt="arte"
          width={200}
          height={200}
          className="hidden md:block h-[110px] w-auto object-contain"
        />

        {/* MONTAÑAS / SOL */}
        <Image
          src="/assets/sol-naciente.png"
          alt="sol naciente"
          width={300}
          height={300}
          className="h-[300px] w-auto object-contain"
        />

        {/* SANA */}
        <Image
          src="/assets/sana-icon.png"
          alt="sanación"
          width={200}
          height={200}
          className="hidden md:block h-[110px] w-auto object-contain"
        />
      </div>
    </div>
  )
}

export default ImageSunBar