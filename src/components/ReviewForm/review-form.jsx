import React, { useReducer } from 'react'
import { Counter } from '../Counter/counter'

const DEFAULT_FORM_VALUE = {
   name: '',
   text: '',
   reviewValue: 0
}

const MIN_REVIEW_VALUE = 0
const MAX_REVIEW_VALUE = 5

const SET_NAME_ACTION = 'SET_NAME_ACTION'
const SET_TEXT_ACTION = 'SET_TEXT_ACTION'
const SET_REVIEW_VALUE_ACTION = 'SET_REVIEW_VALUE_ACTION'
const SET_DEFAULT_VALUE = 'SET_DEFAULT_VALUE'

const reducer = (state, { type, payload }) => {
   switch (type) {
      case SET_NAME_ACTION:
         return { ...state, name: payload }
      case SET_TEXT_ACTION:
         return { ...state, text: payload }
      case SET_REVIEW_VALUE_ACTION:
         return { ...state, reviewValue: payload }
      case SET_DEFAULT_VALUE:
         return { ...DEFAULT_FORM_VALUE }
      default:
         return state
   }
}

export const ReviewForm = () => {
   const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE)

   const { name, text, reviewValue } = form

   const setName = (name) => dispatch({ type: SET_NAME_ACTION, payload: name })
   const setText = (text) => dispatch({ type: SET_TEXT_ACTION, payload: text })
   const setIncrementReview = () => {
      if (reviewValue < MAX_REVIEW_VALUE) {
         dispatch({ type: SET_REVIEW_VALUE_ACTION, payload: reviewValue + 1 })
      }
   }

   const setDecrementReview = () => {
      if (reviewValue > MIN_REVIEW_VALUE) {
         dispatch({ type: SET_REVIEW_VALUE_ACTION, payload: reviewValue - 1 })
      }
   }
   const setDefaultValue = () => dispatch({ type: SET_DEFAULT_VALUE })

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
