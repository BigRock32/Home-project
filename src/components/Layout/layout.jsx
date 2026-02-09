'use client'

import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { ProgressBar } from '../ProgressBar'

import s from './layout.module.scss'


export const Layout = ({ children }) => {
   return (
      <div className={s.wrapper}>
         <ProgressBar />
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
