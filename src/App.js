import React, { Component } from 'react';
import logo from './Images/logo.svg';
import './Css/App.css';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

import HomePage from './HomePage';

import Overview from './About/Overview';
import Employees from './About/Employees';
import Objectives from './About/Objectives';

import Board from './About/Executive/Board';
import Accounting from './About/Executive/Accounting';

import Education from './About/Executive/Sub/Education';
import Trade from './About/Executive/Sub/Trade';
import Loan from './About/Executive/Sub/Loan';

import Children from './Deposits/Children';
import General from './Deposits/General';
import Periodic from './Deposits/Periodic';
import Regular from './Deposits/Regular';
import Women from './Deposits/Women';

import Agriculture from './Credits/Agriculture';
import Business from './Credits/Business';
import Hire from './Credits/Hire';
import HouseHold from './Credits/HouseHold';
import Industrial from './Credits/Industrial';

import Gallery from './Gallery';
import Contact from './Contact';
import SignIn from './SignIn';

import Register from './Register';

import Terms from './Terms';
import Policy from './Policy';






class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'homepage'
    }
  }

  render() {
    return (
      <div id="mainBackground">
  			<div className ="mainHead">
        <Header />
        <NavBar />

        <BrowserRouter>
          <div>
          <Route exact path= "/" component=  {HomePage} />
          <Route path="/homepage" component = {HomePage} />

          <Route path="/overview" component = {Overview} />
          <Route path="/objectives" component = {Objectives} />
          <Route path="/employees" component = {Employees} />

          <Route path="/board" component = {Board} />
          <Route path="/accounting" component = {Accounting} />

          <Route path="/education" component = {Education} />
          <Route path="/loan" component = {Loan} />
          <Route path="/trade" component = {Trade} />

          <Route path="/regular" component = {Regular} />
          <Route path="/general" component = {General} />
          <Route path="/periodic" component = {Periodic} />
          <Route path="/women" component = {Women} />
          <Route path="/children" component = {Children} />

          <Route path="/agriculture" component = {Agriculture} />
          <Route path="/business" component = {Business} />
          <Route path="/hire" component = {Hire} />
          <Route path="/household" component = {HouseHold} />
          <Route path="/industrial" component = {Industrial} />

          <Route path="/gallery" component = {Gallery} />
          <Route path="/contact" component = {Contact} />
          <Route path="/signin" component = {SignIn} />

          <Route path="/terms" component = {Terms} />

          <Route path="/policy" component = {Policy} />
          <Route path="/register" component = {Register} />
        </div>
        </BrowserRouter>

        </div>

      <Footer />
  	</div>
    );
  }
}

export default App;
