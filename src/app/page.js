'use client'

import StoreProvider from './StoreProvider'
import { HomePage } from '../components/pages/HomePage/home-page'

const Page = () => {
   return (
      <StoreProvider>
         <HomePage />
      </StoreProvider>
   )
}

export default Page

