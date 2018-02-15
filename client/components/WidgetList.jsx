import React from 'react'

import WidgetListItem from './WidgetListItem'

export default function WidgetList (props) {
  return (
    <div className='widget-list'>
      <h2>List</h2>
      {props.widgets.map(widget => {
        return <WidgetListItem
          key={widget.id}
          widget={widget}
          hideDetails={props.hideDetails}
          showDetails={props.showDetails} />
      })}
    </div>
  )
}
