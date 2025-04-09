
import { Provider } from 'react-redux';
import './App.css'
import { AuthContext } from './components/AuthContext/auth-context';
import { Layout } from './components/Layout'
import { RestaurantsPage } from './components/RestaurantsPage';
import { ThemeContext } from './components/ThemeContext/theme-context';
import { store } from './redux/store';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage/home-page';
import { RestaurantPage } from './pages/RestaurantPage/restaurant-page';
import { NotFoundPage } from './pages/NotFoundPage/not-found-page';
import { MenuPage } from './pages/MenuPage/menu-page';
import { ReviewsPage } from './pages/ReviewsPage/reviews-page';
import { DishPage } from './pages/DishPage/dish-page';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage/home-page';
import { RestaurantPage } from './pages/RestaurantPage/restaurant-page';
import { NotFoundPage } from './pages/NotFoundPage/not-found-page';
import { MenuPage } from './pages/MenuPage/menu-page';
import { ReviewsPage } from './pages/ReviewsPage/reviews-page';
import { DishPage } from './pages/DishPage/dish-page';

function App() {
  return (
    <Provider store={store}>
      <AuthContext>
        <ThemeContext>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='/restaurants' element={<RestaurantsPage />} >
                  <Route path=':restaurantId' element={<RestaurantPage />} >
                    <Route index element={<Navigate to='menu' />} />
                    <Route path='menu' element={<MenuPage />} />
                    <Route path='reviews' element={<ReviewsPage />} />
                  </Route>
                </Route>
                <Route path='/dish/:dishId' element={<DishPage />} />
              </Route>
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext>
      </AuthContext>
    </Provider>
  )
}

export default App