import React from 'react'
import { User } from './user'
import { useGetUsersQuery } from '../../redux/services/api'

export const UserContainer = ({ id }) => {
   const { data } = useGetUsersQuery(undefined, {
      selectFromResult: (result) => ({
         ...result,
         data: result.data?.find(({ id: userId }) => userId === id)
      })
   })

   if (!data) {
      return
   }

   const { name } = data

   return (
      <User name={name} />
   )
}
