import React from 'react'
import Lookbookhero from '@/app/Lookbook/Components/Hero'
import Gallery from '@/app/Lookbook/Components/Gallery'
import Story from '@/app/Lookbook/Components/Story'
import FashionQuote from './Components/QuoteBanner'
import Footer from '../Components/footer'

function page() {
  return (
    <div>
      <Lookbookhero />
       <Gallery />
      <Story />
      <FashionQuote />
      <Footer />
    </div>
  )
}


export default page
