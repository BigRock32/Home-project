import React from 'react'
import s from './dishes.module.scss'

export const DishesSkeletons = ({ quantity }) => {
  const quantityArray = new Array(quantity).fill()

  return (
    <div className={s.skeletons}>
      {quantityArray.map((_, index) => (
        <div key={index} className={s.skeleton} />
      ))}
    </div>
  )
}