import { useReducer } from 'react'
import { userData } from '../../constants/auth'

const DEFAULT_AUTH_STATE = {
   auth: false,
   user: {}
}

const SET_AUTH_ACTION = 'SET_AUTH_ACTION'
const SET_USER_ACTION = 'SET_USER_ACTION'


const reducer = (state, { type, payload }) => {
   switch (type) {
      case SET_AUTH_ACTION:
         return { ...state, auth: payload }
      case SET_USER_ACTION:
         return { ...state, user: payload }
      default:
         return state
   }
}

export const useAuth = () => {
   const [state, dispatch] = useReducer(reducer, DEFAULT_AUTH_STATE)

   const login = () => {
      dispatch({ type: SET_AUTH_ACTION, payload: true })
      dispatch({ type: SET_USER_ACTION, payload: userData })
   }

   const logout = () => {
      dispatch({ type: SET_AUTH_ACTION, payload: false })
      dispatch({ type: SET_USER_ACTION, payload: {} })
   }

   return {
      state,
      login,
      logout
   }
}
