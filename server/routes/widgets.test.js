import request from 'supertest'

import server from '../../server/server'

jest.mock('../db/db', () => {
  return {
    getWidgets: () => Promise.resolve([
      { id: 1, name: 'test 1', price: 1.23, mfg: 'Test 1 Inc.', inStock: 4 },
      { id: 2, name: 'test 2', price: 45.67, mfg: 'Test 2 Inc.', inStock: 0 },
      { id: 3, name: 'test 3', price: 890.12, mfg: 'Test 3 Inc.', inStock: 8 }
    ])
  }
})

test('GET /api/v1/widgets', () => {
  return request(server)
    .get('/api/v1/widgets')
    .expect(200)
    .then(res => {
      expect(res.body).toHaveLength(3)
      return null
    })
})
