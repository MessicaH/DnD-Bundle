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
        <h1><span className='icon'><Icon.Hammer/></span>D&D Starter Pack Bundle<span className='icon'><Icon.HeartArrow/></span></h1>
        <h5><span className='icon'><Icon.Dice3/></span>Scroll for initiative<span className='icon'><Icon.Dice5/></span></h5>
      </div>
      <div className='container-fluid'>
        <ButtonGroup className='navbar'>
          <Button variant='outline-dark'>
            <span className='icon'>Home<Icon.HouseDoorFill /><Link to="/home" alt="Home"></Link></span>
          </Button>
          <Button variant='outline-dark'>
            <Link to="/charace" alt="Character Race or Origin">Races/Origin<span className='icon'><Icon.Clipboard2HeartFill /></span></Link>
          </Button>
          <Button variant='outline-dark'>
            <Link to="/charclass" alt="Character Classes">Classes<span className='icon'><Icon.Clipboard2DataFill /></span></Link>
          </Button>
          <Button variant='outline-dark'>
            <Link to="/SignUp" alt="Sign Up form">Sign Up<span className='icon'><Icon.PersonAdd /></span></Link>
          </Button>
          <Button variant='outline-dark'>
            <Link to="/DMRoster" alt="DM Group Roster Management">DM Roster<span className='icon'><Icon.CardList /></span></Link>
          </Button>
        </ButtonGroup>
      </div>
      <div>
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
      <div>
        <h1 className='container-fluid'>
          <span className='icon'><Icon.Dice1Fill /></span>
          <span className='icon'><Icon.Border /></span>
          <span className='icon'><Icon.Dice2Fill /></span>
          <span className='icon'><Icon.Border /></span>
          <span className='icon'><Icon.Dice3Fill /></span>
          <span className='icon'><Icon.Border /></span>
          <span className='icon'><Icon.Dice4Fill /></span>
          <span className='icon'><Icon.Border /></span>
          <span className='icon'><Icon.Dice5Fill /></span>
          <span className='icon'><Icon.Border /></span>
          <span className='icon'><Icon.Dice6Fill /></span>
        </h1>
        <nav>
          <ul className='app-bar'>
            <li>
              <Link to="/Home">Home<span className='icon'><Icon.HouseDoor /></span></Link>
            </li>
            <li>
              <Link to="/Charace">Race/Origin<span className='icon'><Icon.Clipboard2Heart /></span></Link>
            </li>
            <li>
              <Link to="/Charclass">Classes<span className='icon'><Icon.Clipboard2Data /></span></Link>
            </li>
            <li>
              <Link to="/SignUp">Sign Up Form<span className='icon'><Icon.PersonAdd /></span></Link>
            </li>
            <li>
              <Link to="/DMRoster">DM Roster Mgmt<span className='icon'><Icon.CardList /></span></Link>
            </li>
          </ul>
        </nav>
        </div>
    </Router>
  );
}
