import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'


export const Layout = ({ children }) => {
   return (
      <div>
         <Header />
         <section className='section'>
            <div className="container">
               {children}
            </div>
         </section>
         <Footer />
      </div>
   )
}
