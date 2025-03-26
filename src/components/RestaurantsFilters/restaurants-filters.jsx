import React from 'react'
import { restaurants } from '../../constants/mock'

import s from './restaurants-filters.module.scss'
import { Tab } from '../Tab'

export const RestaurantsFilters = ({ activeRestaurantId, setActiveRestaurantId }) => {

  return (
    <div className={s.filters}>
      {restaurants.map(({ id, name }) => (
        <Tab
          key={id}
          id={id}
          name={name}
          activeTab={activeRestaurantId}
          setActiveTab={setActiveRestaurantId}
        ></Tab>
      ))}
    </div>
  )
}