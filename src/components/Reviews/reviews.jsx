import React, { use } from 'react'
import { ReviewForm } from '../ReviewForm'
import { AuthContext } from '../AuthContext'
import { ReviewContainer } from '../Review'


export const Reviews = ({ reviewsIds }) => {
   const { auth } = use(AuthContext)

   return (
      <>
         <h3>Отзывы</h3>
         <ul>
            {reviewsIds.map((reviewId) => (
               <li key={reviewId}>
                  <ReviewContainer id={reviewId} />
               </li>
            ))}
         </ul>

         {auth && <ReviewForm />}
      </>
   )
}