import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './client/App';
import './client/style.css'
import './client/homepage.css'
import './client/messages.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <App />
    </Router>
  </>

)
