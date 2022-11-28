import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Apps from './Apps';
import Apps2 from './Apps2';
import Apps3 from './Apps3';
import Apps4 from './Apps4';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Apps name={'Denis'} age={18} lastName='Petrov' />
    <Apps2 />
    <Apps3 />
    <Apps4 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

