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
                                <ul className="myList">
                                    <li className="myList">As a Tech Fellow with Codepath.org I serve as an instructor for the Android Applications course at Humboldt State University. 
                                    I, along with two other tech fellows, are responsible for teaching the for-credit course to roughly 15 students across a 15 week course with each week
                                    comprising of two lectures and a lab. This position required a high degree of understanding of the curriculum topics, including but not limited to:
                                    Java, C#, Android Studio, Visual Studio, Gradle, Xamarin, (A)XML, and Git. Organized meetings, assignments, lectures, labs, and grading.
                                    Also organized meetings, assignments, lectures, labs, and grading.</li>
                                </ul>
                            </li>

                            <li className="myList">Planet Rocket - Full Stack Web Engineer (March 2018-Present)
                                <ul className="myList">
                                    <li className="myList">Lead the effort in redesigning and updating previous <a href="http://planetrocket.com">V1</a> codebase on LAMP (Linux, Apache, MySQL, and PHP) stack. 
                                    Then, designed and implemented <a href="https://dev.arlevin.org">V2</a> with a MERN (MongoDB, Express.js, React.js, and Node.js) stack deployed on an AWS Elastic Cloud Compute (EC2) instance serving the project with NGINX.
                                    Specialized in full stack work, sending data between the client and server; first this was done with PHP, MySQL, and HTML, then with MongoDB, Axios, JSON, and React.</li>
                                </ul>
                            </li>

                            <li className="myList">Ernest Orlando Lawrence Berkeley National Laboratory - Computing Sciences Summer Student Researcher (Summer 2015)
                                <ul className="myList">
                                    <li className="myList">Worked as a researcher within the Integrated Date Frameworks group of the Data Science and Technology Department of the Computational Research Division.
                                    Used the Python scientific computing library, SciPy, and specifically the NumPy and Matplotlib packages to construct advanced visualizations of high frequency weather data in order to perform quality assurance and correction of the data.
                                    Daily work included Python code writing, quality assurance of new data, and attendance at team meetings and seminars. 
                                    Program concluded with end of summer poster making and presenting.</li>
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
