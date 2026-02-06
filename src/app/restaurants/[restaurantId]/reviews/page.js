'use client'

import StoreProvider from '../../../StoreProvider'
import { ReviewsPage } from '../../../../components/pages/ReviewsPage/reviews-page'

const RestaurantReviewsPage = async ({ params }) => {
   const { restaurantId } = await params

   return (
      <StoreProvider>
         <ReviewsPage restaurantId={restaurantId} />
      </StoreProvider>
   )
}

export default RestaurantReviewsPage