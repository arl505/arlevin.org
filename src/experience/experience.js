import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade';
import ReactGA from 'react-ga';
import "../academics/academics.css";

class Experience extends Component {

    componentWillUpdate(){
        var url = window.location.href;
        if(url.includes("experience")){
            initializeReactGA();
        }
      }

    render() {
        return (
            <Fade>
                <div style={{marginTop:"5.5em", marginBottom:"2em"}}>
                    <ul className="myList">
                        <li className="myList"><h3>Work</h3></li>
                        <ul className="myList">

                            <li className="myList">Ford Motor Company - Lead Software Engineer (June 2019 - December 2021)
                                <ul className="myListWithBullets">
                                    <li className="myListWithBullets">Team tech lead, focused on high level direction of product and team</li>
                                    <li className="myListWithBullets">Developed and maintained high performance backend system processing millions of vehicle transactions per day, at several hundred transactions per second</li>
                                    <li className="myListWithBullets">Led team on experiments of collaborative programming, test driven development, trunk based development, pipeline automation, and other modern agile practices</li>
                                    <li className="myListWithBullets">Enabled vehicle connectivity using Spring Boot with various OAuth 2.0 flows</li>
                                    <li className="myListWithBullets">Started as agency employee via TekSystems, Inc. (June 2019 - November 2020)</li>
                                </ul>
                            </li>

                            <li className="myList">CodePath (Supported by Facebook, Microsoft, Google, Amazon, and AirBnB) - Android Instructor for Humboldt State University (October 2018 - May 2019)
                                <ul className="myListWithBullets">
                                    <li className="myListWithBullets">Taught a for-credit university course over a 15 week term, focused on entry level Android programming</li> 
                                    <li className="myListWithBullets">Led project based learning covering: Java, C#, Xamarin, (A)XML, Gradle, and Git</li>
                                </ul>
                            </li>

                            <li className="myList">Planet Rocket - Web Engineer (March 2018 - May 2019)
                                <ul className="myListWithBullets">
                                    <li className="myListWithBullets">Maintained <a href="https://pr1.arlevin.org">legacy LAMP stack application</a> (Linux, Apache, MySQL, and PHP)</li>
                                    <li className="myListWithBullets">Wrote <a href="https://pr2.arlevin.org">new MERN stack application</a> (MongoDB, Express.js, React.js, and Node.js)</li>
                                    <li className="myListWithBullets">Administered MERN web app on AWS EC2 Linux VM with NGINX</li>
                                 </ul>
                            </li>

                            <li className="myList">Ernest Orlando Lawrence Berkeley National Laboratory - Computing Sciences Summer Student Researcher (Summer 2015)
                                <ul className="myListWithBullets">
                                    <li className="myListWithBullets">Constructed advanced visualizations of high frequency weather data in order to perform quality assurance and correction of the data</li>
                                    <li className="myListWithBullets">Used the Python scientific computing library, SciPy, and specifically the NumPy and Matplotlib packages</li>
                                </ul>
                            </li>


                        </ul>

                        <li className="myList"><h3>Projects</h3></li>
                        <ul className="myList">
                            <li className="myList">
                                To access my portfolio of projects, view my <a target="_blank" rel="noopener noreferrer" href="https://github.com/arl505">GitHub</a>.
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
    ReactGA.pageview('/experience');
  }

ReactDOM.render(
    <Experience />,
    document.getElementById('root')
  );
export default Experience;
