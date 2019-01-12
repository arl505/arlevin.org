import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import Home from './welcomePage/home';	
import Academics from './academics/academics';	
import Experiences from './experiences/experiences';	
import Contact from './contact/contact';	
import About from './about/about';	
import "./App.css"
import ReactDOM from 'react-dom';
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { slide as Menu } from "react-burger-menu";



class App extends Component {

  constructor() {
    super();
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
                <NavbarBrand className="NavbarBrand" tag={Link} to="/">Alec Levin</NavbarBrand>
                <Nav>
                <NavItem>
                    <Link to="/" id="homeTab" className="NavbarItems">Home</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/about" id="aboutTab" className="NavbarItems">About</Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/academics" id="academicsTab" className="NavbarItems">Academics</Link>
                  </NavItem>

                  <NavItem>
                    <Link to="/experience" id="ExperienceTab" className="NavbarItems">Experience</Link>
                  </NavItem>

                  <NavItem>
                    <Link to="/contact" id="contactTab" className="NavbarItems">Contact & More</Link>
                  </NavItem>
                </Nav>
            </Navbar>
            </div>
          
          <div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/academics" component={Academics} />
            <Route path="/experience" component={Experiences} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} /> {/* this line comes last and will be the default (or no matches)*/}
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
            <Link to="/" id="homeTab" className="NavbarItems">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about" id="aboutTab" className="NavbarItems">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/academics" id="academicsTab" className="NavbarItems">Academics</Link>
          </NavItem>

          <NavItem>
            <Link to="/experience" id="ExperienceTab" className="NavbarItems">Experience</Link>
          </NavItem>

          <NavItem>
            <Link to="/contact" id="contactTab" className="NavbarItems">Contact & More</Link>
          </NavItem>
        </Menu>
  
        <div id="page-wrap">
        <div className="NavBar">
          <Navbar>
                <NavbarBrand className="NavbarBrand" tag={Link} to="/">Alec Levin</NavbarBrand>
                </Navbar>
        </div>
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/academics" component={Academics} />
            <Route path="/experience" component={Experiences} />
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
  <App />,
  document.getElementById('root')
);

export default App;
