'use client'
import { motion, useAnimation, PanInfo } from 'framer-motion'

type Props = {}

const RIGHT_OFFSET = 415
const onConfirm = () => {
  alert('You have purchased this item')
}

const PanGestures = (props: Props) => {

  const controls = useAnimation()

  const handlePan = (event: any, info: PanInfo) => {
    const x = info.offset.x
    if (x > 0) controls.set({ x: (x < RIGHT_OFFSET) ? x : RIGHT_OFFSET })
  }

  const handlePanEnd = (event: any, info: PanInfo) => {
    if (info.offset.x > RIGHT_OFFSET) onConfirm()
    else controls.set({ x: 0 })
  }

  return (
    <>
      <h3 className="text-white">
        PanGestures
      </h3>
      <br /><br />
      <div className="flex">
        <span className="relative flex items-center text-white justify-content-center h-[4rem] w-[30rem] bg-blue-500 rounded-full"><p className="text-center mx-auto font-bold">Slide to purchase</p></span>
        <motion.div
          animate={controls}
          onPan={handlePan}
          onPanEnd={handlePanEnd}
          className="mt-2 ml-2 absolute flex items-center justify-content-center w-[3rem] h-[3rem] bg-purple-800 rounded-full text-2xl justify-center cursor-pointer">&#187;</motion.div>
      </div>
    </>
  )
}

export default PanGestures