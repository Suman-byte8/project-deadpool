import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import MovieInfo from './MovieInfo'
import MovieShowcase from './MovieShowcase'

const TransitionSection = () => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    })

    // Animation Values
    // Start: Bottom-Right of MovieInfo (top: ~90%, left: ~80%, scale: 1)
    // End: Center of MovieShowcase (top: ~150vh, left: 50%, scale: 1.15)

    // We assume both sections are roughly 100vh. 
    // The transition happens as we scroll through the first section into the second.

    // Vertical position: Moves from approx center of MovieInfo to center of MovieShowcase
    // MovieInfo Center ~ 50vh. Image offset ~ +10% vh based on layout analysis.
    // Start: 60vh. End: 150vh (Center of second section)
    const top = useTransform(smoothProgress, [0.2, 0.8], ["60vh", "150vh"])

    // Horizontal position: Centered in both cases
    // Was centered in MovieInfo (offset by trivial amount). Centered in MovieShowcase.
    const left = useTransform(smoothProgress, [0.2, 0.8], ["50%", "50%"])

    // X Offset: Maintain center alignment
    const x = useTransform(smoothProgress, [0.2, 0.8], ["-50%", "-50%"])

    // Scale: Starts smaller (0.85) and grows to 1.25
    const scale = useTransform(smoothProgress, [0.2, 0.8], [0.85, 1.25])

    // Rotation: No rotation needed
    const rotate = useTransform(smoothProgress, [0.2, 0.8], [0, 0])

    return (
        <div ref={containerRef} className='relative w-full'>
            <MovieInfo />
            <MovieShowcase />

            <motion.div
                style={{ top, left, x, scale, rotate }}
                className='absolute z-50 w-[500px] pointer-events-none origin-center'
            >
                <img
                    src="/src/assets/deadpool-love.png"
                    alt="Deadpool Heart"
                    className='w-full h-auto drop-shadow-2xl'
                />
            </motion.div>
        </div>
    )
}

export default TransitionSection
