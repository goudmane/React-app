import React from 'react';
import ReactDOM from 'react-dom';
import RoundedBtn from './RoundedBtn';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoundedBtn />, div);
  ReactDOM.unmountComponentAtNode(div);
});