import React from 'react'

type UserAgeProps = {
  age: number | null | undefined
}

export default function UserAge({ age }: UserAgeProps) {
  return (
    <div id="user-age">
      <b>Age: </b>
      <span>{age ?? 'Not given'}</span>
    </div>
  )
}
