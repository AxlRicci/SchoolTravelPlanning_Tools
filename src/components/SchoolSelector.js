import React from 'react';
import * as firebase from 'firebase';

export class SchoolSelector extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    this.firebaseConnect();
  }
  
  firebaseConnect = () => {
    let ref = firebase.database().ref('/1jXrk6uXX580gHV1TZAHoWrH_UzkJnkLE3TdAGR4qD0s/schoolProfiles/');
    ref.on('value', snap => {
      const database = snap.val();
      return database;
    });
    console.log('Database Retrieved');
  }

  firebaseConnect
  
  render() {
    console.log(this.state)
    return ( <>
      <h1>home</h1>
      <p>{this.state.address}</p>
    </>
    );
  }
}