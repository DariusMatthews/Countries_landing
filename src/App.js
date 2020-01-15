import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Country from './components/Country';

/*
  steps to build logic:
    1. Setup states to hold:
      i. user text input search
      ii. filtered continent selection
      iii. countries array info from api
      iv. Specific country details
      v. true/false toggle for light/dark mode
    2. Setup useEffects when:
      i. page initially renders
      ii. country api params update
        - happens when user search or filter continents
      iii. user wants to see specific country details
    3. Map countries across the websites as card components
    4. Setup react router so each card leads to a full page description component of country
*/

function App() {
  const [toggle, setToggle] = useState(true);


  return (
    <Router>
      <div className={toggle ? "App App--light" : "App App--dark"}>
        <Header
          toggle={toggle}
          onClick={() => setToggle(!toggle)}
        />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/country/:alpha3code" component={Country} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
