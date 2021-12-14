import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthContextComponent from "./context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>

    <AuthContextComponent>
    <App />
    </AuthContextComponent>

  </React.StrictMode>,
  document.getElementById('root')
);
