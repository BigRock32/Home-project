'use client'

import React from 'react'

import { AuthContext as AuthContextProvider } from '.'

import { useAuth } from './use-auth'

export const AuthContext = ({ children }) => {
   const { state, login, register, logout } = useAuth()
   const { auth, user, isLoading } = state

   return (
      <AuthContextProvider value={{ auth, user, login, register, logout, isLoading }}>
         {children}
      </AuthContextProvider>
   )
}
