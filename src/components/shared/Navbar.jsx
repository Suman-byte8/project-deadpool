import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className='w-full h-16 bg-transparent fixed bg-blend-overlay top-0 left-0 z-50 flex items-center justify-between px-4 md:px-15 text-white'>
            {/* Developer Name - My Name Buddy */}
            <div className="_nameLogo z-50">
                <h1 className="_devName uppercase text-3xl font-medium font-bebas">Su<span className="_devName text-[#ac2434]">man</span></h1>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex _links text-[#d8d8d8] w-full items-center justify-center gap-5 uppercase font-recta list-none tracking-[1px]">
                <li className="_link cursor-pointer hover:text-white transition-colors">Top Casts</li>
                <li className="_link">.</li>
                <li className="_link cursor-pointer hover:text-white transition-colors">Production</li>
                <li className="_link">.</li>
                <li className="_link cursor-pointer hover:text-white transition-colors">Box Office</li>
                <li className="_link">.</li>
                <li className="_link cursor-pointer hover:text-white transition-colors">Imax 6</li>
            </div>

            {/* Icons */}
            <div className="_icons list-none flex items-center gap-2 z-50">
                <li className="border-2 border-white rounded-full p-1 text-xl hidden md:block">
                    <CiSearch />
                </li>

                <li className="border-2 border-white rounded-full p-1 text-xl hidden md:block">
                    <LuUserRound />
                </li>

                <li className="bg-white w-[46px] h-[46px] rounded-full p-2 items-end justify-center gap-1 ml-3 hidden md:flex md:flex-col">
                    <div className="w-[70%] h-[2px] bg-black rounded-md"></div>
                    <div className="w-[90%] h-[2px] bg-black rounded-md"></div>
                </li>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-3xl ml-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <IoClose /> : <IoMenu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center space-y-8 md:hidden">
                    <ul className="flex flex-col items-center gap-6 text-2xl font-bebas tracking-widest uppercase">
                        <li onClick={() => setIsMenuOpen(false)}>Top Casts</li>
                        <li onClick={() => setIsMenuOpen(false)}>Production</li>
                        <li onClick={() => setIsMenuOpen(false)}>Box Office</li>
                        <li onClick={() => setIsMenuOpen(false)}>Imax 6</li>
                    </ul>
                    <div className="flex gap-4 mt-8">
                        <li className="border-2 border-white rounded-full p-2 text-2xl list-none">
                            <CiSearch />
                        </li>
                        <li className="border-2 border-white rounded-full p-2 text-2xl list-none">
                            <LuUserRound />
                        </li>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar