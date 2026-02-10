import React, { use } from 'react'
import { ReviewForm } from '../ReviewForm'
import { AuthContext } from '../AuthContext'
import { Review } from '../Review'
import s from './reviews.module.scss'

export const Reviews = ({ reviewsData, onSubmit, isAddReviewLoading }) => {
   const { auth } = use(AuthContext)

   if (!reviewsData || !Array.isArray(reviewsData)) {
      return (
         <div className={s.reviewsContainer}>
            <h3>Отзывы</h3>
            <p>Отзывов пока нет</p>
            {auth && (
               <div style={{ marginTop: 'var(--spacing-xl)' }}>
                  <ReviewForm
                     onSubmit={onSubmit}
                     isLoading={isAddReviewLoading}
                     title={'Оставить отзыв'}
                     initialData={{ text: '', rating: 1 }}
                  />
               </div>
            )}
         </div>
      )
   }

   return (
      <div className={s.reviewsContainer}>
         <h3>Отзывы</h3>
         {reviewsData.length === 0 ? (
            <p>Отзывов пока нет</p>
         ) : (
            <ul className={s.reviewsList}>
               {reviewsData.map(({ id, text, rating, userId }) => (
                  <li key={id}>
                     <Review id={id} userId={userId} text={text} rating={rating} />
                  </li>
               ))}
            </ul>
         )}

         {auth && (
            <div style={{ marginTop: 'var(--spacing-xl)' }}>
               <ReviewForm
                  onSubmit={onSubmit}
                  isLoading={isAddReviewLoading}
                  title={'Оставить отзыв'}
                  initialData={{ text: '', rating: 1 }}
               />
            </div>
         )}
      </div>
   )
}