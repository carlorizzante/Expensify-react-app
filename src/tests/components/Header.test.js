import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json'; // added via jest.config.json

import { Header } from '../../components/Header.js';

// // Testing with react-test-renderer
// // This test is redundant, ReactShallowRenderer is substituted by Enzyme
// test('should render Header component correctly', () => {
//   const renderer = new ReactShallowRenderer();
//   renderer.render(<Header/>);
//   expect(renderer.getRenderOutput()).toMatchSnapshot();
// });

// Testing with Enzyme
test('should render Header component correctly', () => {
  const wrapper = shallow(<Header startLogout={ () => {} }/>);
  expect(wrapper.find('h1').length).toBe(1);
  expect(wrapper.find('h1').text()).toBe("Expensify App");

  expect(wrapper.find('nav').length).toBe(1);
  expect(wrapper.find('ul').length).toBe(1);
  expect(wrapper.find('li').length).toBeGreaterThanOrEqual(1);

  expect(wrapper).toMatchSnapshot();
  // expect(toJson(wrapper)).toMatchSnapshot(); // added via jest.config.json
});

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={ startLogout }/>);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
