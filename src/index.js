import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/scss/main.scss';

import configureStore from './redux/configureStore';

const store = configureStore();

toast.configure({
  autoClose: 8000,
  draggable: false,
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
