import React from "react";
import { motion } from "framer-motion";




const MaskCarousel = (props) => {

    const IMAGE_SRC = props.imgSrc;

    const items = new Array(80).fill(null);

    return (
        <div className={`w-full overflow-hidden ${props.className}`}>

            {/* 
         The Motion Div
         We animate x from 0% to -50%. 
         Why -50%? Because we have TWO sets of images. 
         Once it scrolls halfway (the length of one set), it snaps back to 0 instantly.
      */}
            <motion.div
                className="flex w-fit"
                animate={{ x: "-50%" }}
                transition={{
                    duration: 20, // Adjust speed (lower = faster)
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {/* Set 1: The initial strip */}
                <div className="flex gap-3">
                    {items.map((_, index) => (
                        <img
                            key={`set1-${index}`}
                            src={IMAGE_SRC}
                            alt="icon"
                            className="h-[26px] w-[26px] object-cover block"
                        />
                    ))}
                </div>

                {/* Set 2: The duplicate strip (for the seamless loop effect) */}

            </motion.div>
        </div>
    );
};

export default MaskCarousel;