import React from 'react'
import { Menu } from '../Menu'
import { Reviews } from '../Reviews'

export const RestaurantItem = ({ activeRestaurant }) => {
   return (
      <div className='restaurants__item' key={activeRestaurant.id}>

         <h2>{activeRestaurant.name}</h2>

         {activeRestaurant.menu.length > 0 ? <Menu menu={activeRestaurant.menu} /> : 'Блюда отсутствуют'}

         {activeRestaurant.reviews.length > 0 ? <Reviews reviews={activeRestaurant.reviews} /> : 'Отзывы отсутствуют'}

         <div className="divider" />
      </div>
   )
}
