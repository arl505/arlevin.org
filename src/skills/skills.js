import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade';
import ReactGA from 'react-ga';

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
        <div style={{marginTop:"5.5em", marginBottom:"2em"}}>   
          <ul className="myList">
            <li className="myList"><h3>Skills</h3></li>
              <ul>
                <div style={{marginBottom: "2em"}}>
                  <li className="myList">Java</li>
                  <li className="myList">GoLang</li>
                  <li className="myList">Ruby</li>
                  <li className="myList">JavaScript (React)</li>
                  <li className="myList">SwiftUI</li>
                </div>

                <div style={{marginBottom: "2em"}}>
                  <li className="myList">Linux command line</li>
                  <li className="myList">Spring and SpringBoot</li>
                  <li className="myList">AWS</li>
                  <li className="myList">Azure</li>
                  <li className="myList">Cloud Foundry (VMware Tanzu)</li>
                </div>
                
                <div>
                  <li className="myList">Backend service architecture</li>
                  <li className="myList">Critical system operations</li>
                  <li className="myList">Deployment pipeline design and Jenkins</li>
                  <li className="myList">Android (Java)</li>
                </div>
              </ul>
          </ul>
        </div>
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