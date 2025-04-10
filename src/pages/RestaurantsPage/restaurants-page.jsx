import React from 'react'

import { RestaurantsFilters } from '../../components/RestaurantsFilters'
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../../redux/entities/restaurants/slice';
import { Outlet } from 'react-router';

import { getRestaurants } from '../../redux/entities/restaurants/get-restaurants'
import { useRequest } from '../../redux/hooks/use-request';


export const RestaurantsPage = () => {
   const requestStatus = useRequest(getRestaurants)

   console.log(requestStatus);

   const restaurantsIds = useSelector(selectRestaurantsIds)

   const isLoading =
      requestStatus === 'idle' || requestStatus === 'pending'

   const isError =
      requestStatus === 'rejected'

   if (isLoading) {
      return 'Рестораны скоро появятся...'
   }

   if (isError) {
      return 'Ошибка! Рестораны не появятся.'
   }

   return (
      <>
         <RestaurantsFilters restaurantsIds={restaurantsIds} />
         <Outlet />
      </>
   )
}
