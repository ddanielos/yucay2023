import useFetchCoverUrl from '@/hooks/useFetchCoverUrl';
import Image from 'next/image'

export default async function BeerItem(props){
  const { count } = props;
  const { name, cover_id, description, detail, pair, abv, bitterness } = props.attributes;
  const cover = await useFetchCoverUrl(cover_id)
  return (
    <div className="flex justify-center py-[4vw] px-0">
      <div key={count} className={count%2 === 0 ? "w-11/12 md:flex justify-around max-w-[1020px] border-[1px] border-second-color rounded-xl" : "w-11/12 md:flex justify-around max-w-[1020px] flex-row-reverse border-[1px] border-second-color rounded-xl" }>
        <div className="">
          <h2 className="md:hidden font-bioRhyme text-second-color text-[2rem] grow pl-4 pt-3">{name}</h2>
          <img className="max-w-fit w-[250px] md:w-auto m-auto" src={cover} alt='' />
        </div>
        <div className="px-[2.5vw] py-[1vw] flex flex-col justify-start">
          <h2 className="hidden md:block font-bioRhyme text-second-color text-[2.2rem] grow">{name}</h2>
          <ul className=" flex justify-start grow-[2]">
            <li className="pt-0 pr-[30px] pb-[10px] pl-[10px] flex items-center justify-around">
              <span className="uppercase text-[1.2rem] font-bold font-bioRhyme text-third-color"><Image className="max-w-[72px] h-auto w-[60px] md:w-auto" src="/assets/lupulo.png" alt="bitterness" width={100} height={100}/></span>
              <span className="uppercase text-[1rem] md:text-[1.2rem] font-bold font-bioRhyme text-third-color">{bitterness}</span>
            </li>
            <li className="pt-0 pr-[30px] pb-[10px] pl-[10px] flex items-center justify-around">
              <span className="uppercase text-[1.2rem] font-bold font-bioRhyme text-third-color"><Image className="max-w-[65px] h-auto  w-[60px] md:w-auto" src="/assets/alcohol.png" alt="ABV" width={100} height={100}/></span>
              <span className="uppercase text-[1rem] md:text-[1.2rem] font-bold font-bioRhyme text-third-color">{abv}</span>
            </li>
          </ul>
          <h2 className=" uppercase font-roboto text-[0.9rem] md:text-[1rem] text-third-color grow font-bold pt-4">{detail}</h2>
          <div className="text-[0.9rem] md:text-[1rem] px-0 pt-0 pb-[5px] normal-case font-roboto leading-[1.4rem] text-justify grow">{description}</div>
          <h3 className="px-0 pt-0 pb-[5px] uppercase font-roboto text-[0.9rem] md:text-[1rem] text-third-color grow font-bold">maridala con:{`  ${pair}`}</h3>
        </div>
      </div>
    </div>
  )
}