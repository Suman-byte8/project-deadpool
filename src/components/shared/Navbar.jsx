import React from 'react'
import { CiSearch } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";

const Navbar = () => {
    return (
        <nav className='w-full h-16 bg-transparent absolute top-0 left-0 z-50 flex items-center px-15 md:px-15 text-white'>
            {/* Developer Name - My Name Buddy */}
            <div className="_nameLogo">
                <h1 className="_devName uppercase text-3xl font-medium font-bebas">Su<span className="_devName text-[#ac2434]">man</span></h1>
            </div>

            {/* Links */}
            <div className="_links text-[#d8d8d8] w-full flex items-center justify-center gap-5 uppercase font-recta list-none tracking-[1px]">

                <li className="_link ">Top Casts</li>
                <li className="_link">.</li>
                <li className="_link">Production</li>
                <li className="_link">.</li>
                <li className="_link">Box Office</li>
                <li className="_link">.</li>
                <li className="_link">Imax 6</li>

            </div>

            {/* Icons */}
            <div className="_icons list-none flex items-center gap-2">
                <li className="border-2 border-white rounded-full p-1 text-xl">
                    <CiSearch />
                </li>

                <li className="border-2 border-white rounded-full p-1 text-xl">
                    <LuUserRound />
                </li>

                <li className="bg-white w-[46px] h-[46px] rounded-full p-2 flex flex-col items-end justify-center gap-1 ml-3">
                    <div className="w-[70%] h-[2px] bg-black rounded-md"></div>
                    <div className="w-[90%] h-[2px] bg-black rounded-md"></div>
                </li>
            </div>
        </nav>
    )
}

export default Navbar