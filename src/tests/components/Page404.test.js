import React from 'react';
import { shallow } from 'enzyme';
import Page404 from '../../components/Page404.js';

test('should render a 404 page', () => {
  const wrapper = shallow(<Page404/>);
  expect(wrapper).toMatchSnapshot();
});
