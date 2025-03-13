import React from 'react'

import { Restaurant } from '../Restaurant'
import { RestaurantsFilters } from '../RestaurantsFilters'
import { useState } from 'react';
import { restaurants } from '../../materials/mock';


export const RestaurantsPage = () => {
   const [activeRestaurantId, setActiveRestaurantId] = useState(restaurants[0].id);

   return (
      <>
         <RestaurantsFilters activeRestaurantId={activeRestaurantId} setActiveRestaurantId={setActiveRestaurantId} />
         <Restaurant activeRestaurantId={activeRestaurantId} setActiveRestaurantId={setActiveRestaurantId} />
      </>
   )
}
