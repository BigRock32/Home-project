import React from 'react'

export const Reviews = ({reviews}) => {
   return (
      <>
         <h3>Отзывы</h3>
         <ul>
            {reviews.map((review) => (
               <li key={review.id}>
                  <h4>{review.user}</h4>
                  {review.text}
               </li>
            ))}
         </ul>
      </>
   )
}