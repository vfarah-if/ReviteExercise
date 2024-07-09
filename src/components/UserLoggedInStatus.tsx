import React from 'react'

type UserLoggedInStatusProps = { isLoggedIn?: boolean | undefined | null }

export function UserLoggedInStatus({ isLoggedIn }: UserLoggedInStatusProps) {
  return (
    <div id="logged-in-status">
      <b>Logged in: </b>
      <span>{String(isLoggedIn ?? 'Unknown')}</span>
    </div>
  )
}
