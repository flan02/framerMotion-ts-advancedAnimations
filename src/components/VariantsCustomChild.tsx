'use client'
import { MotionProps, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion"

type Props = {} & MotionProps

export const VariantsCustomChild = ({ ...motionProps }: Props) => {
  const isReduced = useReducedMotion()
  const offset = useMotionValue(0)
  const opacity = useTransform(offset, [0, 200], [1, 0])
  return (
    <div>
      <h3>
        VariantsCustomChild
      </h3>
      <div
        positionTransition={isReduced ? false : {
          type: 'spring',
          stiffness: 100,
          damping: 20
        }}
        style={opacity}
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

