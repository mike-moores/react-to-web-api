import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import App from './App'

test('Shows heading', () => {
  render(<App />)
  return screen.findAllByRole('heading')
    .then(headings => {
      expect(headings[0]).toHaveTextContent('Widgets FTW!')
      return null
    })
})
