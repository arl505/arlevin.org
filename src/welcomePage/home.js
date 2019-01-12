import React, { Component } from 'react';
import "./home.css";
import "./me.jpg"
import { Media } from 'reactstrap';
import ReactDOM from 'react-dom';
import logo from "./me.jpg"

class Home extends Component {
    render() {
        return (
            <div>
                <div className="intro">
                    <h1 className="helloH1">Hello World!</h1>
                    <h2 className="buildH2">Let's build something great</h2>
                </div>

                <div>

                <div className="profilePicDiv">
                    <Media className="rounded-circle profilePic" object src={logo} alt="profile" />
                </div>

                </div>

                <div className="outro">
                    <h2 className="general">I am a passionate developer whose areas of interest span from progressive web and mobile application development to sceientific computing of high-frequency data.</h2>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <Home />,
    document.getElementById('root')
  );
export default Home;
