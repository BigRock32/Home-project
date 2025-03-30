import React from 'react'

import s from './counter.module.scss'
import { Button } from '../Button/button'

export const Counter = ({ value, increment, decrement }) => {

   return (
      <div className={s.counter}>
         <Button onClick={decrement}>-</Button>
         <div>{value}</div>
         <Button onClick={increment}>+</Button>
      </div>
   )
}
