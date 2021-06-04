//imports react to use in the app
import React from 'react';
//imports react dom which is a module that updates the dom with our react code
import ReactDOM from 'react-dom';
//imports styling from index.css
import './index.css';
//imports our app file to be sent to the dom
import App from './App';
//imports the reportWebVitals function which helps get website performance metrics
import reportWebVitals from './reportWebVitals';

//calls render on the ReactDom module which sends the passed in code to the views
ReactDOM.render(
  //Strictmode helps to make sure that the code implemented is free of potentional problems like:
    // Identifying components with unsafe lifecycles
    // Warning about legacy string ref API usage
    // Warning about deprecated findDOMNode usage
    // Detecting unexpected side effects
    // Detecting legacy context API

    //the app element is passed in which contains the data we want to render
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //the above data is shown in the element with the id of root
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
