import React from 'react'
import { UserProfile } from './components/UserProfile'

type UserStatus = 'VERIFIED' | 'DISABLED' | null

function App() {
  const userStatus: UserStatus = 'VERIFIED'
  // Conditional Operator
  if (userStatus === 'VERIFIED') {
    return (
      <div>
        <h1>Ready to start internet tut!</h1>
        <UserProfile
          username="Jane Doe"
          age={null}
          isLoggedIn={null}
          favouriteFoods={['Sushi', 'Pizza']}
        />
      </div>
    )
  } else if (userStatus === 'DISABLED') {
    return (
      <div id="disabled">
        <span>Your account has been disabled!</span>
      </div>
    )
  } else {
    return (
      <div id="not-verified">
        <span>You are not verified. Please verify yourself!</span>
      </div>
    )
  }
}

export default App
