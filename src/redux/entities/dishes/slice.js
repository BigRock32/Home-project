import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./get-dishes";

const entityAdapter = createEntityAdapter()

export const dishesSlice = createSlice({
   name: 'dishesSlice',
   initialState: entityAdapter.getInitialState(),

   extraReducers: (builder) =>
      builder
         .addCase(getDishes.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload)
         })
})



export const { selectRequestStatus } = dishesSlice.selectors

const selectDishesSlice = (state) => state.dishesSlice

export const {
   selectById: selectDishById,
   selectIds: selectDishesIds
} = entityAdapter.getSelectors(selectDishesSlice)