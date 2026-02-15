import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import MovieInfo from './MovieInfo'
import MovieShowcase from './MovieShowcase'
import deadpoolLove from '../../assets/deadpool-love.png'

const TransitionSection = () => {
    const containerRef = useRef(null)
    const [scrollPhase, setScrollPhase] = useState('before') // 'before' | 'during' | 'after'

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

    useEffect(() => {
        // Set initial phase immediately on mount
        const initialValue = scrollYProgress.get()
        updateScrollPhase(initialValue)

        // Subscribe to scroll changes
        const unsubscribe = scrollYProgress.on("change", updateScrollPhase)
        return () => unsubscribe()
    }, [scrollYProgress])

    const updateScrollPhase = (value) => {
        if (value <= 0) {
            setScrollPhase('before')
        } else if (value >= 1) {
            setScrollPhase('after')
        } else {
            setScrollPhase('during')
        }
    }

    // Scale: 0.7 at start, 1.0 at end
    const scale = useTransform(smoothProgress, [0, 1], [0.7, 1.0])

    /**
     * SCROLL PHASES:
     * 
     * 'before': User hasn't reached the section yet
     *   - Position: absolute, at bottom of MovieInfo (top: 100vh, translateY: -100%)
     *   - Scale: 0.7 (initial)
     * 
     * 'during': User is scrolling through the section
     *   - Position: fixed, stuck to viewport bottom
     *   - Scale: animates from 0.7 to 1.0
     * 
     * 'after': User has scrolled past the section
     *   - Position: absolute, at bottom of container (MovieShowcase)
     *   - Scale: 1.0 (final)
     */

    const getPositionStyle = () => {
        switch (scrollPhase) {
            case 'before':
                return {
                    position: 'absolute',
                    top: '100vh',
                    bottom: 'auto',
                    y: '-100%',
                }
            case 'during':
                return {
                    position: 'fixed',
                    top: 'auto',
                    bottom: 0,
                    y: 0,
                }
            case 'after':
                return {
                    position: 'absolute',
                    top: 'auto',
                    bottom: 0,
                    y: 0,
                }
            default:
                return {}
        }
    }

    const getScale = () => {
        switch (scrollPhase) {
            case 'before':
                return 0.7
            case 'during':
                return scale
            case 'after':
                return 1
            default:
                return 0.7
        }
    }

    return (
        <div ref={containerRef} className='relative w-full'>
            <MovieInfo />
            <MovieShowcase />

            <motion.div
                style={{
                    ...getPositionStyle(),
                    scale: getScale(),
                    left: '50%',
                    x: '-50%',
                }}
                className='z-50 w-[90vw] md:w-[550px] pointer-events-none origin-bottom'
            >
                <img
                    src={deadpoolLove}
                    alt="Deadpool Heart"
                    className='w-full h-auto drop-shadow-2xl'
                />
            </motion.div>
        </div>
    )
}

export default TransitionSection