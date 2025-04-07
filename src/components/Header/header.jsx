import React, { use } from 'react'
import s from './header.module.scss'
import { ToggleTheme } from '../ToggleTheme/toggle-theme'
import { HeaderAuth } from '../HeaderAuth'
import { BaseLink } from '../BaseLink/base-link'

export const Header = () => {
   return (
      <header>
         <div className="container">
            <div className={s.headerWrapper}>
               Header
               <div className={s.headerNav}>
                  <BaseLink to='/'>Главная</BaseLink>
                  <BaseLink to='/restaurants'>Рестораны</BaseLink>
               </div>
               <div className={s.headerRight}>
                  <ToggleTheme />
                  <HeaderAuth />
               </div>
            </div>
         </div>
      </header>
   )
}