'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { RestaurantContainer } from '../../../components/Restaurant'
import StoreProvider from '../../StoreProvider'

const RestaurantPage = () => {
   const { restaurantId } = useParams()

   return (
      <StoreProvider>
         <RestaurantContainer id={restaurantId} />
      </StoreProvider>
   )
}

export default RestaurantPage


