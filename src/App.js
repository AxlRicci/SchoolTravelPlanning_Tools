import React from 'react';
import {fetchDatabase} from './components/FirebaseConnect';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { SchoolList } from './components/SchoolList';
import { SchoolSelector } from './components/SchoolSelector';
import SchoolProfile from './components/schoolProfile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';


class App extends React.Component {
  constructor () {
    super();
    this.state = null;
  }

  componentDidMount() {
    this.setState(fetchDatabase());
  }

  render () {
    console.log(this.state);
    if (this.state === null){
      console.log("connecting with db...")
      return null;
    } else {
      return (
        <Router>
          <div className='App'>
            <Nav />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/SchoolList' render={props => <SchoolList profiles={this.state} {...props}/>} />
              <Route path='/SchoolProfile/:id' render={props => <SchoolProfile profiles={this.state} {...props}/>}/>
              <Route path='/dbTest' component={SchoolSelector} />
            </Switch>
          </div>
        </Router>
      );
    }
  }
}

export default App
