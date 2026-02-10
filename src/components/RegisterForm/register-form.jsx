'use client'

import { useState, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { AuthContext } from '../AuthContext'
import { Button } from '../Button/button'
import { BaseLink } from '../BaseLink/base-link'
import s from './register-form.module.scss'

export const RegisterForm = () => {
   const router = useRouter()
   const { register, isLoading } = useContext(AuthContext)
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [name, setName] = useState('')
   const [error, setError] = useState('')

   const handleSubmit = async (e) => {
      e.preventDefault()
      setError('')

      if (!email || !password || !name) {
         setError('Please fill in all fields')
         return
      }

      if (password.length < 6) {
         setError('Password must be at least 6 characters long')
         return
      }

      const result = await register(email, password, name)

      if (result.success) {
         router.push('/restaurants')
      } else {
         setError(result.error || 'Registration failed')
      }
   }

   return (
      <div className={s.container}>
         <div className={s.formWrapper}>
            <h1 className={s.title}>Register</h1>

            <form onSubmit={handleSubmit} className={s.form}>
               {error && <div className={s.error}>{error}</div>}

               <div className={s.field}>
                  <label htmlFor="name" className={s.label}>
                     Name
                  </label>
                  <input
                     id="name"
                     type="text"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     className={s.input}
                     placeholder="Your name"
                     disabled={isLoading}
                  />
               </div>

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
                  <span className={s.hint}>At least 6 characters</span>
               </div>

               <Button type="submit" disabled={isLoading} className={s.submitButton}>
                  {isLoading ? 'Registering...' : 'Register'}
               </Button>
            </form>

            <div className={s.footer}>
               <p>
                  Already have an account?{' '}
                  <BaseLink to="/auth/login" className={s.link}>
                     Login
                  </BaseLink>
               </p>
            </div>
         </div>
      </div>
   )
}

