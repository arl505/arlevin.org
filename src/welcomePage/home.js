import React, { Component } from 'react';
import "./home.css";
import "./me.jpg"
import { Media } from 'reactstrap';
import ReactDOM from 'react-dom';
import logo from "./me.jpg"

class Home extends Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
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
        const { width } = this.state;
        const isMobile = width <= 651;
        const isWeb = width > 800;
        if(isWeb)
        return (
            <div className="content">
                <div className="webIntro">
                    <h1 className="webHelloH1">Hello World!</h1>
                    <h2 className="webBuildH2">Let's build something great</h2>
                </div>


                <div className="webProfilePicDiv">
                    <Media className="rounded-circle webProfilePic" object src={logo} alt="profile" />
                </div>
                
                <div className="webBottomDiv">
                    <div className="webNameDiv">
                        <h2 className="webName">Alec Levin</h2>
                        <h3 className="webGeneral">Android and Web Engineer, Computer Science B.S.</h3>
                    </div>

                    <div>
                        <h4 className="webGeneral webOutro">I am a passionate developer whose areas of interest span from progressive web and mobile application development to sceientific computing of high-frequency data.</h4>
                    </div>
                </div>
            </div>
        )
        else if(isMobile){
            return(
                <p>MOBILE!</p>
            )
        }
        else{
            return(
                <p>Tablet!</p>
            )
        }
    }
}
ReactDOM.render(
    <Home />,
    document.getElementById('root')
  );
export default Home;
