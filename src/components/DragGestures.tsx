'use client'
import { motion, PanInfo } from 'framer-motion'

type Props = {}

const onClose = () => {
  const $modal = document.getElementById('modal')
  console.log('animation complete')
  $modal?.classList.add('hidden')
}

const DragGestures = (props: Props) => {

  const handleDragEnd = (event: any, info: PanInfo) => {
    console.log(info.point.x, info.offset.y) // about the current state of the change
    if (info.offset.x > 200) {
      onClose()
    }
  }
  return (
    <>
      <h3 className='text-white font-bold'>
        DragGestures
      </h3>
      <br /><br /><br />
      <motion.div
        id="modal"
        // drag, drag="x", drag="y"
        drag='x'
        dragMomentum={false} // stop immediately
        /* 
        dragConstraints={{
          left: 0,
          right: 500, // resistance to move right
        }}
        dragElastic={0} // no longer move outside the constraints
        */
        dragConstraints={{
          top: 0,
          bottom: 0
        }}
        dragElastic={0.8}
        onDragEnd={handleDragEnd}
        className='w-[400px] h-[400px] bg-black border border-warning-100'
      >
        {/*  <div className='w-48 h-16 bg-slate-300 rounded-lg my-1 mx-0' /> */}
        <motion.div
          drag='x'
          dragConstraints={{
            left: 0,
            right: 300
          }}
          dragElastic={0}
          className='h-4'>
          <button type="button" className='text-black bg-blue-400'>move me!</button>
        </motion.div>
      </motion.div>
    </>
  )
}

export default DragGestures