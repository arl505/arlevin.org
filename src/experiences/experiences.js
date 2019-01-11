import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';


class Experiences extends Component {

    render() {
        return (
            <div style={{ position:"absolute", "bottom":"0", "left":"0", "right":"0", textAlign:"center"}}>
            <Button color="danger">Experience</Button>
            </div>
        )
    }
}
ReactDOM.render(
    <Experiences />,
    document.getElementById('root')
  );
export default Experiences;
