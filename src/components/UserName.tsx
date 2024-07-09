import React from 'react'

type UserNameProps = {
  userName: string | null | undefined
}

export function UserName({ userName }: UserNameProps) {
  return (
    <div id="user-name">
      <b>UserName: </b>
      <span>{userName ?? 'John Doe'}</span>
    </div>
  )
}
