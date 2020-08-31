import React from 'react'

import WidgetList from './WidgetList'
import WidgetDetails from './WidgetDetails'
import ErrorMessage from './ErrorMessage'

import { getWidgets } from '../api'

export default class App extends React.Component {
  state = {
    error: null,
    widgets: [],
    activeWidget: null,
    detailsVisible: false
  }

  componentDidMount () {
    this.refreshList()
  }

  renderWidgets = (widgets) => {
    this.setState({
      error: null,
      widgets: widgets
    })
  }

  renderError = (err) => {
    this.setState({
      error: err,
      widgets: []
    })
  }

  refreshList = (err) => {
    this.setState({
      error: err
    })

    getWidgets()
      .then(widgets => {
        this.renderWidgets(widgets)
      })
      .catch(err => {
        this.renderError(err)
      })
  }

  showDetails = (widget) => {
    this.setState({
      activeWidget: widget,
      detailsVisible: true
    })
  }

  hideDetails = () => {
    this.setState({
      detailsVisible: false
    })
  }

  render () {
    return (
      <div>
        <ErrorMessage error={this.state.error} />

        <h1>Widgets FTW!</h1>

        <WidgetList
          showDetails={this.showDetails}
          widgets={this.state.widgets} />

        {this.state.detailsVisible && <WidgetDetails
          isVisible={this.state.detailsVisible}
          hideDetails={this.hideDetails}
          widget={this.state.activeWidget} />}
      </div>
    )
  }
}
