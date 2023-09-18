import Link from 'next/link'
import { parseISO, format } from 'date-fns'

const URL = process.env.API_URL_COVER;

export default function BlogItem(props){
  const { title, content, cover, description, publishedAt, Slug } = props.attributes;
  const cover_img = `${URL}${cover}`
  return(
    <div className=" py-[60px] px-0">
      <Link className="visited:text-inherit visited:no-underline visited:outline-none" href={`/blogs/${Slug}`}>
        <div className=" rounded-2xl overflow-hidden shadow-[6px_6px_3px_rgba(198,106,72,0.3)] hover:-translate-y-[2%] flex flex-col w-[400px] h-[450px] mr-2.5 cursor-pointer transition-all">
          <div className=" w-[400px] h-[250px] overflow-hidden relative"><img className=" w-full h-auto" src={cover_img}/></div>
          <div className="h-[200px] flex bg-primary-color flex-col content-evenly p-[20px] text-justify leading-5 transition-opacity duration-500">
            <h3 className=" font-roboto uppercase text-base my-[10px] font-bold">
                {title}
            </h3>
            <p className=" font-roboto text-[0.9rem]" dangerouslySetInnerHTML={{__html: description}}></p>
            <div className="pt-[15px] ml-auto self-end font-roboto text-[0.8rem] text-second-color">Publicado: {format(parseISO(publishedAt), 'dd-MM-yyyy')}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}