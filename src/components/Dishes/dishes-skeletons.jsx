import React from 'react'
import s from './dishes.module.scss'

export const DishesSkeletons = ({ quantity }) => {
  return (
    <div className={s.skeletons}>
      {quantity.map((index) => (
        <div key={index} className={s.skeleton} />
      ))}
    </div>
  )
}