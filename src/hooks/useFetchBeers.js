const fetchBeers = () => {
  const API_URL = process.env.API_BEERS;
  return fetch(API_URL)
    .then(res => res.json())
}

export default async function useFetchBeers(){
  const beers = await fetchBeers()
  if (beers){
    return beers
  }
}