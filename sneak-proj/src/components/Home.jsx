import React from 'react'

import Navbar from './Navbar'
import Hero from './Hero'
import OurCollection from './OurCollection'
import AboutUs from './AboutUs'

const Home = () => {
  return (
    <div className=''>
        <Navbar />
        <Hero />
        <OurCollection />
        <AboutUs />
    </div>
  )
}

export default Home