import React from 'react'
import WidgetListItem from './WidgetListItem'

export default React.createClass({
  render () {
    return (
      <div className="widget-list">
      <h2>List</h2>
      {this.props.widgets.map((widget) => {
        return <WidgetListItem 
          key={widget.id}
          widget={widget}
          hideDetails={this.props.hideDetails}
          showDetails={this.props.showDetails} />
      })}
      </div>
    )
  }
})
