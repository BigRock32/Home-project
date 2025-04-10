import React from 'react'
import { DishListItemContainer } from '../DishListItem';

import s from './menu.module.scss'
import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../redux/entities/restaurants/slice'

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