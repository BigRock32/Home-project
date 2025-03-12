import React from 'react'
import { restaurants } from '../../materials/mock'
import { Reviews } from '../Reviews'
import { Menu } from '../Menu'


export const Restaurants = ({ activeRestaurant }) => {

   return (
      <div className='restaurants'>
         {
            restaurants.map(({ id, name, menu, reviews }) => (
               id === activeRestaurant ? (
                  <div className='restaurants__item' key={id}>

                     <h2>{name}</h2>
                     
                     {menu.length > 0 ? <Menu menu={menu} /> : 'Блюда отсутствуют'}

                     {reviews.length > 0 ? <Reviews reviews={reviews} /> : 'Отзывы отсутствуют'}

                     <div className="divider" />
                  </div>) : null
            )
            )}

      </div>
   )
}