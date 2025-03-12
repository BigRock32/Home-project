
import './App.css'
import { Layout } from './components/Layout'
import { Restaurants } from './components/Restaurants'
import { Filters } from './components/Filters'
import { useState } from 'react';
import { restaurants } from './materials/mock';

function App() {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0].id);

  return (
    <Layout>
      <Filters activeRestaurant={activeRestaurant} setActiveRestaurant={setActiveRestaurant} />
      <Restaurants activeRestaurant={activeRestaurant} setActiveRestaurant={setActiveRestaurant} />
    </Layout>
  )
}

export default App