import React from 'react';
import * as firebase from 'firebase';
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
    this.state = {
    }
  }

  componentDidMount() {
    this.fetchDatabase();
  }

  fetchDatabase() {
    let ref = firebase.database().ref ('/1jXrk6uXX580gHV1TZAHoWrH_UzkJnkLE3TdAGR4qD0s/');
    ref.on('value', snap => {
      const state = snap.val();
      this.setState(state);
    });
    console.log('Data Retrieved');
  }

  render () {
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

export default App
