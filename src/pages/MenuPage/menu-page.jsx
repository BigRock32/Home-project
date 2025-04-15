import React from 'react'
import { Dishes, DishesSkeletons } from '../../components/Dishes'
import { useParams } from 'react-router'
import { useGetDishesByRestaurantIdQuery } from '../../redux/services/api'

export const MenuPage = () => {
   const { restaurantId } = useParams()

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
