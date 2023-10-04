import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

// Import React-Bootstrap Icons and CSS files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import * as Icon from 'react-bootstrap-icons';

import './App.css';


export default function App() {
  return (
    <div className='container-fluid'>
      <h1>Welcome <Icon.Border/></h1>
    </div>
  );
}
