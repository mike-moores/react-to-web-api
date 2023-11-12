import express from 'express'
import { getWidgets, addNewWidget, deleteWidget, editWidget } from '../db/db.ts'
import { NewWidget } from '../../models/Widget.ts'

const router = express.Router()

// get all widgets

router.get('/', (req, res) => {
  getWidgets()
    .then((widgets) => {
      res.json(widgets)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

// Add a new widget

router.post('/', async (req, res) => {
  try {
    const newWidget = req.body as NewWidget
    console.log(`We got a new widget: \n`, newWidget)
    if (!newWidget) {
      res.sendStatus(400)
      return
    }
    const widget = await addNewWidget(newWidget)
    res.json(widget)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// delete a widget

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const widgets = await deleteWidget(id)
    res.json(widgets)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// // edit a widget

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const updatedWidgetData = req.body
    const widgets = await editWidget(id, updatedWidgetData)
    res.json(widgets)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

export default router
