'use client'

import { use } from 'react'
import StoreProvider from '../../../StoreProvider'
import { MenuPage } from '../../../../components/pages/MenuPage/menu-page'

const RestaurantMenuPage = ({ params }) => {
   const { restaurantId } = use(params)

   return (
      <StoreProvider>
         <MenuPage restaurantId={restaurantId} />
      </StoreProvider>
   )
}

export default RestaurantMenuPage