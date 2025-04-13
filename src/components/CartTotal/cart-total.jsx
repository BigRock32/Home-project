import React from 'react'
import cart from '../../assets/cart.svg'
import s from './cart-total.module.scss'
import { selectTotalItemsInCart } from '../../redux/entities/cart/slice'
import { useSelector } from 'react-redux'

export const CartTotal = () => {
   const total = useSelector(selectTotalItemsInCart)

   return (
      <div className={s.wrapper}>
         <div className={s.amount}>{total}</div>
         <img className={s.icon} src={cart} alt="cart" />
      </div>
   )
}
