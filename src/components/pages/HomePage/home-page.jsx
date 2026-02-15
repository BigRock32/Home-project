import React from 'react'
import { Tab } from '../../Tab'
import s from './home-page.module.scss'

export const HomePage = () => {
   return (
      <div className={s.wrapper}>
         <h1>
            HomePage
         </h1>
         <Tab to='/restaurants' name='Restaurants'>restaurants</Tab>
      </div>
   )
}








