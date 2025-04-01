import React, { use } from 'react'

import s from './tab.module.scss'
import classNames from 'classnames'
import { ThemeContext } from '../ThemeContext'

export const Tab = ({
   id,
   name,
   activeTab,
   setActiveTab
}) => {
   const { theme } = use(ThemeContext)

   return (
      <div
         className={classNames(s.tab, {
            [s.active]: activeTab === id,
            [s.dark]: theme === "dark",
            [s.light]: theme === "light",
         })}
         onClick={() => setActiveTab(id)}
      >
         {name}
      </div>
   )
}
