import React from "react";
import Jumbotron from './components/Jumbotron';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
/*
<Router>
          <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/:postID" component={Detail} />
          </Switch>
        </Router>
*/
const App = () => {
  <div>
    <Jumbotron />
    <Home /> 
  </div> 
};
export default App;
