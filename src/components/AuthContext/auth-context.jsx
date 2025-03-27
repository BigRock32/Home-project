import React from 'react'

import { AuthContext as AuthContextProvider } from '.'

import { userData } from '../../constants/auth'
import { useAuth } from '../../hooks/use-auth'

export const AuthContext = ({ children }) => {
   const { state, setAuth, setUser } = useAuth()
   const { auth, user } = state

   const toggleAuth = () => {
      if (state.auth) {
         setAuth(false)
         setUser({})
      } else {
         setAuth(true)
         setUser(userData)
      }
   }

   return (
      <AuthContextProvider value={{ auth, user, toggleAuth }}>
         {children}
      </AuthContextProvider>
   )
}
