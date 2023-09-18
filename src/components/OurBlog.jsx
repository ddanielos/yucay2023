import useFetchBlogs from '@/hooks/useFetchBlogs';
import BlogItem from './BlogItem';
import Image from 'next/image';

export default async function OurBlog(){
  const blogs = await useFetchBlogs()
  if(!blogs){
    <h2>Loading...</h2>
  }
  const data = blogs.data.reverse();
  return(
    <div className='max-w-[1536px] m-auto'>
      <div className=" mt-[280px] mb-[50px] flex content-evenly pl-[100px] pr-[100px]">
        <Image className="" src='/assets/flor-naranj.png' alt="lupulo" width={145} height={144} />
        <h2 className="uppercase text-[87px] font-bioRhyme text-third-color text-center tracking-[0.2rem] text-shadow-n shadow-[#36360c]">De nuestro blog</h2>
        <Image className="" src='/assets/flor-naranj.png' alt="lupulo" width={145} height={144}/>
      </div>
      <div className="flex h-[550px]">
        <div className="pt-[10px] flex w-full justify-around">
          {
            data.slice(0, 3).map( item => {
              return (
                // <h1 key={item.id}>hey</h1>
                <BlogItem key={item.id} {...item} />
              )
            })
          }
          </div>
      </div>
    </div>
  )
}