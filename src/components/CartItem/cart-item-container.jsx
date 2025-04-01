import React from 'react'
import { CartItem } from './cart-item'
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice';

export const CartItemContainer = ({ id, amount }) => {
   const dish = useSelector((state) => selectDishById(state, id));

   return (
      <CartItem id={id} amount={amount} name={dish.name} />
   )
}
