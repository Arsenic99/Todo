import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../src/assets/styles/reset.css'
import { Provider } from 'react-redux';
import { store } from './components/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
window.store = store;