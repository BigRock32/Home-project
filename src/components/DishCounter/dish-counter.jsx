import React from 'react'
import { useCounter } from '../../hooks/use-counter'
import { Counter } from '../Counter/counter'

export const DishCounter = () => {
   const { counterValue, incrementCounter, decrementCounter } = useCounter()

   return (
      <Counter value={counterValue} increment={incrementCounter} decrement={decrementCounter} />
   )
}
