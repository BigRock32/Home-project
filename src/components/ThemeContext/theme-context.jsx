'use client'

import { useState, useEffect } from 'react'
import { ThemeContext as ThemeContextProvider } from '.'

export const ThemeContext = ({ children }) => {
   const [theme, setTheme] = useState("light")

   useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme)
   }, [theme])

   const toggleTheme = () => {
      const newTheme = theme === 'dark' ? 'light' : 'dark'
      setTheme(newTheme)
   }

   return (
      <ThemeContextProvider value={{ theme, toggleTheme }}>
         {children}
      </ThemeContextProvider>
   )
}