import Image from 'next/image';

const Hero = () => {
   return(
      <>
        <div className="">
          <div className="bg-hero-image bg-cover bg-center flex flex-col justify-around items-center h-300" >
              <Image className="" src="/assets/hero.png" priority="high" alt="cervecería artesanal" width={334} height={272}/>
              <h2 className="text-primary-color uppercase font-roboto font-bold text-l xl:text-xl underline [word-spacing: 0.4em]">De nuestra tierra a tu casa</h2>
          </div>
        </div>
      </>
   )
}
export default Hero;