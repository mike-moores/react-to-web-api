import request from 'supertest'

import app from '../../server/server'

// the server keeps the widgets in memory so no knex setup needed

test('GET /api/v1/widgets', () => {
  return request(app)
    .get('/api/v1/widgets')
    .expect(200)
    .then(res => {
      expect(res.body.length).toBe(3)
    })
})
