import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Header } from '../Header'

jest.mock('../Button', () => ({
  Button: ({ onClick, label }: { onClick: () => void; label: string }) => (
    <button onClick={onClick}>{label}</button>
  ),
}))

describe('Header should', () => {
  test('render login and sign up buttons when no user is logged in', () => {
    render(<Header />)

    expect(screen.getByText('Log in')).toBeInTheDocument()
    expect(screen.getByText('Sign up')).toBeInTheDocument()
  })

  test('call onLogin when login button is clicked', () => {
    const onLogin = jest.fn()
    render(<Header onLogin={onLogin} />)

    fireEvent.click(screen.getByText('Log in'))
    expect(onLogin).toHaveBeenCalledTimes(1)
  })

  test('call onCreateAccount when sign up button is clicked', () => {
    const onCreateAccount = jest.fn()
    render(<Header onCreateAccount={onCreateAccount} />)

    fireEvent.click(screen.getByText('Sign up'))
    expect(onCreateAccount).toHaveBeenCalledTimes(1)
  })

  test('call onLogout when logout button is clicked', () => {
    const onLogout = jest.fn()
    const user = { name: 'John Doe' }
    render(<Header user={user} onLogout={onLogout} />)

    fireEvent.click(screen.getByText('Log out'))
    expect(onLogout).toHaveBeenCalledTimes(1)
  })
})
