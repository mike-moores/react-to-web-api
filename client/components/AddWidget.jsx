import React from 'react'

import {appendWidget} from '../api'

export default class AddWidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      price: '',
      mfg: '',
      inStock: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addWidget = this.addWidget.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addWidget (e) {
    appendWidget(this.state)
      .then(() => this.props.refreshList())
  }

  render () {
    return (
      <div className='add-widget'>
        <form>
          <p><input placeholder='Name' name='name'
            onChange={this.handleChange}
            value={this.state.name}
          /></p>
          <p><input placeholder='Price' name='price'
            onChange={this.handleChange}
            value={this.state.price}
          /></p>
          <p><input placeholder='Manufacturer' name='mfg'
            onChange={this.handleChange}
            value={this.state.mfg}
          /></p>
          <p><input placeholder='In stock' name='inStock'
            onChange={this.handleChange}
            value={this.state.inStock}
          /></p>
          <button type='button' onClick={this.addWidget}>Add widget</button>
          {' '}
          <a href='#' onClick={this.props.refreshList}>Cancel</a>
        </form>
      </div>
    )
  }
}
