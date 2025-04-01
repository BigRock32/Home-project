import React from 'react'

export const Review = ({ name, text }) => {
   return (
      <li>
         <h4>{name}</h4>
         {text}
      </li>
   )
}
