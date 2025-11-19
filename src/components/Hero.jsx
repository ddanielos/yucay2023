import Image from 'next/image';

const Hero = () => {
   return(
      <>
        <div className="">
          <div className="bg-hero-image bg-cover bg-center flex flex-col justify-around items-center h-80 md:h-300" >
              <Image
                className="w-60"
                src="/assets/hero.png"
                priority
                alt="cervecería artesanal"
                width={334}
                height={272}
              />
              <h2 className="text-primary-color uppercase font-roboto font-bold text-sm md:text-lg xl:text-xl [word-spacing: 1.4em]">Tradición andina, alma cervecera</h2>
          </div>
        </div>
      </>
   )
}
export default Hero;