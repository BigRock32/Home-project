import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./get-reviews";

export const entityAdapter = createEntityAdapter()

export const reviewsSlice = createSlice({
   name: 'reviewsSlice',
   initialState: entityAdapter.getInitialState(),

   extraReducers: (builder) =>
      builder
         .addCase(getReviews.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload)
         })
})

export const { selectRequestStatus } = reviewsSlice.selectors

const selectReviewsSlice = (state) => state.reviewsSlice

export const {
   selectById: selectReviewById,
   selectIds: selectReviewsIds
} = entityAdapter.getSelectors(selectReviewsSlice)