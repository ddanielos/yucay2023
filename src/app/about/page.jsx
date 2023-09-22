import { Suspense } from 'react'
import Loading from './loading'
import Image from 'next/image'

export default async function AboutPage(){
    return(
      <>
        <Suspense fallback={<Loading />}>
          <div className="flex flex-col justify-center max-w-[779px] my-[100px] mx-auto">
            <div className="flex w-[779px] justify-end ml-[-160px]">
              <h2 className="h-[23px] font-roboto not-italic font-normal text-xl text-black">La familia</h2>
              <Image className="my-0 mx-[20px]" src="/assets/ave.png" alt="" width={60} height={30}/>
            </div>
            <div className="flex box-border mt-[10px] w-[779px] h-[290px] border-[1px] border-solid border-second-color rounded-[10px]">
              <Image className="max-h-[290px] box-border mt-[-30px] ml-[-120px] border-[2px] border-solid border-[rgba(200_187_187_0.43)] drop-shadow-[4px_4px_4px_rgba(198,106,72,0.23)] rounded-[8px]" src="/assets/img01.png" alt="" width={450} height={290}/>
              <p className="w-[394px] h-[230px] m-auto font-roboto not-italic font-normal text-[15.5px] leading-[23px] text-justify text-black">La historia de Yucay Brewery comienza en 2014 con una pareja de ingenieros químicos que trabajaban en la cervecería industrial más grande del Perú. Después de varios años trabajando juntos en la elaboración de cervezas a gran escala, decidieron emprender su propio proyecto: crear una cervecería artesanal en el hermoso Valle Sagrado de Cusco.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center max-w-[779px] my-[100px] mx-auto">
            <div className="flex w-[779px] justify-start ml-[50px] items-end">
              <Image className="my-0 mx-[20px]" src="/assets/destilador.png" alt="" width={64} height={54}/>
              <h2 className="h-[23px] pb-[30px] font-roboto not-italic font-normal text-[20px] text-black">Nuestra pasión</h2>
            </div>
            <div className="flex box-border mt-[10px] w-[779px] h-[440px] ml-[-120px] border-[1px] border-solid border-second-color rounded-[10px]">
              <div className="w-[394px] h-[230px] my-[45px] mx-auto text-justify">
                <p className="h-[230px] m-auto font-roboto not-italic font-normal text-[15.5px] leading-6 text-justify text-black">La historia de Yucay Brewery comienza en 2014 con una pareja de ingenieros químicos que trabajaban en la cervecería industrial más grande del Perú. Después de varios años trabajando juntos en la elaboración de cervezas a gran escala, decidieron emprender su propio proyecto: crear una cervecería artesanal en el hermoso Valle Sagrado de Cusco.</p>
                <br/>
                <p className="h-[230px] m-auto font-roboto not-italic font-normal text-[15.5px] leading-6 text-justify text-black">La historia de Yucay Brewery comienza en 2014 con una pareja de ingenieros químicos que trabajaban en la cervecería industrial más grande del Perú.</p>
              </div>
              <Image className="h-[535px] box-border mt-[-40px] mr-[-120px] border-[2px] border-solid border-[rgba(200_187_187_0.43)] drop-shadow-[-4px_4px_4px_rgba(198,106,72,0.23)] rounded-[8px]" src="/assets/img03.jpg" alt="" width={338} height={535}/>
            </div>
          </div>
          <div className="flex flex-col justify-center max-w-[779px] my-[150px] mx-auto">
            <div className="flex box-border mt-[10px] w-[562px] h-[469px] border-[1px] border-solid border-second-color rounded-[10px] relative">
              <Image className="max-h-[263px] box-border mt-[-70px] ml-[-120px] border-[2px] border-solid border-[rgba(200_187_187_0.43)] drop-shadow-[4px_4px_4px_rgba(198,106,72,0.23)] rounded-[8px]" src="/assets/img_04.jpg" alt="" width={386} height={263}/>
              <p className="absolute w-[325px] ml-[32px] max-h-[430px] pl-[30px] pt-[250px] font-roboto not-italic font-normal text-[15.5px] leading-[23px] text-justify text-black" >La historia de Yucay Brewery comienza en 2014 con una pareja de ingenieros químicos que trabajaban en la cervecería industrial más grande del Perú.</p>
              <Image className="box-border object-none w-[331px] h-[391px] mt-[40px] ml-[444px] border-[2px] border-solid border-[rgba(200_197_187_0.43)] drop-shadow-[-4px_4px_4px_rgba(198,106,72,0.23)] rounded-[8px] absolute" src="/assets/img-005.png" alt="" width={331} height={391}/>
            </div>
          </div>
        </Suspense>
      </>
    )
}
