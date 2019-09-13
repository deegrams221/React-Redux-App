// Step 1 - get directories/files created: 
//                store dir -> actions dir -> index.js
//                store dir -> reducers dir -> index.js
//                components dir -> insults.js

// Step 2 - set up index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducers';
import thunk from 'redux-thunk';

// for redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// createStore pass in reducer
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement
);