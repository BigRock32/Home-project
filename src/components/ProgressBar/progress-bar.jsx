import React from 'react'
import { useProgressBar } from '../../hooks/use-progressbar'

import s from './progress-bar.module.scss'

export const ProgressBar = () => {
   const { progressRef } = useProgressBar()

   return (
      <div className={s.progressbar}>
         <div ref={progressRef} className={s.progressbar__inner}></div>
      </div>
   )
}
