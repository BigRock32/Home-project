'use client'

import { useParams } from 'next/navigation'
import StoreProvider from '../../StoreProvider'
import { DishPage } from '../../../components/pages/DishPage/dish-page'

const DishPageWrapper = () => {
   const { dishId } = useParams()

   return (
      <StoreProvider>
         <DishPage dishId={dishId} />
      </StoreProvider>
   )
}

export default DishPageWrapper