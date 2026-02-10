import React from 'react'

import s from './restaurants-filters.module.scss'
import { RestaurantTabContainer } from '../RestaurantTab'

export const RestaurantsFilters = ({ restaurantsData }) => {
  if (!restaurantsData || !Array.isArray(restaurantsData) || restaurantsData.length === 0) {
    return null
  }

  return (
    <div className={s.filters}>
      {restaurantsData.map(({ id, name }) => (
        <RestaurantTabContainer
          key={id} id={id} name={name}
        />
      ))}
    </div>
  )
}