import React from 'react'
import { DishCounter } from '../DishCounter/dish-counter';
import { BaseLink } from '../BaseLink/base-link';
import s from './cart-item.module.scss';

export const CartItem = ({ id, amount, name }) => {
   return (
      <div className={s.item}>
         <div className={s.header}>
            <BaseLink to={`/dish/${id}`} className={s.name}>
               {name}
            </BaseLink>
            <span className={s.amount}>× {amount}</span>
         </div>
         <div className={s.controls}>
            <DishCounter id={id} />
         </div>
      </div>
   )
}
