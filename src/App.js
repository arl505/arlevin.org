import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Home from './welcomePage/home';	
import Academics from './academics/academics';	
import Experiences from './experiences/experiences';	
import Contact from './contact/contact';	
import "./App.css"
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="backdrop" style={{"height":"100vh"}}>
          <Navbar >
            <NavbarBrand className="NavbarBrand" tag={Link} to="/">Alec Levin</NavbarBrand>
              <Nav>
                <NavItem>
                  <Link to="/academics" id="academicsTab" className="NavbarItems">Academics </Link>
                </NavItem>

                <NavItem>
                  <Link to="/experience" id="ExperienceTab" className="NavbarItems">Experience</Link>
                </NavItem>

                <NavItem>
                  <Link to="/contact" id="contactTab" className="NavbarItems">Contact & More</Link>
                </NavItem>
              </Nav>
          </Navbar>

        <Switch>
          <Route path="/academics" component={Academics} />
          <Route path="/experience" component={Experiences} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} /> {/* this line comes last and will be the default (or no matches)*/}
         </Switch>
        </div>
    </BrowserRouter>
    );
  }
}
export default App;
