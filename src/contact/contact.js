import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';

class Contact extends Component {
    render() {
        return (
            <div style={{ position:"absolute", "bottom":"0", "left":"0", "right":"0", textAlign:"center"}}>
            <Button color="danger">Contact</Button>
            </div>
        )
    }
}
ReactDOM.render(
    <Contact />,
    document.getElementById('root')
  );
export default Contact;
