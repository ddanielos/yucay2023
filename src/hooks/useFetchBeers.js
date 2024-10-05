import {beerDataParser} from "@/utils/beerDataParser";

const API_CONTENTFUL = process.env.API_CONTENTFUL;
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ENVIRONMENT_ID = process.env.CONTENTFUL_ENVIRONMENT_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

const API_URL = `${API_CONTENTFUL}${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT_ID}/entries?access_token=${CONTENTFUL_ACCESS_TOKEN}`

if (!API_URL){
  throw new Error('API_BEERS environment variable is not set')
}

export async function fetchBeers(){
  const isDevelopment = process.env.NODE_ENV === 'development';

  const response = await fetch(API_URL, {
    cache: isDevelopment ? 'no-store' : 'force-cache',
    next: isDevelopment ? undefined: { revalidate: 10},
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return beerDataParser(data);
}

export async function useFetchBeers() {
  try {
    const beers = await fetchBeers();
    if (!beers) {
      throw new Error('No beers data returned from parser')
    }
    return beers;
  } catch (error) {
    console.error('Error fetching beers:', error)
    return null;
  }
}