import test from 'ava'
import request from 'supertest'

import app from '../../server/server'

//the server keeps the widgets in memory so no knex setup neede

test.cb('GET /widgets', t => {
  request(app)
    .get('/widgets')
    .expect(200)
    .end((err,res) => {
      t.is(res.body.length, 3)
      t.end()
    })
})

