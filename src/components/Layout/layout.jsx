'use client'

import React, { useContext } from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { ProgressBar } from '../ProgressBar'
import { CartContainer } from '../Cart/cart-container'
import { AuthContext } from '../AuthContext'

import s from './layout.module.scss'


export const Layout = ({ children }) => {
   const { auth } = useContext(AuthContext)

   return (
      <div className={s.wrapper}>
         <ProgressBar />
         <Header />
         <section className='section'>
            <div className="container">
               {children}
               {auth && <CartContainer />}
            </div>
         </section>
         <Footer />
      </div>
   )
}
