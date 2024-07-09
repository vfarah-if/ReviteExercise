import React from 'react'
import { UserProfile } from './components/UserProfile'

function App() {
  return (
    <div>
      <h1>Ready to start internet tut!</h1>
      <UserProfile
	  	
        age={null}
        isLoggedIn={null}
        favouriteFoods={['Sushi', 'Pizza']}
      />
    </div>
  )
}

export default App
