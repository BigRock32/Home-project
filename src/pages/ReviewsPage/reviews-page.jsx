import React from 'react'

import { Reviews, ReviewsSkeletons } from '../../components/Reviews'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { selectReviewsIds } from '../../redux/entities/reviews/slice'
import { getReviews } from '../../redux/entities/reviews/get-reviews'
import { useRequest } from '../../redux/hooks/use-request'
import { getUsers } from '../../redux/entities/users/get-users'

export const ReviewsPage = () => {
   const { restaurantId } = useParams()

   const reviewsStatus = useRequest(
      getReviews,
      restaurantId
   )

   const usersStatus = useRequest(getUsers)

   const reviewsIds = useSelector(selectReviewsIds)

   const isLoading =
      reviewsStatus === 'idle' ||
      reviewsStatus === 'pending' ||
      usersStatus === 'idle' ||
      usersStatus === 'pending'

   const isError = reviewsStatus === 'rejected' || usersStatus === 'rejected'

   if (isLoading) {
      return <ReviewsSkeletons quantity={4} />
   }

   if (isError) {
      return 'Ошибка! Отзывы не появятся.'
   }


   return (
      <Reviews reviewsIds={reviewsIds} />
   )
}
