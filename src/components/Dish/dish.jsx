import React, { use } from 'react'
import { DishCounter } from '../DishCounter/dish-counter'
import { AuthContext } from '../AuthContext'
import { BackButton } from '../BackButton'
import s from './dish.module.scss'

export const Dish = ({ dish, id }) => {
   const { auth } = use(AuthContext)
   const { name, price, ingredients } = dish

   return (
      <div className={s.dish}>
         <BackButton />
         <h1>{name}</h1>
         <div className={s.price}>Цена: {price} ₽</div>

         <div className={s.ingredients}>
            <h3>Ингредиенты</h3>
            <ul>
               {ingredients.map((ingredient) => (
                  <li key={ingredient}>
                     {ingredient}
                  </li>
               ))}
            </ul>
         </div>
         {auth && <DishCounter id={id} />}
      </div>
   )
}
