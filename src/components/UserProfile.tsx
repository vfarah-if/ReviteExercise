import React from 'react'
import { UserFavouriteFoods } from './UserFavouriteFoods'
import { UserName } from './UserName'
import { UserLoggedInStatus } from './UserLoggedInStatus'
import UserAge from './UserAge'

type UserProfileProps = {
  username: string | null | undefined
  age: number | null | undefined
  isLoggedIn: boolean | null | undefined
  favouriteFoods: Array<string> | null | undefined
}

export const UserProfile = ({
  age,
  isLoggedIn,
  favouriteFoods,
  username,
}: UserProfileProps) => {
  return (
    <div id="user-profile">
      <UserName userName={username} />
      <UserAge age={age} />
      {/* Logical Operator */}
      {favouriteFoods && <UserFavouriteFoods favouriteFoods={favouriteFoods} />}
      <UserLoggedInStatus isLoggedIn={isLoggedIn} />
    </div>
  )
}
