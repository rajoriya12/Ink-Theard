import React from 'react'
import Hero from '@/app/collections/Components/Hero'
import Grid from '@/app/collections/Components/Grid'
import Story from './Components/Story'
import FeaturedProducts from './Components/FeaturedProducts'
import QuoteBanner from './Components/QuoteBanner'
import Newsletter from './Components/NewsletterCTA'
import Footer from '../Components/footer'


function page() {
  return (
    <div>
      <Hero />
      <Grid />
      <Story />
      <FeaturedProducts />
      <QuoteBanner />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default page
