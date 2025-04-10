import React from 'react'
import { Tab } from '../Tab'
import { selectRestaurantById } from '../../redux/entities/restaurants/slice'
import { useSelector } from 'react-redux'

export const RestaurantTabContainer = ({ id }) => {
   const restaurant = useSelector((state) => selectRestaurantById(state, id))

   if (!restaurant) {
      return null
   }

   const { name } = restaurant

   return (
      <Tab
         to={id}
         name={name}
      />
   )
}
