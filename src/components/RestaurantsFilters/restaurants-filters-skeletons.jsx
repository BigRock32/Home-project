import React from 'react'
import s from './restaurants-filters.module.scss'

export const RestaurantsFiltersSkeletons = ({ quantity }) => {
  return (
    <div className={s.skeletons}>
      {quantity.map((index) => (
        <div key={index} className={s.skeleton} />
      ))}
    </div>
  )
}
