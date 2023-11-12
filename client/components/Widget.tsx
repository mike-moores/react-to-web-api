import * as Models from '../../models/Widget.ts'

interface Prop {
  widgetData: Models.Widget
}

export function Widget({ widgetData }: Prop) {
  return (
    <div key={widgetData.id}>
      <h1>{widgetData.name}</h1>
      <p>{widgetData.price}</p>
      <p>{widgetData.inStock}</p>
      <p>{widgetData.mfg}</p>
      <p>{widgetData.rating}</p>
    </div>
  )
}
