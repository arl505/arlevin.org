import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom';

class Academics extends Component {
    render() {
        return (
            <div style={{width:"100vw", height:"100vh", textAlign:"center", marginTop:"50vh" }}>
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
