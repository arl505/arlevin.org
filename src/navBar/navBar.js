import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Home from '../welcomePage/home';	
import Academics from '../academics/academics';	
import Experience from '../experience/experience';	
import Contact from '../contact/contact';	
import About from '../about/about';	
import "../App.css"
import ReactDOM from 'react-dom';
import {Navbar, Media, Button, NavbarBrand, Nav, NavItem, Popover, PopoverBody, PopoverHeader} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { slide as Menu } from "react-burger-menu";
import HoverImage from "react-hover-image";
import gitLogo from "./github-logo.png";
import gitLogoBlue from "./github-logo-blue.png";
import emailLogo from "./email-logo.png";
import emailLogoBlue from "./email-logo-blue.png";
import linkedinLogo from "./linkedin-logo.png";
import linkedinLogoBlue from "./linkedin-logo-blue.png";
import styled from 'styled-components'
import ReactGA, { ga } from 'react-ga';
import { MobileView, isMobile as trueIsMobile} from 'react-device-detect';
import xSymbol from "./x-symbol.png"

const MyNavLink = ({className, children}) => (
  <NavLink to="/" className={className}> {children}</NavLink>
);


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

const MyBottomDiv = ({className, children}) => (
  <div className={className}>{children}</div>
);

const StyledBottomDiv = styled(MyBottomDiv)`
 display: ${props => props.inputDisplay || "none"}; 
 position: fixed;
 bottom: 0;
 height: auto;
 width: 100vw;
 background-color: #353942;

 @media (max-width: 652px){
  height: auto;
 }
`;

const StyledBottomDivPhantom = styled(MyBottomDiv)`
 display: ${props => props.inputDisplay || "none"}; 
 height: ${props => props.displayHeight || "10vh"};
 width: 100vw;
`;

class NavBar extends Component { 

  constructor(props) {
    super(props);

    var blockOrNone;

    if(trueIsMobile){
      blockOrNone = "block";
    }
    else{
      blockOrNone = "none";
    }

    this.toggle = this.toggle.bind(this);

      this.state = {
        width: window.innerWidth,
        popoverOpen: false,
        homeColor: "#B8B8B8",
        showBottomDiv: blockOrNone,
       }
  }

  closeBottomDiv(){
    this.setState({
      showBottomDiv: !this.state.showBottomDiv
    });
  }


componentDidMount(){
  var url = window.location.href;
  if(url.includes("contact"))
  {
    this.setState({
      popoverOpen: true
    });
    if(this.state.popoverOpen === true){
        initializeReactGA();
    }
  }
}

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  closePopover() {
    this.setState({
      popoverOpen: false
    });
  }

