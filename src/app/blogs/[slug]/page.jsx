import styles from '@/styles/Blog.module.css'

import { getEntriesByContentType } from '../../../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

//obtiene los paths estáticos para cada artículo
export async function generateStaticParams() {
  const posts = await getEntriesByContentType('articles');
  return posts.map(post => ({
    slug: post.fields.slug,
  }));
}

//genera los metadatos para cada página
export async function generateMetadata({ params }) {
  const posts = await getEntriesByContentType('articles');
  const post = posts.find(post => post.fields.slug === params.slug);

  return {
    title: post?.fields.title || 'Blog Post',
    description: post?.fields.description || 'A blog post',
  };
}

//página del artículo
export default async function BlogPost({ params }) {
  const posts = await getEntriesByContentType('articles');
  const post = posts.find(post => post.fields.slug === params.slug);

  if (!post) {
    return (
      <article className="max-w-2xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Esta pinta está vacía!</h1>
        <p>Lo sentimos, no pudimos encontrar el artículo que estás buscando.</p>
      </article>
    );
  }

  const { title, content } = post.fields;

  //cómo renderizar los nodos embebidos (assets)
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const { file, title } = node.data.target.fields;
        const imageUrl = file.url.startsWith("//") ? `https:${file.url}` : file.url;

        return (
          <div className="my-4">
            <img src={imageUrl} alt={title} className="w-full h-auto" />
          </div>
        );
      }
    }
  };

  return (
    <article className="max-w-2xl mx-auto py-8">
      <h1 className="pt-[25px] md:pb-[20px] font-bioRhyme text-2xl text-center">{title}</h1>
      <div className={styles.contentContainer}>
        {documentToReactComponents(content, options)}
      </div>
    </article>
  );
}