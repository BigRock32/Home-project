import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users";

const entityAdapter = createEntityAdapter()

export const usersSlice = createSlice({
   name: "usersSlice",
   initialState: entityAdapter.getInitialState(),

   extraReducers: (builder) =>
      builder
         .addCase(getUsers.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload)
         })
})

export const { selectRequestStatus } = usersSlice.selectors

const selectUsersSlice = (state) => state.usersSlice

export const {
   selectById: selectUserById,
   selectIds: selectUsersIds,
   selectTotal: selectUsersTotal
} = entityAdapter.getSelectors(selectUsersSlice)