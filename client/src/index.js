import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store/index.js'
import dotenv from 'dotenv'
dotenv.config();

const { BACK_END_LOCAL } = process.env;
axios.defaults.baseURL = process.env.BACK_END_DEPLOY || 'http://localhost:3001'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>

        <App />

      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
