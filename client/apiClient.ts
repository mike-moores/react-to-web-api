/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Widget, NewWidget, WidgetData } from '../models/Widget'

const widgetUrl = '/api/v1/widgets/'

export async function getWidgets(): Promise<Widget[]> {
  const widgets = await request.get(widgetUrl)
  return widgets.body
}

export async function addNewWidget(form: NewWidget) {
  const response = await request.post(widgetUrl).send(form)
  return response.body
}

export async function deleteWidget(widgetId: number) {
  const response = await request.delete(`${widgetUrl}/${widgetId}`)
  return response.body
}

export async function updateWidget(widgetId: number, updatedWidget: NewWidget) {
  const response = await request
    .patch(`${widgetUrl}/${widgetId}`)
    .send(updatedWidget)
  return response.body
}
