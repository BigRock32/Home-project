import React, { use } from 'react'
import { ReviewForm } from '../ReviewForm'
import { AuthContext } from '../AuthContext'

export const Reviews = ({ reviews }) => {
   const { auth } = use(AuthContext)

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

         {auth && <ReviewForm />}
      </>
   )
}