'use client'
import { motion } from 'framer-motion'

type Props = {}

const TransitionsRepeat = (props: Props) => {

  const transition = {
    x: {
      type: 'tween',
      duration: 2,
    },
    y: {
      type: 'tween',
      duration: 3
    }
  }
  return (
    <>
      <h2 className="text-white text-xl">Repeat Transitions</h2>
      <br />
      <motion.div
        transition={{
          type: 'tween',
          duration: 2,
          ease: "anticipate",
          repeat: Infinity, /* (number) how many times we want to repeat the animation */
          repeatType: "mirror",
          repeatDelay: 2,
        }}
        animate={{
          x: 500,
        }}
        className="w-[200px] h-[200px] bg-blue-500 text-center pt-24">REPEAT TRANSITION
      </motion.div>
      <br />
      <motion.div
        transition={transition}
        animate={{
          x: 400,
          y: 300
        }}
        className="w-[200px] h-[200px] bg-blue-500 text-center pt-24">REPEAT TRANSITION
      </motion.div>
    </>
  )
}

export default TransitionsRepeat