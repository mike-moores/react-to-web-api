import React from 'react'

export default React.createClass({
  render () {
    const widget = this.props.widget
    return (
      <div className="widget-list-item">
        {`${widget.name} `}
        <a href="#" onClick={() => this.props.showDetails(widget)}>details</a>
      </div>
    )
  }
})
