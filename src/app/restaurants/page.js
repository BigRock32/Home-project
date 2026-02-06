
import React from 'react'
import { RestaurantsPage as RestaurantsPageLegacy } from '../../components/pages/RestaurantsPage'
import StoreProvider from '../StoreProvider'

const RestaurantsPage = () => {

   return (
      <StoreProvider>
         <RestaurantsPageLegacy />
      </StoreProvider>
   )
}

export default RestaurantsPage