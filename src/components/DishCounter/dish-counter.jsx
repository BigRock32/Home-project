import React from 'react'
import { UseCounter } from '../../hooks/use-counter'
import { Counter } from '../Counter/counter'

export const DishCounter = () => {
   const { counterValue, incrementCounter, decrementCounter } = UseCounter()

   return (
      <Counter value={counterValue} increment={incrementCounter} decrement={decrementCounter} />
   )
}
