import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../constants/normalized-mock";

const initialState = {
   entities: normalizedRestaurants.reduce((acc, item) => {
      acc[item.id] = item

      return acc
   }, {}),
   ids: normalizedRestaurants.map(({ id }) => id)
}

export const restaurantSlice = createSlice({
   name: 'restaurantSlice',
   initialState,
   selectors: {
      selectRestaurantById: (state, id) => state.entities[id],
      selectRestaurantsIds: (state) => state.ids
   }
})

export const { selectRestaurantById, selectRestaurantsIds } = restaurantSlice.selectors