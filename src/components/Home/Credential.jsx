import React from 'react'

const Credential = () => {
    return (
        <section className='w-full min-h-[60vh] bg-white relative z-10 p-10 flex flex-col justify-between overflow-hidden'>
            <div className='flex justify-between items-start w-full'>
                {/* Main Title Section */}
                <div className='flex items-center gap-6 pl-4 pt-10'>
                    <h1 className='text-[11vw] font-bebas leading-[0.8] uppercase tracking-tighter -translate-y-10'>
                        Directed
                    </h1>
                    <span className='text-4xl font-bebas uppercase'>by</span>
                    <h1 className='text-[11vw] font-bebas leading-[0.8] uppercase tracking-tighter translate-y-12'>
                        Shawn Levy
                    </h1>
                </div>

                {/* Release Date Section */}
                <div className='w-1/4 pt-4'>
                    <div className='flex items-center gap-2 mb-2'>
                        <div className='w-4 h-4 bg-[#b12331] rounded-full flex items-center justify-center'>
                            <div className='w-1.5 h-1.5 bg-white rounded-full'></div>
                        </div>
                        <span className='uppercase font-bebas tracking-widest text-sm text-gray-600'>Release Date :</span>
                    </div>
                    <p className='text-[11px] leading-tight text-gray-800 font-medium'>
                        PART B. &nbsp;&nbsp; Deadpool 3 is scheduled to be released in the United States on May 3, 2024. It was previously scheduled for September 6 of that year, and then November 8. It will be part of Phase Five of the MCU.
                    </p>
                </div>
            </div>

            {/* Footer Section */}
            <div className='mt-20'>
                <span className='uppercase font-bebas tracking-[0.3em] text-sm text-gray-400'>Gallery 07/32</span>
            </div>
        </section>
    )
}

export default Credential