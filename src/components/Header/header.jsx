import React, { use } from 'react'
import s from './header.module.scss'
import { ToggleTheme } from '../ToggleTheme/toggle-theme'
import { AuthContext } from '../AuthContext'

export const Header = () => {
   const { auth, user, toggleAuth } = use(AuthContext)

   return (
      <header className={s.header}>
         <div className="container">
            <div className={s.header__wrapper}>
               Header
               <div className={s.header__right}>
                  <ToggleTheme />
                  <div className={s.loginBtn} onClick={toggleAuth}>
                     {auth ? 'Выйти' : 'Войти'}
                  </div>
                  {auth && <div>
                     {user.name}
                  </div>}
               </div>
            </div>
         </div>
      </header>
   )
}