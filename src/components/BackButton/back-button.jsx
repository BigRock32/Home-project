'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import s from './back-button.module.scss'

export const BackButton = ({ to, label = 'Назад' }) => {
   const router = useRouter()

   const handleClick = () => {
      if (to) {
         router.push(to)
      } else {
         router.back()
      }
   }

   return (
      <button className={s.button} onClick={handleClick}>
         <span className={s.icon}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
         </span>
         {label}
      </button>
   )
}

