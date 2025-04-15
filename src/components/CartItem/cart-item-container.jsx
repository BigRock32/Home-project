import React from 'react'
import { CartItem } from './cart-item'
import { useSelector } from 'react-redux';
import { selectAmountByRestaurantId } from '../../redux/entities/cart/slice';
import { useGetDishesByRestaurantIdQuery } from '../../redux/services/api';

export const CartItemContainer = ({ id }) => {
   const amount = useSelector((state) => selectAmountByRestaurantId(state, id));

   const { data } = useGetDishesByRestaurantIdQuery(undefined, {
      selectFromResult: (result) => ({
         ...result,
         data: result.data?.find(({ id: dishId }) => dishId === id)
      })
   })

   if (!data) {
      return
   }

   return (
      <CartItem id={id} amount={amount} name={data.name} />
   )
}
