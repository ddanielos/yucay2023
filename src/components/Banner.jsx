import Image from 'next/image';

import Link from 'next/link';

const Banner = () => {
   return(
      <>
         <div className="bg-second-color">
            <div className="flex justify-around items-center">
               <div className="hidden md:flex md:flex-col items-center my-4">
                  <Image src="/assets/proceso.png" alt="proceso" width={77} height={77}/>
                  <Image className="my-4" src="/assets/blandas.png" alt="Tierras blandas" width={275} height={68}/>
                  <Image src="/assets/ave.png" alt="" width={80} height={39}/>
               </div>
               <div className="">
                  <div className="font-roboto text-primary-color flex flex-col items-center">
                     <p className="tracking-[1.7pt] text-sm my-4 font-bold">{`ch'alla!`}</p>
                     <Link href="/beers">
                        <p className=" bg-[rgb(165,90,62,1)] md:bg-second-color uppercase font-bold text-xl md:text-2xl border-2 md:border-4 p-3 border-primary-color">Todas las cervezas</p>
                     </Link>
                     <p className="tracking-[1.7pt] text-sm md:text-lg my-4 font-bold"></p>
                  </div>
               </div>
               <div className="hidden md:flex md:flex-col items-center">
                  <Image src="/assets/proceso.png" alt="proceso" width={77} height={77}/>
                  <Image className="my-4" src="/assets/blandas.png" alt="Tierras blandas" width={275} height={68}/>
                  <Image className="" src="/assets/ave.png" alt="" width={80} height={39}/>
               </div>
            </div>
         </div>
      </>
   )
}

export default Banner;