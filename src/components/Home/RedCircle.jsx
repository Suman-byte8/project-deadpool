import React from 'react'
import ThreeLine from './ThreeLine'

const RedCircle = () => {
    return (
        <>
            <div className='w-[90vw] h-[90vw] md:w-[80vh] md:h-[80vh] rounded-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#818181]/30 z-2 pointer-events-none transition-all duration-500'></div>

            <div className="bg-[#b12331] w-[70vw] h-[70vw] md:w-[60vh] md:h-[60vh] rounded-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 transition-all duration-500">
                <ThreeLine />
            </div>
        </>
    )
}

export default RedCircle