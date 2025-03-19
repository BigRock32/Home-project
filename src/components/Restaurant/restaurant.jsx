import React from 'react'
import { Menu } from '../Menu'
import { Reviews } from '../Reviews'

export const Restaurant = ({ restaurant }) => {
   const { name, menu, reviews } = restaurant

   return (
      <div className='restaurants__item'>

         <h2>{name}</h2>

         {menu.length > 0 ? <Menu menu={menu} /> : 'Блюда отсутствуют'}

         {reviews.length > 0 ? <Reviews reviews={reviews} /> : 'Отзывы отсутствуют'}

         <div className="divider" />

         <h2>{name}</h2>

         {menu.length > 0 ? <Menu menu={menu} /> : 'Блюда отсутствуют'}

         {reviews.length > 0 ? <Reviews reviews={reviews} /> : 'Отзывы отсутствуют'}

         <div className="divider" />

         <h2>{name}</h2>

         {menu.length > 0 ? <Menu menu={menu} /> : 'Блюда отсутствуют'}

         {reviews.length > 0 ? <Reviews reviews={reviews} /> : 'Отзывы отсутствуют'}

         <div className="divider" />
      </div>
      
   )
}
