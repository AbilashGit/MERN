import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

/***********************************************************************/
// BEGIN - Added below imports for Code Demonstration
//
import './myindex.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; // ==> Uncomment for Demo 16_css_bootstrap
//
import App from './01_welcome/App'
// import App from './02_componentReuse/App'
// import App from './03_properties/App'
// import App from './04_events/App'
// import App from './05_state/App'
// import App from './06_ref/App'
// import App from './07_propTypes/App'
// import App from './08_componentLifeCycle/App'
// import App from './08a_componentLifeCycle/App'
// import App from './09_composableComponents/App'
// import App from './09a_composableComponents/App'
// import App from './10_hoc/App'
// import App from './11_renderProps/App'
// import App from './12_formHandling/App'
// import App from './13_reactrouter/App'
// import App from './14_transition/App'
// import App from './15_lazyloading_codesplitting/App'
// import App from './16_css_bootstrap/App'
// import App from './17_flux/App'
// import App from './18_pureComponents_memo/App'
// import App from './19_errorBoundary/App'
// import App from './20_portal/App'
// import App from './21_contextApi/App'
//
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
