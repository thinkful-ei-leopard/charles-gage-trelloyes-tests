import React, { Component } from 'react';
import List from './List';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

// import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');
  ReactDOM.render(<List id='1' header='First list' cards = 
  {[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<List id='1' header='First list' cards = 
    {[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });



