import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, selectAmountByRestaurantId } from '../redux/entities/cart/slice'

export const useCounter = (id) => {
   const dispatch = useDispatch()

   const counterValue = useSelector((state) => selectAmountByRestaurantId(state, id)) || 0

   const incrementCounter = () => {
      dispatch(addToCart(id)), [dispatch, id]
   }

   const decrementCounter = () => {
      dispatch(removeFromCart(id)), [dispatch, id]
   }

   return {
      counterValue,
      incrementCounter,
      decrementCounter
   }

}