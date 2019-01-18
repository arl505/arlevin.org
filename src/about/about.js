import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade'
import ReactGA from 'react-ga';
import { Media } from 'reactstrap';
import Project_collage from "./project-collage.png"
import "./about.css"
import Berkeley from "./berkeley.jpg"
import Humboldt from "./humboldt.jpg"
import Android from "./android.png"
import ReactLogo from "./react.jpg" 


class About extends Component {

    componentWillUpdate(){
        var url = window.location.href;
        if(url.includes("about")){
            initializeReactGA();
        }
      }

    render() {
        var mobile;
        if(768 > window.innerWidth){
            mobile = true;
        }
        else{
            mobile = false;
        }
        return (
            <Fade>
                    <div style={{marginTop:"5.5em"}}>
                        <div style={{textAlign:"center"}}>
                          <Media object src={Project_collage} alt="projects" style={{maxWidth:"98vw", maxHeight:"40vh"}}/>
                        </div>
                        <div className="aboutBody">
                            <h1 style={{textAlign:"center"}}>Reliable. Responsive. <strong>Revolutionary.</strong></h1>
                            <p style={{textAlign:"left"}}>As the president of the Gender and Sexuality Alliance in my senior year of high school, I was lucky enough to be offered a position at the highly esteemed Lawrence Berkeley National Labs, or Berkeley Labs. At Berkeley Labs, I worked as a Computing Sciences Summer Student Researcher within the Integrated Date Frameworks group of the Data Science and Technology Department of the Computational Research Division. There, I used the Python scientific computing library, SciPy, and specifically the NumPy and Matplotlib packages to construct advanced visualizations of high frequency weather data in order to perform quality assurance and correction of the data. 
</p>
{mobile &&
    (<div style={{textAlign:"center", marginBottom:"2em", marginTop:"2em"}}>
    <Media object src={Berkeley} alt="Berkeley Labs" style={{display:"block", width:"60vw", margin:"0 auto", marginBottom:"1em"}}/>
</div>)}

                            
                            <p style={{textAlign:"left"}}>Apart from the technical skills I picked up at Berkeley Labs, I found my passion for computer science. Working amongst Nobel laureates and observing groundbreaking science being performed every day, it was clear to me how much all of the amazing work being done relied upon the computational systems running things. After that summer, I enrolled at Humboldt State University as a Computer Science student.
</p>
{mobile 
    ?(<div style={{textAlign:"center", marginBottom:"2em", marginTop:"2em"}}>
                        <Media object src={Humboldt} alt="Humboldt State" style={{ width:"60vw", margin:"0 auto"}}/>
</div>)
    :(<div style={{textAlign:"center", marginBottom:"1em", marginTop:"2em"}}>
    <Media object src={Berkeley} alt="Berkeley Labs" style={{display:"inline", width:"40vw", marginRight:"3vw"}}/>
    <Media object src={Humboldt} alt="Humboldt State" style={{display:"inline", width:"40vw"}}/>
</div>)}
                            {mobile
                            ?(<p style={{textAlign:"left"}}>In school, I learned the fundamentals of programming with C++, tackled software engineering of both web and mobile applications, and got to experiment with advanced topics such as data mining and React.js. Two events in my university years have had major affects on me as a developer.</p>
                            )
                            :(<p>In school, I learned the fundamentals of programming with C++, tackled software engineering of both web and mobile applications, and got to experiment with advanced topics such as data mining and React.js. 
                                Two events in my university years have had major affects on me as a developer. 
                                First, taking a mobile applications course geared towards Android–and then teaching the course with Codepath.org–left me with passions for mobile app development and computer science education. 
                                Secondly, taking on a real world non-profit startup client and working as a web engineer with a web app utilizing the most modern technologies left me excited to explore further possibilities. 
                                The web app was built with a MERN stack, or a MongoDB, Express.js, React.js, and Node.js stack. 
                                All of this history culminates in my extreme hunger to develop reliable, responsive, and revolutionary applications that users, such as the scientists at Berkeley Labs, can depend on.</p>)}
                
                  
                        <div style={{textAlign:"center", marginBottom:"1.75em", marginTop:"2em"}}>
                                <Media object src={ReactLogo} alt="React Logo" style={{display:"inline", maxWidth:"40vw", marginRight:"7vw", maxHeight:"45vh", marginBottom:"1em"}}/>
                                <Media object src={Android} alt="Android Logo" style={{display:"inline", maxWidth:"40vw", maxHeight:"45vh", marginBottom:"1em"}}/>
                            </div>
                            {mobile &&
                            (<p style={{textAlign:"left", marginBottom:"1.75em"}}>First, taking a mobile applications course geared towards Android–and then teaching the course with Codepath.org–left me with passions for mobile app development and computer science education. 
                            Secondly, taking on a real world non-profit startup client and working as a web engineer with a web app utilizing the most modern technologies left me excited to explore further possibilities. 
                            The web app was built with a MERN stack, or a MongoDB, Express.js, React.js, and Node.js stack. 
                            All of this history culminates in my extreme hunger to develop reliable, responsive, and revolutionary applications that users, such as the scientists at Berkeley Labs, can depend on.</p>
                            )}  
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
