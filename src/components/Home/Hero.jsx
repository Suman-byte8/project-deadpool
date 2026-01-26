import React from 'react'
import TypeOfMovie from '../Home/TypeOfMovie'
import RedCircle from '../Home/RedCircle'
import MidLine from '../Home/MidLine'
import HeroText from './HeroText'
import BookNow from './BookNow'




const Hero = () => {
  return (
    <section className='w-full h-screen bg-[#151515] relative overflow-hidden'>
      <TypeOfMovie />
      <RedCircle />
      <MidLine />
      <HeroText />
      <BookNow />


    </section>
  )
}

export default Hero