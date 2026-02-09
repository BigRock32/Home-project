
import s from './header.module.scss'
import { ToggleTheme } from '../ToggleTheme/toggle-theme'
import { HeaderAuth } from '../HeaderAuth'
import { BaseLink } from '../BaseLink/base-link'

export const Header = () => {
   return (
      <header>
         <div className={s.fixer}>
            <div className="container">
               <div className={s.wrapper}>
                  Header
                  <div className={s.nav}>
                     <BaseLink to='/'>Главная</BaseLink>
                     <BaseLink to='/restaurants'>Рестораны</BaseLink>
                  </div>
                  <div className={s.right}>
                     <ToggleTheme />
                     <HeaderAuth />
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}