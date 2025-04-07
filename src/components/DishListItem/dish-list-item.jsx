import React, { use } from 'react'
import { DishCounter } from '../DishCounter/dish-counter'
import { AuthContext } from '../AuthContext'
import { BaseLink } from '../BaseLink/base-link'


export const DishListItem = ({ name, id }) => {
   const { auth } = use(AuthContext)

   return (
      <>
         <BaseLink to={`/dish/${id}`}>
            {name}
         </BaseLink>

         {auth && <DishCounter id={id} />}
      </>
   )
}
