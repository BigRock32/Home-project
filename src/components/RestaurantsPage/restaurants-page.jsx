import React, { useMemo } from 'react'

import { Restaurant } from '../Restaurant'
import { RestaurantsFilters } from '../RestaurantsFilters'
import { useState } from 'react';
import { restaurants } from '../../constants/mock';


export const RestaurantsPage = () => {
   const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);
   const activeRestaurant = restaurants.find((restaurant) => restaurant.id === activeRestaurantId);

   return (
      <>
         <RestaurantsFilters activeRestaurantId={activeRestaurantId} setActiveRestaurantId={setActiveRestaurantId} />
         {
            activeRestaurant && (
               <Restaurant restaurant={activeRestaurant} />
            )
         }
      </>
   )
}
