'use client'
import { motion, useAnimation, PanInfo, useMotionValue, useTransform } from 'framer-motion'

type Props = {}

const RIGHT_OFFSET = 415
const onConfirm = () => {
  alert('You have purchased this item')
}

const PanGestures = (props: Props) => {

  const controls = useAnimation()
  //const opacity = useMotionValue(0.5)
  //opacity.set(1)
  const offset = useMotionValue(0)
  //offset.on("change", value => console.log(value))
  const opacity = useTransform(offset, [0, RIGHT_OFFSET], [1, 0])
  const background = useTransform(offset, [280, RIGHT_OFFSET], ['#3b96fa', '#96ea64'])

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
        <motion.span
          style={{ background }}
          className="relative flex items-center text-white justify-content-center h-[4rem] w-[30rem] bg-blue-500 rounded-full">
          <motion.p
            style={{ opacity }}
            className="text-center mx-auto font-bold">Slide to purchase
          </motion.p>
        </motion.span>
        <motion.div
          animate={controls}
          onPan={handlePan}
          onPanEnd={handlePanEnd}
          style={{ x: offset }}
          className="mt-2 ml-2 absolute flex items-center justify-content-center w-[3rem] h-[3rem] bg-black text-white rounded-full text-2xl justify-center cursor-pointer">&#187;</motion.div>
      </div>
    </>
  )
}

export default PanGestures