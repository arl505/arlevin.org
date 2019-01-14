import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade'
import ReactGA from 'react-ga';


class Academics extends Component {

    componentDidMount(){
        initializeReactGA();
      }

    render() {
        return (
            <Fade>
                <div style={{position:"absolute",width:"100%", height:"100%"}}>
                    <div style={{ textAlign:"center", marginTop:"50vh" }}>
                    <Button color="danger">Academics</Button>
                    </div>
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
