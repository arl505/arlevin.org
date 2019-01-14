import React, { Component } from 'react';
import "./App.css"
import ReactDOM from 'react-dom';
import NavBar from  "./navBar/navBar"


class App extends Component {
  render() {
      return (
        
        <div>
          <NavBar/>
        </div>
        
      )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
