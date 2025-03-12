import React, { useState } from 'react'
import { UseCounter } from '../../hooks/use-counter'

export const Menu = ({ menu }) => {
   return (
      <>
         <h3>Меню</h3>
         <ul>
            {menu.map((dish) => (
               <li key={dish.id}>
                  {dish.name}
                  <UseCounter />
               </li>
            ))}
         </ul>
      </>
   )
}