import React, { useState } from 'react'

const max = 5
const min = 0

export const UseCounter = () => {
   const [counterValue, setCounterValue] = useState(0)

   const incrementCounter = () => {
      if (counterValue < max) {
         setCounterValue(counterValue + 1)
      }
   }

   const decrementCounter = () => {
      if (counterValue > min) {
         setCounterValue(counterValue - 1)
      }
   }

   return (
      <div className='counter'>
         <button className='counter__btn' onClick={decrementCounter}>-</button>
         <div className='counter__btn'>{counterValue}</div>
         <button className='counter__btn' onClick={incrementCounter}>+</button>
      </div>
   )
}