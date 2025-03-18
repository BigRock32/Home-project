import React, { useState } from 'react'

const max = 5
const min = 0

export const useCounter = () => {
   const [counterValue, setCounterValue] = useState(min)

   const incrementCounter = () => {
      console.log('increment')
      if (counterValue < max) {
         setCounterValue(counterValue + 1)
      }
   }

   const decrementCounter = () => {
      if (counterValue > min) {
         setCounterValue(counterValue - 1)
      }
   }

   return {
      counterValue,
      incrementCounter,
      decrementCounter
   }

}