import React from 'react'
import { CartItemContainer } from '../CartItem/cart-item-container'

export const Cart = ({ items }) => {

   return (
      <ul>
         {items.map(({ id, amount }) => (
            <CartItemContainer key={id} id={id} amount={amount} />
         ))}
      </ul>
   )
}
