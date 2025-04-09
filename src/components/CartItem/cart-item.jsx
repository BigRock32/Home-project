import React from 'react'
import { DishCounter } from '../DishCounter/dish-counter';
import { BaseLink } from '../BaseLink/base-link';

export const CartItem = ({ id, amount, name }) => {

   return (
      <div>
         <BaseLink to={`/dish/${id}`}>
            {name}
         </BaseLink>
         Количество - {amount}
         
         <DishCounter id={id} />
      </div>
   )
}
