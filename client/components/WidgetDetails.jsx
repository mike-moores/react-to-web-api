import React from 'react'

export default (props) => {
  const {widget, isVisible} = props
  const hide = () => props.hideDetails()
  const classes = 'widget-details ' + (isVisible ? 'visible' : 'hidden')
  return (
    <div className={classes}>
      <h2>Details</h2>
      <p>Name: {widget.name}</p>
      <p>Price: {widget.price}</p>
      <p>Mfg: {widget.mfg}</p>
      <p>In stock: {widget.inStock}</p>
      <a href='#' onClick={hide}>Close</a>
    </div>
  )
}
