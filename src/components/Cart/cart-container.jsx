import React from 'react'
import { Cart } from './cart'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../redux/entities/cart/slice'

export const CartContainer = () => {
   const items = useSelector(selectCartItems)

   if (!items.length) {
      return null
   }

   return (
      <Cart items={items} />
   )
}
