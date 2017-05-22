import './setup-dom'
import test from 'ava'
import React from 'react'
import { shallow, mount } from 'enzyme'

import App from '../../client/components/App'

test('<App />', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('h1').text(),'Widgets FTW!')
})

test('mount <App />', t => {
  const wrapper = mount(<App />)
  t.is(wrapper.find('.widget-list').exists(),true)
})
