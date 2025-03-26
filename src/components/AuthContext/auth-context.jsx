import React, { useState } from 'react'

import { AuthContext as AuthContextProvider } from '.'

import { userData } from '../../constants/auth'

export const AuthContext = ({ children }) => {
   const [auth, setAuth] = useState(false)
   const [user, setUser] = useState({})

   const toggleAuth = () => {
      if (auth) {
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
