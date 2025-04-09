import React from 'react'
import { Link } from 'react-router'

import s from './base-link.module.scss'

export const BaseLink = ({ children, to }) => {
   return (
      <Link to={to}>
         <div className={s.link}>
            {children}
         </div>
      </Link>
   )
}
