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
        <h5 className='app-bar'><span className='icon-border'><Icon.Dice3/></span>Scroll for initiative<span className='icon-border'>
        <Icon.Dice5/></span></h5>
      </div>
      <div className='container'>
        <ButtonGroup className='navbar btn-group-lg'>
          <Button variant='dark' className='main-nav' href="/home" alt="Home">
            Home<span className='icon'><Icon.HouseDoorFill /></span>
          </Button>
          <Button variant='dark' className='main-nav' href="/charace" alt="Character Race or Origin">
            Race/Origin<span className='icon'><Icon.Clipboard2HeartFill /></span>
          </Button>
          <Button variant='dark' href="/charclass" alt="Character Classes" className='main-nav'>
            Classes<span className='icon'><Icon.Clipboard2DataFill /></span>
          </Button>
          <Button variant='dark' className='main-nav' href="/SignUp" alt="Sign Up form">
            Sign Up<span className='icon'><Icon.PersonAdd /></span>
          </Button>
          <Button variant='dark' className='main-nav main-nav-restricted' href="/DMRoster" alt="DM Group Roster Management">
            <span className='icon'>DM Mgmt<Icon.CardList /></span>
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

      <div className='container app-bar-bottom'>
        <p>About<br />
          <Link to="/Home" alt="Home" className="bottom-links">Home
            </Link>
        </p>
        <p>Character<br />
          <Link to="/Charace" alt="Character Race or Origin" className="bottom-links">Race/Origin
            </Link><br />
          <Link to="/Charclass" alt="Character Class" className="bottom-links">Classes
            </Link>
        </p>
        <p>Gameplay<br />
          <Link to="/SignUp" alt="New Player Sign Up Form" className="bottom-links">Sign Up Form
            </Link><br/>
          <Link to="/DMRoster" alt="DM Group Roster Management" className="bottom-links bottom-links-restricted">DM Roster Mgmt
            </Link>
        </p>
      </div>
      
      <div className='lastEditInfo app-bar-bottom'>
          <p><span className='icon-border'>Created by J. Helmers with images and other help from <Link to="https://www.dndbeyond.com/">D&DBeyond.com</Link></span></p>
      </div>
    </Router>
  );
}
