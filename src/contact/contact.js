import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade';
import gitLogo from "./github-logo.png";
import gitLogoBlue from "./github-logo-blue.png";
import emailLogo from "./email-logo.png";
import emailLogoBlue from "./email-logo-blue.png";
import linkedinLogo from "./linkedin-logo.png";
import linkedinLogoBlue from "./linkedin-logo-blue.png";
import HoverImage from "react-hover-image";
import ReactGA from 'react-ga';

class Contact extends Component {

    componentWillUpdate(){
        var url = window.location.href;
        if(url.includes("contact")){
            initializeReactGA();
        }
      }

    render() {
        return (
           <Fade>
                <div style={{marginTop:"0"}}>
                    <h1 style={{textAlign:"center", fontWeight:"100", marginTop:"35vh"}}>Let's work together</h1>
                    <div>
                        <h3 className="connectString" style={{textAlign:"center"}}>Connect with me</h3>
                        <div style={{textAlign:"center"}}>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/arl505"><HoverImage className="logo" style={{width:"40px", height:"40xp", margin:"1em"}} src={gitLogo} hoverSrc={gitLogoBlue}/></a>
                            <a target="_blank" rel="noopener noreferrer" href={"mailto:levin.alec@gmail.com?subject=Let's work together!"}><HoverImage className="logo" style={{width:"40px", height:"40xp", margin:"1em"}} src={emailLogo} hoverSrc={emailLogoBlue}/></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alec-levin/"><HoverImage className="logo" style={{width:"40px", height:"40xp", margin:"1em"}} src={linkedinLogo} hoverSrc={linkedinLogoBlue}/></a>
                        </div>
                    </div>
                </div>
           </Fade>
        )
    }
}

function initializeReactGA() {
    ReactGA.initialize('UA-132341230-1');
    ReactGA.pageview('/contact');
  }

ReactDOM.render(
    <Contact />,
    document.getElementById('root')
  );
export default Contact;