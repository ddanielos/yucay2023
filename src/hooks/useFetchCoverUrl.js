const API_CONTENTFUL = process.env.API_CONTENTFUL;
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ENVIRONMENT_ID = process.env.CONTENTFUL_ENVIRONMENT_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

export default async function useFetchCoverUrl(id){
    const API_URL = `${API_CONTENTFUL}${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT_ID}/assets/${id}?access_token=${CONTENTFUL_ACCESS_TOKEN}`
    const isDevelopment = process.env.NODE_ENV === 'development';
    const response = await fetch(API_URL, {
      cache: isDevelopment ? 'no-store' : 'force-cache',
      next: isDevelopment ? undefined: { revalidate: 10},
    });

    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

    const data = await response.json();
    const coverUrl =  data.fields.file.url
    return (coverUrl);
}