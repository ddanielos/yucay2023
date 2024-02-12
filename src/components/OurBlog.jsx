import useFetchBlogs from '@/hooks/useFetchBlogs';
import Image from 'next/image';
import Carousel from './Carousel';

export default async function OurBlog(){
  const blogs = await useFetchBlogs()
  /*
  if(!blogs){
    <h2>Loading...</h2>
  }
  */
  if(blogs===null){
    return <h2>Loading...</h2>
  }
  //const data = blogs.data.reverse();
  const data = blogs ? blogs.data.reverse() : [];

  return(
    <div className='max-w-[1536px] m-auto pt-[100px] md:pt-0'>
      <div className="mt-[280px] md:mt-0 md:mb-[50px] flex justify-evenly md:px-[100px] items-center">
        <Image className="hidden md:block" src='/assets/flor-naranj.png' alt="lupulo" width={145} height={144} />
        <h2 className="uppercase text-2xl md:text-6xl font-bioRhyme text-third-color text-center tracking-[0.2rem] text-shadow-n shadow-[#36360c]">De nuestro blog</h2>
        <Image className="hidden md:block" src='/assets/flor-naranj.png' alt="lupulo" width={145} height={144}/>
      </div>
      <div className="flex flex-col md:flex-row md:h-[550px]">
        <div className="md:pt-[10px] flex w-full justify-around">
          <Carousel data={data} />
        </div>
      </div>
    </div>
  )
}