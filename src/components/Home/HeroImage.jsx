import React from 'react'
import MaskCarousel from './MaskCarousel'
import deadpoolPng from '../../assets/deadpool_png.png'
import deadpoolMask from '../../assets/deadpool_mask.png'

const HeroImage = () => {
    return (
        <section className='absolute top-28 md:top-36 left-0 z-10 w-full h-[60vh] md:h-[90vh] flex flex-col md:flex-row items-center justify-center overflow-visible md:overflow-hidden'>
            <div className="_image w-full md:w-[50vw] h-[50vh] md:h-[80vh] flex items-center justify-center relative z-20">
                <img src={deadpoolPng} alt="" className='w-full h-full object-contain drop-shadow-2xl' />
            </div>
            <div className="absolute -bottom-20 md:bottom-0 left-0 w-full z-30">
                <MaskCarousel imgSrc={deadpoolMask} className="bg-[#b12331] -rotate-1 py-2 md:py-3" />
            </div>
        </section>
    )
}

export default HeroImage