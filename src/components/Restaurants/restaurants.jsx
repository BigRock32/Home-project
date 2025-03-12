import React from 'react'
import { restaurants } from '../../materials/mock'
import { Reviews } from '../Reviews'
import { Menu } from '../Menu'


export const Restaurants = ({ activeRestaurant }) => {

   return (
      <div className='restaurants'>
         {
            restaurants.map(({ id, name, menu, reviews }) => (
               id === activeRestaurant ? (
                  <div className='restaurants__item' key={id}>
                     <h2>{name}</h2>
                     <Menu menu={menu} />
                     <Reviews reviews={reviews} />
                     <div className="divider" />
                  </div>) :
                  (
                     <div>Сейчас нет доступных ресторанов</div>
                  )
            )
            )}

      </div>
   )
}