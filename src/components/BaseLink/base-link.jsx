'use client'

import Link from 'next/link'

import s from './base-link.module.scss'

export const BaseLink = ({ children, to }) => {
   return (
      <Link href={to} className={s.link}>
         {children}
      </Link>
   )
}
