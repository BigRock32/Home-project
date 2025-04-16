import React from 'react'

import s from './dishes.module.scss'
import { DishListItem } from '../DishListItem/dish-list-item';

export const Dishes = ({ dishesData }) => {

   return (
      <>
         <h3>Меню</h3>
         <ul className={s.menu}>
            {dishesData.map(({ id, name }) => (
               <li key={id} >
                  <DishListItem name={name} id={id} />
               </li>
            ))}
         </ul>
      </>
   )
}