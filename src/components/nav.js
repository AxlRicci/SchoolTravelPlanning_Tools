import React from 'react';
import { Link } from 'react-router-dom';


export class Nav extends React.Component {
  render () {
    return (
      <nav id="main-nav" className="nav">
        <ul id='main-links' className='links'>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/SchoolList'>
            <li>School List</li>
          </Link>
        </ul>
      </nav>
    );
  }
}