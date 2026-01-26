import React from 'react'

const HeroImage = () => {
    return (
        <section className=' absolute top-[9rem] left-0 z-10 w-full h-screen max-h-screen flex items-center justify-center overflow-hidden'>
            <div className="_image w-[50vw] h-[80vh] flex items-center justify-center">
                <img src="/src/assets/deadpool_png.png" alt="" className='w-full h-full object-contain' />
            </div>
        </section>
    )
}

export default HeroImage