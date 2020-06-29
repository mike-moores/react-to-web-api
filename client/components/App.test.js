import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import App from '../../client/components/App'

App.prototype.componentDidMount = () => {}

const server = setupServer(
  rest.get('/api/v1/widgets', (req, res, ctx) => {
    return res(ctx.json([
      { id: 1, name: 'test 1', price: 1.23, mfg: 'Test 1 Inc.', inStock: 4 },
      { id: 2, name: 'test 2', price: 45.67, mfg: 'Test 2 Inc.', inStock: 0 },
      { id: 3, name: 'test 3', price: 890.12, mfg: 'Test 3 Inc.', inStock: 8 }
    ]))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Shows heading', () => {
  render(<App />)
  expect(screen.findByRole('heading', { 'aria-level': 1 }))
    .toHaveTextContent('Widgets FTW!')
})

test('Renders widget list', () => {
  render(<App />)
  expect(wrapper.findByRole('listitem')).toHaveLength(3)
})

xtest('Shows widget details', () => {
  const widgets = [{ name: 'red', id: 1 }, { name: 'blue', id: 2 }]
  const wrapper = mount(<App />)
  wrapper.setState({ widgets })
  expect(wrapper.find('.widget-details').exists()).toBeFalsy()

  wrapper.instance().showDetails(widgets[0])
  wrapper.mount()

  expect(wrapper.find('.widget-details').exists()).toBeTruthy()
})
