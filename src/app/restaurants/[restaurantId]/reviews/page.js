'use client'

import { use } from 'react'
import StoreProvider from '../../../StoreProvider'
import { ReviewsPage } from '../../../../components/pages/ReviewsPage/reviews-page'

const RestaurantReviewsPage = ({ params }) => {
   const { restaurantId } = use(params)

   return (
      <StoreProvider>
         <ReviewsPage restaurantId={restaurantId} />
      </StoreProvider>
   )
}

export default RestaurantReviewsPage