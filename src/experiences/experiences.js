import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import App from '../App';
import Home from '../welcomePage/home';


class Experiences extends Component {

    render() {
        return (
            <div>
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
