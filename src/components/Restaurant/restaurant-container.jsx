'use client'

import React from 'react'
import { Restaurant } from './restaurant'
import StoreProvider from '../../app/StoreProvider'

export const RestaurantContainer = () => {

   return (
      <StoreProvider>
         <Restaurant />
      </StoreProvider>
   )
}
