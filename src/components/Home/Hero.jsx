import React from 'react'
import TypeOfMovie from '../Home/TypeOfMovie'
import RedCircle from '../Home/RedCircle'
import MidLine from '../Home/MidLine'
import HeroText from './HeroText'
import BookNow from './BookNow'




const Hero = () => {
  return (
    <section className='w-full min-h-screen md:h-screen bg-[#151515] relative overflow-hidden flex flex-col md:block'>
      <TypeOfMovie />
      <RedCircle />
      <MidLine />
      <HeroText />
      <BookNow />


    </section>
  )
}

export default Hero