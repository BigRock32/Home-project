import React from 'react'
import { DishCounter } from '../DishCounter/dish-counter';

export const CartItem = ({ id, amount, name }) => {

   return (
      <div>
         {name} - {amount}
         <DishCounter id={id} />
      </div>
   )
}
