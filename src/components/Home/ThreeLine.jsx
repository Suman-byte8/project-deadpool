import React from 'react'

const ThreeLine = () => {
    return (
        <section className='h-16 flex gap-[5px] absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2'>
            <div className="bg-white w-[8px] h-full"></div>
            <div className="bg-white w-[8px] h-full"></div>
            <div className="bg-white w-[8px] h-full"></div>
        </section>
    )
}

export default ThreeLine