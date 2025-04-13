import React from 'react'

import { RestaurantsFilters, RestaurantsFiltersSkeletons } from '../../components/RestaurantsFilters'
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../../redux/entities/restaurants/slice';
import { Outlet } from 'react-router';

import { getRestaurants } from '../../redux/entities/restaurants/get-restaurants'
import { useRequest } from '../../redux/hooks/use-request';


export const RestaurantsPage = () => {
   const requestStatus = useRequest(getRestaurants)

   const restaurantsIds = useSelector(selectRestaurantsIds)

   const isLoading =
      requestStatus === 'idle' || requestStatus === 'pending'

   const isError =
      requestStatus === 'rejected'

   if (isLoading) {
      return <RestaurantsFiltersSkeletons quantity={4} />
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
