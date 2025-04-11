import React from 'react'
import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../redux/entities/restaurants/slice'
import { Restaurant } from './restaurant'

export const RestaurantContainer = ({ id }) => {
   const restaurant = useSelector((state) => selectRestaurantById(state, id))

   const { name } = restaurant

   if (!restaurant) {
      return null
   }

   return (
      <Restaurant name={name} />
   )
}
