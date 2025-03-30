import { useReducer } from 'react'
import { userData } from '../../constants/auth'

const DEFAULT_AUTH_STATE = {
   auth: false,
   user: {}
}

const LOGIN_ACTION = 'LOGIN_ACTION'
const LOGOUT_ACTION = 'LOGOUT_ACTION'

const reducer = (state, { type, payload }) => {
   switch (type) {
      case LOGIN_ACTION:
         return { auth: true, user: payload }
      case LOGOUT_ACTION:
         return { auth: false, user: {} }
      default:
         return state
   }
}

export const useAuth = () => {
   const [state, dispatch] = useReducer(reducer, DEFAULT_AUTH_STATE)

   const login = () => dispatch({ type: LOGIN_ACTION, payload: userData })
   const logout = () => dispatch({ type: LOGOUT_ACTION })

   return {
      state,
      login,
      logout
   }
}
