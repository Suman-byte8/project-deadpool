import React from 'react'
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import deadpoolMask from '../../assets/deadpool_mask.png';

const MovieInfo = () => {
    return (
        <section className='w-full min-h-screen bg-[#f8f8f8] relative py-20 px-10 overflow-hidden font-bebas z-11'>
            {/* Background Circle */}
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] md:w-[80vh] h-[60vh] md:h-[80vh] border border-gray-200 rounded-full pointer-events-none opacity-50'></div>

            {/* Corner Numbers */}
            <div className='absolute top-8 left-10 gap-10 hidden md:flex'>
                <span className='text-xl flex flex-col items-center'>01 <div className='w-4 h-[2px] bg-red-600 mt-1'></div></span>
                <span className='text-xl'>02</span>
            </div>
            <div className='absolute top-8 right-10 gap-10 hidden md:flex'>
                <span className='text-xl'>03</span>
                <span className='text-xl'>04</span>
            </div>

            {/* Main Header */}
            <div className='w-full flex justify-center mb-10 relative z-20'>
                <h2 className='text-4xl md:text-6xl text-center max-w-2xl leading-tight tracking-tight uppercase'>
                    Deadpool III: Release Date, Cast, and Everything About the Film!
                </h2>
            </div>

            {/* Central Symmetrical Arrows */}
            <div className='w-full justify-center items-center gap-10 mb-8 relative z-10 hidden md:flex'>
                <div className='flex items-center text-4xl'>
                    <IoMdArrowDropleft />
                    <div className='w-20 h-[2px] bg-black'></div>
                </div>
                <div className='flex items-center text-4xl text-[#b12331]'>
                    <div className='w-20 h-[2px] bg-[#b12331]'></div>
                    <IoMdArrowDropright />
                </div>
            </div>

            {/* Symmetrical Layout Grid */}
            <div className='grid grid-cols-1 md:grid-cols-3 w-full h-full relative z-10 px-0 md:px-10 gap-10 md:gap-0'>

                {/* Left Side Content */}
                <div className='flex flex-col justify-center gap-10 order-2 md:order-1 items-center md:items-start'>
                    {/* Cast Placeholders */}
                    <div className='flex gap-2 ml-0 md:ml-4'>
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className='w-10 h-10 rounded-full bg-gray-300 border-2 border-white shadow-sm'></div>
                        ))}
                    </div>

                    <div className='max-w-[300px] text-center md:text-left'>
                        <div className='flex items-center justify-center md:justify-start gap-2 mb-3'>
                            <div className='w-4 h-4 bg-[#b12331] rounded-full flex items-center justify-center'>
                                <div className='w-1.5 h-1.5 bg-white rounded-full'></div>
                            </div>
                            <span className='uppercase tracking-widest text-lg text-gray-700'>X-MEN :</span>
                        </div>
                        <p className='font-sans text-[11px] leading-relaxed text-gray-600 font-medium'>
                            PART C. &nbsp;&nbsp; Deadpool, AKA Wade Wilson, AKA the Merc with a Mouth, first made his debut in the much-maligned X-Men Origins: Wolverine.
                        </p>
                    </div>

                    {/* Image Placeholder Bottom Left */}
                    <div className='w-48 h-32 bg-gray-200 mt-10 rotate-[-5deg] overflow-hidden rounded-lg hidden md:block'>
                        <div className='w-full h-full bg-linear-to-br from-gray-400 to-gray-200'></div>
                    </div>
                </div>

                {/* Center Column: Film Card */}
                <div className='flex flex-col items-center justify-center relative scale-100 md:scale-110 order-1 md:order-2'>
                    <div className='w-[300px] md:w-[320px] bg-[#151515] text-white rounded-[40px] p-6 flex flex-col items-center relative z-20 shadow-2xl'>
                        {/* Card Icon Header */}
                        <div className='absolute -top-4 w-10 h-10 bg-[#b12331] rounded-full flex items-center justify-center border-4 border-[#f8f8f8]'>
                            <img src={deadpoolMask} alt="" className='w-6 h-6 object-contain' />
                        </div>

                        <span className='text-gray-400 tracking-[0.3em] text-xs mb-1 mt-4'>FILM</span>
                        <h3 className='text-4xl mb-6'>DEADPOOL III</h3>

                        {/* Card Inner Grid */}
                        <div className='grid grid-cols-2 gap-4 w-full mb-8'>
                            <div className='bg-gray-800/50 rounded-2xl p-4 flex flex-col items-center justify-center aspect-square border border-white/10'>
                                <FaMapMarkerAlt className='text-white text-xl mb-2' />
                                <span className='text-[8px] tracking-widest opacity-60'>MAP</span>
                            </div>
                            <div className='bg-gray-800/50 rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10'>
                                <IoMdArrowDropleft className='text-[#b12331] mb-1' />
                                <span className='text-[8px] tracking-widest opacity-60 mb-1 leading-none'>CINEMA</span>
                                <span className='text-[10px] text-center uppercase leading-tight'>EL CAPITAN THEATRE</span>
                            </div>
                            <div className='bg-gray-800/50 rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10'>
                                <span className='text-[8px] tracking-widest opacity-60 mb-1'>DATE</span>
                                <span className='text-sm'>MAY 29</span>
                            </div>
                            <div className='bg-gray-800/50 rounded-2xl p-4 flex flex-col items-center justify-center border border-white/10'>
                                <span className='text-[8px] tracking-widest opacity-60 mb-1'>TIME</span>
                                <span className='text-sm'>9:30 PM</span>
                            </div>
                        </div>

                        <button className='w-full py-3 bg-[#b12331] rounded-full text-white tracking-widest text-sm flex items-center justify-center gap-2 font-bebas'>
                            Book Now <IoMdArrowDropright />
                        </button>
                    </div>

                </div>

                {/* Right Side Content */}
                <div className='flex flex-col justify-center items-center md:items-end gap-10 order-3 md:order-3'>
                    {/* Badge Placeholder Top Right */}
                    <div className='mr-0 md:mr-10 flex items-center gap-4'>
                        <div className='w-12 h-12 bg-white rounded-full border border-gray-300 shadow-md flex items-center justify-center text-black font-bold'>03</div>
                        <div className='w-16 h-16 bg-[#151515] rounded-full flex items-center justify-center border-4 border-[#b12331] text-white text-[10px] font-bold overflow-hidden'>
                            DEAD
                        </div>
                    </div>

                    <div className='max-w-[300px] text-center md:text-right'>
                        <div className='flex items-center justify-center md:justify-end gap-2 mb-3'>
                            <span className='uppercase tracking-widest text-lg text-gray-700'>PREMIERING :</span>
                            <div className='w-4 h-4 bg-[#b12331] rounded-full flex items-center justify-center'>
                                <div className='w-1.5 h-1.5 bg-white rounded-full'></div>
                            </div>
                        </div>
                        <p className='font-sans text-[11px] leading-relaxed text-gray-600 font-medium'>
                            PART D. &nbsp;&nbsp; The film was initially announced for September 6, 2024, but it later changed, being pushed back to November 8, 2024 ...
                        </p>
                    </div>

                    {/* Image Placeholder Bottom Right */}
                    <div className='w-48 h-32 bg-gray-200 mt-10 rotate-[5deg] overflow-hidden rounded-lg hidden md:block'>
                        <div className='w-full h-full bg-linear-to-br from-gray-400 to-gray-200'></div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MovieInfo
