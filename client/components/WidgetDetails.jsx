import React from 'react'

export default React.createClass({
  render () {
    const widget = this.props.widget
    const isVisble = this.props.isVisible
    const hide = () => this.props.hideDetails()
    const classes = "widget-details " + isVisble ? 'visible' : 'hidden'
    return (
      <div className={classes}>
        <h2>Details</h2>
        <p>Name: {widget.name}</p>
        <p>Price: {widget.price}</p>
        <p>Mfg: {widget.mfg}</p>
        <p>In stock: {widget.inStock}</p>
        <a href="#" onClick={hide}>Close</a>
      </div>
    )
  }
})
