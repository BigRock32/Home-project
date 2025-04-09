import React from 'react'
import { Dish } from './dish.jsx'
import { selectDishById } from '../../redux/entities/dishes/slice.js';
import { useSelector } from 'react-redux';

export const DishContainer = ({ id }) => {
   const dish = useSelector((state) => selectDishById(state, id))

   return (
      <Dish dish={dish} id={id} />
   )
}
