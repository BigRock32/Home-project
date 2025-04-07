import React from 'react'

import s from './restaurants-filters.module.scss'
import { RestaurantTabContainer } from '../RestaurantTab'

export const RestaurantsFilters = ({ restaurantsIds }) => {

  return (
    <div className={s.filters}>
      {restaurantsIds.map((restaurantsId) => (
        <RestaurantTabContainer
          key={restaurantsId} id={restaurantsId}
        />
      ))}
    </div>
  )
}