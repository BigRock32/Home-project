'use client'

import { useReducer, useEffect } from 'react'

const DEFAULT_FORM_VALUE = {
   text: '',
   reviewValue: 0
}

const MIN_REVIEW_VALUE = 0
const MAX_REVIEW_VALUE = 5

const SET_TEXT_ACTION = 'SET_TEXT_ACTION'
const SET_REVIEW_VALUE_ACTION = 'SET_REVIEW_VALUE_ACTION'
const SET_DEFAULT_VALUE = 'SET_DEFAULT_VALUE'
const SET_INITIAL_DATA = 'SET_INITIAL_DATA'

const reducer = (state, { type, payload }) => {
   switch (type) {
      case SET_TEXT_ACTION:
         return { ...state, text: payload }
      case SET_REVIEW_VALUE_ACTION:
         return { ...state, reviewValue: payload }
      case SET_DEFAULT_VALUE:
         return { ...DEFAULT_FORM_VALUE }
      case SET_INITIAL_DATA:
         return {
            text: payload.text ?? '',
            reviewValue: payload.rating ?? 0
         }
      default:
         return state
   }
}

export const useReviewForm = (initialData = DEFAULT_FORM_VALUE) => {

   const [form, dispatch] = useReducer(reducer, {
      text: initialData.text || '',
      reviewValue: initialData.rating || 0
   })

   useEffect(() => {
      if (initialData) {
         dispatch({ type: SET_INITIAL_DATA, payload: initialData })
      }
   }, [])

   const { reviewValue } = form

   const setText = (text) => dispatch({ type: SET_TEXT_ACTION, payload: text })
   const setRating = (reviewValue) => dispatch({ type: SET_REVIEW_VALUE_ACTION, payload: reviewValue })
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

   return {
      form,
      setText,
      setRating,
      setIncrementReview,
      setDecrementReview,
      setDefaultValue
   }
}
