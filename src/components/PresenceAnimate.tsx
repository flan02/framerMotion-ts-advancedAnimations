'use client'
import { FC, useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
type Props = {}

const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}
const panelVariants: Variants = {
  hidden: { y: 700 },
  visible: {
    y: 0,
    transition: {
      // when: 'beforeChildren',
      // staggerChildren: 0.1,
      // staggerDirection: -1,
      type: 'spring',
      stiffness: 300,
      damping: 30,
    }
  }
}
const PresenceAnimate: FC<Props> = (props: Props) => {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <>
      <h3 className="text-white">
        Animate Presence
      </h3>
      <br />
      <button className="bg-blue-400 px-4 py-2 rounded-md text-slate-300 hover:bg-blue-500" type="button" onClick={() => setIsToggled(!isToggled)}>show modal</button>
      <br /><br />

      <AnimatePresence /*initial={false} exitBeforeEnter={true} */>
        {
          isToggled
            ? (
              <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                exit="hidden" /* when component is unmounted */
                className="flex justify-center items-center bg-black w-[500px] h-[500px] border border-red-400 mx-auto rounded-xl">
                <motion.div
                  variants={panelVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col justify-between items-center bg-white w-[300px] h-[300px] rounded-xl border border-red-500">
                  <h2 className="text-2xl pt-8 font-bold">Modal</h2>
                  <button className="w-max h-max mb-2 bg-red-400 px-4 py-2 rounded-md text-slate-300 hover:bg-red-500" type="button" onClick={() => setIsToggled(!isToggled)}>close modal</button>
                </motion.div>
              </motion.div>
            )
            : null
        }
      </AnimatePresence>
    </>
  )
}

export default PresenceAnimate