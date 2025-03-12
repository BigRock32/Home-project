import React, { useState } from 'react'

export const UseCounter = () => {
   const [counterValue, setCounterValue] = useState(0)

   const incrementCounter = () => {
      if (counterValue < 5) {
         setCounterValue(counterValue + 1)
      }
   }

   const decrementCounter = () => {
      if (counterValue > 0) {
         setCounterValue(counterValue - 1)
      }
   }

   return (
      <div className='counter'>
         <button className='counter__btn' onClick={decrementCounter}>-</button>
         <div className='counter__value'>{counterValue}</div>
         <button className='counter__btn' onClick={incrementCounter}>+</button>
      </div>
   )
}