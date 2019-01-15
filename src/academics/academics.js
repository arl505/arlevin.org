import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade'
import ReactGA from 'react-ga';
import "./academics.css"


class Academics extends Component {

    componentWillUpdate(){
        var url = window.location.href;
        if(url.includes("academics")){
            initializeReactGA();
        }
      }

    render() {
        return (
           <Fade>
                    <div style={{marginTop:"5.5em"}}>
                    <ul className="academicsList">
                        <li className="academicsList"><h3>Humboldt State University - Computer Science B.S. (May 2019)</h3></li>
                        <ul className="academicsList">
                            <li className="academicsList">
                                Vice President, Computer Science Club
                                <ul className="academicsList">
                                    <li className="academicsList">
                                        <strong>May 2018 - May 2019:</strong> responsible for planning and executing a Hackathon attended by over 50 students as well as other smaller events such as public speakings, guest lectures, game nights, fundraising, and weekly meetings.
                                    </li>
                                </ul>
                            </li>

                            <li className="academicsList">
                                LumberHacks Hackathon
                                <ul className="academicsList">
                                    <li className="academicsList">
                                        <strong>March 2018:</strong> worked as a member of a 4 person team to design and build a web application that took second place out of 50+ competitors. The project was a prototype for a non-profit organization that sought to connect the 1200 non-profits of Humboldt county with eager volunteers looking for opportunities. The application included scheduling abilities and allowed non-profits to market themselves and was built with Oracle SQL*Plus, PHP, HTML, and CSS.
                                    </li>
                                </ul>
                            </li>

                            <li className="academicsList">
                                Presidential Scholar
                                <ul className="academicsList">
                                    <li className="academicsList"><strong>December 2018:</strong> awarded to those who earn a GPA of 3.75 or higher while taking at least 12 units, essentially all A's. Earned while taking 20 units across 6 courses.</li>
                                </ul>
                            </li>
                            <li className="academicsList">
                                Dean's List Recipient
                                <ul className="academicsList">
                                    <li className="academicsList"><strong>May 2018:</strong> awarded to those who earn a GPA of 3.5 or higher while taking at least 12 units.</li>
                                </ul>
                            </li>
                            <li className="academicsList">
                                Presidential Scholar
                                <ul className="academicsList">
                                    <li className="academicsList"><strong>Decmber 2017:</strong> awarded to those who earn a GPA of 3.75 or higher while taking at least 12 units, essentially all A's. Earned while taking 4 computer science courses.</li>
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
    ReactGA.pageview('/academics');
  }

ReactDOM.render(
    <Academics />,
    document.getElementById('root')
  );
export default Academics;
