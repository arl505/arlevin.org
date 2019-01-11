import React, { Component } from 'react';
import { Button } from 'reactstrap';
import CustomNavBar from "../CustomNavBar"

class Academics extends Component {
    render() {
        return (
            <div>
            <CustomNavBar/>
            <Button color="danger">Academics</Button>
            </div>
        )
    }
}

export default Academics;
