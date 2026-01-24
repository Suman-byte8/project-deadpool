import React from 'react'
import MaskCarousel from './MaskCarousel'

const HeroText = () => {
    return (
        <section className="w-full h-full absolute top-[25vh] left-0 z-3 flex flex-col">

            <div className="px-[60px] w-full flex flex-col">
                {/* Cast Name */}
                <div className="_castName w-full flex items-end justify-between text-3xl text-white font-bebas uppercase tracking-wide">
                    <div className="flex gap-36">
                        <h2>Ryan Reynolds</h2>
                        <h2>Karan Soni</h2>
                    </div>

                    <div className="flex gap-36">
                        <h2>Emma Corrin</h2>
                        <h2>Hugh Jackman</h2>
                    </div>
                </div>

                {/* Movie Name */}
                <div className="_movieName w-full flex justify-between text-[26rem] text-white font-bebas uppercase leading-[0.8] mt-12">
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

            <div className="mt- w-full">
                <MaskCarousel imgSrc={"/src/assets/deadpool_mask.png"} className="bg-[#181a1c] -rotate-2" />
            </div>

        </section>
    )
}

export default HeroText