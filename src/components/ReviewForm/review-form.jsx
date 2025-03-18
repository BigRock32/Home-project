import React from 'react'
import { Counter } from '../Counter/counter'
import { useReviewForm } from '../../hooks/use-review-form'


export const ReviewForm = () => {
   const {
      form,
      setName,
      setText,
      setIncrementReview,
      setDecrementReview,
      setDefaultValue
   } = useReviewForm()

   const { name, text, reviewValue } = form

   return (
      <>
         <h4>Оставить отзыв</h4>
         <form className='form'>
            <div>Оцените этот ресторан</div>
            <Counter value={reviewValue} increment={setIncrementReview} decrement={setDecrementReview} />

            <input value={name} onChange={(e) => setName(e.target.value)} className='form__input' type="text" placeholder='имя' />
            <textarea value={text} onChange={(e) => setText(e.target.value)} className='form__input' type="text" placeholder='введите текст' />
         </form>
         <button onClick={setDefaultValue}>clear</button>
      </>
   )
}



