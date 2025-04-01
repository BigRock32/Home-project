import React from 'react'
import { Dish } from './dish'
import { selectDishById } from '../../redux/entities/dishes/slice';
import { useSelector } from 'react-redux';

export const DishContainer = ({ id }) => {
   const dish = useSelector((state) => selectDishById(state, id));
   
   const { name } = dish

   return (
      <Dish name={name} id={id} />
   )
}
