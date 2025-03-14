import React from 'react'
import { restaurants } from '../../materials/mock'


export const RestaurantsFilters = ({ activeRestaurantId, setActiveRestaurantId }) => {

  return (
    <div className='filters'>
      {restaurants.map(({ id, name }) => (
        <div
          key={id}
          className={`filters__item
            ${activeRestaurantId === id ? "filters__item_active" : "filters__item"
            }`}
          onClick={() => setActiveRestaurantId(id)}
        >
          {name}
        </div>
      ))}
    </div>
  )
}