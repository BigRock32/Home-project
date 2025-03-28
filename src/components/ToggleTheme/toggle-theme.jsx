import React, { use } from 'react'
import { Button } from '../Button/button'
import { ThemeContext } from '../ThemeContext'

export const ToggleTheme = () => {
   const { theme, toggleTheme } = use(ThemeContext)

   return (
      <Button onClick={toggleTheme}>
         {theme}
      </Button>
   )
}
