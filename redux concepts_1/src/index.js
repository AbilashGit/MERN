import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

/***********************************************************************/
// BEGIN - Added below imports for Code Demonstration
//
 import App from './02_tdd_snapshot/App'
// import App from './03_tdd_react_component/App'
// import App from './04_tdd_react_moxios/App'
///
// END
/***********************************************************************/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
