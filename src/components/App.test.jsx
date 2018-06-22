import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should render the App with six routes', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Route').length).toBe(6)
  })
})
