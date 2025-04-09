import React from 'react'
import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../redux/entities/restaurant/slice'
import { Restaurant } from './restaurant'

export const RestaurantContainer = ({ id }) => {
   const restaurant = useSelector((state) => selectRestaurantById(state, id))

   const { name, reviews } = restaurant

   if (!restaurant) {
      return null
   }

   return (
      <Restaurant name={name} reviewsIds={reviews} />
   )
}
