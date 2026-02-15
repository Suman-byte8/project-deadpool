import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const MovieShowcase = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    return (
        <section ref={containerRef} className='w-full min-h-screen bg-white relative flex flex-col items-center justify-center overflow-hidden py-32 font-bebas z-12'>

            {/* Background Decorative Circle */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vh] h-[90vh] border border-gray-100 rounded-full pointer-events-none'></div>

            {/* Top Text */}
            <div className='absolute top-20 text-center z-10'>
                <span className='uppercase tracking-[0.4em] text-sm text-gray-400 mb-4 block'>In Theaters</span>
                <h1 className='text-[10vw] leading-none tracking-tighter uppercase text-black'>Deadpool III</h1>
            </div>

            {/* Dates Side-by-Side */}
            <div className='w-full flex justify-between px-20 absolute top-1/2 -translate-y-1/2 z-10'>
                <div className='flex flex-col items-center'>
                    <span className='text-7xl text-black'>May 3</span>
                </div>
                <div className='flex flex-col items-center'>
                    <span className='text-7xl text-black'>2024</span>
                </div>
            </div>

        </section>
    )
}

export default MovieShowcase
