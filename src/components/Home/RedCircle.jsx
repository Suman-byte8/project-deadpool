import React from 'react'
import ThreeLine from './ThreeLine'

const RedCircle = () => {
    return (
        <>
            <div className='w-[80vh] h-[80vh] rounded-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#818181]/30 z-2 pointer-events-none'></div>

            <div className="bg-[#b12331] w-[60vh] h-[60vh] rounded-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1">
                <ThreeLine />
            </div>
        </>
    )
}

export default RedCircle