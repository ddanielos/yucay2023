import Banner from '@/components/Banner'
import Hero from '../components/Hero'
import Bar from '@/components/Bar'
import Instagram from '@/components/Instagram'
import About from '@/components/About'
import OurBlog from '@/components/OurBlog'
import ImageSunBar from '@/components/ImageSunBar'

export default function Home() {
  return (
    <div className='bg-primary-color'>
      < Hero />
      < Banner />
      < Bar />
      < Instagram />
      < About />
      < OurBlog />
      < ImageSunBar />
    </div>
  )
}
