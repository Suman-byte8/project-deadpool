import React from 'react'
import MaskCarousel from './MaskCarousel'

const HeroText = () => {
    return (
        <section className="w-full h-full absolute top-[15vh] left-0 z-3 flex flex-col">

            <div className="px-4 md:px-15 w-full flex flex-col h-full justify-center md:justify-start">
                {/* Cast Name */}
                <div className="_castName w-full flex flex-col md:flex-row items-center md:items-end justify-between text-xl md:text-3xl text-white font-bebas uppercase tracking-wide mt-2 gap-4 md:gap-0">
                    <div className="flex gap-8 md:gap-36">
                        <h2>Ryan Reynolds</h2>
                        <h2>Karan Soni</h2>
                    </div>

                    <div className="flex gap-8 md:gap-36">
                        <h2>Emma Corrin</h2>
                        <h2>Hugh Jackman</h2>
                    </div>
                </div>

                {/* Movie Name */}
                <div className="_movieName w-full flex justify-center md:justify-between text-[18vw] md:text-[22vw] lg:text-[26rem] text-white font-bebas uppercase leading-[0.8] mt-8 md:mt-8 gap-1 md:gap-0">
                    <h2>D</h2>
                    <h2>E</h2>
                    <h2>A</h2>
                    <h2>D</h2>
                    <h2>P</h2>
                    <h2>O</h2>
                    <h2>O</h2>
                    <h2>L</h2>
                </div>
            </div>

            <div className="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:static">
                <MaskCarousel imgSrc={"/src/assets/deadpool_mask.png"} className="bg-[#181a1c] -rotate-2 opacity-50 md:opacity-100" />
            </div>

        </section>
    )
}

export default HeroText