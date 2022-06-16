import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import { createStore } from 'redux';


const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Provider store = {store}>
    <App />
    </Provider>
    </Router>
  </React.StrictMode>
);


