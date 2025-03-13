import React, { useState } from 'react'


const incrementCounter = (counterValue, setCounterValue) => {
   if (counterValue < 5) {
      setCounterValue(counterValue + 1)
   }
}

const decrementCounter = (counterValue, setCounterValue) => {
   if (counterValue > 0) {
      setCounterValue(counterValue - 1)
   }
}

export const UseCounter = () => {
   const [counterValue, setCounterValue] = useState(0)

   return (
      <div className='counter'>
         <button className='counter__btn' onClick={() => decrementCounter(counterValue, setCounterValue)}>-</button>
         <div className='counter__btn'>{counterValue}</div>
         <button className='counter__btn' onClick={() => incrementCounter(counterValue, setCounterValue)}>+</button>
      </div>
   )
}