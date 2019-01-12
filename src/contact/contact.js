import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade';


class Contact extends Component {
    render() {
        return (
            <Fade>
                <div style={{width:"100vw", height:"100vh", textAlign:"center", marginTop:"50vh" }}>
                <Button color="danger">Contact</Button>
                </div>
            </Fade>
        )
    }
}
ReactDOM.render(
    <Contact />,
    document.getElementById('root')
  );
export default Contact;
