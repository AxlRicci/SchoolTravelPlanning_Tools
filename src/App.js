import React from 'react';
import Nav from './components/nav';
import Home from './components/home';
import SchoolList from './components/schoolList';
import SchoolProfile from './components/schoolProfile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/SchoolList' component={SchoolList} />
          <Route path='/SchoolProfile/:name' component={SchoolProfile}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
