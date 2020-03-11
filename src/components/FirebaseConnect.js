import * as firebase from 'firebase';

const fetchDatabase = async function() {
  let ref = firebase.database().ref ('/1jXrk6uXX580gHV1TZAHoWrH_UzkJnkLE3TdAGR4qD0s/');
  let state = {};
  ref.on('value', snap => {
    const firebase = snap.val();
    let keys = Object.keys(firebase.schoolProfiles);
    for (let i = 0; i < keys.length; i++){
      let currentKey =  keys[i];
      if (firebase.schoolProfiles.hasOwnProperty(keys[i])){
        // group firebase data fetch into appropriate objects
        let initialConsultation = {
          "name": "Initial Consultation",
          "completed": firebase.schoolProfiles[currentKey].initialConsultation,
          "date": firebase.schoolProfiles[currentKey].initialConsultationDate,
          'imgURL': ''
        }
        let actionPlan = {
          "name": 'Action Plan',
          "completed": firebase.schoolProfiles[currentKey].actionPlan,
          "URL": firebase.schoolProfiles[currentKey].actionPlanUrl,
          'imgURL': ''
        }
        let familySurvey = {
          'name': 'Family Survey',
          "completed": firebase.schoolProfiles[currentKey].familySurvey,
          "URL": firebase.schoolProfiles[currentKey].familySurveyInfoUrl,
          'imgURL': ''
        }
        let handsUpSurvey = {
          'name': 'Hands Up Survey',
          "completed": firebase.schoolProfiles[currentKey].handsUpSurvey,
          'URL': firebase.schoolProfiles[currentKey].handsUpSurveyInfoUrl,
          'imgURL': ''
        }
        let stpCommittee = {
          'name': 'STP Committee',
          "completed": firebase.schoolProfiles[currentKey].stpCommittee,
          'URL': firebase.schoolProfiles[currentKey].stpCommitteeUrl,
          'imgURL': ''
        }
        let trafficObservation = {
          'name': 'Traffic Observation',
          'completed': firebase.schoolProfiles[currentKey].trafficObservation,
          'date': firebase.schoolProfiles[currentKey].trafficObservationDate,
          'imgURL': ''
        }
        let iWalkDay = {
          'name': 'iWalk Day',
          'completed': firebase.schoolProfiles[currentKey].iWalkDay,
          'date': firebase.schoolProfiles[currentKey].iWalkDayDate,
          'desc': firebase.schoolProfiles[currentKey].iWalkDayDesc,
          'customDesc': firebase.schoolProfiles[currentKey].iWalkDayCustomDesc,
          'imgURL': firebase.supportPrograms['iWalk Day'].programImageUrl
        }
        let winterWalkDay = {
          'name': 'Winter Walk Day',
          'completed': firebase.schoolProfiles[currentKey].winterWalkDay,
          'date': firebase.schoolProfiles[currentKey].winterWalkDayDate,
          'desc': firebase.schoolProfiles[currentKey].winterWalkDayDesc,
          'customDesc': firebase.schoolProfiles[currentKey].winterWalkDayCustomDesc,
          'imgURL': firebase.supportPrograms['Winter Walk Day'].programImageUrl
        }
        let aWalkInTheirSneakers = {
          'name': 'A Walk In Their Sneakers',
          'completed': firebase.schoolProfiles[currentKey].aWalkInTheirSneakers,
          'date': firebase.schoolProfiles[currentKey].aWalkInTheirSneakersDate,
          'desc': firebase.schoolProfiles[currentKey].aWalkInTheirSneakersDesc,
          'customDesc': firebase.schoolProfiles[currentKey].aWalkInTheirSneakersCustomDesc,
          'imgURL': firebase.supportPrograms['A Walk in Their Sneakers'].programImageUrl
        }
        let sidewalkSmarts = {
          'name': 'Sidewalk Smarts',
          'completed': firebase.schoolProfiles[currentKey].sidewalkSmarts,
          'date': firebase.schoolProfiles[currentKey].sidewalkSmartsDate,
          'count': firebase.schoolProfiles[currentKey].sidewalkSmartsCount,
          'desc': firebase.schoolProfiles[currentKey].sidewalkSmartsDesc,
          'customDesc': firebase.schoolProfiles[currentKey].sidewalkSmartsCustomDesc,
          'imgURL': firebase.supportPrograms['Sidewalk Smarts'].programImageUrl
        }
        let trailblazers = {
          'name': 'Trailblazers',
          'completed': firebase.schoolProfiles[currentKey].trailblazers,
          'date': firebase.schoolProfiles[currentKey].trailblazersDate,
          'count': firebase.schoolProfiles[currentKey].trailblazersCount,
          'URL': firebase.schoolProfiles[currentKey].trailblazersRouteMapUrl,
          'desc': firebase.schoolProfiles[currentKey].trailblazersDesc,
          'customDesc': firebase.schoolProfiles[currentKey].trailblazersCustomDesc,
          'imgURL': firebase.supportPrograms['Trailblazers'].programImageUrl
        }
        let driveTo5 = {
          'name': 'Drive To 5',
          'completed': firebase.schoolProfiles[currentKey].driveTo5,
          'locations': firebase.schoolProfiles[currentKey].driveTo5Locations,
          'desc': firebase.schoolProfiles[currentKey].driveTo5Desc,
          'customDesc': firebase.schoolProfiles[currentKey].driveTo5CustomDesc,
          'imgURL': firebase.supportPrograms['Drive to Five'].programImageUrl
        }
        let parkingMap = {
          'name': 'Parking Map',
          'completed': firebase.schoolProfiles[currentKey].parkingMap,
          'URL': firebase.schoolProfiles[currentKey].parkingMapUrl,
          'desc': firebase.schoolProfiles[currentKey].parkingMapDesc,
          'customDesc': firebase.schoolProfiles[currentKey].parkingMapCustomDesc,
          'imgURL': firebase.supportPrograms['Traffic Flow Map'].programImageUrl
        }
        let walkingSchoolBus = {
          'name': 'Walking School Bus',
          'completed': firebase.schoolProfiles[currentKey].walkingSchoolBus,
          'count': firebase.schoolProfiles[currentKey].walkingSchoolBusCount,
          'URL': firebase.schoolProfiles[currentKey].walkingSchoolBusRouteMapUrl,
          'desc': firebase.schoolProfiles[currentKey].walkingSchoolBusDesc,
          'customDesc': firebase.schoolProfiles[currentKey].walkingSchoolBusCustomDesc,
          'imgURL': firebase.supportPrograms['Walking School Bus'].programImageUrl
        }
        let cyclingIntoTheFuture = {
          'name': 'Cycling Into The Future',
          'completed': firebase.schoolProfiles[currentKey].cyclingIntoTheFuture,
          'date': firebase.schoolProfiles[currentKey].cyclingIntoTheFutureDate,
          'count': firebase.schoolProfiles[currentKey].cyclingIntoTheFutureCount,
          'desc': firebase.schoolProfiles[currentKey].cyclingIntoTheFutureDesc,
          'customDesc': firebase.schoolProfiles[currentKey].cyclingIntoTheFutureCustomDesc,
          'imgURL': firebase.supportPrograms['Cycling into the Future'].programImageUrl
        }
        let standingFootPatrol = {
          'name': 'CAA Standing Foot Patrol',
          'completed': firebase.schoolProfiles[currentKey].standingFootPatrol,
          'count': firebase.schoolProfiles[currentKey].standingFootPatrolCount,
          'desc': firebase.schoolProfiles[currentKey].standingFootPatrolDesc,
          'customDesc': firebase.schoolProfiles[currentKey].standingFootPatrolCustomDesc,
          'imgURL': firebase.supportPrograms['Standing Foot Patrol'].programImageUrl
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
          'stpInterventions': stpInterventions,
          'stpPrograms': firebase.supportPrograms
        }
        state[[currentKey]] = data 
      }
    }
    console.log(state);
  });
  console.log(state);
  console.log('Data Retrieved');
  return state;
};

export { fetchDatabase };