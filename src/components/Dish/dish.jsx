import React, { use } from 'react'
import { DishCounter } from '../DishCounter/dish-counter'
import { AuthContext } from '../AuthContext'


export const Dish = ({ dish, id }) => {
   const { auth } = use(AuthContext)
   const { name, price, ingredients } = dish

   return (
      <div>
         <h1>{name}</h1>
         <div>Цена: {price}</div>

         <h3>Ингридиенты</h3>
         <ul>
            {ingredients.map((ingredient) => (
               <li key={ingredient}>
                  {ingredient}
               </li>
            ))}
         </ul>
         {auth && <DishCounter id={id} />}
      </div>
   )
}
