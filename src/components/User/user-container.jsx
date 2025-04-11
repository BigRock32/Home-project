import React from 'react'
import { User } from './user'
import { selectUserById } from '../../redux/entities/users/slice'
import { useSelector } from 'react-redux'

export const UserContainer = ({ id }) => {
   const user = useSelector((state) => selectUserById(state, id))

   return (
      <User name={user.name} />
   )
}
