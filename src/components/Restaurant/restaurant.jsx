import React from 'react'
import { Menu } from '../Menu'
import { Reviews } from '../Reviews'

import s from './restaurant.module.scss'
import { Divider } from '../Divider'

export const Restaurant = ({ restaurant }) => {
   const { name, menu, reviews } = restaurant

   return (
      <div className={s.restaurant}>
         <h2>{name}</h2>

         {menu.length > 0 ? <Menu menu={menu} /> : 'Блюда отсутствуют'}

         {reviews.length > 0 ? <Reviews reviews={reviews} /> : 'Отзывы отсутствуют'}

         <Divider />
      </div>

   )
}
