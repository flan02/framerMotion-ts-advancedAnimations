'use client'
import { MotionProps, motion } from "framer-motion"


type Props = {} & MotionProps

export const VariantsCustomChild = ({ ...motionProps }: Props) => {
  return (
    <div>
      <h3>
        VariantsCustomChild
      </h3>
      <motion.div
        className="flex flex-wrap"
        {...motionProps}
      />
    </div>
  )
}




export const VariantsCustomChildFunction = ({ ...motionProps }: Props) => {
  return (
    <div>
      <h3>
        VariantsCustomChild Carrousel efecto mover al costado
      </h3>
      <motion.div
        className="flex flex-wrap"
        {...motionProps}
      />
    </div>
  )
}

