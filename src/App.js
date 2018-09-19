import React from "react";
//import Jumbotron from './components/Jumbotron';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

class App extends React.Component {
  render() {
    return (
      <div class="app">
        <header class="header">
          <h1>React-Redux Demo</h1>
        </header>
        <Home />
        <Router>
          <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/:postID" component={Detail} />
          </Switch>
        </Router>
      </div>
    );
  }
};
export default App;
