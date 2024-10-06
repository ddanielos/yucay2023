import { getEntriesByContentType } from '../../lib/contentful';

export default async function useFetchBlogs() {
  try {
    // Obtenemos los artículos de Contentful con el content-type 'articles'
    const blogs = await getEntriesByContentType('articles');
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return null;
  }
}