'use client'

import React from 'react'

import { RestaurantsFilters, RestaurantsFiltersSkeletons } from '../../RestaurantsFilters'
import { useGetRestaurantsQuery } from '../../../redux/services/api';


export const RestaurantsPage = () => {
   const { data, isLoading, isError } = useGetRestaurantsQuery()

   if (isLoading) {
      return <RestaurantsFiltersSkeletons quantity={4} />
   }

   if (isError) {
      return 'Ошибка! Рестораны не появятся.'
   }

   if (!data) {
      return <RestaurantsFiltersSkeletons quantity={4} />
   }

   return (
      <RestaurantsFilters restaurantsData={data} />
   )
}
