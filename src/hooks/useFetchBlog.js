const fetchBlog = (slug) => {
  const API_URL = `${process.env.API_BLOG}/${slug}`;
  return fetch(API_URL)
    .then(res => res.json())
}

export default async function useFetchBlog(slug){
  const blog = await fetchBlog(slug)
  if (blog){
    return blog
  }
}