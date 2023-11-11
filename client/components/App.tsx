import { useEffect, useState, ChangeEvent, FormEvent } from 'react'
// import { Widget } from './Widget.tsx'
import {
  getWidgets,
  addNewWidget,
  deleteWidget,
  editWidget,
} from '../apiClient'
import { Widget } from '../../models/Widget'

const initialWidgets: Widget[] = []
const initialFormData = {
  name: '',
  price: '',
  mfg: '',
  inStock: '',
}

function App() {
  const [widgets, setWidgets] = useState(initialWidgets as Widget[])
  // const [talks, setTalks] = useState(initialTalks as Talk[])
  const [form, setForm] = useState(initialFormData)
  console.log('widgets', widgets)

  async function fetchWidgets() {
    const widgets = await getWidgets()
    setWidgets(widgets)
    console.log(getWidgets)
  }

  useEffect(() => {
    try {
      fetchWidgets()
    } catch (error) {
      console.log(error)
    }
  }, [])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const newForm = {
      ...form,
      price: Number(form.price),
      inStock: Number(form.inStock),
    }
    const newWidget = await addNewWidget(newForm)
    console.log(newWidget)
    setWidgets([...widgets, newWidget])
    setForm(initialFormData)
  }

  async function handleDelete(id: number) {
    await deleteWidget(id)
    const updatedWidgets = widgets.filter((widget) => widget.id !== id)
    setWidgets(updatedWidgets)
  }

  async function handleEdit(updatedWidget: Widget) {
    console.log('Before edit:', widgets)
    
    await editWidget(updatedWidget)
    
    const updatedWidgets = await getWidgets();
    
    console.log('After edit:', widgets)

    // const updatedWidgets = widgets.map((widget) =>
    //   widget.id === updatedWidget.id ? updatedWidget : widget
    // )

    setWidgets(updatedWidgets)
  }

  return (
    <div>
      <h1>Widgets for the win!</h1>
      <ul>
        {widgets.map(({ id, name, price, mfg }) => {
          return (
            <li key={id}>
              {' '}
              {name} {price} {mfg}
              <button onClick={() => handleDelete(id)}>Delete</button>
              <button
                onClick={() => handleEdit({ id, name, price, mfg, inStock: 0 })}
              >
                Edit
              </button>
            </li>
          )
        })}
      </ul>

      <br />
      <br />

      <h1>Add new widget</h1>

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
          <label htmlFor="mfg">Manufacturer:</label>
          <br />
          <input id="mfg" onChange={handleChange} value={form.mfg} name="mfg" />
        </p>

        <p>
          <label htmlFor="inStock">In Stock:</label>
          <br />
          <input
            id="inStock"
            onChange={handleChange}
            value={form.inStock}
            name="inStock"
          />
        </p>
        <button>Add widget</button>
      </form>
    </div>
  )
}

export default App
