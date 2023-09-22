import Image from 'next/image'

const url = process.env.API_URL_COVER;

export default function BeerItem(props){
  const { count } = props;
  const { name, cover_url, description, detail, pair, abv, bitterness } = props.attributes;
  const cover = `${url}${cover_url}`

  return (
    <div className="flex justify-center py-[4vw] px-0">
      <div key={count} className={count%2 === 0 ? "flex justify-around max-w-[1020px] border-[1px] border-second-color rounded-xl" : "flex justify-around max-w-[1020px] flex-row-reverse border-[1px] border-second-color rounded-xl" }>
        <div className="">
          <img className=" max-w-fit" src={cover} alt='' />
        </div>
        <div className="px-[2.5vw] py-[1vw] flex flex-col justify-start">
          <h2 className=" font-bioRhyme text-second-color text-[2.2rem] grow">{name}</h2>
          <ul className=" flex justify-start grow-[2]">
            <li className="pt-0 pr-[30px] pb-[10px] pl-[10px] flex items-center justify-around">
              <span className="uppercase text-[1.2rem] font-bold font-bioRhyme text-third-color"><Image className="max-w-[72px] h-auto" src="/assets/lupulo.png" alt="bitterness" width={100} height={100}/></span>
              <span className="uppercase text-[1.2rem] font-bold font-bioRhyme text-third-color">{bitterness}</span>
            </li>
            <li className="pt-0 pr-[30px] pb-[10px] pl-[10px] flex items-center justify-around">
              <span className="uppercase text-[1.2rem] font-bold font-bioRhyme text-third-color"><Image className="max-w-[65px] h-auto" src="/assets/alcohol.png" alt="ABV" width={100} height={100}/></span>
              <span className="uppercase text-[1.2rem] font-bold font-bioRhyme text-third-color">{abv}</span>
            </li>
          </ul>
          <h2 className=" uppercase font-roboto text-[1rem] text-third-color grow font-bold">{detail}</h2>
          <div className=" px-0 pt-0 pb-[5px] normal-case font-roboto leading-[1.4rem] text-justify grow">{description}</div>
          <h3 className="px-0 pt-0 pb-[5px] uppercase font-roboto text-[1rem] text-third-color grow font-bold">maridala con:{`  ${pair}`}</h3>
        </div>
      </div>
    </div>
  )
}