import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'; // Importar Provider
import store from './store'; // Importar tu store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Envolvemos la App con el Provider y le pasamos el store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);