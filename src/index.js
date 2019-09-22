import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var xhttp = new XMLHttpRequest();
var data = [];
xhttp.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    // Typical action to be performed when the document is ready:
    data = JSON.parse(xhttp.responseText);
    ReactDOM.render(<App questions={data} />, document.getElementById('root'));
  }
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

xhttp.open(
  'GET',
  `https://raw.githubusercontent.com/albastardoto/question-viewer/master/src/data.json`,
  true,
);
xhttp.send();
serviceWorker.unregister();
