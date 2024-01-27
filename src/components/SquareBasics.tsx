'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';


export const SquareBasics = () => {
  const [expanded, setExpanded] = useState(false)
  const [mostViewed, setMostViewed] = useState(false)
  const [mostRated, setMostRated] = useState(false)
  return (
    <>
      <h3 className="text-white pb-4">Square basic animations</h3>
      <motion.div
        initial={{
          width: 200,
          opacity: 1
        }}
        animate={{
          width: 900,
          opacity: 0.5,
          backgroundColor: '#2682D8',
          borderRadius: 20,

        }}
        className="w-[200px] h-[200px] bg-blue-600"></motion.div>
      <br />
      <motion.div
        initial={{
          width: 200,
          opacity: 1
        }}
        animate={{
          opacity: 1,
          backgroundColor: '#ff0088',
          borderRadius: '50%',

        }}
        className="w-[200px] h-[200px] bg-fuchsia-800"></motion.div>
      <br />
      <motion.div
        initial={{
          width: 200,
          opacity: 1
        }}
        animate={{
          /* transform: 'translateY(0px) translateX(360px)' */
          x: 360,
          y: 0,
          scale: 0.5,
          rotate: 45
        }}
        className="w-[200px] h-[200px] bg-green-500"></motion.div>
      <br />
      <motion.div
        className="w-[200px] h-[200px] bg-pink-500"
        onClick={() => setExpanded(!expanded)}
        animate={{
          width: expanded ? 'calc(75vw - 40px)' : 200
        }}
      ></motion.div>
      <br />
      <div className='w-max mx-auto'>
        <motion.button
          initial={{
            opacity: 1
          }}
          onClick={() => {
            setMostRated(!mostRated)
            setMostViewed(!mostViewed)
          }}
          animate={{
            opacity: mostRated ? 0.5 : 1,
            scale: mostRated ? 0.8 : 1
          }}
          className='bg-purple-700 px-4 py-2 rounded-md mr-4 text-white'>most rated</motion.button>
        <motion.button
          initial={{
            opacity: 0.5
          }}
          onClick={() => {
            setMostViewed(!mostViewed)
            setMostRated(!mostRated)
          }}
          animate={{
            opacity: mostViewed ? 1 : 0.5,
            scale: mostViewed ? 1 : 0.8
          }}
          className='bg-pink-700 px-4 py-2 rounded-md text-white'>most viewed</motion.button>
      </div>
      <br />
    </>
  )
}

