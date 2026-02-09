'use client'

import React from 'react'

import s from './restaurant.module.scss'
import { Tabs } from '../Tabs/tabs'
import { Tab } from '../Tab'
import { BackButton } from '../BackButton'
import { useGetRestaurantsQuery } from '../../redux/services/api'
import { useParams } from 'next/navigation'

export const Restaurant = () => {
   const params = useParams()
   const { restaurantId: id } = params

   const { data } = useGetRestaurantsQuery(undefined, {
      selectFromResult: (result) => ({
         ...result,
         data: result.data?.find(({ id: restaurantId }) => restaurantId === id)
      })
   })

   const basePath = `/restaurants/${id}`

   return (
      <div className={s.restaurant}>
         <BackButton to="/restaurants" label="К списку ресторанов" />
         <h2>{data?.name}</h2>

         <Tabs>
            <Tab to={`${basePath}/menu`} name='Меню' />
            <Tab to={`${basePath}/reviews`} name='Отзывы' />
         </Tabs>

      </div>

   )
}
