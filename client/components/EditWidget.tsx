import { Widget, NewWidget } from '../../models/Widget'
import { updateWidget } from '../apiClient'
import { useState, useEffect } from 'react'

interface Props {
  widgets: Widget[]
  setWidgets: (widgets: Widget[]) => void
  widgetToEdit?: Widget
  onCancel: () => void
}

const EditWidget: React.FC<Props> = ({
  widgets,
  setWidgets,
  widgetToEdit,
  onCancel,
}) => {
  console.log(widgetToEdit)
  const [form, setForm] = useState<NewWidget>({
    name: '',
    price: 0,
    mfg: '',
    inStock: 0,
  })

  useEffect(() => {
    if (widgetToEdit) {
      setForm({
        name: widgetToEdit.name,
        price: widgetToEdit.price,
        mfg: widgetToEdit.mfg,
        inStock: widgetToEdit.inStock,
      })
    }
  }, [widgetToEdit])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (widgetToEdit) {
      try {
        await updateWidget(widgetToEdit.id, form)
        console.log('Widget updated successfully')
      } catch (error) {
        console.error('Error updating widget', error)
      }
      const updatedWidgets = widgets.map((widget) =>
        widget.id === widgetToEdit.id ? { ...widget, ...form } : widget
      )
      setWidgets(updatedWidgets)

      onCancel()
    }
  }

  return (
    <>
      <h1>Edit Widget</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
        <label htmlFor="mfg">Manufacturer:</label>
        <input
          type="text"
          id="mfg"
          name="mfg"
          value={form.mfg}
          onChange={handleChange}
        />
        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          name="inStock"
          value={form.inStock}
          onChange={handleChange}
        />

        <button type="submit">Update widget</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </>
  )
}

export default EditWidget
