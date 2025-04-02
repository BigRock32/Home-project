import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { ProgressBar } from '../ProgressBar'
import { Cart } from '../Cart/cart'
import { CartContainer } from '../Cart/cart-container'


export const Layout = ({ children }) => {
   return (
      <div>
         <ProgressBar />
         <Header />
         <section className='section'>
            <div className="container">
               {children}
            </div>
         </section>
         <CartContainer />
         <Footer />
      </div>
   )
}
