import React from 'react'
import Hero from '@/app/about/Components/Hero'
import OurStory from './Components/OurStory'
import Philosophy from './Components/Philosophy'
import FounderNote from './Components/FounderNote'
import ContactForm from './Components/ContectForm'
import Footer from '../Components/footer'

function page() {
  return (
    <div>
      <Hero />
      <OurStory/>
      <Philosophy />
      <FounderNote />
      <ContactForm/>
      <Footer/>

    </div>
  )
}

export default page
