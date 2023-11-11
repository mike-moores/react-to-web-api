import { useEffect, useState } from 'react'
import { getWidgets } from '../apiClient'
import { Widget } from '../../models/Widget'
import AddWidgetForm from './NewWidget'
import DeleteWidgetButton from './DeleteWidget'

function App() {
  const initialWidgets: Widget[] = []
  const [widgets, setWidgets] = useState(initialWidgets)

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

  return (
    <>
      <div>
        <h1>Widgets for the win!</h1>
        <ul>
          {widgets.map((widget) => (
            <li key={widget.id}>
              <h2>{widget.name}</h2>
              <p>Price: {widget.price}</p>
              <p>Manufacturer: {widget.mfg}</p>
              <p>Stock: {widget.inStock}</p>
              <DeleteWidgetButton widget={widget} onDelete={fetchWidgets} />
            </li>
          ))}
        </ul>
      </div>

      <br />
      <br />

      <AddWidgetForm setWidgets={setWidgets} widgets={widgets} />
    </>
  )
}

export default App
