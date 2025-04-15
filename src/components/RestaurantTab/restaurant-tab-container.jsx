import React from 'react'
import { Tab } from '../Tab'

export const RestaurantTabContainer = ({ id, name }) => {

   if (!name) {
      return null
   }

   return (
      <Tab
         to={id}
         name={name}
      />
   )
}
