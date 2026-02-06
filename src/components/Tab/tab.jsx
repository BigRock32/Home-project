'use client'

import React, { useContext } from 'react'

import s from './tab.module.scss'
import classNames from 'classnames'
import { ThemeContext } from '../ThemeContext'
import Link from 'next/link'

export const Tab = ({
   to,
   name
}) => {
   const { theme } = useContext(ThemeContext)

   return (
      <Link href={to}>
         <p
            className={classNames(s.tab, {
               [s.active]: true,
               [s.dark]: theme === "dark",
               [s.light]: theme === "light",
            })}>

            {name}
         </p>
      </Link>
   )
}
