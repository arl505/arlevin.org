import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade'
import ReactGA from 'react-ga';


class About extends Component {

    componentDidMount(){
        initializeReactGA();
      }

    render() {
        return (
            <Fade>
                <div style={{position:"absolute",width:"100%", height:"100%"}}>
                    <div style={{ textAlign:"center", marginTop:"50vh" }}>
                    <Button color="danger">About</Button>
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
