import { Suspense } from "react";
import {useFetchBeers} from "@/hooks/useFetchBeers"
import BeerItem from "@/components/BeerItem"
import Loading from "./loading"

export default async function BeersPage() {
  const beers = await useFetchBeers()
  let count = 0;
  return (
    <div className=" bg-primary-color">
      <section className=" bg-third-color h-[20px]">
      </section>
      <h1 className="font-bioRhyme text-second-color text-center">

      </h1>
      <Suspense fallback={<Loading />}>
        {
          beers.length > 0 &&
          beers.map( item => {
            count = count +1
            return (
              <BeerItem key={item.id} {...item} count={count} />
            )
          })
        }
      </Suspense>
    </div>
  )
}