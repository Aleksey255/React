import React from 'react';
import ReactDOM from 'react-dom/client';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
   
  </Provider>
);