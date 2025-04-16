import React from 'react'
import { Restaurant } from './restaurant'
import { useGetRestaurantsQuery } from '../../redux/services/api'

export const RestaurantContainer = ({ id }) => {
   const { data } = useGetRestaurantsQuery(undefined, {
      selectFromResult: (result) => ({
         ...result,
         data: result.data?.find(({ id: restaurantId }) => restaurantId === id)
      })
   })

   const { name } = data

   return (
      <Restaurant name={name} />
   )
}
