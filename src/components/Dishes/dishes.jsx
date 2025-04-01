import React from 'react'

import s from './menu.module.scss'
import { DishContainer } from '../Dish'

export const Dishes = ({ dishesIds }) => {

   return (
      <>
         <h3>Меню</h3>
         <ul className={s.menu}>
            {dishesIds.map((dishId) => (
               <DishContainer key={dishId} id={dishId} />
            ))}
         </ul>
      </>
   )
}