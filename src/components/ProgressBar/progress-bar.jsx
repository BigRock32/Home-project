import React from 'react'
import { useProgressBar } from '../../hooks/use-progressbar'

export const ProgressBar = () => {
   const { progressRef } = useProgressBar()

   return (
      <div className='progressbar'>
         <div ref={progressRef} className="progressbar__inner"></div>
      </div>
   )
}
