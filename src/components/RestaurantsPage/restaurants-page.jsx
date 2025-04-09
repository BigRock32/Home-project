import React from 'react'

import { RestaurantsFilters } from '../RestaurantsFilters'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../../redux/entities/restaurant/slice';
import { Outlet } from 'react-router';


export const RestaurantsPage = () => {
   const restaurantsIds = useSelector(selectRestaurantsIds)

   return (
      <>
         <RestaurantsFilters restaurantsIds={restaurantsIds} />
         <Outlet />
      </>
   )
}
