import React, { useContext } from 'react'
import { Button } from '../Button/button'
import { ThemeContext } from '../ThemeContext'

export const ToggleTheme = () => {
   const { theme, toggleTheme } = useContext(ThemeContext)

   return (
      <Button onClick={toggleTheme}>
         {theme}
      </Button>
   )
}
