import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {reducers} from './reducer/index';
import {BrowserRouter} from "react-router-dom"

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
   
    </Provider>
);

