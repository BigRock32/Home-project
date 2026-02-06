import React, { useContext } from 'react'

import s from './button.module.scss'
import classNames from 'classnames'
import { ThemeContext } from '../ThemeContext'

export const Button = ({
   children,
   onClick
}) => {
   const { theme } = useContext(ThemeContext)

   return (
      <button
         type="button"
         className={classNames(s.button, {
            [s.light]: theme === 'light',
            [s.dark]: theme === 'dark'
         })}
         onClick={onClick}>
         {children}
      </button>
   )
}
