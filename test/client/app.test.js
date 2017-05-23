import './setup-dom'
import test from 'ava'
import React from 'react'
import { shallow, mount, render } from 'enzyme'

import App from '../../client/components/App'

App.prototype.componentDidMount = () => {}

test('Shows heading', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('h1').text(), 'Widgets FTW!')
})

test('Renders widget list', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.widget-list').exists(), true)
})

test('Renders add form when clicked', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.add-widget').exists(), false)
  wrapper.find('#show-widget-link').simulate('click')
  t.is(wrapper.find('.add-widget').exists(), true)
})

test('Shows widget details', t=> {
  const widgets = [{name: 'red', id: 1}, {name: 'blue', id: 2}]
  const wrapper = mount(<App />)
  wrapper.setState({widgets})
  t.is(wrapper.find('.widget-details').exists(), false)

  wrapper.instance().showDetails(widgets[0])
  t.is(wrapper.find('.widget-details').exists(), true)
})
