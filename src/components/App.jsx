import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';
import Navbar from './Navbar';
import ErrorPage from './ErrorPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/players' component={Players} />
            <Route path='/teams' component={Teams} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
