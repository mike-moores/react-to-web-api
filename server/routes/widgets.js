const express = require('express')
const router = express.Router()

const db = require('../db/db.js')

router.get('/', (req, res) => {
  db.getWidgets()
    .then(widgets => {
      res.send(widgets)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
