import connection from './connection.ts'

import { Widget, WidgetData } from '../../models/Widget.ts'

// gets all widgets
export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

// add new widget
export async function addNewWidget(
  widget: WidgetData,
  db = connection
): Promise<Widget> {
  const [newWidget] = await db('widgets').insert(widget).returning('*')
  console.log(newWidget)
  return newWidget
}

// delete a widget

export function deleteWidget(id: number, db = connection): Promise<Widget[]> {
  console.log('Deleting this widget', id)
  return db('widgets').where('id', id).del().returning('*')
}

export async function editWidget(
  id: number,
  updatedWidgetData: WidgetData,
  db = connection
): Promise<Widget[]> {
  console.log('Updating this widget', id)

  const existingWidget = await db('widgets').where('id', id).first()
  if (!existingWidget) {
    throw new Error('Widget with id ${id} not found')
  }

  const { name, price, mfg, inStock } = updatedWidgetData
  return db('widgets').where('id', id).update({
    name,
    price,
    mfg,
    inStock,
  })
}
