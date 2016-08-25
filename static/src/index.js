import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let dummyReducer = function (state, action) {
  return state;
};

const store = createStore(dummyReducer);

render(
  <Provider store={store}>
    <h3>Hello World!</h3>
  </Provider>,
  document.getElementById('app')
);
