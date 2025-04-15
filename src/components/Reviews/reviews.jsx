import React, { use } from 'react'
import { ReviewForm } from '../ReviewForm'
import { AuthContext } from '../AuthContext'
import { Review } from '../Review'
import { useReviewForm } from '../../hooks/use-review-form'


export const Reviews = ({ reviewsData, onSubmit, isAddReviewLoading }) => {
   const { auth } = use(AuthContext)
   const useAddReviewForm = useReviewForm()

   return (
      <>
         <h3>Отзывы</h3>
         <ul>
            {reviewsData.map(({ id, text, rating, userId }) => (
               <li key={id}>
                  <Review id={id} userId={userId} text={text} rating={rating} />
               </li>
            ))}
         </ul>

         {auth && <ReviewForm
            onSubmit={onSubmit}
            isAddReviewLoading={isAddReviewLoading}
            useReviewForm={useAddReviewForm}
            title={'Оставить отзыв'} />}
      </>
   )
}