import React from 'react'

import { Reviews } from '../../components/Reviews'
import { useParams } from 'react-router'

export const ReviewsPage = () => {
   const { restaurantId } = useParams()

   return (
      <Reviews id={restaurantId} />
   )
}
