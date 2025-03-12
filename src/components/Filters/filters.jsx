import React from 'react'
import { restaurants } from '../../materials/mock'


export const Filters = ({ activeRestaurant, setActiveRestaurant }) => {

  return (
    <div className='filters'>
      {restaurants.map(({ id, name }) => (
        <div
          key={id}
          className={`filters__item
            ${activeRestaurant === id ? "filters__item_active" : "filters__item"
            }`}
          onClick={() => setActiveRestaurant(id)}
        >
          {name}
        </div>
      ))}
    </div>
  )
}