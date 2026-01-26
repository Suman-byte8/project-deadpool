import React from 'react'

const SecondHero = () => {


  const data = [
    {
      title: "Trailer",
      number: "1:47",
      bg: "#ffffff",
      color: "#000000"
    },
    {
      title: "Imax",
      number: "6",
      bg: "#b12331",
      color: "#ffffff"
    },
    {
      title: "May",
      number: "3",
      bg: "#1b1b1b",
      color: "#ffffff"
    }
  ]

  return (
    <div class="w-full bg-[#151515] min-h-[70vh] absolute top-[100vh] left-0 z-1 flex flex-col justify-center p-15">



      {/* Grid Section */}
      <div class="grid grid-cols-5 grid-rows-3 w-full h-full gap-4 relative top-14 py-14">

        {/* 1st cell */}
        <div class=" flex flex-col items-center justify-center p-4 gap-4">
          <div className="w-full flex items-center gap-2">
            <div className="_production bg-[#b12331] w-10 h-10 flex items-center justify-center rounded-full p-2">
              <img src="/src/assets/deadpool_mask.png" alt="" className="w-full h-full object-contain" />
            </div>
            <span className="uppercase font-bebas text-white tracking-[0.2rem]">Production</span>
          </div>

          <div className="w-full">
            <img src="/src/assets/marvel_studios_logo.png" alt="" className="w-3/4" />
          </div>
        </div>

        {/* 2nd cell */}
        <div class="flex flex-col items-center justify-center p-4 col-span-3">
          <div className="w-[60vh] flex items-center justify-evenly">
            {
              data.map((element, index) => (
                <div key={index} className={`w-30 h-30 flex items-center justify-center rounded-full p-2 flex-col font-bebas tracking-[0.2rem] font-semibold`} style={{ backgroundColor: element.bg }}>
                  <span className="text-xl rotate-20" style={{ color: element.color }}>{element.title}</span>
                  <span className="text-3xl" style={{ color: element.color }}>{element.number}</span>
                </div>
              ))
            }
          </div>
        </div>

        {/* 3rd cell */}
        <div class="flex flex-col items-center justify-center p-4">
          <div className="w-full flex">
            <div className=" bg-[#b12331] h-16 w-6 mr-4"></div>
            <div className="">
              <p className="font-bebas text-white text-2xl uppercase">"Hugh Jackman Said He really was done playing the Charecter of Logan/Wolverine after 2017's 'Logan'</p>
            </div>
          </div>
        </div>



        <div class="bg-green-500/20 border border-green-500 flex flex-col items-center justify-center p-4 hover:bg-green-500/40 transition-colors">
          <span class="font-bold text-green-300">Box 4</span>
          <span class="text-xs text-green-200 mt-2">w-1/3 (col-span-1)</span>
        </div>

        <div class="bg-emerald-500/20 border border-emerald-500 flex flex-col items-center justify-center p-4 hover:bg-emerald-500/40 transition-colors col-span-3 row-span-2">
          <span class="font-bold text-emerald-300">Box 5</span>
          <span class="text-xs text-emerald-200 mt-2">w-1/3 (col-span-1)</span>
        </div>

        <div class="bg-teal-500/20 border border-teal-500 flex flex-col items-center justify-center p-4 hover:bg-teal-500/40 transition-colors">
          <span class="font-bold text-teal-300">Box 6</span>
          <span class="text-xs text-teal-200 mt-2">w-1/3 (col-span-1)</span>
        </div>


        <div class="bg-blue-500/20 border border-blue-500 flex flex-col items-center justify-center p-4 hover:bg-blue-500/40 transition-colors">
          <span class="font-bold text-blue-300">Box 7</span>
          <span class="text-xs text-blue-200 mt-2">w-1/3 (col-span-1)</span>
        </div>


        <div class="bg-indigo-500/20 border border-indigo-500 flex flex-col items-center justify-center p-4 hover:bg-indigo-500/40 transition-colors ">
          <span class="font-bold text-indigo-300">Box 8</span>
          <span class="text-xs text-indigo-200 mt-2">w-1/3 (col-span-1)</span>
        </div>



      </div>
    </div>
  )
}

export default SecondHero