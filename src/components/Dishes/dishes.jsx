import React from 'react'
import { DishListItemContainer } from '../DishListItem';

import s from './menu.module.scss'
import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../redux/entities/restaurant/slice'

export const Dishes = ({ id }) => {
   const restaurant = useSelector((state) => selectRestaurantById(state, id))

   const { menu } = restaurant

   return (
      <>
         <h3>Меню</h3>
         <ul className={s.menu}>
            {menu.map((dishId) => (
               <li key={dishId} >
                  <DishListItemContainer id={dishId} />
               </li>
            ))}
         </ul>
      </>
   )
}