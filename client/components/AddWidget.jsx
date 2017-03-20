import React from 'react'

import api from '../api'

export default React.createClass({
  getInitialState () {
    return {
      name: '',
      price: '',
      mfg: '',
      inStock: ''
    }
  },

  render () {
    return (
      <div className="add-widget">
        <form>
          <p><input placeholder="Name"
            onChange={this.nameChanged}
            value={this.state.name}
            /></p>
          <p><input placeholder="Price"
            onChange={this.priceChanged}
            value={this.state.price}
            /></p>
          <p><input placeholder="Manufacturer"
            onChange={this.mfgChanged}
            value={this.state.mfg}
            /></p>
          <p><input placeholder="In stock"
            onChange={this.inStockChanged}
            value={this.state.inStock}
            /></p>
          <button onClick={this.addWidget}>Add widget</button> {' '}
          <a href="#" onClick={this.props.finishAdd}>Cancel</a>
        </form>
      </div>
    )
  },

  nameChanged (e) {
    this.setState({
      name: e.target.value
    })
  },

  priceChanged (e) {
    this.setState({
      price: e.target.value
    })
  },

  mfgChanged (e) {
    this.setState({
      mfg: e.target.value
    })
  },

  inStockChanged (e) {
    this.setState({
      inStock: e.target.value
    })
  },

  addWidget () {
    const widget = this.state
    api.appendWidget(widget, this.props.finishAdd)
  }
})
