
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './redux/reducers';

import config from './config';

import App from './App';

firebase.initializeApp(config.firebaseConfig);

const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
