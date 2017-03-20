import React from 'react'

import api from '../api'
import AddWidget from './AddWidget'
import WidgetList from './WidgetList'
import WidgetDetails from './WidgetDetails'
import ErrorMessage from './ErrorMessage'

export default React.createClass({
  getInitialState () {
    return {
      error: null,
      widgets: [],
      activeWidget: null,
      detailsVisible: false,
      addWidgetVisible: false
    }
  },

  componentDidMount () {
    api.getWidgets(this.renderWidgets)
  },

  renderWidgets (err, widgets) {
    this.setState({
      error: err,
      widgets: widgets
    })
  },

  refreshList (err) {
    this.setState({
      error: err,
      addWidgetVisible: false
    })
    api.getWidgets(this.renderWidgets)
  },

  showAddWidget () {
    this.setState({
      addWidgetVisible: true
    })
  },

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />
        <h1>Widgets FTW!</h1>
        <WidgetList
          showDetails={this.showDetails}
          widgets={this.state.widgets} />
        <p><a href='#' onClick={this.showAddWidget}>Add widget</a></p>
        {this.state.addWidgetVisible && <AddWidget
          finishAdd={this.refreshList} />}
        {this.state.detailsVisible && <WidgetDetails
          isVisible={this.state.detailsVisible}
          hideDetails={this.hideDetails}
          widget={this.state.activeWidget} />}
      </div>
    )
  },

  showDetails (widget) {
    this.setState({
      activeWidget: widget,
      detailsVisible: true
    })
  },

  hideDetails () {
    this.setState({
      detailsVisible: false
    })
  }

})
