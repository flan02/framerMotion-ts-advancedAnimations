'use client'
// TODO Este componente se usa para renderizar imagenes y reordenarlas con sort hace una animacion.

import { motion, MotionProps } from 'framer-motion'

type Props = {
  id: string
  name: string
  url: string
} & MotionProps

const TransitionsPosition = ({ id, name, url, ...motionProps }: Props) => {
  return (
    <>
      <h3 className='text-white pb-4'>TransitionPosition</h3>
      <motion.section className='flex' {...motionProps}>
        <div className='w-[250px] h-[250px] bg-emerald-500'>{id}</div>
        <div className='w-[250px] h-[250px] bg-pink-500'>{name}</div>
        <div className='w-[250px] h-[250px] bg-blue-500'>{url}</div>
      </motion.section>
    </>
  )
}

export default TransitionsPosition