const express = require('express')
const router = express.Router()

const db = require('../db')

router.get('/', function (req, res) {
  res.json(db.getWidgets())
})

router.post('/', function (req, res) {
  db.saveWidget(req.body)
  // Normally saveWidget would be async and you'd
  // have to sendStatus in the .then, but in this
  // implementation, the data is stored in server
  // memory and is done synchronously.
  res.sendStatus(200)
})

module.exports = router

