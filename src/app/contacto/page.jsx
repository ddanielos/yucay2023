import { Suspense } from 'react'
import Loading from './loading'

import Contact from '@/components/Contact'

export default async function AboutPage(){
    return(
      <>
        <Suspense fallback={<Loading />}>
          <div>
            <>
              <Contact />
            </>
          </div>
        </Suspense>
      </>
    )
}