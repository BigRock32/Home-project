import React, { use } from 'react'
import { DishCounter } from '../DishCounter/dish-counter'

import s from './menu.module.scss'
import { AuthContext } from '../AuthContext'

export const Menu = ({ menu }) => {
   const { auth } = use(AuthContext)

   return (
      <>
         <h3>Меню</h3>
         <ul className={s.menu}>
            {menu.map((dish) => (
               <li key={dish.id}>
                  {dish.name}
                  {auth && <DishCounter />}
               </li>
            ))}
         </ul>
      </>
   )
}