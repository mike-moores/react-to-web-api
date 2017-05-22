import React from 'react'

import api from '../api'

export default class AddWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      mfg: '',
      inStock: ''
    }
  }

  fieldChanged (e) {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    })
  }

  addWidget () {
    const widget = this.state
    api.appendWidget(widget, this.props.finishAdd)
  }

  render () {
    return (
      <div className="add-widget">
        <form>
          <p><input placeholder="Name" name='name'
            onChange={e => this.fieldChanged(e)}
            value={this.state.name}
            /></p>
          <p><input placeholder="Price" name='price'
            onChange={e => this.fieldChanged(e)}
            value={this.state.price}
            /></p>
          <p><input placeholder="Manufacturer" name='mfg'
            onChange={e => this.fieldChanged(e)}
            value={this.state.mfg}
            /></p>
          <p><input placeholder="In stock" name='inStock'
            onChange={e => this.fieldChanged(e)}
            value={this.state.inStock}
            /></p>
          <button onClick={e => this.addWidget(e)}>Add widget</button> {' '}
          <a href="#" onClick={this.props.finishAdd}>Cancel</a>
        </form>
      </div>
    )
  }
}
