import { Suspense } from 'react'
import BlogItem from '@/components/BlogItem';
import useFetchBlogs from '@/hooks/useFetchBlogs';
import Loading from './loading'

export default async function BlogsPage(){
  const blogs = await useFetchBlogs()
  if (blogs){
    const reverseBlogs = blogs.data.reverse();
    return(
      <Suspense fallback={<Loading />}>
        <div className="pt-[10px] flex flex-wrap justify-evenly w-[80vw] m-auto">
          {
            reverseBlogs.length > 0 &&
            reverseBlogs.map( item => {
              return (
                <BlogItem key={item.id} {...item} />
              )
            })
          }
        </div>
      </Suspense>
    )
  }
}