import React from 'react'
import { useParams } from 'react-router'
import { RestaurantContainer } from '../../components/Restaurant'

export const RestaurantPage = () => {
   const { restaurantId } = useParams()

   return (
      <RestaurantContainer id={restaurantId} />
   )
}
