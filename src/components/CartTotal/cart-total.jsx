'use client'

import { useState } from 'react'
import s from './cart-total.module.scss'
import { selectTotalItemsInCart } from '../../redux/entities/cart/slice'
import { useSelector } from 'react-redux'
import { CartModal } from '../CartModal'

export const CartTotal = () => {
   const total = useSelector(selectTotalItemsInCart)
   const [isModalOpen, setIsModalOpen] = useState(false)

   const handleCartClick = () => {
      setIsModalOpen(true)
   }

   const handleCloseModal = () => {
      setIsModalOpen(false)
   }

   return (
      <>
         <div className={s.wrapper} onClick={handleCartClick} style={{ cursor: 'pointer' }}>
            {total > 0 && <div className={s.amount}>{total}</div>}
            <img className={s.icon} src="/cart.svg" alt="cart" />
         </div>
         <CartModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </>
   )
}
