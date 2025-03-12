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
      <div>
         <button onClick={decrementCounter}>-</button>
         <div>{counterValue}</div>
         <button onClick={incrementCounter}>+</button>
      </div>
   )
}