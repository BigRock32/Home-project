import React from 'react'
import { DishCounter } from '../DishCounter/dish-counter'

export const Menu = ({ menu }) => {
   return (
      <>
         <h3>Меню</h3>
         <ul className='menu'>
            {menu.map((dish) => (
               <li key={dish.id}>
                  {dish.name}
                  <DishCounter />
               </li>
            ))}
         </ul>
      </>
   )
}