import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';

store()
.then((s) => {
  ReactDOM.render(
    <Provider store={s}>
      <App />
      </Provider>,
    document.getElementById('root')
  );
})
.catch ((err) => {
  console.error(err.message);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
