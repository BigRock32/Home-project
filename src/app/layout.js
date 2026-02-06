


import '../App.css'
import { AuthContext } from '../components/AuthContext/auth-context'
import { ThemeContext } from '../components/ThemeContext/theme-context'
import { Layout } from '../components/Layout'
import StoreProvider from './StoreProvider'

export const metadata = {
  title: 'Next js app',
  description: 'Mega Next js app turbo'
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <StoreProvider>
          <AuthContext>
            <ThemeContext>
              <Layout>
                {children}
              </Layout>
            </ThemeContext>
          </AuthContext>
        </StoreProvider>
      </body>
    </html>
  )
}

export default RootLayout
