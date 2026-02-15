import React from 'react'
import MaskCarousel from './MaskCarousel'
import deadpoolPng from '../../assets/deadpool_png.png'
import deadpoolMask from '../../assets/deadpool_mask.png'

const HeroImage = () => {
    return (
        <section className=' absolute top-36 left-0 z-10 w-full h-[90vh]  flex items-center justify-center overflow-hidden'>
            <div className="_image w-[50vw] h-[80vh] flex items-center justify-center">
                <img src={deadpoolPng} alt="" className='w-full h-full object-contain' />
            </div>
            <div className="absolute bottom-0 left-0 w-full">
                <MaskCarousel imgSrc={deadpoolMask} className="bg-[#b12331] -rotate-1 py-3 z-5" />
            </div>
        </section>
    )
}

export default HeroImage