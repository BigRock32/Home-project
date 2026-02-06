import React from 'react'
import { DishContainer } from '../../Dish/dish-container'

export const DishPage = ({ dishId }) => {
   return (
      <DishContainer id={dishId} />
   )
}
