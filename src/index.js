import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cat from './components/Cat/index';
import Dog from './components/Dog/index';
import Otters from './components/Otters/index'
import Select from './components/Selecttest/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Select />}/>
      <Route path="/cat" element={<Cat />}/>
      <Route path="/dog" element={<Dog />}/>
      <Route path="/otters" element={<Otters />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
