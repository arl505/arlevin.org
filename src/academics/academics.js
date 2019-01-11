import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';

class Academics extends Component {
    render() {
        return (
            <div>
            <Button color="danger">Academics</Button>
            </div>
        )
    }
}
ReactDOM.render(
    <Academics />,
    document.getElementById('root')
  );
export default Academics;
