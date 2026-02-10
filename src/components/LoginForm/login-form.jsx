'use client'

import { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from '../AuthContext'
import { Button } from '../Button/button'
import { BaseLink } from '../BaseLink/base-link'
import s from './login-form.module.scss'

export const LoginForm = () => {
   const router = useRouter()
   const { login, isLoading } = useContext(AuthContext)
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState('')

   const handleSubmit = async (e) => {
      e.preventDefault()
      setError('')

      if (!email || !password) {
         setError('Please fill in all fields')
         return
      }

      const result = await login(email, password)

      if (result.success) {
         router.push('/restaurants')
      } else {
         setError(result.error || 'Login failed')
      }
   }

   return (
      <div className={s.container}>
         <div className={s.formWrapper}>
            <h1 className={s.title}>Login</h1>

            <form onSubmit={handleSubmit} className={s.form}>
               {error && <div className={s.error}>{error}</div>}

               <div className={s.field}>
                  <label htmlFor="email" className={s.label}>
                     Email
                  </label>
                  <input
                     id="email"
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className={s.input}
                     placeholder="your@email.com"
                     disabled={isLoading}
                  />
               </div>

               <div className={s.field}>
                  <label htmlFor="password" className={s.label}>
                     Password
                  </label>
                  <input
                     id="password"
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className={s.input}
                     placeholder="••••••••"
                     disabled={isLoading}
                  />
               </div>

               <Button type="submit" disabled={isLoading} className={s.submitButton}>
                  {isLoading ? 'Logging in...' : 'Login'}
               </Button>
            </form>

            <div className={s.footer}>
               <p>
                  Don't have an account?{' '}
                  <BaseLink to="/auth/register" className={s.link}>
                     Register
                  </BaseLink>
               </p>
            </div>
         </div>
      </div>
   )
}

