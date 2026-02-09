'use client'

import React, { useEffect, useRef } from 'react'
import { Cart } from '../Cart/cart'
import { useSelector } from 'react-redux'
import { selectCartItemsIds } from '../../redux/entities/cart/slice'
import s from './cart-modal.module.scss'

export const CartModal = ({ isOpen, onClose }) => {
   const itemsIds = useSelector(selectCartItemsIds)
   const modalRef = useRef(null)

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose()
         }
      }

      if (isOpen) {
         document.addEventListener('mousedown', handleClickOutside)
         document.body.style.overflow = 'hidden'
      }

      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
         document.body.style.overflow = 'unset'
      }
   }, [isOpen, onClose])

   useEffect(() => {
      const handleEscape = (event) => {
         if (event.key === 'Escape') {
            onClose()
         }
      }

      if (isOpen) {
         document.addEventListener('keydown', handleEscape)
      }

      return () => {
         document.removeEventListener('keydown', handleEscape)
      }
   }, [isOpen, onClose])

   if (!isOpen) return null

   return (
      <>
         <div className={s.overlay} />
         <div className={s.modal} ref={modalRef}>
            <div className={s.header}>
               <h3 className={s.title}>Корзина</h3>
               <button className={s.closeButton} onClick={onClose} aria-label="Закрыть">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </button>
            </div>
            <div className={s.content}>
               {itemsIds.length === 0 ? (
                  <div className={s.empty}>
                     <p>Корзина пуста</p>
                  </div>
               ) : (
                  <Cart itemsIds={itemsIds} />
               )}
            </div>
         </div>
      </>
   )
}

