import React, { useContext } from 'react'

import s from './button.module.scss'
import classNames from 'classnames'
import { ThemeContext } from '../ThemeContext'

export const Button = ({
   children,
   onClick,
   type = 'button',
   disabled = false,
   className
}) => {
   const { theme } = useContext(ThemeContext)

   return (
      <button
         type={type}
         disabled={disabled}
         className={classNames(s.button, className, {
            [s.light]: theme === 'light',
            [s.dark]: theme === 'dark'
         })}
         onClick={onClick}>
         {children}
      </button>
   )
}
