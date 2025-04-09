import React from 'react'
import s from './tabs.module.scss'

export const Tabs = ({ children }) => {
   return (
      <div className={s.tabs}>{children}</div>
   )
}
