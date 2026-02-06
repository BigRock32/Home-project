import React from 'react'
import { Dishes, DishesSkeletons } from '../../Dishes'
import { useGetDishesByRestaurantIdQuery } from '../../../redux/services/api'

export const MenuPage = ({ restaurantId }) => {
   const { data, isLoading, isError } = useGetDishesByRestaurantIdQuery(restaurantId)

   if (isLoading) {
      return <DishesSkeletons quantity={4} />
   }

   if (isError) {
      return 'Ошибка! Меню не появится.'
   }

   return (
      <Dishes dishesData={data} />
   )
}
