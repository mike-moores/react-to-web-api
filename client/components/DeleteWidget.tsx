import { Widget } from '../../models/Widget'
import { deleteWidget } from '../apiClient'
import React from 'react'

interface Props {
  widget: Widget
  onDelete: () => void
}

const deleteWidgetButton: React.FC<Props> = ({ widget, onDelete }) => {
  async function handleDelete() {
    try{
    await deleteWidget(widget.id)
    onDelete()
  } catch (error) {
    console.log('Error deleting widget', error)
  }
  }

  return (
    <button onClick={handleDelete}>Delete</button>
  )
}

export default deleteWidgetButton
