import Image from 'next/image'

const ImageSunBar = () => {
  return (
    <div className="w-full h-auto flex justify-evenly mb-[-85px] pt-[60px]">
      <Image className="mt-[-150px] object-none" src="/assets/arte-icon.png" alt="arte" width={135} height={472} />
      <Image className=" object-none" src="/assets/sol-naciente.png" alt="sol naciente" width={632} height={322}/>
      <Image className="mt-[-150px] object-none" src="/assets/sana-icon.png" alt="sanacion" width={129} height={472}/>
    </div>
  )
}

export default ImageSunBar;