import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import reportWebVitals from './reportWebVitals';
import Main from "./pages/main";
import {BrowserRouter} from 'react-router-dom';
import './pages/scrolling.css';
ReactDOM.render(
    <BrowserRouter>
        <Main/>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
