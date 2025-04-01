import React from 'react'
import { useCounter } from '../../hooks/use-counter'
import { Counter } from '../Counter/counter'

export const DishCounter = ({ id }) => {
   const { counterValue, incrementCounter, decrementCounter } = useCounter(id)

   return (
      <Counter value={counterValue} increment={incrementCounter} decrement={decrementCounter} />
   )
}
