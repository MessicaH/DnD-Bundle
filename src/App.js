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

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import './App.css';

// Import of Components into App.js file
import Home from "./Components/Home.js";
import Charace from "./Components/Charace.js";
import Charclass from "./Components/Charclass.js";
import DMRoster from "./Components/DMRoster.js";
import SignUp from "./Components/SignUp.js";


export default function App() {
  return (
    <Router>
      <div className='container-fluid app-bar'>
        <h1><span className='icon-border'><Icon.Hammer/></span>D&D Starter Pack Bundle<span className='icon-border'><Icon.HeartArrow/></span></h1>
        <h5><span className='icon-border'><Icon.Dice3/></span>Scroll for initiative<span className='icon-border'><Icon.Dice5/></span></h5>
      </div>
      <div className='container'>
        <ButtonGroup className='navbar btn-group-lg'>
          <Button variant='dark' className='main-nav'>
          <Link to="/home" alt="Home"><span className='icon'><Icon.HouseDoorFill /></span></Link>
          </Button>
          <Button variant='dark'className='main-nav'>
            <Link to="/charace" alt="Character Race or Origin"><span className='icon'><Icon.Clipboard2HeartFill />
            </span></Link>
          </Button>
          <Button variant='dark' className='main-nav'>
            <Link to="/charclass" alt="Character Classes"><span className='icon'><Icon.Clipboard2DataFill />
            </span></Link>
          </Button>
          <Button variant='dark' className='main-nav'>
            <Link to="/SignUp" alt="Sign Up form"><span className='icon'><Icon.PersonAdd /></span></Link>
          </Button>
          <Button variant='dark' className='main-nav main-nav-restricted'>
            <Link to="/DMRoster" alt="DM Group Roster Management"><span className='icon'>
              <Icon.CardList /></span></Link>
          </Button>
        </ButtonGroup>
      </div>
      <div className='container'>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/charace">
            <Charace />
          </Route>
          <Route path="/charclass">
            <Charclass />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/DMRoster">
            <DMRoster />
          </Route>
        </Switch>
      </div>
      <div className='container app-bar'>
        <h1>
          <span className='icon-border'><Icon.Dice1Fill /></span>
          <span className='icon-border'><Icon.Border /></span>
          <span className='icon-border'><Icon.Dice2Fill /></span>
          <span className='icon-border'><Icon.Border /></span>
          <span className='icon-border'><Icon.Dice3Fill /></span>
          <span className='icon-border'><Icon.Border /></span>
          <span className='icon-border'><Icon.Dice4Fill /></span>
          <span className='icon-border'><Icon.Border /></span>
          <span className='icon-border'><Icon.Dice5Fill /></span>
          <span className='icon-border'><Icon.Border /></span>
          <span className='icon-border'><Icon.Dice6Fill /></span>
        </h1>
      </div>
      <div>
        <nav>
          <ul className='container app-bar-bottom'>
            <li>
              <Link to="/Home" alt="Home" className="bottom-links">Home<span className='icon'><Icon.HouseDoor />
              </span></Link>
            </li>
            <li>
              <Link to="/Charace" alt="Character Race or Origin" className="bottom-links">Race/Origin
              <span className='icon'><Icon.Clipboard2Heart /></span></Link>
            </li>
            <li>
              <Link to="/Charclass" alt="Character Class" className="bottom-links">Classes<span className='icon'>
                <Icon.Clipboard2Data /></span></Link>
            </li>
            <li>
              <Link to="/SignUp" alt="New Player Sign Up Form" className="bottom-links">Sign Up Form
              <span className='icon'><Icon.PersonAdd /></span></Link>
            </li>
            <li>
              <Link to="/DMRoster" alt="DM Group Roster Management" className="bottom-links bottom-links-restricted">DM Roster Mgmt
              <span className='icon'><Icon.CardList /></span></Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='lastEditInfo'>
          <p><span className='icon-border'><Icon.CCircle/> Created by J. Helmers</span></p>
      </div>
    </Router>
  );
}
