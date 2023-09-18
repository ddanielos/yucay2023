const fetchBlogs = () => {
  const API_URL = process.env.API_BLOG;
  return fetch(API_URL)
    .then(res => res.json())
}

export default async function useFetchBlogs(){
  const blogs = await fetchBlogs()
  if (blogs){
    return blogs
  }
}