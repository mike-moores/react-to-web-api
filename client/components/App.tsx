import { useEffect, useState } from 'react'
import { getWidgets } from '../apiClient'
import { Widget } from '../../models/Widget'
import AddWidgetForm from './NewWidget'
import DeleteWidgetButton from './DeleteWidget'
import EditWidget from './EditWidget'

function App() {
  const initialWidgets: Widget[] = []
  const [widgets, setWidgets] = useState(initialWidgets)
  const [editWidgetId, setEditWidgetId] = useState<number | null>(null)

  async function fetchWidgets() {
    const widgetData = await getWidgets()
    setWidgets(widgetData)
  }

  useEffect(() => {
    try {
      fetchWidgets()
    } catch (error) {
      console.log('Something went wrong!', error)
    }
  }, [])

  const handleEdit = (widgetId: number) => {
    setEditWidgetId(widgetId)
  }

  const handleCancelEdit = () => {
    setEditWidgetId(null)
  }

  return (
    <>
      <div>
        <h1>Widgets for the win!</h1>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
          {widgets.map((widget) => (
            <li
              key={widget.id}
              style={{ marginRight: `${widget.name.length * 5}px` }}
            >
              <h2>{widget.name}</h2>
              <p>Price: {widget.price}</p>
              <p>Manufacturer: {widget.mfg}</p>
              <p>Stock: {widget.inStock}</p>
              <p>Rating: {widget.rating}/5</p>
              <DeleteWidgetButton widget={widget} onDelete={fetchWidgets} />
              <button onClick={() => handleEdit(widget.id)}>Edit</button>
            </li>
          ))}
        </ul>
        {editWidgetId !== null && (
          <EditWidget
            widgets={widgets}
            setWidgets={setWidgets}
            widgetToEdit={widgets.find((widget) => widget.id === editWidgetId)}
            onCancel={handleCancelEdit}
          />
        )}
      </div>
      <br />
      <br />

      <AddWidgetForm setWidgets={setWidgets} widgets={widgets} />
    </>
  )
}

export default App
