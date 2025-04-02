import React from 'react'

export const Review = ({ name, text }) => {
   return (
      <>
         <h4>{name}</h4>
         {text}
      </>
   )
}
