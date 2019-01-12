import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import Fade from 'react-reveal/Fade';

class Experiences extends Component {

    render() {
        return (
            <Fade>
                <div style={{width:"100vw", height:"100vh", textAlign:"center", marginTop:"50vh" }}>
                <Button color="danger">Experiences</Button>
                </div>
            </Fade>
        )
    }
}
ReactDOM.render(
    <Experiences />,
    document.getElementById('root')
  );
export default Experiences;
