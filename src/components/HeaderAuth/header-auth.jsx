import React, { use } from 'react'
import { AuthContext } from '../AuthContext'

import s from './header-auth.module.scss'

export const HeaderAuth = () => {
   const { auth, user, toggleAuth } = use(AuthContext)

   return (
      <>
         <div className={s.btn} onClick={toggleAuth}>
            {auth ? 'Выйти' : 'Войти'}
         </div>
         {auth && <div>
            {user.name}
         </div>}
      </>
   )
}
