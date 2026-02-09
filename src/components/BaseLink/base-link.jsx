'use client'

import Link from 'next/link'
import classNames from 'classnames'

import s from './base-link.module.scss'

export const BaseLink = ({ children, to, className }) => {
   return (
      <Link href={to} className={classNames(s.link, className)}>
         {children}
      </Link>
   )
}
