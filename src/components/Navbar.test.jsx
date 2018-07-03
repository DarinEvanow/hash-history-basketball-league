import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from './Navbar';

configure({ adapter: new Adapter() });

describe('<Navbar />', () => {
  it('should render with three links', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('Link').length).toBe(3)
  })

  it('should have a Link component that directs to "/"', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('Link').find({to: '/'}).length).toBe(1)
  })

  it('should have a Link component that directs to "/players"', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('Link').find({to: '/players'}).length).toBe(1)
  })

  it('should have a Link component that directs to "/teams"', () => {
    const wrapper = shallow(<Navbar />)
    expect(wrapper.find('Link').find({to: '/teams'}).length).toBe(1)
  })
})
