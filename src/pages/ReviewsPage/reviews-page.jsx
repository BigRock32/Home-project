import React from 'react'

import { Reviews } from '../../components/Reviews'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { selectReviewsIds } from '../../redux/entities/reviews/slice'
import { getReviews } from '../../redux/entities/reviews/get-reviews'
import { useRequest } from '../../redux/hooks/use-request'
import { getUsers } from '../../redux/entities/users/get-users'

export const ReviewsPage = () => {
   const { restaurantId } = useParams()

   const reviewsStatus = useRequest(
      restaurantId ? getReviews : null,
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
      return 'Отзывы скоро появятся...'
   }

   if (isError) {
      return 'Ошибка! Отзывы не появятся.'
   }


   return (
      <Reviews reviewsIds={reviewsIds} />
   )
}
