import React from 'react'
import Hero from '../components/Home/Hero'
import SecondHero from '../components/Home/SecondHero'
import HeroImage from '../components/Home/HeroImage'

const Home = () => {
  return (
    <div className='w-full h-full relative'>
      <Hero />
      <HeroImage/>
      <SecondHero />
    </div>
  )
}

export default Home