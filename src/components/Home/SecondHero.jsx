import React from 'react'
import { GoStarFill } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";
import ThreeDHoverGallery from '../lightswind/3d-hover-gallery';


import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import ArrowButton from './ArrowButton';

import { motion, useScroll, useTransform } from 'framer-motion';
import deadpoolMask from '../../assets/deadpool_mask.png';
import marvelLogo from '../../assets/marvel_studios_logo.png';
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";


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

  const socials = [
    {
      name: "Twitter",
      icon: <FaSquareXTwitter />,
      link: ""
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: ""
    },
    {
      name: "Youtube",
      icon: <FaYoutube />,
      link: ""
    }
  ]

  return (
    <div className="w-full bg-[#151515] min-h-[70vh] relative z-1 flex flex-col justify-center p-4 md:p-15 rounded-br-[30px] md:rounded-br-[50px] rounded-bl-[30px] md:rounded-bl-[50px] border-b-5 border-[#b12331]">



      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 grid-rows-auto lg:grid-rows-3 w-full h-full gap-4 relative top-0 md:top-14 py-8 md:py-14">

        {/* 1st cell */}
        <div className="flex flex-col items-center justify-center p-4 gap-4">
          <div className="w-full flex items-center gap-2">
            <div className="_production bg-[#b12331] w-10 h-10 flex items-center justify-center rounded-full p-2">
              <img src={deadpoolMask} alt="" className="w-full h-full object-contain" />
            </div>
            <span className="uppercase font-bebas text-white tracking-[0.2rem]">Production</span>
          </div>

          <div className="w-full">
            <img src={marvelLogo} alt="" className="w-3/4" />
          </div>
        </div>

        {/* 2nd cell */}
        <div className="flex flex-col items-center justify-center p-4 col-span-1 md:col-span-2 lg:col-span-3">
          <div className="w-full md:w-[60vh] flex items-center justify-evenly gap-2">
            {
              data.map((element, index) => (
                <div key={index} className={`w-24 h-24 md:w-30 md:h-30 flex items-center justify-center rounded-full p-2 flex-col font-bebas tracking-[0.2rem] font-semibold transition-transform hover:scale-110`} style={{ backgroundColor: element.bg }}>
                  <span className="text-xl rotate-20" style={{ color: element.color }}>{element.title}</span>
                  <span className="text-3xl" style={{ color: element.color }}>{element.number}</span>
                </div>
              ))
            }
          </div>
        </div>

        {/* 3rd cell */}
        <div className="flex flex-col items-center justify-center p-4">
          <div className="w-full flex">
            <div className=" bg-[#b12331] h-16 w-6 mr-4 shrink-0"></div>
            <div className="">
              <p className="font-bebas text-white text-xl md:text-2xl uppercase">"Hugh Jackman Said He really was done playing the Charecter of Logan/Wolverine after 2017's 'Logan' <MdArrowOutward className="inline" /></p>
            </div>
          </div>
        </div>

        {/* 4th cell */}
        <div className="flex flex-col items-center justify-center p-4">
          <div className="w-full flex items-start gap-5 flex-col">
            <div className="_circle w-16 h-16 rounded-full border border-white flex items-center justify-center">
              <h1 className="font-bebas text-white text-3xl -rotate-20">02</h1>
            </div>

            <div className="flex items-center gap-2 text-[#b12331] ">
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill className='text-white' />
            </div>
          </div>
        </div>

        {/* 5th cell */}
        <div className="flex flex-col items-center justify-center p-4 col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-2 min-h-[300px]">
          <ThreeDHoverGallery />
        </div>

        {/* 6th cell */}
        <div className="flex items-center justify-center p-4">
          <div className="w-full flex text-white gap-4 justify-end">
            {
              socials.map((element, index) => (
                <div key={index} className="w-12 h-12 flex items-center justify-center rounded-full p-2 bg-linear-to-r from-[#ede9e9] to-[#1b1b1b] cursor-pointer hover:scale-110 transition-transform">
                  <span className="text-2xl">{element.icon}</span>
                </div>
              ))
            }
          </div>
        </div>

        {/* 7th cell */}
        <div className="items-center justify-start p-4 hidden lg:flex">
          <ArrowButton className={"bg-[#b12331] text-white "} icon={<IoMdArrowDropleft className="inline" />} />
        </div>

        {/* 8th cell */}
        <div className="items-center justify-end p-4 hidden lg:flex">
          <ArrowButton className={"bg-[#ffffff]"} icon={<IoMdArrowDropright className="inline" />} />
        </div>

      </div>
    </div>
  )
}

export default SecondHero