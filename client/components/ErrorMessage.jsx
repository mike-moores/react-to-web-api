import React from 'react'

export default React.createClass({
  shouldComponentUpdate () {
    return this.props.error
  },

  render () {
    let errorView = null
    if (this.props.error) {
      errorView = (
        <div className="error">
          Error: {this.props.error.message}
        </div>
      )
    }
    return (
      errorView
    )
  }
})
