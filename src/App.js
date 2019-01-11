import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './welcomePage/home';	
import Academics from './academics/academics';	
import Experiences from './experiences/experiences';	

class App extends Component {
  render() {
    return (

      <Router>
        <Switch>
          <Route path="/academics" component={Academics} />
          <Route path="/experience" component={Experiences} />
          <Route component={Home} /> {/* this line comes last and will be the default (or no matches)*/}
         </Switch>
      </Router>
    );
  }
}
export default App;
