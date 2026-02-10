import { useReducer, useEffect } from 'react'
import { useLoginMutation, useRegisterMutation, useLazyGetCurrentUserQuery } from '../../redux/services/api'

const DEFAULT_AUTH_STATE = {
   auth: false,
   user: {}
}

const LOGIN_ACTION = 'LOGIN_ACTION'
const LOGOUT_ACTION = 'LOGOUT_ACTION'
const SET_LOADING_ACTION = 'SET_LOADING_ACTION'

const reducer = (state, { type, payload }) => {
   switch (type) {
      case LOGIN_ACTION:
         return { auth: true, user: payload, isLoading: false }
      case LOGOUT_ACTION:
         return { auth: false, user: {}, isLoading: false }
      case SET_LOADING_ACTION:
         return { ...state, isLoading: payload }
      default:
         return state
   }
}

export const useAuth = () => {
   const [state, dispatch] = useReducer(reducer, { ...DEFAULT_AUTH_STATE, isLoading: true })
   const [loginMutation, { isLoading: isLoginLoading }] = useLoginMutation()
   const [registerMutation, { isLoading: isRegisterLoading }] = useRegisterMutation()
   const [getCurrentUser, { isLoading: isGetUserLoading }] = useLazyGetCurrentUserQuery()

   useEffect(() => {
      const checkAuth = async () => {
         const token = localStorage.getItem('authToken')
         if (token) {
            try {
               const response = await getCurrentUser().unwrap()
               if (response.user) {
                  dispatch({ type: LOGIN_ACTION, payload: response.user })
               } else {
                  localStorage.removeItem('authToken')
                  dispatch({ type: SET_LOADING_ACTION, payload: false })
               }
            } catch (error) {
               console.error('Error checking auth:', error)
               localStorage.removeItem('authToken')
               dispatch({ type: SET_LOADING_ACTION, payload: false })
            }
         } else {
            dispatch({ type: SET_LOADING_ACTION, payload: false })
         }
      }

      checkAuth()
   }, [getCurrentUser])

   const login = async (email, password) => {
      try {
         const response = await loginMutation({ email, password }).unwrap()
         localStorage.setItem('authToken', response.token)
         dispatch({ type: LOGIN_ACTION, payload: response.user })
         return { success: true }
      } catch (error) {
         return {
            success: false,
            error: error.data?.error || 'Login failed'
         }
      }
   }

   const register = async (email, password, name) => {
      try {
         const response = await registerMutation({ email, password, name }).unwrap()
         localStorage.setItem('authToken', response.token)
         dispatch({ type: LOGIN_ACTION, payload: response.user })
         return { success: true }
      } catch (error) {
         return {
            success: false,
            error: error.data?.error || 'Registration failed'
         }
      }
   }

   const logout = () => {
      localStorage.removeItem('authToken')
      dispatch({ type: LOGOUT_ACTION })
   }

   return {
      state: {
         ...state,
         isLoading: state.isLoading || isLoginLoading || isRegisterLoading || isGetUserLoading
      },
      login,
      register,
      logout
   }
}
