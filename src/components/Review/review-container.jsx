import React from 'react'
import { Review } from './review'
import { useSelector } from 'react-redux'
import { selectReviewById } from '../../redux/entities/reviews/slice'
import { selectUserById } from '../../redux/entities/users/slice'

export const ReviewContainer = ({ id }) => {
   const review = useSelector((state) => selectReviewById(state, id))

   const { userId, text } = review

   const user = useSelector((state) => selectUserById(state, userId))

   return (
      <Review name={user.name} text={text} />
   )
}
