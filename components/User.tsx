import React from 'react'
import { User } from '../types/UserListTypes'

const User = (userProps: User) => {
  return (
    <li>
      {userProps.name} - {userProps.email}
    </li>
  )
}

export default User