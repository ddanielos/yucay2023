import { Suspense } from 'react';
import BlogItem from '@/components/BlogItem';
import useFetchBlogs from '@/hooks/useFetchBlogs';
import Loading from './loading';

export default async function BlogsPage() {
  // Obtenemos los blogs desde Contentful usando el hook `useFetchBlogs`
  const blogs = await useFetchBlogs();

  if (blogs) {
    const reverseBlogs = blogs.reverse();

    return (
      <Suspense fallback={<Loading />}>
        <div className="pt-[10px] flex flex-wrap justify-evenly w-[80vw] m-auto">
          {reverseBlogs.length > 0 &&
            reverseBlogs.map((item) => {
              return (
                <BlogItem key={item.sys.id} fields={item.fields} />
              );
            })}
        </div>
      </Suspense>
    );
  }

  return <div>No blogs available</div>;
}
