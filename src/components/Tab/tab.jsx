import React, { use } from 'react'

import s from './tab.module.scss'
import classNames from 'classnames'
import { ThemeContext } from '../ThemeContext'
import { NavLink } from 'react-router'

export const Tab = ({
   to,
   name
}) => {
   const { theme } = use(ThemeContext)

   return (
      <NavLink to={to}
         className={({ isActive }) => classNames(s.tab, {
            [s.active]: isActive,
            [s.dark]: theme === "dark",
            [s.light]: theme === "light",
         })}
      >
         {name}
      </NavLink>
   )
}
