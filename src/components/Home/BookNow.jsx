import React from 'react'
import { MdArrowOutward } from "react-icons/md";
const BookNow = () => {
    return (
        <section className='w-full text-white px-15 absolute top-full mt-10 left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-between z-10 bg-[#151515] py-15'>

            <div className="_story flex flex-col gap-1">

                <div className="flex items-center gap-4">
                    <div className="_redDot w-8 h-8 rounded-full bg-[#b12331]">
                        <img src="/src/assets/deadpool_mask.png" alt="" className="w-full h-full object-contain p-2" />
                    </div>
                    <h1 className="font-medium font-bebas tracking-[0.3rem] uppercase">Deadpool III Story :</h1>
                </div>

                <div className="_desc flex items-center gap-4 w-full">
                    <p className="w-[60%] text-sm font-recta"> <span className="uppercase mr-4">Part A.</span>Wolverine joins the "merc with a mouth" in the third installment in the deadpool franchise. </p>
                </div>

            </div>


            <div className="_book flex items-center gap-18">
                <div className="font-bebas border border-white px-4 py-1 rounded-full flex items-center gap-2 text-2xl">Book Now <MdArrowOutward /></div>

                <div className="_badge w-20 h-20 relative ">
                    <img src="/src/assets/badge.png" alt="badge" className="w-full h-full object-contain" />
                    <div className="_badgeText absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <p className="font-bebas text-white text-3xl rotate-45">DEAD</p>
                    </div>
                    <div className="border border-white rounded-full w-12 h-12 flex items-center justify-center absolute -top-1 right-1/2 translate-x-[-50%] translate-y-1/2 -z-1 -rotate-45">
                        <h1 className="font-bebas text-white text-4xl">01</h1>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BookNow