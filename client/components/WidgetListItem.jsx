import React from 'react'

export default function WidgetListItem ({ widget, showDetails }) {
  return (
    <div className='widget-list-item'>
      {`${widget.name} `}
      <a href='#' onClick={() => showDetails(widget)}>details</a>
    </div>
  )
}
