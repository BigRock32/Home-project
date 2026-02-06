import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { ThemeContext } from '../ThemeContext'
import { Button } from '../Button/button'
import { CartTotal } from '../CartTotal'
import classNames from 'classnames'
import s from './header-auth.module.scss'

export const HeaderAuth = () => {
   const { auth, user, login, logout } = useContext(AuthContext)
   const { theme } = useContext(ThemeContext)

   return (
      <>
         <Button onClick={auth ? logout : login}>
            {auth ? 'Выйти' : 'Войти'}
         </Button>
         {auth && <div className={classNames(s.userName, {
            [s.light]: theme === 'light',
            [s.dark]: theme === 'dark'
         })}>
            {user.name}
         </div>}
         {auth && <CartTotal />}
      </>
   )
}
