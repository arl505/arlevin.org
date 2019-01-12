import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import Fade from 'react-reveal/Fade';

class Experience extends Component {

    render() {
        return (
            <Fade>
                <div style={{width:"100vw", height:"100vh", textAlign:"center", marginTop:"50vh" }}>
                <Button color="danger">Experience</Button>
                </div>
            </Fade>
        )
    }
}
ReactDOM.render(
    <Experience />,
    document.getElementById('root')
  );
export default Experience;
