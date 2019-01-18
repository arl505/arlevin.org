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
                            <li className="myList">Codepath.org - Tech Fellow (October 2018-May 2019)
                                <ul className="myListWithBullets">
                                    <li className="myListWithBullets">Served as an instructor for the Android Applications course at Humboldt State University</li> 
                                    <li className="myListWithBullets">Responsible for teaching the for-credit course to roughly 15 students across a 15 week course with each week comprising of two lectures and a lab</li>
                                    <li className="myListWithBullets">Required a high degree of understanding of the curriculum topics, including but not limited to: Java, C#, Android Studio, Visual Studio, Gradle, Xamarin, (A)XML, and Git</li>
                                    <li className="myListWithBullets">Organized meetings, assignments, lectures, labs, and grading.</li>
                                </ul>
                            </li>

                            <li className="myList">Planet Rocket - Full Stack Web Engineer (March 2018-Present)
                                <ul className="myListWithBullets">
                                    <li className="myListWithBullets">Lead effort in redesigning and updating previous <a href="https://pr1.arlevin.org">V1</a> codebase on LAMP (Linux, Apache, MySQL, and PHP) stack</li>
                                    <li className="myListWithBullets">Designed and implemented <a href="https://pr2.arlevin.org">V2</a> with a MERN (MongoDB, Express.js, React.js, and Node.js) stack deployed on an AWS Elastic Cloud Compute (EC2) instance serving the project with NGINX</li>
                                    <li className="myListWithBullets">Specialized in full stack work, sending data between the client and server; first this was done with PHP, MySQL, and HTML, then with MongoDB, Axios, JSON, and React</li>
                                 </ul>
                            </li>

                            <li className="myList">Ernest Orlando Lawrence Berkeley National Laboratory - Computing Sciences Summer Student Researcher (Summer 2015)
                                <ul className="myListWithBullets">
                                    <li className="myListWithBullets"> Worked as a researcher within the Integrated Date Frameworks group of the Data Science and Technology Department of the Computational Research Division</li>
                                    <li className="myListWithBullets">Used the Python scientific computing library, SciPy, and specifically the NumPy and Matplotlib packages</li>
                                    <li className="myListWithBullets">Constructed advanced visualizations of high frequency weather data in order to perform quality assurance and correction of the data</li>
                                    <li className="myListWithBullets">Daily work included Python code writing, quality assurance of new data, and attendance at team meetings and seminars</li>
                                    <li className="myListWithBullets">Program concluded with end of summer poster making and presenting</li>
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
