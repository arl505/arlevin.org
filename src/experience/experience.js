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

                            <li className="myList">Amazon Web Services (AWS) — EC2 Nitro: Software Engineer, EC2 Nitro (June 2022 - Present), Seattle WA
                                <ul className="myListWithBullets">
                                    <li className="myListWithBullets">Extended and maintained EC2 Nitro monitoring system, responsible for transport and delivery of all EC2 Nitro logs and metrics (a petabyte scale task)</li>
                                    <li className="myListWithBullets">Delivered 70% reduction in service Java heap memory usage (p100) by writing a GoLang tool to allow us to remotely execute heap dumps, and then analyzing the heap dumps to identify bugs in the code leading to memory leak</li>
                                    <li className="myListWithBullets">Improved duration to apply monitoring system changes by 80% through deep diving Java and Ruby code and refactoring existing code to eliminate wasteful calls </li>
                                    <li className="myListWithBullets">Decreased technical ticket queue depth by 67% via relentless drive to respond faster to customer issues and to reduce overall operator burden</li>
                                    <li className="myListWithBullets">Owned service launch into 6 new regions: coordinated infrastructure delivery and dependency management, as well as stood up the service, tooling and monitoring</li>
                                </ul>
                            </li>


                            <li className="myList">Ford Motor Company: Lead Software Engineer (June 2019 - December 2021), Detroit MI
                                <ul className="myListWithBullets">
                                    <li className="myListWithBullets">Team tech lead, focused on high level direction of product and team</li>
                                    <li className="myListWithBullets">Developed and maintained high performance backend system processing millions of vehicle transactions per day, at several hundred transactions per second</li>
                                    <li className="myListWithBullets">Led team on experiments of collaborative programming, test driven development, trunk based development, pipeline automation, and other modern agile practices</li>
                                    <li className="myListWithBullets">Enabled vehicle connectivity using Spring Boot with various OAuth 2.0 flows</li>
                                    <li className="myListWithBullets">Started as agency employee via TekSystems, Inc. (June 2019 - November 2020)</li>
                                </ul>
                            </li>

                            <li className="myList">Planet Rocket: Web Engineer (March 2018 - May 2019), Arcata CA
                                <ul className="myListWithBullets">
                                    <li className="myListWithBullets">Maintained <a href="https://pr1.arlevin.org">legacy LAMP stack application</a> (Linux, Apache, MySQL, and PHP)</li>
                                    <li className="myListWithBullets">Wrote <a href="https://pr2.arlevin.org">new MERN stack application</a> (MongoDB, Express.js, React.js, and Node.js)</li>
                                    <li className="myListWithBullets">Administered MERN web app on AWS EC2 Linux VM with NGINX</li>
                                 </ul>
                            </li>

                            <li className="myList">CodePath (Supported by Facebook, Microsoft, Google, Amazon, and AirBnB): Android Instructor for Humboldt State University (October 2018 - May 2019), Arcata CA
                                <ul className="myListWithBullets">
                                    <li className="myListWithBullets">Taught a for-credit university course over a 15 week term, focused on entry level Android programming</li> 
                                    <li className="myListWithBullets">Led project based learning covering: Java, C#, Xamarin, (A)XML, Gradle, and Git</li>
                                </ul>
                            </li>

                            <li className="myList">Ernest Orlando Lawrence Berkeley National Laboratory: Computing Sciences Summer Student Researcher (Summer 2015), Berkeley CA
                                <ul className="myListWithBullets">
                                    <li className="myListWithBullets">Used Pythons’s NumPy (SciPy) and MatPlotLib to construct visualizations of high frequency weather data (AmeriFlux) to perform quality assurance and correction</li>
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
