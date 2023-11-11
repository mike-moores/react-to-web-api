/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Widget, NewWidget } from '../models/Widget'

const widgetUrl = '/api/v1/widgets/'

export async function getWidgets(): Promise<Widget[]> {
  const widgets = await request.get(widgetUrl)
  return widgets.body
}

export async function addNewWidget(form: NewWidget): Promise<Widget[]> {
  const dbWidgets = await request.post(widgetUrl).send({ newWidget: form })
  return dbWidgets.body
}

export async function deleteWidget(id: number): Promise<Widget[]> {
  const url = `${widgetUrl}${id}`
  const dbWidgets = await request.delete(url)
  console.log('Delete widget', dbWidgets)
  return dbWidgets.body
}

export async function editWidget(updatedWidget: Widget): Promise<Widget[]> {
  const url = `${widgetUrl}${updatedWidget.id}`

  const dbWidgets = await request.patch(url, updatedWidget)

  console.log('Edit widget', dbWidgets)
  return dbWidgets.body
}
