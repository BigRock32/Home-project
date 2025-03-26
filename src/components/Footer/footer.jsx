import React from 'react'
import s from './footer.module.scss'

export const Footer = () => {
   return (
      <footer className={s.footer}>
         <div className="container">
            <div className={s.footer__wrapper}>
               Footer
            </div>
         </div>
      </footer>
   )
}