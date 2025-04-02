import React from 'react'
import { Dishes } from '../Dishes'
import { Reviews } from '../Reviews'

import s from './restaurant.module.scss'
import { Divider } from '../Divider'

export const Restaurant = ({ name, dishesIds, reviewsIds }) => {

   return (
      <div className={s.restaurant}>
         <h2>{name}</h2>

         {dishesIds.length > 0 ? <Dishes dishesIds={dishesIds} /> : 'Блюда отсутствуют'}

         {reviewsIds.length > 0 ? <Reviews reviewsIds={reviewsIds} /> : 'Отзывы отсутствуют'}

         <Divider />
      </div>

   )
}
