import React from 'react'
import Search from './Search'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

it('renders empty given no tabs', () => {
    const wrapper = shallow(<Search />)
    toJson(wrapper)
  })