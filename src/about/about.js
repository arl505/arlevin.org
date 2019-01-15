import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade'
import ReactGA from 'react-ga';
import { Media } from 'reactstrap';
import Project_collage from "./project-collage.png"


class About extends Component {

    componentWillUpdate(){
        var url = window.location.href;
        if(url.includes("about")){
            initializeReactGA();
        }
      }

    render() {
        return (
            <Fade>
                    <div style={{marginTop:"5.5em"}}>
                        <div style={{textAlign:"center"}}>
                          <Media object src={Project_collage} alt="projects" style={{maxWidth:"98vw", maxHeight:"40vh"}}/>
                        </div>
                    </div>
            </Fade>
        )
    }
}

function initializeReactGA() {
    ReactGA.initialize('UA-132341230-1');
    ReactGA.pageview('/about');
  }

ReactDOM.render(
    <About />,
    document.getElementById('root')
  );
export default About;
