import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,
   Routes,
  Route} from 'react-router-dom';



const element = (
  <Router>
    <App />
  </Router>
);

const container = document.getElementById('root');

ReactDOM.render(element, container);

/*
//   <Route path ="/" component = {App} />
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
            <Route path = "/"  element = {<App />} />
      <Routes>
    </Router>
     //<App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
