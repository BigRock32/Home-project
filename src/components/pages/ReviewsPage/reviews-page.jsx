import React from 'react'

import { Reviews, ReviewsSkeletons } from '../../Reviews'
import { BackButton } from '../../BackButton'
import { useAddReviewMutation, useGetReviewsByRestaurantIdQuery, useGetUsersQuery } from '../../../redux/services/api'

export const ReviewsPage = ({ restaurantId }) => {
   const { isLoading: isUsersLoading, isError: isUsersError } = useGetUsersQuery(restaurantId)

   const { data, isFetching: isReviewsLoading, isError: isReviewsError } = useGetReviewsByRestaurantIdQuery(restaurantId)

   const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation()
   const handleSubmit = (review) => {
      addReview({ restaurantId, review })
   }

   if (isReviewsLoading || isUsersLoading) {
      return <ReviewsSkeletons quantity={4} />
   }

   if (isReviewsError || isUsersError) {
      return 'Ошибка! Отзывы не появятся.'
   }


   return (
      <>
         <BackButton to={`/restaurants/${restaurantId}`} label="К ресторану" />
         <Reviews reviewsData={data} onSubmit={handleSubmit} isAddReviewLoading={isAddReviewLoading} />
      </>
   )
}
