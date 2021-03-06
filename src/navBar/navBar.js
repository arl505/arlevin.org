import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Home from '../welcomePage/home';	
import Academics from '../academics/academics';	
import Experience from '../experience/experience';	
import Contact from '../contact/contact';	
import Skills from '../skills/skills';	
import "../App.css"
import ReactDOM from 'react-dom';
import {Navbar, Media, Button, NavbarBrand, Nav, NavItem, Popover, PopoverBody, PopoverHeader} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { slide as Menu } from "react-burger-menu";
import HoverImage from "react-hover-image";
import gitLogo from "../contact/github-logo.png";
import gitLogoBlue from "../contact/github-logo-blue.png";
import emailLogo from "../contact/email-logo.png";
import emailLogoBlue from "../contact/email-logo-blue.png";
import linkedinLogo from "../contact/linkedin-logo.png";
import linkedinLogoBlue from "../contact/linkedin-logo-blue.png";
import styled from 'styled-components'
import ReactGA, { ga } from 'react-ga';
import { MobileView, isMobile as trueIsMobile} from 'react-device-detect';
import xSymbol from "./x-symbol.png"

// nav bar is maybe not the best name, the navbar actually takes up the whole screen
// the bottom portion of the (nav bar) screen renders whatever component the 
// user clicks on and thus this file controls the routing 

// load a constant navlink to use as in styled component
const MyNavLink = ({className, children}) => (
  <NavLink to="/" className={className}> {children}</NavLink>
);

// create styled component with above navlink
const StyledNavLink = styled(MyNavLink)`
    color: ${props => props.inputColor || "#B8B8B8"};
    margin: 5px;
    text-decoration: none;
    font-weight: 300;
    padding-bottom: 1.5314em;
    padding-top: 1.5314em;
    padding-left: .5em;
    padding-right: .5em
    &:hover {
      color: #E8E8E8;
      text-decoration: none;
    }
`;

// load a constant div to use as in styled component 
const MyBottomDiv = ({className, children}) => (
  <div className={className}>{children}</div>
);

// create styled component with above div
const StyledBottomDiv = styled(MyBottomDiv)`
 display: ${props => props.inputDisplay || "none"}; 
 position: fixed;
 bottom: 0;
 height: auto;
 width: 100vw;
 background-color: #353942;
 border-top-left-radius: 20px;
 border-top-right-radius: 20px;

 @media (max-width: 652px){
  height: auto;
 }
`;

// create phantom styled component with above div
// this just makes it so that the above div actually occupies space on the dom,
// otherwise the div, while fixed to the bottom has content unreadable beneath it
const StyledBottomDivPhantom = styled(MyBottomDiv)`
 display: ${props => props.inputDisplay || "none"}; 
 height: ${props => props.displayHeight || "10vh"};
 width: 100vw;
`;

 // set initial width, initially the popover is closed,
 // the home button is colored inactive, and appropriately set PWA bottom div
