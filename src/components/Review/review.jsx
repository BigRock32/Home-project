import React, { use, useState } from 'react'
import { UserContainer } from '../User'
import { AuthContext } from '../AuthContext'
import { Button } from '../Button/button'
import { ReviewForm } from '../ReviewForm'
import { useUpdateReviewMutation } from '../../redux/services/api'
import { useReviewForm } from '../../hooks/use-review-form'

import s from './review.module.scss'

export const Review = ({ id, userId, text, rating }) => {
   const { auth, user } = use(AuthContext)

   const [showForm, setShowForm] = useState(false)

   const [updateReview, { isLoading: isUpdateReviewLoading }] = useUpdateReviewMutation()

   const handleSubmit = (review) => {
      updateReview({ reviewId: id, review })
   }

   const handleClick = () => {
      if (!showForm) {
         setShowForm(true)
      } else {
         setShowForm(false)
      }

   }

   return (
      <>
         <div className={s.head}>
            <h4>
               <UserContainer id={userId} />
            </h4>
            {auth && userId === user.id &&
               <Button onClick={handleClick} >{!showForm ? 'Редактировать' : 'Отменить'}</Button>}
         </div>
         Оценка - {rating} <br />
         {text}

         {auth && showForm &&
            <ReviewForm
               onSubmit={handleSubmit}
               isLoading={isUpdateReviewLoading}
               title='Отредактировать отзыв'
               initialData={{ text, rating }}
            />}
      </>
   )
}
