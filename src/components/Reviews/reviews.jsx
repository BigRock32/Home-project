import React, { use } from 'react'
import { ReviewForm } from '../ReviewForm'
import { AuthContext } from '../AuthContext'
import { Review } from '../Review'


export const Reviews = ({ reviewsData, onSubmit, isAddReviewLoading }) => {
   const { auth } = use(AuthContext)

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
            isLoading={isAddReviewLoading}
            title={'Оставить отзыв'}
            initialData={{ text: '', rating: 1 }} />}
      </>
   )
}