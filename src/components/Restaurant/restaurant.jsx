import React from 'react'
import { Dishes } from '../Dishes'
import { Reviews } from '../Reviews'

import s from './restaurant.module.scss'
import { Divider } from '../Divider'
import { Outlet } from 'react-router'
import { Tabs } from '../Tabs/tabs'
import { Tab } from '../Tab'

export const Restaurant = ({ name }) => {


   return (
      <div className={s.restaurant}>
         <h2>{name}</h2>

         <Tabs>
            <Tab to='menu' name='Меню' />
            <Tab to='reviews' name='Отзывы' />
         </Tabs>

         <Outlet />

         <Divider />
      </div>

   )
}
