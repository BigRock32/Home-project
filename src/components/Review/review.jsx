import React from 'react'
import { UserContainer } from '../User'

export const Review = ({ userId, text }) => {
   return (
      <>
         <h4>
            <UserContainer id={userId} />
         </h4>
         {text}
      </>
   )
}
