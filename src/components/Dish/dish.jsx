import React, { use } from 'react'
import { DishCounter } from '../DishCounter/dish-counter'
import { AuthContext } from '../AuthContext'


export const Dish = ({ name, id }) => {
   const { auth } = use(AuthContext)

   return (
      <li>
         {name}
         {auth && <DishCounter id={id}  />}
      </li>
   )
}
