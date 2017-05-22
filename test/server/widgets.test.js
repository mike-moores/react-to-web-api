import test from 'ava'
import request from 'supertest'

import app from '../../server/server'

// the server keeps the widgets in memory so no knex setup needed

test.serial.cb('GET /widgets', t => {
  request(app)
    .get('/widgets')
    .expect(200)
    .end((err, res) => {
      t.is(res.body.length, 3)
      t.ifError(err)
      t.end()
    })
})

test.serial.cb('POST /widgets', t => {
  request(app)
    .post('/widgets')
    .send({name: 'test'})
    .expect(200)
    .end((err, res) => {
      if (!err) {
        request(app)
          .get('/widgets').end((err, res) => {
            t.ifError(err)
            t.is(res.body.length, 4)
            t.end()
          })
      }
    })
})

