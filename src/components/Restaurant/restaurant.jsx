import React from 'react'
import { restaurants } from '../../materials/mock'
import { RestaurantItem } from './restaurant-item'


export const Restaurant = ({ activeRestaurantId }) => {
   const activeRestaurant = restaurants.find((restaurant) => restaurant.id === activeRestaurantId);

   return (
      <div className='restaurants'>
         {
            activeRestaurant && (
               <RestaurantItem activeRestaurant={activeRestaurant} />
            )
         }
      </div>
   )
}