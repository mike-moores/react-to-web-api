import connection from './connection.ts'

import { Widget, NewWidget } from '../../models/Widget.ts'

// gets all widgets
export function getWidgets(db = connection): Promise<Widget[]> {
  return db<Widget>('widgets').select()
}

// add new widget
export function addNewWidget(widget: NewWidget, db = connection): Promise<Widget> {
  return db<Widget>('widgets').insert(widget).returning('*')
}

// // delete a widget

export function deleteWidget(widgetId: number, db = connection): Promise<void> {
  return db<Widget>('widgets').where({ id: widgetId }).del();
}