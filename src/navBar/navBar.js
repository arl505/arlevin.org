import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Home from '../welcomePage/home';	
import Academics from '../academics/academics';	
import Experience from '../experience/experience';	
import Contact from '../contact/contact';	
import About from '../about/about';	
import "../App.css"
import ReactDOM from 'react-dom';
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { slide as Menu } from "react-burger-menu";

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 651;
    let nav;
    if(!isMobile){
      nav = (<Fade>
        <div className="backdrop" style={{"minHeight":"100vh", "height":"100"}}>
        <BrowserRouter>
        <div>
          <div className="NavBar">
            <Navbar >
                <NavbarBrand className="NavbarBrand" tag={NavLink} to="/">Alec Levin</NavbarBrand>
                <Nav>
                
                <NavItem>
                  <NavLink to="/" id="homeTab" exact activeClassName="activeTab" className="NavbarItems">Home</NavLink>
                </NavItem>

                  <NavItem>
                    <NavLink to="/about" activeClassName="activeTab" id="aboutTab" className="NavbarItems">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/academics" activeClassName="activeTab" activeClassName="activeTab" id="academicsTab" className="NavbarItems">Academics</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink to="/experience" activeClassName="activeTab" id="ExperienceTab" className="NavbarItems">Experience</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink to="/contact" activeClassName="activeTab" id="contactTab" className="NavbarItems">Contact & More</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
            </div>
          
          <div>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/academics" component={Academics}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/"  component={Home}/> {/* this line comes last and will be the default (or no matches)*/}
          </Switch>
          </div>
          </div>
      </BrowserRouter>
      </div>
      </Fade>);
    }
   
    else{
      nav = (<BrowserRouter>
        <div id="App">
        <Menu>
          <NavItem>
            <NavLink to="/" id="homeTab" className="NavbarItems" >Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" id="aboutTab" className="NavbarItems">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/academics" id="academicsTab" className="NavbarItems">Academics</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/experience" id="ExperienceTab" className="NavbarItems">Experience</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/contact" id="contactTab" className="NavbarItems">Contact & More</NavLink>
          </NavItem>
        </Menu>
  
        <div id="page-wrap">
        <div className="NavBar">
          <Navbar>
                <NavbarBrand className="NavbarBrand" tag={NavLink} to="/">Alec Levin</NavbarBrand>
                </Navbar>
        </div>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/academics" component={Academics} />
            <Route path="/experience" component={Experience}/>
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} /> {/* this line comes last and will be the default (or no matches)*/}
          </Switch>
        </div>
      </div>
      </BrowserRouter>);
    }
   
      return (
        <div>
          {nav}
        </div>
      )
  }
}


ReactDOM.render(
  <NavBar />,
  document.getElementById('root')
);

export default NavBar;