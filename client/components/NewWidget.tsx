import { Widget, NewWidget } from '../../models/Widget'
import { addNewWidget } from '../apiClient'
import { useState } from 'react'

interface Props {
  widgets: Widget[]
  setWidgets: (widgets: Widget[]) => void
}

const initialWidgetState = {
  name: '',
  price: 0,
  mfg: '',
  inStock: 0,
  rating: 0,
}
export default function AddWidgetForm(props: Props) {
  const [form, setForm] = useState<NewWidget>(initialWidgetState)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const [newWidget] = await addNewWidget(form)
    props.setWidgets([...props.widgets, newWidget])
    setForm(initialWidgetState)
  }

  return (
    <>
      <h1>Add Widget</h1>

      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            id="name"
            onChange={handleChange}
            value={form.name}
            name="name"
          />
        </p>

        <p>
          <label htmlFor="price">Price:</label>
          <br />
          <input
            id="price"
            onChange={handleChange}
            value={form.price}
            name="price"
          />
        </p>
        <p>
          <label htmlFor="mfg">Mfg:</label>
          <br />
          <input id="mfg" onChange={handleChange} value={form.mfg} name="mfg" />
        </p>
        <p>
          <label htmlFor="inStock">Stock:</label>
          <br />
          <input
            id="inStock"
            onChange={handleChange}
            value={form.inStock}
            name="inStock"
          />
        </p>
        <p>
          <label htmlFor="rating">Rating:</label>
          <br />
          <input
            id="rating"
            onChange={handleChange}
            value={form.rating}
            name="rating"
          />
        </p>
        <button>Add widget</button>
      </form>
    </>
  )
}
