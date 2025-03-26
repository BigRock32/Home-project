
import './App.css'
import { AuthContext } from './components/AuthContext/auth-context';
import { Layout } from './components/Layout'
import { RestaurantsPage } from './components/RestaurantsPage';
import { ThemeContext } from './components/ThemeContext/theme-context';

function App() {
  return (
    <AuthContext>
      <ThemeContext>
        <Layout>
          <RestaurantsPage />
        </Layout>
      </ThemeContext>
    </AuthContext>
  )
}

export default App