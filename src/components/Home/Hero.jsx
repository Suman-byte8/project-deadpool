import React from 'react'
import TypeOfMovie from '../Home/TypeOfMovie'
import RedCircle from '../Home/RedCircle'
import MidLine from '../Home/MidLine'
import HeroText from './HeroText'
import SecondHero from './SecondHero'



const Hero = () => {
  return (
    <section className='w-full min-h-screen bg-[#151515] relative'>
      <TypeOfMovie />
      <RedCircle />
      <MidLine />
      <HeroText />

      <SecondHero />

    </section>
  )
}

export default Hero