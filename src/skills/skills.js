import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade';
import ReactGA from 'react-ga';
import "../academics/academics.css";

class Skills extends Component {

  componentWillUpdate(){
    var url = window.location.href;
    if(url.includes("skills")){
        initializeReactGA();
    }
  }

  render() { 
    return (
      <Fade>
        
      </Fade>
    )
  }
}

function initializeReactGA() {
  ReactGA.initialize('UA-132341230-1');
  ReactGA.pageview('/skills');
}

ReactDOM.render(
  <Skills/>,
  document.getElementById('root')
);
export default Skills;