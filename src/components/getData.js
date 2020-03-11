import * as firebase from 'firebase';


const getData = async function() {
  let ref = firebase.database().ref ('/1jXrk6uXX580gHV1TZAHoWrH_UzkJnkLE3TdAGR4qD0s/');
  let state = undefined;
  ref.on('value', snap => {
    let response = snap.val();
    state = response;
  });
  console.log(state);
}

export { getData };