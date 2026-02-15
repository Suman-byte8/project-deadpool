import React from 'react'

const TypeOfMovie = () => {

    const movieType = [
        'Action',
        'Comedy',
        'Sci-Fi'
    ]

    return (
        <section className='_movieDetails w-full absolute top-20 md:top-[10vh] px-4 md:px-15 flex flex-col md:flex-row items-center justify-between border-b border-[#818181]/30 pb-2 gap-2 md:gap-0 z-20'>

            <div className="_movieType flex">
                {
                    movieType.map((type, index) => (
                        <div key={index} className="_movieTypeItem uppercase border border-white rounded-full px-2  text-white font-recta flex items-center mx-1">
                            <span className="text-[10px] md:text-[12px]">{type}</span>
                        </div>
                    ))
                }
            </div>


            <div className="_releaseDate font-recta uppercase">
                <span className="text-[14px] md:text-[16px] text-white">Release (May 2024)</span>
            </div>


        </section>
    )
}

export default TypeOfMovie
