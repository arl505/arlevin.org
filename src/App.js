import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Home from './welcomePage/home';	
import Academics from './academics/academics';	
import Experiences from './experiences/experiences';	
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar>
            <NavbarBrand tag={Link} to="/">Alec Levin</NavbarBrand>
              <Nav className="NavbarItems">
                <NavItem>
                    <Link to="/academics">Academics </Link>
                </NavItem>

                <NavItem>
                    <Link to="/experience">Experience</Link>
                </NavItem>
              </Nav>

              <Nav>
                <NavItem>Contact & More</NavItem>
              </Nav>
          </Navbar>

        <Switch>
          <Route path="/academics" component={Academics} />
          <Route path="/experience" component={Experiences} />
          <Route path="/" component={Home} /> {/* this line comes last and will be the default (or no matches)*/}
         </Switch>
        </div>
    </BrowserRouter>
    );
  }
}
export default App;
