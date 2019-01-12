import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade'
class About extends Component {
    render() {
        return (
            <Fade>
                <div style={{width:"100vw", height:"100vh", textAlign:"center", marginTop:"50vh" }}>
                <Button color="danger">About</Button>
                </div>
            </Fade>
        )
    }
}
ReactDOM.render(
    <About />,
    document.getElementById('root')
  );
export default About;
