import { useReducer } from 'react'

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

   const setAuth = (auth) => dispatch({ type: SET_AUTH_ACTION, payload: auth })
   const setUser = (user) => dispatch({ type: SET_USER_ACTION, payload: user })

   return {
      state,
      setAuth,
      setUser
   }
}
