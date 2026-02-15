import React from 'react'
import Hero from '../components/Home/Hero'
import SecondHero from '../components/Home/SecondHero'
import HeroImage from '../components/Home/HeroImage'
import Credential from '../components/Home/Credential'
import TransitionSection from '../components/Home/TransitionSection'

const Home = () => {
  return (
    <div className='w-full h-full relative'>
      <Hero />
      <HeroImage />
      <SecondHero />
      <Credential />
      <TransitionSection />
    </div>
  )
}

export default Home