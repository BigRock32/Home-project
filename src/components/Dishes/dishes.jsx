import React from 'react'
import { DishListItemContainer } from '../DishListItem';

import s from './dishes.module.scss'

export const Dishes = ({ dishesIds }) => {

   return (
      <>
         <h3>Меню</h3>
         <ul className={s.menu}>
            {dishesIds.map((dishId) => (
               <li key={dishId} >
                  <DishListItemContainer id={dishId} />
               </li>
            ))}
         </ul>
      </>
   )
}