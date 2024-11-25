import React from 'react'
import OurCollection from '../components/OurCollection';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';

const Home = () => {
  return (
    <div className=''>
          <Hero />
          <OurCollection />
          <AboutUs />
    </div>
  )
}

export default Home