import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from './Button'

describe('Button should', () => {
  test('render button with label', () => {
    render(<Button label="Click Me" />)
    const buttonElement = screen.getByText(/Click Me/i)
    expect(buttonElement).toBeInTheDocument()
  })

  test('apply primary class when primary prop is true', () => {
    render(<Button label="Click Me" primary />)
    const buttonElement = screen.getByText(/Click Me/i)
    expect(buttonElement).toHaveClass('storybook-button--primary')
  })

  test('apply size class correctly', () => {
    render(<Button label="Click Me" size="large" />)
    const buttonElement = screen.getByText(/Click Me/i)
    expect(buttonElement).toHaveClass('storybook-button--large')
  })

  test('apply background color style correctly', () => {
    const backgroundColor = 'red'
    render(<Button label="Click Me" backgroundColor={backgroundColor} />)
    const buttonElement = screen.getByText(/Click Me/i)
    expect(buttonElement).toHaveStyle(`background-color: ${backgroundColor}`)
  })

  test('call onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button label="Click Me" onClick={handleClick} />)
    const buttonElement = screen.getByText(/Click Me/i)
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
