import React from 'react'

import { RestaurantsFilters, RestaurantsFiltersSkeletons } from '../../components/RestaurantsFilters'
import { Outlet } from 'react-router';

import { useGetRestaurantsQuery } from '../../redux/services/api';


export const RestaurantsPage = () => {
   const { data, isLoading, isError } = useGetRestaurantsQuery()

   if (isLoading) {
      return <RestaurantsFiltersSkeletons quantity={4} />
   }

   if (isError) {
      return 'Ошибка! Рестораны не появятся.'
   }

   return (
      <>
         <RestaurantsFilters restaurantsData={data} />
         <Outlet />
      </>
   )
}
