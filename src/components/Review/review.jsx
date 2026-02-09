'use client'

import React, { use, useState } from 'react'
import { UserContainer } from '../User'
import { AuthContext } from '../AuthContext'
import { Button } from '../Button/button'
import { ReviewForm } from '../ReviewForm'
import { useUpdateReviewMutation } from '../../redux/services/api'
import { useGetUsersQuery } from '../../redux/services/api'

import s from './review.module.scss'

const StarIcon = ({ filled }) => (
   <svg className={`${s.star} ${filled ? s.filled : ''}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
   </svg>
)

const getInitials = (name) => {
   if (!name) return '?'
   const parts = name.trim().split(' ')
   if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase()
   }
   return name.substring(0, 2).toUpperCase()
}

export const Review = ({ id, userId, text, rating }) => {
   const { auth, user } = use(AuthContext)
   const { data: users } = useGetUsersQuery()
   const [showForm, setShowForm] = useState(false)
   const [updateReview, { isLoading: isUpdateReviewLoading }] = useUpdateReviewMutation()

   const reviewUser = users?.find(u => u.id === userId)
   const userName = reviewUser?.name || 'Пользователь'
   const initials = getInitials(userName)

   const handleSubmit = (review) => {
      updateReview({ reviewId: id, review })
      setShowForm(false)
   }

   const handleClick = () => {
      setShowForm(!showForm)
   }

   return (
      <div className={s.review}>
         <div className={s.head}>
            <div className={s.userInfo}>
               <div className={s.avatar}>
                  {initials}
               </div>
               <h4 className={s.userName}>{userName}</h4>
            </div>
            {auth && userId === user.id && (
               <button className={s.editButton} onClick={handleClick}>
                  {!showForm ? 'Редактировать' : 'Отменить'}
               </button>
            )}
         </div>

         <div className={s.rating}>
            <div className={s.stars}>
               {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={star <= rating} />
               ))}
            </div>
            <span className={s.ratingValue}>{rating}/5</span>
         </div>

         <p className={s.text}>{text}</p>

         {auth && showForm && (
            <div style={{ marginTop: 'var(--spacing-lg)' }}>
               <ReviewForm
                  onSubmit={handleSubmit}
                  isLoading={isUpdateReviewLoading}
                  title='Отредактировать отзыв'
                  initialData={{ text, rating }}
               />
            </div>
         )}
      </div>
   )
}
