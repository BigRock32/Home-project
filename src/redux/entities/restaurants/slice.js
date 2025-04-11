import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants";

export const entityAdapter = createEntityAdapter()

export const restaurantSlice = createSlice({
   name: 'restaurantSlice',
   initialState: entityAdapter.getInitialState(),

   extraReducers: (builder) =>
      builder
         .addCase(getRestaurants.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload)
         })
})

export const { selectRequestStatus } = restaurantSlice.selectors

const selectRestaurantsSlice = (state) => state.restaurantSlice

export const {
   selectIds: selectRestaurantsIds,
   selectById: selectRestaurantById,
   selectTotal: selectRestaurantsTotal
} = entityAdapter.getSelectors(selectRestaurantsSlice)