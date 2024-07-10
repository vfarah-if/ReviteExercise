import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

jest.mock('./components/Pages/HomePage', () => ({
  HomePage: () => (
    <div>
      <section className="storybook-page">
        <h2>Home Page</h2>
      </section>
    </div>
  ),
}))

describe('App should', () => {
  test('render HomePage and its content', () => {
    render(<App />)

    expect(screen.getByText('Home Page')).toBeInTheDocument()
  })
})
