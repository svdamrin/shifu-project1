import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router';
import jsonData from '../data/list.json'
import 'bootstrap';
import '../scss/main.scss'

localStorage.setItem("myJsonData", JSON.stringify(jsonData));



ReactDOM.render(
    <Routes />,
    document.getElementById('root')
  );