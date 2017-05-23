import './setup-dom'
import test from 'ava'
import React from 'react'
import { shallow, mount } from 'enzyme'

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
