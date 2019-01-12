import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade'
class Academics extends Component {
    render() {
        return (
            <Fade>
                <div style={{width:"100vw", height:"100vh", textAlign:"center" }}>
                <Button color="danger">About</Button>
                </div>
            </Fade>
        )
    }
}
ReactDOM.render(
    <Academics />,
    document.getElementById('root')
  );
export default Academics;
