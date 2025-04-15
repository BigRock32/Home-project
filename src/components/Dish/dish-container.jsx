import React from 'react'
import { Dish } from './dish.jsx'
import { useGetDishesByRestaurantIdQuery } from '../../redux/services/api.js'

export const DishContainer = ({ id }) => {
   const { data } = useGetDishesByRestaurantIdQuery(undefined, {
      selectFromResult: (result) => ({
         ...result,
         data: result.data?.find(({ id: dishId }) => dishId === id)
      })
   })

   if (!data) {
      return <div>Загрзука блюда</div>
   }

   return (
      <Dish dish={data} id={id} />
   )
}