  openPopover() {
    this.setState({
      popoverOpen: true
    });
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
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

  componentDidUpdate(){
    var url = window.location.href;
    if(url.includes("contact")){
      if(this.state.homeColor !== "#FFFFFF")
      {
        this.setState({
          homeColor: "#FFFFFF",
         });
      }
    }
    else if(url.includes("about") || url.includes("academics") || url.includes("experience")){
      if(this.state.homeColor !== "#B8B8B8")
      {
        this.setState({
          homeColor: "#B8B8B8",
         });
      }
    }
    else{
      if(this.state.homeColor !== "#FFFFFF")
      {
        this.setState({
          homeColor: "#FFFFFF",
         });
      }
    }
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 651;
    let nav;
    if(!isMobile){
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
                    <NavLink to="/about" activeClassName="activeTab" id="aboutTab" className="NavbarItemsWithPadding">About</NavLink>
                  </NavItem>

                  <NavItem onClick={() => this.closePopover()}>
                    <NavLink to="/academics" activeClassName="activeTab" id="academicsTab" className="NavbarItemsWithPadding">Academics</NavLink>
                  </NavItem>
                  
                  <NavItem onClick={() => this.closePopover()}>
                    <NavLink to="/experience" activeClassName="activeTab" id="ExperienceTab" className="NavbarItemsWithPadding">Experience</NavLink>
                  </NavItem>
                  
                  <NavItem id="PopoverFocus">
                  <Button style={{ padding:"0em", margin:"0em", border:"none", backgroundColor:"transparent", verticalAlign:"baseline"}}>
                    <NavLink to="/contact" onTouchEnd={e => e.preventDefault()} onClick={e => {e.preventDefault(); initializeReactGA()}}  id="Popover1" className="NavbarItemsWithPadding">Contact</NavLink>
                    </Button>
                    <Popover style={{textAlign:"center"}} placement="bottom" isOpen={this.state.popoverOpen} target="PopoverFocus" toggle={this.toggle}>
                      <PopoverHeader>Connect with me</PopoverHeader>
                      <PopoverBody>
                      <div style={{textAlign:"center"}}>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/arl505"><HoverImage className="logo" style={{width:"40px", height:"40xp", margin:"1em"}} src={gitLogo} hoverSrc={gitLogoBlue}/></a>
                            <a target="_blank" rel="noopener noreferrer" href={"mailto:levin.alec@gmail.com?subject=Let's work together!"}><HoverImage className="logo" style={{width:"40px", height:"40xp", margin:"1em"}} src={emailLogo} hoverSrc={emailLogoBlue}/></a>
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
            <Route path="/about" component={About}/>
            <Route path="/academics" component={Academics}/>
            <Route path="/experience" component={Experience}/>
            <Route path="/" component={Home}/> {/* this line comes last and will be the default (or no matches)*/}
          </Switch>
          </div>
          <MobileView>
         
         <StyledBottomDivPhantom displayHeight="10vh" inputDisplay={this.state.showBottomDiv}/>
                   <StyledBottomDiv inputDisplay={this.state.showBottomDiv}>
          <Media object src={xSymbol} onClick={() => this.closeBottomDiv()} alt="x-logo" style={{height:"15px", width:"15px", position:"absolute", top:"1vh", right:"5vw"}}/>

            <p style={{textAlign:"center", color:"white", margin:"0em", fontSize:"80%", marginTop:"1vh"}}>
              Add this site to your home screen.
            </p>

            <p style={{textAlign:"center", color:"white", fontSize:"80%"}}>
              This is a Progressive Web App, meaning that once installed, it will run offline.
            </p>


          </StyledBottomDiv>
        </MobileView>
          </div>
      </BrowserRouter>
      </div>
      );
    }
   
    else{
      nav = (<BrowserRouter>
        <div id="App">
        <input type="text" autoFocus="autofocus" style={{"display":"none"}} />
        <Menu isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}>
         <NavItem className="noBox" tabIndex="-1">
            <NavLink to="/" exact id="homeTab" className="NavbarItems" activeClassName="activeTab" onClick={() => this.closeMenu()}>Home</NavLink>
          </NavItem>
          <NavItem className="noBox" tabIndex="-1">
            <NavLink to="/about" id="aboutTab" activeClassName="activeTab" className="NavbarItems" onClick={() => this.closeMenu()}>About</NavLink>
          </NavItem>
          <NavItem className="noBox" tabIndex="-1">
            <NavLink to="/academics" id="academicsTab" className="NavbarItems" activeClassName="activeTab" onClick={() => this.closeMenu()}>Academics</NavLink>
          </NavItem>

          <NavItem className="noBox" tabIndex="-1">
            <NavLink to="/experience" id="ExperienceTab" className="NavbarItems" activeClassName="activeTab" onClick={() => this.closeMenu()}>Experience</NavLink>
          </NavItem>

          <NavItem className="noBox" tabIndex="-1">
            <NavLink to="/contact" id="contactTab" className="NavbarItems" disabled="disabled" activeClassName="activeTab" onClick={() => {this.closeMenu(); initializeReactGA()}}>Contact</NavLink>
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
        
        <MobileView>
          <StyledBottomDivPhantom displayHeight="15vh" inputDisplay={this.state.showBottomDiv}/>
          <StyledBottomDiv inputDisplay={this.state.showBottomDiv}>
          <Media object src={xSymbol} onClick={() => this.closeBottomDiv()} alt="x-logo" style={{height:"15px", width:"15px", position:"absolute", top:".5vh", right:"3vw"}}/>

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

ReactDOM.render(
  <NavBar />,
  document.getElementById('root')
);


export default NavBar;
