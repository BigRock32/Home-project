import React, { use } from 'react'
import { AuthContext } from '../AuthContext'

import s from './header-auth.module.scss'
import { CartTotal } from '../CartTotal'

export const HeaderAuth = () => {
   const { auth, user, login, logout } = use(AuthContext)

   return (
      <>
         <div className={s.button} onClick={auth ? logout : login}>
            {auth ? 'Выйти' : 'Войти'}
         </div>
         {auth && <div>
            {user.name}
         </div>}
         {auth && <CartTotal />}
      </>
   )
}
