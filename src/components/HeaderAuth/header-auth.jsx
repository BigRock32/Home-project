import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from '../AuthContext'
import { ThemeContext } from '../ThemeContext'
import { Button } from '../Button/button'
import { CartTotal } from '../CartTotal'
import { BaseLink } from '../BaseLink/base-link'
import classNames from 'classnames'
import s from './header-auth.module.scss'

export const HeaderAuth = () => {
   const router = useRouter()
   const { auth, user, logout } = useContext(AuthContext)
   const { theme } = useContext(ThemeContext)

   const handleLogout = () => {
      logout()
      router.push('/')
   }

   return (
      <>
         {auth ? (
            <>
               <Button onClick={handleLogout}>Выйти</Button>
               <div className={classNames(s.userName, {
                  [s.light]: theme === 'light',
                  [s.dark]: theme === 'dark'
               })}>
                  {user.name}
               </div>
               <CartTotal />
            </>
         ) : (
            <BaseLink to="/auth/login">
               <Button>Войти</Button>
            </BaseLink>
         )}
      </>
   )
}
