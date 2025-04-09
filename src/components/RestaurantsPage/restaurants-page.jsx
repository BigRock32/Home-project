import React from 'react'

import { RestaurantsFilters } from '../RestaurantsFilters'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../../redux/entities/restaurant/slice';
import { RestaurantContainer } from '../Restaurant';


export const RestaurantsPage = () => {
   const restaurantsIds = useSelector(selectRestaurantsIds)
   const [activeRestaurantId, setActiveRestaurantId] = useState(restaurantsIds[0]);

   return (
      <>
         <RestaurantsFilters restaurantsIds={restaurantsIds} activeRestaurantId={activeRestaurantId} setActiveRestaurantId={setActiveRestaurantId} />
         {
            activeRestaurantId && (
               <RestaurantContainer id={activeRestaurantId} />
            )
         }
      </>
   )
}
