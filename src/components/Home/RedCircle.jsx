import React from 'react'
import ThreeLine from './ThreeLine'

const RedCircle = () => {
    return (
        <section className='w-[80vh] h-[80vh] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-[#818181]/30 z-2'>

            <div className="bg-[#b12331] w-[55vh] h-[55vh] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <ThreeLine />
            </div>


        </section>
    )
}

export default RedCircle