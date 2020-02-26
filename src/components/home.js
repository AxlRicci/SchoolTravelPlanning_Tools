import React from 'react';
import * as firebase from 'firebase';

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {
    this.getSchoolData();
  }
  
  getSchoolData = () => {
    let ref = firebase.database().ref('/1jXrk6uXX580gHV1TZAHoWrH_UzkJnkLE3TdAGR4qD0s/schoolProfiles/');
    ref.on('value', snap => {
      const state = snap.val();
      this.setState(state);
    });
    console.log('Data Retrieved');
  }
  
  
  render() {
    //console.log(this.state)
    return ( <>
      <h1>home</h1>
    </>
    );
  }
}

// componentDidMount() {
  //   const rootRef = firebase.database().ref().child('1jXrk6uXX580gHV1TZAHoWrH_UzkJnkLE3TdAGR4qD0s/schoolProfiles/SPI'); // 
  //   const nameRef = rootRef.child('name');
  //   const boardRef = rootRef.child('schoolBoard');
  //     nameRef.on('value', snap => {
  //       this.setState({
  //         name: snap.val()
          
  //       });
  //     });
  //     boardRef.on ('value', snap =>{
  //       this.setState({
  //         board: snap.val()
  //       })
  //     })
  // }