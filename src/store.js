import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);

export default store;