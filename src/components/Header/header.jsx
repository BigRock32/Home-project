import React, { use } from 'react'
import s from './header.module.scss'
import { ToggleTheme } from '../ToggleTheme/toggle-theme'
import { HeaderAuth } from '../HeaderAuth'

export const Header = () => {
   return (
      <header className={s.header}>
         <div className="container">
            <div className={s.header__wrapper}>
               Header
               <div className={s.header__right}>
                  <ToggleTheme />
                  <HeaderAuth />
               </div>
            </div>
         </div>
      </header>
   )
}