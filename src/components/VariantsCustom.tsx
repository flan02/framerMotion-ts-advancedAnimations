'use client'
import { AnimatePresence, Variants } from 'framer-motion'
import { VariantsCustomChild, VariantsCustomChildFunction } from './VariantsCustomChild'
import { useState } from 'react'


type Props = {}

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: (index: number) => ({
    opacity: 1,
    transition: {
      delay: index * 0.3 // efecto de carga escalonada
      // delay: 0.1 * Math.floor(index / 3) // better effect
    }
  })
}

// * Mover elementos con una funcion efecto carrousel
const variantsFc: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: (direction < 0) ? -500 : 500
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: (direction < 0) ? 500 : -500
  })
}


const VariantsCustom = (props: Props) => {
  // * Animacion efecto carrousel
  const [[index, direction], setIndex] = useState([0, 0])
  const paginate = (newDirection: number) => {
    const newIndex = index + newDirection
    setIndex([newIndex, newDirection])
  }
  return (
    <>
      <VariantsCustomChild
        variants={variants}
        initial="hidden"
        animate="visible"
        custom={1} // index of the element
      />
      <AnimatePresence custom={direction}>
        <VariantsCustomChildFunction
          variants={variantsFc}
          custom={direction}
        />
      </AnimatePresence>
    </>
  )
}

export default VariantsCustom