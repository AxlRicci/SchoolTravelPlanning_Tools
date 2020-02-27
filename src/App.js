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
      const firebase = snap.val();
      let keys = Object.keys(firebase.schoolProfiles);
      let state = {};
      for (let i = 0; i < keys.length; i++){
        let currentKey =  keys[i];
        if (firebase.schoolProfiles.hasOwnProperty(keys[i])){
          // group firebase data fetch into appropriate objects
          let initialConsultation = {
            "name": "Initial Consultation",
            "completed": firebase.schoolProfiles[currentKey].initialConsultation,
            "date": firebase.schoolProfiles[currentKey].initialConsultationDate
          }
          let actionPlan = {
            "name": 'Action Plan',
            "completed": firebase.schoolProfiles[currentKey].actionPlan,
            "URL": firebase.schoolProfiles[currentKey].actionPlanUrl
          }
          let familySurvey = {
            'name': 'Family Survey',
            "completed": firebase.schoolProfiles[currentKey].familySurvey,
            "URL": firebase.schoolProfiles[currentKey].familySurveyInfoUrl
          }
          let handsUpSurvey = {
            'name': 'Hands Up Survey',
            "completed": firebase.schoolProfiles[currentKey].handsUpSurvey,
            'URL': firebase.schoolProfiles[currentKey].handsUpSurveyInfoUrl
          }
          let stpCommittee = {
            'name': 'STP Committee',
            "completed": firebase.schoolProfiles[currentKey].stpCommittee,
            'URL': firebase.schoolProfiles[currentKey].stpCommitteeUrl
          }
          let trafficObservation = {
            'name': 'Traffic Observation',
            'completed': firebase.schoolProfiles[currentKey].trafficObservation,
            'date': firebase.schoolProfiles[currentKey].trafficObservationDate
          }
          let iWalkDay = {
            'name': 'iWalk Day',
            'completed': firebase.schoolProfiles[currentKey].iWalkDay,
            'date': firebase.schoolProfiles[currentKey].iWalkDayDate,
            'desc': firebase.schoolProfiles[currentKey].iWalkDayDesc,
            'customDesc': firebase.schoolProfiles[currentKey].iWalkDayCustomDesc
          }
          let winterWalkDay = {
            'name': 'Winter Walk Day',
            'completed': firebase.schoolProfiles[currentKey].winterWalkDay,
            'date': firebase.schoolProfiles[currentKey].winterWalkDayDate,
            'desc': firebase.schoolProfiles[currentKey].winterWalkDayDesc,
            'customDesc': firebase.schoolProfiles[currentKey].winterWalkDayCustomDesc
          }
          let aWalkInTheirSneakers = {
            'name': 'A Walk In Their Sneakers',
            'completed': firebase.schoolProfiles[currentKey].aWalkInTheirSneakers,
            'date': firebase.schoolProfiles[currentKey].aWalkInTheirSneakersDate,
            'desc': firebase.schoolProfiles[currentKey].aWalkInTheirSneakersDesc,
            'customDesc': firebase.schoolProfiles[currentKey].aWalkInTheirSneakersCustomDesc
          }
          let sidewalkSmarts = {
            'name': 'Sidewalk Smarts',
            'completed': firebase.schoolProfiles[currentKey].sidewalkSmarts,
            'date': firebase.schoolProfiles[currentKey].sidewalkSmartsDate,
            'count': firebase.schoolProfiles[currentKey].sidewalkSmartsCount,
            'desc': firebase.schoolProfiles[currentKey].sidewalkSmartsDesc,
            'customDesc': firebase.schoolProfiles[currentKey].sidewalkSmartsCustomDesc
          }
          let trailblazers = {
            'name': 'Trailblazers',
            'completed': firebase.schoolProfiles[currentKey].trailblazers,
            'date': firebase.schoolProfiles[currentKey].trailblazersDate,
            'count': firebase.schoolProfiles[currentKey].trailblazersCount,
            'URL': firebase.schoolProfiles[currentKey].trailblazersRouteMapUrl,
            'desc': firebase.schoolProfiles[currentKey].trailblazersDesc,
            'customDesc': firebase.schoolProfiles[currentKey].trailblazersCustomDesc
          }
          let driveTo5 = {
            'name': 'Drive To 5',
            'completed': firebase.schoolProfiles[currentKey].driveTo5,
            'locations': firebase.schoolProfiles[currentKey].driveTo5Locations,
            'desc': firebase.schoolProfiles[currentKey].driveTo5Desc,
            'customDesc': firebase.schoolProfiles[currentKey].driveTo5CustomDesc
          }
          let parkingMap = {
            'name': 'Parking Map',
            'completed': firebase.schoolProfiles[currentKey].parkingMap,
            'URL': firebase.schoolProfiles[currentKey].parkingMapUrl,
            'desc': firebase.schoolProfiles[currentKey].parkingMapDesc,
            'customDesc': firebase.schoolProfiles[currentKey].parkingMapCustomDesc
          }
          let walkingSchoolBus = {
            'name': 'Walking School Bus',
            'completed': firebase.schoolProfiles[currentKey].walkingSchoolBus,
            'count': firebase.schoolProfiles[currentKey].walkingSchoolBusCount,
            'URL': firebase.schoolProfiles[currentKey].walkingSchoolBusRouteMapUrl,
            'desc': firebase.schoolProfiles[currentKey].walkingSchoolBusDesc,
            'customDesc': firebase.schoolProfiles[currentKey].walkingSchoolBusCustomDesc
          }
          let cyclingIntoTheFuture = {
            'name': 'Cycling Into The Future',
            'completed': firebase.schoolProfiles[currentKey].cyclingIntoTheFuture,
            'date': firebase.schoolProfiles[currentKey].cyclingIntoTheFutureDate,
            'count': firebase.schoolProfiles[currentKey].cyclingIntoTheFutureCount,
            'desc': firebase.schoolProfiles[currentKey].cyclingIntoTheFutureDesc,
            'customDesc': firebase.schoolProfiles[currentKey].cyclingIntoTheFutureCustomDesc
          }
          let standingFootPatrol = {
            'name': 'CAA Standing Foot Patrol',
            'completed': firebase.schoolProfiles[currentKey].standingFootPatrol,
            'count': firebase.schoolProfiles[currentKey].standingFootPatrolCount,
            'desc': firebase.schoolProfiles[currentKey].standingFootPatrolDesc,
            'customDesc': firebase.schoolProfiles[currentKey].standingFootPatrolCustomDesc
          }
          // group stp intervention data into proper programs
          let stpInterventions = {
            'initialConsultation': initialConsultation,
            'actionPlan': actionPlan,
            'familySurvey': familySurvey,
            'handsUpSurvey': handsUpSurvey,
            'stpCommittee': stpCommittee,
            'trafficObservation': trafficObservation,
            'iWalkDay': iWalkDay,
            'winterWalkDay': winterWalkDay,
            'aWalkInThierSneakers': aWalkInTheirSneakers,
            'sidewalkSmarts': sidewalkSmarts,
            'trailblazers': trailblazers,
            'driveTo5': driveTo5,
            'parkingMap': parkingMap,
            'walkingSchoolBus': walkingSchoolBus,
            'cyclingIntoTheFuture': cyclingIntoTheFuture,
            'standingFootPatrol': standingFootPatrol
          }
          // set proper school data object format
          let data = {
            'id': firebase.schoolProfiles[currentKey].id,
            'name': firebase.schoolProfiles[currentKey].name,
            'stpStartYear': firebase.schoolProfiles[currentKey].stpStartYear,
            'schoolBoard': firebase.schoolProfiles[currentKey].schoolBoard,
            'address': firebase.schoolProfiles[currentKey].address,
            'schoolPhoneNumber': firebase.schoolProfiles[currentKey].schoolPhoneNumber,
            'schoolLogoUrl': firebase.schoolProfiles[currentKey].schoolLogoUrl,
            'type': firebase.schoolProfiles[currentKey].type,
            'grades': firebase.schoolProfiles[currentKey].grades,
            'studentCount': firebase.schoolProfiles[currentKey].studentCount,
            'staffCount': firebase.schoolProfiles[currentKey].staffCount,
            'busZonePercent': firebase.schoolProfiles[currentKey].busZonePercent,
            'walkZonePercent': firebase.schoolProfiles[currentKey].walkZonePercent,
            'bwrNumber': firebase.schoolProfiles[currentKey].bwrNumber,
            'amBell': firebase.schoolProfiles[currentKey].amBell,
            'pmBell': firebase.schoolProfiles[currentKey].pmBell,
            'specialPrograms': firebase.schoolProfiles[currentKey].specialPrograms,
            'bikeParking': firebase.schoolProfiles[currentKey].bikeParking,
            'scooterParking': firebase.schoolProfiles[currentKey].scooterParking,
            'busBay': firebase.schoolProfiles[currentKey].busBay,
            'accessibleParking': firebase.schoolProfiles[currentKey].accessibleParking,
            'parkingStatus': firebase.schoolProfiles[currentKey].parkingStatus,
            'parkingLocation': firebase.schoolProfiles[currentKey].parkingLocation,
            'pedestrianInfrastructureDesc': firebase.schoolProfiles[currentKey].pedestrianInfrastructureDesc,
            'stpInterventions': stpInterventions
          }
          state[[currentKey]] = data 
        }
      }
      this.setState(state);
      console.log(state);
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
