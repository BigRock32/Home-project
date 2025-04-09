import React, { use } from 'react'
import { ReviewForm } from '../ReviewForm'
import { AuthContext } from '../AuthContext'
import { ReviewContainer } from '../Review'
import { useSelector } from 'react-redux'
import { selectRestaurantById } from '../../redux/entities/restaurant/slice'

export const Reviews = ({ id }) => {
   const { auth } = use(AuthContext)
   const restaurant = useSelector((state) => selectRestaurantById(state, id))

   const { reviews } = restaurant

   return (
      <>
         <h3>Отзывы</h3>
         <ul>
            {reviews.map((reviewId) => (
               <li key={reviewId}>
                  <ReviewContainer id={reviewId} />
               </li>
            ))}
         </ul>

         {auth && <ReviewForm />}
      </>
   )
}