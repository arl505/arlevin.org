import React, { Component } from 'react';
import "./home.css";
import "./me.jpg"
import { Media } from 'reactstrap';
import ReactDOM from 'react-dom';
import logo from "./me.jpg"
import Fade from 'react-reveal/Fade';
import ReactGA from 'react-ga';

class Home extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            width: window.innerWidth,

          popoverOpen: false
        };
      }
    
      componentWillUpdate(){
        var url = window.location.href;
        if(url === "https://arlevin.org/"){
            initializeReactGA();
        }
      }

      toggle() {
        this.setState({
          popoverOpen: !this.state.popoverOpen
        });
      }
      
      componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
      }
      
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
      }
      
      handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
      };
      


    render() {
        var centerText;
        if(840 > window.innerWidth){
            centerText = false;
        }
        else{
            centerText = true;
        }

        return (
            <Fade>
            <div>
            <div className="content" style={{marginTop:"5.5em"}}>
                <div className="webIntro">
                    <h1 className="webHelloH1">Hello World!</h1>
                    <h2 className="webBuildH2">Let's build something great</h2>
                </div>
                
                <div className="align_and_space">
                    <Media className="rounded-circle webProfilePic" object src={logo} alt="profile" style={{maxWidth:"40vw", maxHeight:"54vh"}}/>
                </div>
                
                <div className="align_and_space">
                    <div className="webNameDiv">
                        <h2 className="webName">Alec Levin</h2>
                        <h3 className="webGeneral">Software engineer with expertise in Spring Boot (Java)</h3>
                    </div>

                    <div>
                        {centerText
                        ?<h4 className="webGeneral webOutro" style={{marginTop:"1em", textAlign:"center", marginBottom:"1em"}}>As a fast and adaptive learner, I excel as an individual contributor. As a highly methodical and organized person, I likewise excel as a lead. Leveraging the sum of these skills, I help organizations to create incredible and memorable technology.</h4>
                        :<h4 className="webGeneral webOutro" style={{marginTop:"1em", textAlign:"left", marginBottom:"1em"}}>As a fast and adaptive learner, I excel as an individual contributor. As a highly methodical and organized person, I likewise excel as a lead. Leveraging the sum of these skills, I help organizations to create incredible and memorable technology.</h4>}
                    </div>
                </div>
            </div>
            </div>
            </Fade>
        )
    }
}
function initializeReactGA() {
    ReactGA.initialize('UA-132341230-1');
    ReactGA.pageview('/');
  }

ReactDOM.render(
    <Home />,
    document.getElementById('root')
  );
export default Home;
