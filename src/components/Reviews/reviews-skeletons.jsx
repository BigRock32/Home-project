import React from 'react'
import s from './reviews.module.scss'

export const ReviewsSkeletons = ({ quantity }) => {
  return (
    <div className={s.skeletons}>
      {quantity.map((index) => (
        <div key={index} className={s.skeleton} />
      ))}
    </div>
  )
}