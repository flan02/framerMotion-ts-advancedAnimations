/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { motion, Variants, AnimatePresence, useAnimation } from "framer-motion";

type Props = {}



const UseAnimation = (props: Props) => {
  const controls = useAnimation();

  const variants: Variants = {
    visible: {
      opacity: 1,
      y: 600
    }
  }

  const handleAnimate = async () => {

    // * Reemplaza el codigo
    /* 
      initial={{ y: 30 }}
      animate={{ y: 0 }}
    */

    // * Forma mas legible. We can use set and start to animate without async
    //controls.set({ y: 600, opacity: 1 })
    /*
    controls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        type: "spring",
        stiffness: 250,
        mass: 1,
        damping: 2,
      },
    });
    */
    //? returns a promise when the animation is complete
    await controls.start({ y: 600, opacity: 1 })
    await controls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        type: "spring",
        stiffness: 250,
        mass: 1,
        damping: 2,
      },
    });
  }

  return (
    <>
      <TECarousel showControls showIndicators >
        <div

          className="border border-slate-100 relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={1}
            className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <motion.img
              animate={controls}
              src="https://res.cloudinary.com/dhbig9jt8/image/upload/v1704407031/batman_begins_gmmw7f.png"
              className="opacity-0 mx-auto h-auto w-[400px]"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <motion.img
              animate={controls}
              src="https://res.cloudinary.com/dhbig9jt8/image/upload/v1705628956/batman_animated_series_maaddw.png"
              className="opacity-0 mx-auto h-auto w-[400px]"
              alt="..."
            />
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <motion.img
              animate={controls}
              src="https://res.cloudinary.com/dhbig9jt8/image/upload/v1705637387/re_series_rnw9kr.png"
              className="opacity-0 mx-auto h-auto w-[400px]"
              alt="..."
            />
          </TECarouselItem>
        </div>
      </TECarousel>
      <div className="w-full border border-white text-center mt-2 py-2">

        <button type="button" onClick={handleAnimate} className="hover:bg-purple-600 hover:text-white bg-purple-500 border border-purple-700 px-4 py-2 rounded-md">useAnimation</button>
      </div>
    </>
  );
}

export default UseAnimation