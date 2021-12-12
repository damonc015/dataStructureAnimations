import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import userReducer from "./features/user"
import { BrowserRouter } from 'react-router-dom';

const rStore = configureStore({
  reducer:{
    user:userReducer
  }
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={rStore}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
