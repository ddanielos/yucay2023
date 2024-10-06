import Link from 'next/link';

const buildImageUrl = (url) => (url.startsWith('//') ? `https:${url}` : url);

export default function BlogItem({ fields }) {
  const { title, description, cover, slug } = fields;
  const coverImg = cover?.fields?.file?.url ? buildImageUrl(cover.fields.file.url) : '/placeholder.jpg';

  return (
    <div className="py-[20px] md:py-[60px] md:px-0">
      <Link className="visited:text-inherit visited:no-underline visited:outline-none" href={`/blogs/${slug}`}>
        <div className=" rounded-2xl overflow-hidden shadow-[6px_6px_3px_rgba(198,106,72,0.3)] hover:-translate-y-[2%] flex flex-col w-[76vw] md:w-[400px] h-[450px] mr-2.5 cursor-pointer transition-all">
          <div className=" w-[400px] h-[250px] overflow-hidden relative">
            <img className=" w-full h-auto" src={coverImg} alt={title} />
          </div>
          <div className="h-[200px] flex bg-primary-color flex-col content-evenly p-[20px] text-justify leading-5 transition-opacity duration-500">
            <h3 className=" font-roboto uppercase text-base my-[10px] font-bold">{title}</h3>
            <p className="line-clamp-3 md:line-clamp-none font-roboto text-[0.9rem]" dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>
      </Link>
    </div>
  );
}
