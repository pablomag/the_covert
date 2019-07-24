import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'materialize-css/dist/js/materialize.min.js';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-toastify/dist/ReactToastify.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'materialize-css/dist/css/materialize.min.css';
import './index.css';

import App from './App';

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
