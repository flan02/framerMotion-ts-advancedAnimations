//import React from 'react'
'use client'
import { motion } from 'framer-motion'

type Props = {}

// "linear", "easeIn", "easeOut", "easeInOut", 
// "circIn", "circOut", "circInOut", "backIn", 
// "backOut", "backInOut", "anticipate", "bounceIn", 
// "bounceOut", "bounceInOut", "slow", "sprint"

export const TransitionsCustom = (props: Props) => {
  return (
    <>
      <h2 className="text-white text-xl">Spring Transitions</h2>
      <br />
      <motion.div
        transition={{
          type: 'spring',
          /* default transition props */
          stiffness: 100,
          mass: 1,
          damping: 10,
        }}
        animate={{
          x: 500,
        }}
        className="w-[200px] h-[200px] bg-blue-500 text-center pt-24">SPRING DEFAULT
      </motion.div>
      <br />
      <motion.div
        transition={{
          type: 'spring',
          stiffness: 200,
          mass: 3,
          damping: 3, /* if damping:0 rebound indefinitely */
        }}
        animate={{
          x: 500,
        }}
        className="w-[200px] h-[200px] bg-blue-500 text-center pt-20">SPRING CUSTOM
      </motion.div>
      <br /><br />
      <h2 className="text-white text-xl">Tween Transitions</h2>
      <br />
      <motion.div
        transition={{
          type: 'tween',
          /* default transition props */
          duration: 0.3,
          ease: 'easeOut',
        }}
        animate={{
          x: 500,
        }}
        className="w-[200px] h-[200px] bg-emerald-400 text-center pt-24">TWEEN DEFAULT
      </motion.div>
      <br />
      <motion.div
        transition={{
          type: 'tween',
          duration: 1, /* expected time to complete the animation */
          ease: 'easeIn',
        }}
        animate={{
          x: 500,
        }}
        className="w-[200px] h-[200px] bg-emerald-400 text-center pt-20">TWEEN CUSTOM
      </motion.div>
      <br /><br /><br />
    </>
  )
}