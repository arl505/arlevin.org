import React, { Component } from 'react';
import { Button } from 'reactstrap';
import CustomNavBar from "../CustomNavBar"

class Experiences extends Component {
    render() {
        return (
            <div>
            <CustomNavBar/>
            <Button color="danger">Experience</Button>
            </div>
        )
    }
}

export default Experiences;
