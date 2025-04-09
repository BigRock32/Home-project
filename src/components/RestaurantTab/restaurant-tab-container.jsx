import React from 'react'
import { Tab } from '../Tab'
import { selectRestaurantById } from '../../redux/entities/restaurant/slice'
import { useSelector } from 'react-redux'

export const RestaurantTabContainer = ({ id, activeTab, setActiveTab }) => {
   const restaurant = useSelector((state) => selectRestaurantById(state, id))

   if (!restaurant) {
      return null
   }

   const { name } = restaurant

   return (
      <Tab
         id={id}
         name={name}
         activeTab={activeTab}
         setActiveTab={setActiveTab}
      />
   )
}
