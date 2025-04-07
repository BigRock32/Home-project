import React from 'react'
import { Dishes } from '../../components/Dishes'
import { useParams } from 'react-router'

export const MenuPage = () => {
   const { restaurantId } = useParams()

   return (
      <Dishes id={restaurantId} />
   )
}
