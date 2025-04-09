import React from 'react'
import { CartItemContainer } from '../CartItem/cart-item-container'
import { Divider } from '../Divider'

export const Cart = ({ itemsIds }) => {

   return (
      <>
         <Divider />
         <h4>Корзина:</h4>

         <ul>
            {itemsIds.map((id) => (
               <CartItemContainer key={id} id={id} />
            ))}
         </ul>
      </>
   )
}
