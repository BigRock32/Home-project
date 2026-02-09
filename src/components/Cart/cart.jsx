import React from 'react'
import { CartItemContainer } from '../CartItem/cart-item-container'
import s from './cart.module.scss'

export const Cart = ({ itemsIds }) => {
   return (
      <ul className={s.list}>
         {itemsIds.map((id) => (
            <li key={id}>
               <CartItemContainer id={id} />
            </li>
         ))}
      </ul>
   )
}
