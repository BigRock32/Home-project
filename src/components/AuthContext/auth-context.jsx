import React from 'react'

import { AuthContext as AuthContextProvider } from '.'

import { useAuth } from './use-auth'

export const AuthContext = ({ children }) => {
   const { state, login, logout } = useAuth()
   const { auth, user } = state

   return (
      <AuthContextProvider value={{ auth, user, login, logout }}>
         {children}
      </AuthContextProvider>
   )
}
