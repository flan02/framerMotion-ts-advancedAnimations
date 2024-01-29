'use client'
import { motion } from 'framer-motion'

type Props = {}

const WhileTapHover = (props: Props) => {
  return (
    <>
      <h3 className="text-white">WhileTapHover</h3>
      <br /><br />
      <motion.button
        whileHover={{
          scale: 1.10,
          transition: {
            duration: 0.3
          }
        }}
        whileTap={{
          scale: 0.90,
          transition: {
            duration: 0.3
          }
        }}
        type="button" className="bg-blue-400 text-white px-2 py-1 rounded-lg">
        Continue
      </motion.button>
    </>
  )
}

export default WhileTapHover