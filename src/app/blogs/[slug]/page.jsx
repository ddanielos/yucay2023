import useFetchBlog from "@/hooks/useFetchBlog";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getProcessedMdxContent } from '@/utils/mdxUtils';
import styles from '@/styles/Blog.module.css'

export default async function Blog({params}){
  const {slug} = params;
  const blog = await useFetchBlog(slug);
  if(blog){
    const mdxSource = await getProcessedMdxContent(blog.data.attributes.content);
    return (
      <div className="flex flex-col m-auto max-w-[900px] items-center justify-center">
        <h1 className="pt-[25px] pb-[20px] font-bioRhyme text-2xl">{`" ${blog.data.attributes.title} "`}</h1>
        <div className={styles.contentContainer}>
          <MDXRemote source={mdxSource} />
        </div>
      </div>
    )
  }
}