class NavBar extends Component { 
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      width: window.innerWidth,
      popoverOpen: false,
      homeColor: "#B8B8B8",
      showBottomDiv: (trueIsMobile)?"block":"none",
    }
  }

  // if the user is on /contact, open the contact popover (non-mobile only)
  componentDidMount(){
    var url = window.location.href;
    if(url.includes("contact"))
    {
      this.setState({
        popoverOpen: true
      });
      initializeReactGA();
    }
  }


  // listen for responsive resizing
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  // appropriately set the active home tab (browser only) color, FFFFFF if active
  componentDidUpdate(){
    var url = window.location.href;

    // there is no contact tab in browser, set home active
    if(url.includes("contact")){
      if(this.state.homeColor !== "#FFFFFF")
      {
        this.setState({
          homeColor: "#FFFFFF",
         });
      }
    }

    // on other tab, set home inactive
    else if(url.includes("skills") || url.includes("academics") || url.includes("experience")){
      if(this.state.homeColor !== "#B8B8B8")
      {
        this.setState({
          homeColor: "#B8B8B8",
         });
      }
    }

    // home, set active
    else{
      if(this.state.homeColor !== "#FFFFFF")
      {
        this.setState({
          homeColor: "#FFFFFF",
         });
      }
    }
  }
  

  // on state change, save current state
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }


  // below is several functions that I use to conveniently 
  // manipulate my components, this could probably be cleaned up significantly

  openPopover() {
    this.setState({
      popoverOpen: true
    });
  }

  closePopover() {
    this.setState({
      popoverOpen: false
    });
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  closeBottomDiv(){
    this.setState({
      showBottomDiv: !this.state.showBottomDiv
    });
  }
  
  closeMenu () {
    this.setState({menuOpen: false})
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
    if(window.innerWidth < 652){
      this.closePopover();
    }
    else{
      if(window.location.href.includes("contact")){
        this.openPopover();
      }
    }
  };

  render() {
    const { width } = this.state;
    const isSmall = width <= 651;
    let nav;

    // make a nav bar for if not mobile and if not too small,
    // else make navbar with hamburger menu
    if((!trueIsMobile) && (!isSmall)){
      nav = (
        <div className="backdrop" style={{"minHeight":"100vh", width:"100vw", "height":"100"}}>
          <BrowserRouter>
            <div>
              <Fade>
                <div className="NavBar" >
                  <Navbar >
                    <NavbarBrand onClick={() => this.closePopover()} className="NavbarBrand" tag={NavLink} to="/">Alec Levin</NavbarBrand>
                    
                    <Nav>                  
                      <NavItem onClick={() => this.closePopover()}>
                        <StyledNavLink to="/" id="homeTab" exact inputColor={this.state.homeColor}>Home</StyledNavLink>
                      </NavItem>

                      <NavItem onClick={() => this.closePopover()}>
                        <NavLink to="/academics" activeClassName="activeTab" id="academicsTab" className="NavbarItemsWithPadding">Academics</NavLink>
                      </NavItem>
                  
                      <NavItem onClick={() => this.closePopover()}>
                        <NavLink to="/experience" activeClassName="activeTab" id="ExperienceTab" className="NavbarItemsWithPadding">Experience</NavLink>
                      </NavItem>

                      <NavItem onClick={() => this.closePopover()}>
                        <NavLink to="/skills" activeClassName="activeTab" id="skillsTab" className="NavbarItemsWithPadding">Skills</NavLink>
                      </NavItem>

                      <NavItem onClick={() => this.closePopover()}>
                        <a target="_blank" rel="noopener noreferrer" href="/resume.pdf" id="ExperienceTab" onClick={e => {initializeReactGA2();}}  className="NavbarItemsWithPadding">Résumé</a>
                      </NavItem>
                  
                      <NavItem id="PopoverFocus">
                        <Button style={{ padding:"0em", margin:"0em", border:"none", backgroundColor:"transparent", verticalAlign:"baseline"}}>
                          <NavLink to="/contact" onTouchEnd={e => e.preventDefault()} onClick={e => {e.preventDefault(); initializeReactGA();}}  id="Popover1" className="NavbarItemsWithPadding">Contact</NavLink>
                        </Button>
                        
                        <Popover style={{textAlign:"center"}} placement="bottom" isOpen={this.state.popoverOpen} target="PopoverFocus" toggle={this.toggle}>
                          <PopoverHeader>Connect with me</PopoverHeader>
                          <PopoverBody>
                            <div style={{textAlign:"center"}}>
                              <a target="_blank" rel="noopener noreferrer" href="https://github.com/arl505"><HoverImage className="logo" style={{width:"40px", height:"40xp", margin:"1em"}} src={gitLogo} hoverSrc={gitLogoBlue}/></a>
                              <a  href={"mailto:alec@arlevin.org?subject=Let's work together!"}><HoverImage className="logo" style={{width:"40px", height:"40xp", margin:"1em"}} src={emailLogo} hoverSrc={emailLogoBlue}/></a>
                              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alec-levin/"><HoverImage className="logo" style={{width:"40px", height:"40xp", margin:"1em"}} src={linkedinLogo} hoverSrc={linkedinLogoBlue}/></a>
                            </div>
                          </PopoverBody>
                        </Popover>
                        
                      </NavItem>

                    </Nav>
                  </Navbar>
                </div>
              </Fade>
            
              <div onClick={() => this.closePopover()}>
                <Switch>
                  {/* <Redirect from='/contact' to='/'/> */}
                  <Route path="/contact" component={Home}/>
                  <Route path="/skills" component={Skills}/>
                  <Route path="/academics" component={Academics}/>
                  <Route path="/experience" component={Experience}/>
                  <Route path="/" component={Home}/> {/* this line comes last and will be the default (or no matches)*/}
                </Switch>
              </div>
            </div>
          </BrowserRouter>
      </div>
      );}


    else{
      nav = (
        <BrowserRouter>
          <div id="App">
            <input type="text" autoFocus="autofocus" style={{"display":"none"}} />
            <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
              <NavItem className="noBox" tabIndex="-1">
                <NavLink to="/" exact id="homeTab" className="NavbarItems" activeClassName="activeTab" onClick={() => this.closeMenu()}>Home</NavLink>
              </NavItem>
            
              <NavItem className="noBox" tabIndex="-1">
                <NavLink to="/academics" id="academicsTab" className="NavbarItems" activeClassName="activeTab" onClick={() => this.closeMenu()}>Academics</NavLink>
              </NavItem>

              <NavItem className="noBox" tabIndex="-1">
                <NavLink to="/experience" className="NavbarItems" activeClassName="activeTab" onClick={() => this.closeMenu()}>Experience</NavLink>
              </NavItem>

              <NavItem className="noBox" tabIndex="-1">
                <NavLink to="/skills" id="skillsTab" activeClassName="activeTab" className="NavbarItems" onClick={() => this.closeMenu()}>Skills</NavLink>
              </NavItem>

              <NavItem className="noBox" tabIndex="-1">
                <a target="_blank" rel="noopener noreferrer" href="/resume.pdf" onClick={e => {initializeReactGA2();}} className="NavbarItems">Résumé</a>
              </NavItem>

              <NavItem className="noBox" tabIndex="-1">
                <NavLink to="/contact" id="contactTab" className="NavbarItems" disabled="disabled" activeClassName="activeTab" onClick={() => {this.closeMenu(); initializeReactGA();}}>Contact</NavLink>
              </NavItem>
            </Menu>
    
            <div id="page-wrap">
              <div className="NavBar">
                <Navbar>
                  <NavbarBrand className="NavbarBrand" tag={NavLink} to="/">Alec Levin</NavbarBrand>
                </Navbar>
              </div>
              <Switch>
                <Route path="/skills" component={Skills} />
                <Route path="/academics" component={Academics} />
                <Route path="/experience" component={Experience}/>
                <Route path="/contact" component={Contact} />
                <Route path="/" component={Home} /> {/* this line comes last and will be the default (or no matches)*/}
              </Switch>
            </div>
          
            <MobileView>
              <StyledBottomDivPhantom displayHeight="15vh" inputDisplay={this.state.showBottomDiv}/>
              <StyledBottomDiv inputDisplay={this.state.showBottomDiv}>
                <Media object src={xSymbol} onClick={() => this.closeBottomDiv()} alt="x-logo" style={{height:"15px", width:"15px", position:"absolute", top:".9vh", right:"3vw"}}/>

                <p style={{textAlign:"center", color:"white", margin:"0em", fontSize:"80%", marginTop:"1vh"}}>
                  Add this site to your home screen.
                </p>

                <p style={{textAlign:"center", color:"white", fontSize:"80%"}}>
                  This is a Progressive Web App, meaning that once installed, it will run offline.
                </p>
              </StyledBottomDiv>
            </MobileView>
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

function initializeReactGA() {
  ReactGA.initialize('UA-132341230-1');
  ga("send", "event", "Contact", "clicked")
}

function initializeReactGA2() {
  ReactGA.initialize('UA-132341230-1');
  ga("send", "event", "resume", "viewed")
}

ReactDOM.render(
  <NavBar />,
  document.getElementById('root')
);


export default NavBar;
