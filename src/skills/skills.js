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
            <ul className="myList">
              <li className="myList">Languages, Frameworks, and Systems
                <ul className="myList">
                  
                  <li className="myListWithBullets">Java</li>
                    <ul className="myList">
                    <li className="myList" style={{marginBottom: '0em'}}>Spring Boot (Gradle + Java)</li>
                    <li className="myList" style={{marginBottom: '0em'}}>Android</li>
                  </ul>
                  

                  <li className="myListWithBullets">JavaScript</li>
                    <ul className="myList">
                      <li className="myList" style={{marginBottom: '0em'}}>React.js</li>
                      <li className="myList" style={{marginBottom: '0em'}}>Express.js</li>
                    </ul>

                  <li className="myListWithBullets">SQL</li>
                  <ul className="myList">
                      <li className="myList" style={{marginBottom: '0em'}}>Microsoft SQL Server (T-SQL)</li>
                      <li className="myList" style={{marginBottom: '0em'}}>MySQL</li>
                    </ul>

                  <li className="myListWithBullets">System administration</li>
                    <ul className="myList">
                      <li className="myList" style={{marginBottom: '0em'}}>CentOS 8</li>
                      <li className="myList" style={{marginBottom: '0em'}}>Ubuntu</li>
                      <li className="myList" style={{marginBottom: '0em'}}>Red Hat</li>
                      <li className="myList" style={{marginBottom: '0em'}}>WindowsServer</li>
                    </ul>

                  <li className="myListWithBullets">C++</li>
                </ul>
              </li>
              
              <li className="myList">Clouds
                <ul className="myList">
                  <li className="myListWithBullets">AWS</li>
                  <li className="myListWithBullets">Azure</li>
                  <li className="myListWithBullets">Pivotal Cloud Foundry</li>
                  <li className="myListWithBullets">OpenShift</li>
                </ul>
              </li>

              <li className="myList">App patterns
                <ul className="myList">
                  <li className="myListWithBullets">System design and architecture (high performance, scalability, and reliability)</li>
                  <li className="myListWithBullets">Web security (OAuth 1 & 2)</li>
                  <li className="myListWithBullets">REST API design and implementation</li>
                  <li className="myListWithBullets">GitHub + Jenkins CI/CD</li>
                </ul>
              </li>
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