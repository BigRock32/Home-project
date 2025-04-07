import React from 'react'
import { BaseLink } from '../../components/BaseLink/base-link'

export const HomePage = () => {
   return (
      <div>
         <h1>
            HomePage
         </h1>
         <BaseLink to='/restaurants'>restaurants</BaseLink>
      </div>
   )
}
