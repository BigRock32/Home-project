import React from 'react'
import { ReviewForm } from '../ReviewForm'

export const Reviews = ({ reviews }) => {
   return (
      <>
         <h3>Отзывы</h3>
         <ul>
            {reviews.map(({ id, user, text }) => (
               <li key={id}>
                  <h4>{user}</h4>
                  {text}
               </li>
            ))}
         </ul>

         <ReviewForm />
      </>
   )
}