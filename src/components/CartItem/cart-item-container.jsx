import React from 'react'
import { CartItem } from './cart-item'
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/slice';
import { selectAmountByRestaurantId } from '../../redux/entities/cart/slice';

export const CartItemContainer = ({ id }) => {
   const amount = useSelector((state) => selectAmountByRestaurantId(state, id));
   const dish = useSelector((state) => selectDishById(state, id))

   return (
      <CartItem id={id} amount={amount} name={dish.name} />
   )
}
