/* eslint-disable react/display-name */
'use client'
// import { motion } from 'framer-motion' // * it is not necessary to import motion because we send the props to the custom component using "forwardRef" / "ref"
import React, { forwardRef, Ref } from 'react'

type Props = {
  name: string
  id: string
}

// * De esta forma podemos enviar motion props a un componente personalizado sin tener que volver a importar el componente motion

export const AnimateCustomComponents = forwardRef(({ name, id }: Props, ref: Ref<HTMLDivElement>) => {

  return (
    <>
      <div ref={ref}>
        <h1>{name}</h1>
      </div>
    </>
  )
})

