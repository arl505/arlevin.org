import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';

class Academics extends Component {
    render() {
        return (
            <div style={{ position:"absolute", "bottom":"0", "left":"0", "right":"0", textAlign:"center"}}>
            <Button color="danger">About</Button>
            </div>
        )
    }
}
ReactDOM.render(
    <Academics />,
    document.getElementById('root')
  );
export default Academics;
