import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'

import App from '../../client/components/App'

jest.mock('../api', () => ({
  getWidgets: () => Promise.resolve([
    {id: 1, name: 'Red widget', price: 23.45, mfg: 'Acme Inc.', inStock: 4},
    {id: 2, name: 'Blue widget', price: 423.47, mfg: 'Acme Inc.', inStock: 8},
    {id: 3, name: 'Yellow widget', price: 123.40, mfg: 'Acme Inc.', inStock: 3}
  ])
}))

test('Shows heading', () => {
  render(<App />)
  return screen.findAllByRole('heading')
    .then(headings => {
      expect(headings[0]).toHaveTextContent('Widgets FTW!')
    })
})

test('Renders widget list', () => {
  render(<App />)
  return screen.findAllByRole('listitem')
    .then(items => {
      expect(items).toHaveLength(3)
    })
})

test('Shows widget details', () => {
  render(<App />)
  const details = screen.queryByRole('heading', { name: 'Details' })
  expect(details).toBeNull()
  return screen.findAllByRole('link')
    .then(links => {
      user.click(links[1])
      return screen.findByRole('heading', { name: 'Details' })
    })
    .then(detailsHeader => {
      expect(detailsHeader).toBeInTheDocument()
    })
})
