import React from 'react'
import { Dishes } from '../../components/Dishes'
import { useParams } from 'react-router'
import { useRequest } from '../../redux/hooks/use-request'
import { getDishes } from '../../redux/entities/dishes/get-dishes'
import { selectDishesIds } from '../../redux/entities/dishes/slice'
import { useSelector } from 'react-redux'

export const MenuPage = () => {
   const { restaurantId } = useParams()

   const requestStatus = useRequest(
      restaurantId ? getDishes : null,
      restaurantId
   )

   const dishesIds = useSelector(selectDishesIds)

   const isLoading =
      requestStatus === 'idle' || requestStatus === 'pending'

   const isError =
      requestStatus === 'rejected'


   if (isLoading) {
      return 'Меню скоро появится...'
   }

   if (isError) {
      return 'Ошибка! Меню не появится.'
   }

   return (
      <Dishes dishesIds={dishesIds} />
   )
}
