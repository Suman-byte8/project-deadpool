import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

const ScrollProvider = ({ children }) => {
    useEffect(() => {
        const scroll = new LocomotiveScroll()

        return () => {
            if (scroll) scroll.destroy()
        }
    }, [])

    return (
        <div className="scroll-wrapper">
            {children}
        </div>
    )
}

export default ScrollProvider
