import React from 'react'
import { selectDishById } from '../../redux/entities/dishes/slice';
import { useSelector } from 'react-redux';
import { DishListItem } from './dish-list-item';

export const DishListItemContainer = ({ id }) => {
   const dish = useSelector((state) => selectDishById(state, id))
   
   const { name } = dish

   return (
      <DishListItem name={name} id={id} />
   )
}
