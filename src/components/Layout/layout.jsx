import React, { use } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { ProgressBar } from '../ProgressBar'
import { CartContainer } from '../Cart/cart-container'
import { Outlet } from 'react-router'
import { AuthContext } from '../AuthContext'

import s from './layout.module.scss'


export const Layout = () => {
   const { auth } = use(AuthContext)

   return (
      <div className={s.wrapper}>
         <ProgressBar />
         <Header />
         <section className='section'>
            <div className="container">
               <Outlet />
               {auth && <CartContainer />}
            </div>
         </section>
         <Footer />
      </div>
   )
}
