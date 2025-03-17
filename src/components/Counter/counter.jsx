import React from 'react'

export const Counter = ({ value, increment, decrement }) => {

   return (
      <div className='counter'>
         <button type="button" className='counter__btn' onClick={decrement}>-</button>
         <div className='counter__btn'>{value}</div>
         <button type="button" className='counter__btn' onClick={increment}>+</button>
      </div>
   )
}
