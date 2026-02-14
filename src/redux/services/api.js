import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
   baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
   prepareHeaders: (headers) => {
      const token = localStorage.getItem('authToken');
      if (token) {
         headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
   },
});

export const api = createApi({
   reducerPath: 'api',
   baseQuery,
   tagTypes: ['reviews'],
   endpoints: (builder) => ({
      getRestaurants: builder.query({
         query: () => '/restaurants',
      }),
      getUsers: builder.query({
         query: () => '/users',
      }),
      getReviewsByRestaurantId: builder.query({
         query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
         providesTags: [{ type: 'reviews', id: 'all' }]
      }),
      addReview: builder.mutation({
         query: ({ restaurantId, review }) => ({
            url: `/review/${restaurantId}`,
            body: review,
            method: 'POST'
         }),
         invalidatesTags: [{ type: 'reviews', id: 'all' }]
      }),
      updateReview: builder.mutation({
         query: ({ reviewId, review }) => ({
            url: `/review/${reviewId}`,
            body: review,
            method: 'PATCH'
         }),
         invalidatesTags: [{ type: 'reviews', id: 'all' }]
      }),
      getDishesByRestaurantId: builder.query({
         query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
      }),
      register: builder.mutation({
         query: (credentials) => ({
            url: '/auth/register',
            method: 'POST',
            body: credentials,
         }),
      }),
      login: builder.mutation({
         query: (credentials) => ({
            url: '/auth/login',
            method: 'POST',
            body: credentials,
         }),
      }),
      getCurrentUser: builder.query({
         query: () => '/auth/me',
      }),
   })
})

export const {
   useGetRestaurantsQuery,
   useLazyGetRestaurantsQuery,
   useGetUsersQuery,
   useGetReviewsByRestaurantIdQuery,
   useAddReviewMutation,
   useUpdateReviewMutation,
   useGetDishesByRestaurantIdQuery,
   useRegisterMutation,
   useLoginMutation,
   useGetCurrentUserQuery,
   useLazyGetCurrentUserQuery,
} = api