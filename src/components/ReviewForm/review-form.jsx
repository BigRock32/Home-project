import React, { use } from 'react'
import { Counter } from '../Counter/counter'

import s from './review-form.module.scss'
import { Button } from '../Button/button'
import { AuthContext } from '../AuthContext'


export const ReviewForm = ({ onSubmit, isLoading, useReviewForm, title }) => {
   const { user } = use(AuthContext)

   const {
      form,
      setText,
      setIncrementReview,
      setDecrementReview,
      setDefaultValue
   } = useReviewForm

   const { text, reviewValue } = form

   return (
      <>
         <h4>{title}</h4>
         <form className={s.form}>
            <div>Оцените этот ресторан</div>
            <Counter value={reviewValue} increment={setIncrementReview} decrement={setDecrementReview} />

            <textarea value={text} onChange={(e) => setText(e.target.value)} className='form__input' type="text" placeholder='введите текст' />
         </form>

         <Button onClick={setDefaultValue}>Очистить</Button>
         <Button onClick={() => {
            onSubmit({
               text, rating: reviewValue, userId: user.id
            })
         }}>{isLoading ? 'Подождите..' : 'Отправить'}</Button>
      </>
   )
}



