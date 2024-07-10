import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HomePage } from './HomePage'

jest.mock('../../Header', () => ({
  Header: ({ user, onLogin, onLogout, onCreateAccount }: any) => (
    <div>
      {user ? (
        <>
          <span>Welcome, {user.name}!</span>
          <button onClick={onLogout}>Log out</button>
        </>
      ) : (
        <>
          <button onClick={onLogin}>Log in</button>
          <button onClick={onCreateAccount}>Sign up</button>
        </>
      )}
    </div>
  ),
}))

describe('HomePage should', () => {
  test('render header and page content', () => {
    render(<HomePage />)

    expect(screen.getByText('Log in')).toBeInTheDocument()
    expect(screen.getByText('Sign up')).toBeInTheDocument()

    expect(screen.getByText('Pages in Storybook')).toBeInTheDocument()

    expect(
      screen.getByText(/We recommend building UIs with a/i),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        /process starting with atomic components and ending with pages/i,
      ),
    ).toBeInTheDocument()
  })

  test('log in the user and displays the welcome message', () => {
    render(<HomePage />)

    fireEvent.click(screen.getByText('Log in'))

    expect(screen.getByText('Welcome, Jane Doe!')).toBeInTheDocument()
    expect(screen.getByText('Log out')).toBeInTheDocument()
  })

  test('log out the user and displays login and sign up buttons', () => {
    render(<HomePage />)

    fireEvent.click(screen.getByText('Log in'))
    fireEvent.click(screen.getByText('Log out'))

    expect(screen.getByText('Log in')).toBeInTheDocument()
    expect(screen.getByText('Sign up')).toBeInTheDocument()
  })

  test('create a new account and displays the welcome message', () => {
    render(<HomePage />)

    fireEvent.click(screen.getByText('Sign up'))

    expect(screen.getByText('Welcome, Jane Doe!')).toBeInTheDocument()
    expect(screen.getByText('Log out')).toBeInTheDocument()
  })
})
